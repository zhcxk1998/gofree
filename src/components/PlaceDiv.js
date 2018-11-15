import React,{ Component } from 'react';
import { Button,Icon,Image,Label,Statistic,Popup,Modal,Grid} from 'semantic-ui-react';

import axios from '../util/axios.js';
import gofree_mock from '../mock/gofree_mock.js';

let viewPng = require("../images/view.png");
let hotelPng = require("../images/hotel.png");
let resPng = require("../images/res.png");

export default class PlaceDiv extends Component {

	constructor(props) {
    super(props);
    this.state = {
      places:[],
      mapDatas:[],
      isOpen:false
    };
  }

  handleClose = () => this.setState({ isOpen: false })

  renderTags(tags) {
    return (
      tags.map((i,idx) => (
        <Label as='a' tag key={idx}>{i}</Label>
      ))
    )
  }

  renderTypeIcon(type) {
    let iconDom;
    if(type == 0){
      iconDom = <Image src={viewPng} />
    }else if(type == 1) {
      iconDom = <Image src={hotelPng}/>
    }else{
      iconDom = <Image src={resPng}/>
    }
    return iconDom;
  }

  showMore = (placeId,idx) => {
    const $this = this;
    axios.get('/get-more', {
        params: {
          id: $this.props.orderId,placeId:placeId,index:idx
        }})
        .then(function(res){
          $this.setState({
            places:res.places,
            isOpen:true,
            mapDatas: res.map_data
          })
        })
  }

  replaceBtn = (item,idx) => {
    const $this = this;
    axios({
      method:'post',
      url:'/select-replace',
      data:{
        id: $this.props.orderId,
        placeId:item.placeId,
        index:idx
      }
    }).then(function(res){
        const idx = $this.props.idx;
        const mapData = $this.state.mapDatas[idx];
        $this.props.changePlace(item,idx,mapData,res.relate_lines);
        $this.setState({isOpen:false});
    })
  }

  renderModalPlaceDiv = (item,idx) => {
    const iconHtml = this.renderTypeIcon(item.type);
    const tagsHtml = this.renderTags(item.tags);
    return (
          <div className="place_div_modal" >
                <div className="place_total">
                  {iconHtml} 
                  {item.name} <Label color='olive' basic>{item.score} 分</Label>&nbsp;&nbsp;
                  <Label as='a' image color='olive' basic>
                    <Icon name="thumbs outline up"/>
                    {item.zanNum} 觉得很赞
                  </Label>
                  &nbsp;&nbsp;
                  <Button color='red' basic circular onClick={this.replaceBtn.bind(this,item,idx)}>
                      <Icon name='heart' />
                      替换
                  </Button>
                  <Statistic horizontal label='¥' value={item.price} floated='right' color='red' size='tiny'/>
                </div>
                <div className="place_tags">
                    {tagsHtml}
                </div>
                <div className="place_text">
                    {item.description}
                </div>
                <div className="place_imgs">
                    <Image.Group size='small'>
                      <Image src={item.imgs[0]} />
                      <Image src={item.imgs[1]} />
                      <Image src={item.imgs[2]} />
                      <Image src={item.imgs[3]} />
                    </Image.Group>
                </div>
          </div>
    )   
  }

  refreshAll = () =>{
    this.props.refreshList();
    this.setState({isOpen:false});
  }


	render() {
		const {item,idx} = this.props;
    const {places} = this.state;
		return (
            <div className="place_div" >
              	<div className="place_total">
                	{this.renderTypeIcon(item.type)} 
                	{item.name} <Label color='olive' basic>{item.score} 分</Label>&nbsp;&nbsp;
                	<Label as='a' image color='olive' basic>
                  	<Icon name="thumbs outline up"/>
                  	{item.zanNum} 觉得很赞
                	</Label>
                	&nbsp;&nbsp;
                	<Popup
                    	trigger={<Button icon='refresh' onClick={this.showMore.bind(this,item.placeId,idx)}/>}
                    	content='不喜欢?换一个'
                	/>
                	<Statistic horizontal label='¥' value={item.price} floated='right' color='red' size='tiny'/>
              	</div>
              	<div className="place_tags">
                  	{this.renderTags(item.tags)}
              	</div>
              	<div className="place_text">
                  	{item.description}
              	</div>
              	<div className="place_imgs">
                  	<Image.Group size='small'>
                    	<Image src={item.imgs[0]} />
                    	<Image src={item.imgs[1]} />
                    	<Image src={item.imgs[2]} />
                    	<Image src={item.imgs[3]} />
                  	</Image.Group>
              	</div>
              {/*模态框*/}
                <Modal
                  open={this.state.isOpen}
                  onClose={this.handleClose}
                >
                  <Modal.Header>相关推荐地点</Modal.Header>
                  <Modal.Content image scrolling>
                    <Grid>
                      {places.map((item,idx) => (
                        <div key={idx} style={{display:'block'}}>
                          {this.renderModalPlaceDiv(item,idx)}
                        </div>     
                      ))}
                    </Grid>
                  </Modal.Content>
                  <Modal.Actions>
                      <Button color='red' onClick={this.refreshAll}>
                          刷新全部
                      </Button>
                      <Button color='green' onClick={this.handleClose}>
                          取消
                      </Button>
                  </Modal.Actions>
                </Modal>
            </div>
        )
    }
}