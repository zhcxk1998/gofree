import React, { Component } from 'react';
import { Button, Menu,Container,Grid,Header,Icon,Image,Label,List,Statistic,Message,Popup,Dimmer,Loader} from 'semantic-ui-react';
import {withRouter,Redirect} from 'react-router-dom';
import axios from '../util/axios.js';
import gofree_mock from '../mock/gofree_mock.js';

import BaiduMap from '../components/BaiduMap.js';
import PlaceDiv from '../components/PlaceDiv.js';

let viewPng = require("../images/view.png");
let hotelPng = require("../images/hotel.png");
let resPng = require("../images/res.png");
let trafficPng = require("../images/traffic.png");

class Recline extends Component {
    constructor(props) {
        super(props);

        this.state = {
          map: {
            centerP: [],
            points:[]
          },
          id: '',
          typeName: '',
          destination: '',
          start: '',
          end: '',
          price: 2000,
          places: [],
          lines: [],
          mapChangeFlag: 0,
          type: '',
          isLineOk:false
        };
    }

    componentWillMount() {
      if(this.props.location.data == null){
        //TODO:重定向注释打开
        // this.props.history.push('/');
      }else {
        const {type,start,end,des} = this.props.location.data;
        this.setState({
          type:type,
          start:start,
          end: end,
          destination: des
        });
        console.log(this.props.location.data);
      }
    }

    componentDidMount() {
      const $this = this;
      const {type,start,end,destination} = this.state;
      axios.get('/get-line',{params:{type: type,destination:destination,startTime:start,endTime:end}})
            .then(function(response) {
              response['isLineOk'] = true;
              $this.setState(response);
            });
    }

    renderMap(){
      const {centerP,points} = this.state.map;
      return (
         <div className="recline_map">
             <BaiduMap 
                 ak={"Ci7HWXQfGoPNX7mGZ7gIlmLKQ1C7qh9G"}  
                 flag={this.state.mapChangeFlag}
                 callback={(map)=>{
                    map.centerAndZoom(new BMap.Point(centerP.x, centerP.y), 11);

                    var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}  
                    map.addControl(new BMap.NavigationControl(opts));
            
                    var p = [];

                    for(var i = 0;i<points.length;i++){
                      p[i] = new BMap.Point(points[i].x, points[i].y);
                    }
            
                    var driving = new BMap.DrivingRoute(map, {
                      renderOptions: {
                        map: map,
                        autoViewport: true
                      }
                    });
                    driving.search(p[0], p[points.length-1], {
                      waypoints: p.slice(1,points.length-1)
                    });
                    // driving.setMarkersSetCallback(function(e){
                    //   for(var i = 0;i<e.length;i++){
                    //       var item = points[i];
                    //       var myIcon;
                    //       if(item.type == 0){
                    //         myIcon = new BMap.Icon(viewPng, new BMap.Size(45,45));
                    //       }else if(item.type == 1){
                    //         myIcon = new BMap.Icon(hotelPng, new BMap.Size(45,45));
                    //       }else {
                    //         myIcon = new BMap.Icon(resPng, new BMap.Size(45,45));
                    //       } 
                    //       console.log("sss",e[i]);
                    //       if(e[i].marker ==null)
                    //         e[i].Mm.setIcon(myIcon);
                    //       else
                    //         e[i].marker.setIcon(myIcon);
                    //   }
                    // });
                 }}
             />
         </div>
        )
    }


    renderLine = (idx) => {
      const {lines} = this.state;
      if(lines.length <= idx) return;
      const line = lines[idx];
      return ( 
        <div className="line_div">
          <Image src={trafficPng} /> 
          <span>{line.fromToName}</span>
          <span>{line.description}</span>
          <Statistic horizontal label='¥' value={line.price} floated='right' color='red' size='tiny'/>
        </div>
        )
    }

    //TODO:价钱也需要更新
    changePlace = (item,idx,mapData,linesData) => {
      const {places,lines,map,mapChangeFlag} = this.state;
      places[idx] = item;
      if(idx == 0){
        lines[0] = linesData[0];
      }else if(idx == places.length-1){
        lines[lines.length-1] = linesData[0];
      }else {
        lines[idx-1] = linesData[0];
        lines[idx] = linesData[1];
      }
      const new_points = map.points;
      new_points[idx] = mapData;
      map.points = new_points;
      this.setState({
        places:places,
        lines: lines,
        map: map,
        mapChangeFlag:mapChangeFlag+1
      })
    }

    refreshList = () => {
      const {mapChangeFlag,id,type,destination,start,end} = this.state;
      const $this = this;
      axios({
        method:'post',
        url:'/refresh-all',
        data:{
          id: id,
          type:type,
          destination:destination,
          startTime:start,
          endTime: end
        }
      }).then(function(res){
        res.mapChangeFlag = mapChangeFlag + 1;
        $this.setState(res);
      })
    }


    render() {
      const {typeName,destination,start,end,price,places,lines} = this.state;
        return (
          <div className="recline_body">
            <Header as='h1' icon textAlign='center' className="line_title_div">
              <Header.Content className="line_title_main">
                  我的行程
              </Header.Content>
              <Header.Subheader className="line_title_sub">
                行程已为您规划完成，来一场说走就走的旅行吧！
              </Header.Subheader>
            </Header>
            <div className="line_list_div">
              <Grid>
                  <Label as='a' color='teal' ribbon='right'>清单</Label>
                  <Grid.Row className="line_grid_row">
                    <Grid.Column width={16} style={{height:'100px'}}>
                      <div className="line_info_div">
                        <List horizontal relaxed size='big'>
                            <List.Item>旅行方式<Label as='a' color='teal' basic className='line_list_label'>{typeName}</Label></List.Item>
                            <List.Item>目的地<Label as='a' color='teal'  basic className='line_list_label'>{destination}</Label></List.Item>
                            <List.Item>出发时间<Label as='a' color='teal' basic className='line_list_label'>{start}</Label></List.Item>
                            <List.Item>返程时间<Label as='a' color='teal' basic className='line_list_label'>{end}</Label></List.Item>
                            <List.Item><Statistic horizontal label='¥' value={price} size='small' color='red' style={{marginLeft:'40px'}}/></List.Item>
                        </List>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  {
                    this.state.isLineOk ? 
                    (
                      <Grid.Row className="line_grid_row">
                        <Grid.Column width={9}>
                          {places.map((item,idx) => (
                            <div key={idx}>
                              <PlaceDiv item={item} idx={idx} orderId={this.state.id} changePlace={this.changePlace} refreshList={this.refreshList}/>
                              {this.renderLine(idx)}
                            </div>     
                          ))}
                        </Grid.Column>
                        <Grid.Column width={7}>
                          {this.renderMap()}
                        </Grid.Column>
                      </Grid.Row>
                    )
                    :
                    (
                      <Grid.Row className="line_grid_row line_loading_div">
                        <Grid.Column width={16}>
                          <Dimmer active inverted className="line_loading">
                              <Loader size='big'><span style={{color:'#99A3A4'}}>定制路线生成中，请稍后</span></Loader>
                          </Dimmer>
                        </Grid.Column>
                      </Grid.Row>
                    )
                  }
              </Grid>
            </div>
          </div>
        )
    }
}

export default withRouter(Recline);