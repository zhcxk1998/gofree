import React, { Component } from 'react';
import {
  Button, Menu, Container, Grid, Header, Icon, Image, Label, List, Statistic, Message, Popup, Dimmer, Loader, Divider,
} from 'semantic-ui-react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from '../util/axios.js';
import gofree_mock from '../mock/gofree_mock.js';

import HeaderNav from '../components/HeaderNav.js';
import BaiduMap from '../components/BaiduMap.js';
import PlaceDiv from '../components/PlaceDiv.js';

import '../styles/iconfont.css';

const viewPng = require('../images/view.png');
const hotelPng = require('../images/hotel.png');
const resPng = require('../images/res.png');
const trafficPng = require('../images/traffic.png');

class Recline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: {
        centerP: [],
        points: [],
      },
      id: '',
      typeName: '',
      destination: '',
      start: '',
      end: '',
      price: 2000,
      places: [],
      lines: [],
      trips: [],
      mapChangeFlag: 0, // 用来判断地图有没有变化，如果没有则不进行重新渲染
      type: '',
      isLineOk: false,
      activeDay: 1,
      dayIntoView: false,
      currentDay: 1,
    };
  }

  componentWillMount() {
    if (this.props.location.data == null) {
      // TODO:重定向注释打开
      // this.props.history.push('/');
    } else {
      const {
        type, start, end, des,
      } = this.props.location.data;
      this.setState({
        type,
        start,
        end,
        destination: des,
      });
      console.log(this.props.location.data);
    }
  }

  async componentDidMount() {
    const $this = this;
    const {
      type, start, end, destination,
    } = this.state;
    axios.get('/get-line', {
      params: {
        type, destination, startTime: start, endTime: end,
      },
    })
      .then((response) => {
        response.isLineOk = true;
        $this.setState(response, () => {
          console.log(this.state);
        });
      });
    const res = await axios.get('/get-trip', {});
    this.setState({ trips: res.trips });
    window.onscroll = () => {
      const dayMenu = document.getElementById('dayMenu');
      this.setState({
        dayIntoView: window.scrollY + 72 > dayMenu.offsetTop,
      });
    };
  }

  renderTrip() {
    const { trips } = this.state;
    return (
      <Grid>
        {trips.map(item => (
          <Grid.Row key={item.day}>
            <Grid.Column width={2} style={{ display: 'flex', justifyContent: 'center' }}>
              <Statistic color="green" size="small">
                <Statistic.Value>{item.day}</Statistic.Value>
                <Statistic.Label color="green">DAY</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={14} style={{ display: 'flex', alignItems: 'center' }}>
              {item.trip}
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    );
  }

  renderMap() {
    const { map, mapChangeFlag, currentDay } = this.state;
    const { centerP, points } = map;
    return (
      <div className="recline_map">
        <BaiduMap
          ak="Ci7HWXQfGoPNX7mGZ7gIlmLKQ1C7qh9G"
          flag={mapChangeFlag}
          callback={(map) => {
            map.centerAndZoom(new BMap.Point(centerP.x, centerP.y), 11);

            map.enableScrollWheelZoom();

            const opts = { type: BMAP_NAVIGATION_CONTROL_SMALL };
            map.addControl(new BMap.NavigationControl(opts));

            const p = [];

            for (let i = 0; i < points[currentDay - 1].length; i++) {
              p[i] = new BMap.Point(points[currentDay - 1][i].x, points[currentDay - 1][i].y);
            }

            const driving = new BMap.DrivingRoute(map, {
              renderOptions: {
                map,
                autoViewport: true,
              },
            });
            driving.search(p[0], p[points[currentDay - 1].length - 1], {
              waypoints: p.slice(1, points[currentDay - 1].length - 1),
            });

            // driving.search('天安门', '百度大厦');

            // driving.setMarkersSetCallback((e) => {
            //   for (let i = 0; i < e.length; i++) {
            //     const item = points[i];
            //     let myIcon;
            //     if (item.type == 0) {
            //       myIcon = new BMap.Icon(viewPng, new BMap.Size(45, 45));
            //     } else if (item.type == 1) {
            //       myIcon = new BMap.Icon(hotelPng, new BMap.Size(45, 45));
            //     } else {
            //       myIcon = new BMap.Icon(resPng, new BMap.Size(45, 45));
            //     }
            //     if (e[i].marker == null) {
            //       // e[i].Mm.setIcon(myIcon);
            //       console.log('null')
            //     } else {
            //       e[i].marker.setIcon(myIcon);
            //     }
            //   }
            // });
          }}
        />
      </div>
    );
  }


   renderLine = (idx) => {
     const { lines } = this.state;
     if (lines.length <= idx) return;
     const line = lines[idx];
     return (
       <div className="line_div">
         {/* <Image src={trafficPng} /> */}
         <Icon inverted circular name="bus" color="green" size="large" style={{ transform: 'translateX(-1em)' }} />
         {line.fromToName}
         {line.description}
         <Label basic color="teal" style={{ marginLeft: 30 }}>
           <Icon name="blind" />
           跟我走
         </Label>
         {/* <Statistic horizontal label="¥" value={line.price} floated="right" color="green" size="tiny" /> */}
         <Statistic horizontal color="orange" size="small" floated="right">
           <Statistic.Value style={{ fontWeight: 'bold' }}>
             <Icon name="yen" color="orange" />
             {line.price}
           </Statistic.Value>
         </Statistic>
       </div>
     );
   }

    // TODO:价钱也需要更新
    changePlace = (item, idx, mapData, linesData) => {
      const {
        places, lines, map, mapChangeFlag,
      } = this.state;
      places[idx] = item;
      if (idx === 0) {
        lines[0] = linesData[0];
      } else if (idx === places.length - 1) {
        lines[lines.length - 1] = linesData[0];
      } else {
        lines[idx - 1] = linesData[0];
        lines[idx] = linesData[1];
      }
      const new_points = map.points;
      new_points[idx] = mapData;
      map.points = new_points;
      this.setState({
        places,
        lines,
        map,
        mapChangeFlag: mapChangeFlag + 1,
      });
    }

    refreshList = () => {
      const {
        mapChangeFlag, id, type, destination, start, end,
      } = this.state;
      const $this = this;
      axios({
        method: 'post',
        url: '/refresh-all',
        data: {
          id,
          type,
          destination,
          startTime: start,
          endTime: end,
        },
      }).then((res) => {
        res.mapChangeFlag = mapChangeFlag + 1;
        $this.setState(res);
      });
    }

    handleDayClick=(day) => {
      this.setState({
        activeDay: day,
      });
      document.getElementsByClassName('place-anchor')[day - 1].scrollIntoView({ behavior: 'smooth' });
    }

    handleMapClick=(day) => {
      const { mapChangeFlag, currentDay } = this.state;
      this.setState({
        currentDay: day,
        mapChangeFlag: currentDay !== day ? mapChangeFlag + 1 : mapChangeFlag,
      });
    }

    render() {
      const {
        typeName, destination, start, end, price, places, lines, trips, activeDay, isLineOk, dayIntoView, currentDay, id,
      } = this.state;
      const offsetLeft = document.getElementById('line_list_div') && document.getElementById('line_list_div').offsetLeft + 28;
      const style = {
        intoView: {
          width: 100, textAlign: 'center', position: 'fixed', top: 100, left: offsetLeft,
        },
        outOfView: {
          width: 100, textAlign: 'center',
        },
      };
      return (
        <div className="recline-body">
          <div className="recline-wrap">
            <HeaderNav />
            <Header as="h1" icon textAlign="center" className="line_title_div">
              <Header.Content className="line_title_main">
                  我的行程
              </Header.Content>
              <Header.Subheader className="line_title_sub">
                行程已为您规划完成，来一场说走就走的旅行吧！
              </Header.Subheader>
            </Header>
            <div className="line_list_div" id="line_list_div">
              <Grid>
                <Label as="a" color="teal" ribbon="right">清单</Label>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <div className="line_info_div">
                      <List horizontal relaxed size="big">
                        <List.Item>
旅行方式
                          <Label as="a" color="teal" basic className="line_list_label">{typeName}</Label>
                        </List.Item>
                        <List.Item>
目的地
                          <Label as="a" color="teal" basic className="line_list_label">{destination}</Label>
                        </List.Item>
                        <List.Item>
出发时间
                          <Label as="a" color="teal" basic className="line_list_label">{start}</Label>
                        </List.Item>
                        <List.Item>
返程时间
                          <Label as="a" color="teal" basic className="line_list_label">{end}</Label>
                        </List.Item>
                        {/* <List.Item>总体花费<Statistic horizontal value={price} label='¥' size='big' color='range' style={{marginLeft:'40px'}}/></List.Item> */}
                        <List.Item>
总体花费
                          <Statistic horizontal color="orange" size="small">
                            <Statistic.Value style={{ fontWeight: 'bold' }}>
                              <Icon name="yen" color="orange" />
                              {price}
                            </Statistic.Value>
                          </Statistic>
                        </List.Item>

                        {/* <List.Item>总体花费<Icon name="yen" color="orange" size="large"/>{price}</List.Item> */}
                        <List.Item><Button color="green" size="big">确认行程</Button></List.Item>
                      </List>
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Divider />
                {
                    isLineOk
                      ? [
                        <Grid.Row key="preview" className="line_grid_row" style={{ display: 'flex', alignItems: 'center' }}>
                          <Grid.Column width={9}>
                            <Header as="h1" icon textAlign="left" content="行程概览" />
                            {this.renderTrip()}
                          </Grid.Column>
                          <Grid.Column width={7}>
                            <div className="map-day">
                              {['D1', 'D2', 'D3', 'D4'].map((item, index) => (
                                <div key={item} className={`map-day-item ${index + 1 === currentDay ? 'map-day-active' : ''}`} onClick={() => { this.handleMapClick(index + 1); }}>{item}</div>
                              ))}
                            </div>
                            {this.renderMap()}
                          </Grid.Column>

                        </Grid.Row>,
                        <Divider />,
                        <Grid.Row key="title"><Grid.Column width={16}><Header as="h1" icon textAlign="left" content="行程详情" style={{ width: '100%' }} /></Grid.Column></Grid.Row>,
                        <Grid.Row key="detail" className="line_grid_row" id="dayMenu">
                          <Grid.Column width={2}>
                            <Menu vertical style={dayIntoView ? style.intoView : style.outOfView}>
                              {trips.map((item, index) => (
                                <Menu.Item
                                  key={item.day}
                                  active={activeDay === index + 1}
                                  className="trip-item"
                                  onClick={() => { this.handleDayClick(index + 1); }}
                                >
                                  <h1>DAY</h1>
                                  {index + 1}
                                </Menu.Item>
                              ))}
                            </Menu>
                          </Grid.Column>
                          <Grid.Column width={14}>
                            {places.map((items, idx) => (
                              <div key={idx} id={`day${idx + 1}`}>
                                {/* 这里是用来点击滑动跳转的锚点 */}
                                <div className="place-anchor" />
                                <Header as="h1" icon textAlign="left" content={`DAY${idx + 1}`} color="grey" style={{ transform: 'translateX(-1em)' }} />
                                <PlaceDiv items={items} idx={idx} orderId={id} changePlace={this.changePlace} refreshList={this.refreshList} lines={lines} currentDay={idx} />
                              </div>
                            ))}
                          </Grid.Column>
                        </Grid.Row>,
                      ]
                      : (
                        <Grid.Row className="line_grid_row line_loading_div">
                          <Grid.Column width={16}>
                            <Dimmer active inverted className="line_loading">
                              <Loader size="big"><span style={{ color: '#99A3A4' }}>定制路线生成中，请稍后</span></Loader>
                            </Dimmer>
                          </Grid.Column>
                        </Grid.Row>
                      )
                  }
              </Grid>
            </div>
          </div>
        </div>
      );
    }
}

export default withRouter(Recline);
