import React, { Component } from 'react'
import { Button, Icon, Modal,Grid,Card,Image} from 'semantic-ui-react'
import axios from '../util/axios.js';

class PreferencesModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen,
      items:[]
    }
  }

  componentDidMount() {
    const $this = this;
    axios.get('/persona/getCandidatePlaces/3301/').then(function(res){
      let _rec = res.result;
      _rec.map((item,idx) => item['isSelected'] = false);
      $this.setState({
        items:_rec
      })
    })
  }

  close = () => {
    const {items} = this.state;
    let ids = [];
    items.map((item) => {
      if(item.isSelected) ids.push(item.id);
    });
    this.props.finalRegisterHandle(ids);
  }

  closeNothing = () => {
    let ids = [];
    this.props.finalRegisterHandle(ids);
  }

  handleSelect = (idx) => {
    const {items} = this.state;
    let temp = items[idx].isSelected;
    items[idx].isSelected = !temp;
    this.setState({items:items});
  }

  render() {
    const { modalOpen,items } = this.state

    return (
      <Modal
        open={modalOpen}
        onClose={this.close}
        size='small'
      >
        <Modal.Header>选择你喜欢的目的地</Modal.Header>
        <Modal.Content scrolling>
          <p style={{'textAlign':'center'}}>做一个直接的外貌党，哪些图片是你喜欢的风格,<span style={{color:'green'}}>不求你专一,可以选多个哦</span></p>
          <Grid>
            <Grid.Row columns={3}>
              {items.map((item,idx) => (
                  <Grid.Column key={idx} className="preference_card" onClick={this.handleSelect.bind(this,idx)}>
                      <Card>
                        <Image src={item.main_pic} />
                        <Card.Content>
                          <Card.Header>
                            {item.name}  {item.isSelected ?<Icon name='check circle outline' style={{'fontSize': '1.1em'}} color='green' /> :null}
                          </Card.Header>
                          <Card.Description>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                  </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button content='不想选,跳过' onClick={this.closeNothing} />
          <Button icon='check' content='选好了' color='green' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}


export default PreferencesModal;