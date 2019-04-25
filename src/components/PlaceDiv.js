import React, { Component } from 'react';
import {
  Button, Icon, Image, Label, Statistic, Popup, Modal, Grid, Dimmer, Segment, Loader,
} from 'semantic-ui-react';

import axios from '../util/axios';
import gofree_mock from '../mock/gofree_mock';

export default class PlaceDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      recommendPlaces: [],
      mapDatas: [],
      isOpen: false,
      lines: this.props.lines,
      currentDay: this.props.currentDay,
      replaceDay: 0,
      replaceId: 0,
      refreshed: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState == this.state) return false;
    return true;
  }

  handleClose = () => this.setState({ isOpen: false })

  renderTags(tags) {
    return (
      tags.map((i, idx) => (
        <Label key={idx} as="a" tag key={idx} color="grey" style={{ marginRight: 10 }}>{i}</Label>
      ))
    );
  }

  renderTypeIcon(type) {
    const iconType = ['camera', 'bed', 'coffee'];
    return <Icon circular inverted color="green" name={iconType[type]} size="large" style={{ transform: 'translateX(-1em)' }} />;
  }

  renderLine(idx) {
    const { lines, currentDay } = this.state;
    const line = lines[currentDay][idx];
    const iconType = ['truck', 'bus', 'blind'];
    return line && (
      <div className="line_div">
        <Icon inverted circular name={iconType[line.type]} color="green" size="large" style={{ transform: 'translateX(-1em)' }} />
        {line.fromToName}
        {line.description}
        <Label basic color="teal" style={{ marginLeft: 30 }}>
          <Icon name="blind" />
          跟我走
        </Label>
        <Statistic horizontal color="orange" size="small" floated="right">
          <Statistic.Value style={{ fontWeight: 'bold' }}>
            <Icon name="yen" color="orange" />
            {line.price}
          </Statistic.Value>
        </Statistic>
      </div>
    );
  }

  showMore = (placeId, idx, index) => {
    this.setState({
      replaceDay: idx,
      replaceId: index,
    });
    const $this = this;
    axios.get('/get-more', {
      params: {
        id: $this.props.orderId, placeId, index: idx,
      },
    })
      .then((res) => {
        $this.setState({
          places: res.places,
          isOpen: true,
          mapDatas: res.map_data,
          recommendPlaces: this.randomPlaces(res.places),
        });
      });
  }

  replaceBtn = (item, idx) => {
    const { replaceDay, replaceId } = this.state;
    const { items } = this.props;
    const $this = this;
    axios({
      method: 'post',
      url: '/select-replace',
      data: {
        id: $this.props.orderId,
        placeId: item.placeId,
        index: idx,
      },
    }).then((res) => {
      const { idx } = $this.props;
      const mapData = $this.state.mapDatas[idx];
      $this.props.changePlace(item, replaceDay, replaceId, mapData, res.relate_lines);
      $this.setState({ isOpen: false });
    });
  }

  renderModalPlaceDiv = (place, idx) => {
    const iconHtml = this.renderTypeIcon(place.type);
    const tagsHtml = this.renderTags(place.tags);
    return (
      <div className="place_div_modal">
        <div className="place_total">
          {iconHtml}
          <b>{place.name}</b>
          &nbsp;&nbsp;
          <Label color="red" basic>
            {place.score}
分
          </Label>
&nbsp;&nbsp;
          <Label as="a" image color="yellow" basic>
            <Icon name="thumbs outline up" />
            {place.zanNum}
觉得很赞
          </Label>
                  &nbsp;&nbsp;
          <Button color="red" basic circular onClick={() => { this.replaceBtn(place, idx); }}>
            <Icon name="heart" />
                      替换
          </Button>
          <Statistic horizontal color="orange" size="small" floated="right">
            <Statistic.Value style={{ fontWeight: 'bold' }}>
              <Icon name="yen" color="orange" />
              {place.price}
            </Statistic.Value>
          </Statistic>
        </div>
        <div className="place_tags">
          {tagsHtml}
        </div>
        <div className="place_text">
          {place.description}
        </div>
        <div className="place_imgs">
          <Image.Group size="small">
            {place.imgs.map((img, index) => (
              index < 4 && <Image src={img} key={index} />
            ))}
          </Image.Group>
        </div>
      </div>
    );
  }

  refreshAll = () => {
    // this.props.refreshList();
    const { places } = this.state;
    this.setState({
      refreshed: true,
    });
    setTimeout(() => {
      this.setState({
        recommendPlaces: this.randomPlaces(places),
        refreshed: false,
      });
    }, 1500);

    // this.setState({ isOpen: false });
  }

  randomPlaces(places) {
    if (places.length === 0) return [];
    let time = 0;
    const random = [];
    while (time !== 4) {
      const index = Math.floor(Math.random() * places.length);
      if (!random.includes(index)) {
        random.push(index);
        time += 1;
      }
    }
    const newPlaces = [];
    random.map((item) => {
      newPlaces.push(places[item]);
    });
    return newPlaces;
  }

  render() {
    const {
      items, idx, renderLine,
    } = this.props;
    const {
      places, isOpen, refreshed, recommendPlaces,
    } = this.state;
    return (
      <div className="place-day">
        {items.map((item, index) => (
          <div className="place_div" key={index}>
            <div className="place_total">
              {this.renderTypeIcon(item.type)}
              <span style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</span>
              &nbsp;&nbsp;
              <Label color="red" basic>
                {item.score}
分
              </Label>
&nbsp;&nbsp;

              <Label as="a" image color="yellow" basic>
                <Icon name="thumbs outline up" />
                {item.zanNum}
觉得很赞

              </Label>
                &nbsp;&nbsp;

              <Popup
                trigger={<Button icon="refresh" onClick={() => { this.showMore(item.placeId, idx, index); }} basic />}
                content="不喜欢?换一个"
              />
              {/* <Statistic horizontal label="¥" value={item.price} floated="right" color="red" size="tiny" /> */}
              <Statistic horizontal color="orange" size="small" floated="right">
                <Statistic.Value style={{ fontWeight: 'bold' }}>
                  <Icon name="yen" color="orange" />
                  {item.price}
                </Statistic.Value>
              </Statistic>
            </div>
            <div className="place_tags">
              {this.renderTags(item.tags)}
            </div>
            <div className="place_text">
              {item.description}
            </div>
            <div className="place_imgs">
              {item.imgs.map((img, index) => (
                index < 4 && <img src={img} alt="" key={img} />
              ))}
              {item.imgs.length > 4 && <Popup trigger={<i className="place-more-img iconfont icon-more" />} content="更多照片..." />}
            </div>
            {/* 模态框 */}
            <Modal
              open={isOpen}
              onClose={this.handleClose}
              size="large"
            >
              <Modal.Header>相关推荐地点</Modal.Header>
              <Modal.Content image scrolling>
                <div>
                  <Dimmer active={refreshed} inverted>
                    <Loader inverted>Loading...</Loader>
                  </Dimmer>
                  <Grid>
                    {recommendPlaces.length !== 0 && recommendPlaces.map((place, idx) => (
                      <div key={idx} style={{ display: 'block', width: '100%' }}>
                        {this.renderModalPlaceDiv(place, idx, item, index)}
                      </div>
                    ))}
                  </Grid>
                </div>

              </Modal.Content>
              <Modal.Actions>
                <Button color="red" onClick={this.refreshAll}>
                          刷新全部
                </Button>
                <Button color="green" onClick={this.handleClose}>
                          取消
                </Button>
              </Modal.Actions>
            </Modal>
            {this.renderLine(index)}
          </div>
        ))}
      </div>
    );
  }
}
