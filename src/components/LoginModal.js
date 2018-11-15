import React, { Component } from 'react'
import { Button,Modal,Embed,Form} from 'semantic-ui-react'

export default class LoginModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: this.props.modalOpen,
      username: '',
      password: '',
      usernameValid: false,
      passwordValid: false
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.props.closeLoginModal();
  }

  clearWarning = () => {
    const {username,password} = this.state;
    this.setState({
      usernameValid:username === '',
      passwordValid:password === ''
    });
  }

  _loginHandle = () => {
    const {username,password} = this.state;
    if(username === '' || password === ''){
        this.setState({
          usernameValid:username === '',
          passwordValid:password === ''
        });
    }else {
      this.props.loginHandle(username,password);
    }
  }

  _switchHandle = () => this.props.switchHandle();

  render() {
    const {modalOpen,username,password,usernameValid,passwordValid} = this.state;
    return (
      <Modal
        open={modalOpen}
        size='tiny'
      >
          <Modal.Header>
            登录
          </Modal.Header>
          <Modal.Content>
              <Form>
                <Form.Field required>
                  <label>用户名</label>
                  <Form.Input placeholder='请输入用户名' value={username} onChange={(e) => {
                    this.setState({username:e.target.value});
                    this.clearWarning();
                  }} error={usernameValid}/>
                </Form.Field>
                <Form.Field required>
                  <label>密码</label>
                  <Form.Input placeholder='请输入密码' type='password' value={password} onChange={(e) => {
                    this.setState({password:e.target.value});
                    this.clearWarning();
                  }} error={passwordValid}/>
                </Form.Field>
              </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button content='取消' onClick={this.handleClose} />
            <Button content="新用户注册" basic color='green' onClick={this._switchHandle} />
            <Button content="登录" color='green' onClick={this._loginHandle} />
          </Modal.Actions>
      </Modal>
    )
  }
}