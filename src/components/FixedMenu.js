import React, { Component } from 'react'
import { Button, Menu,Container,Dropdown} from 'semantic-ui-react'


export default class FixedMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: this.props.activeMenu,
            isLogin: this.props.isLogin,
            isInverted: this.props.isInverted
        };
    }
      
    handleLoginClick = () => {this.props.handleLogin()}

    handleRegisterClick = () => {this.props.handleRegister()}

    handleLoginOutClick = () => {this.props.handleLoginOut()}
    
    handleItemClick = (e, { index }) => this.setState({ activeMenu: index })

    componentWillReceiveProps(nextProps){
        this.setState({
            activeMenu: nextProps.activeMenu,
            isLogin: nextProps.isLogin,
            isInverted: nextProps.isInverted
        })
    }

    render() {
      const {activeMenu,isInverted,isLogin} = this.state;
        return (
          <div>
        {
          isInverted  ?  (
            <div>
                <Menu size='large' inverted>
                  <Container>
                    <Menu.Item as='a' href="#seg_0" active={activeMenu === 0} index={0} onClick={this.handleItemClick}>旅游定制</Menu.Item>
                    <Menu.Item as='a' href="#seg_1" active={activeMenu === 1} index={1} onClick={this.handleItemClick}>推荐城市</Menu.Item>
                    <Menu.Menu position='right'>
                      {
                          isLogin ? 
                          (<div>
                              <Dropdown item text={window.$wsCache.get('username')} inline>
                                <Dropdown.Menu>
                                  <Dropdown.Item onClick={this.handleLoginOutClick}>退出</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                          </div>)
                          :(
                          <div>
                              <Button as='a' inverted onClick={this.handleLoginClick}>登录</Button>
                              <Button as='a' inverted onClick={this.handleRegisterClick}>注册</Button>
                          </div>
                          )
                      }
                    </Menu.Menu>
                  </Container>
                </Menu>
            </div>
            )
          :(
            <div>
                <Menu fixed='top' size='large'>
                  <Container>
                    <Menu.Item as='a' href="#seg_0" active={activeMenu === 0} index={0} onClick={this.handleItemClick}>旅游定制</Menu.Item>
                    <Menu.Item as='a' href="#seg_1" active={activeMenu === 1} index={1} onClick={this.handleItemClick}>推荐城市</Menu.Item>
                    <Menu.Menu position='right'>
                      {
                          isLogin ? 
                          (<div>
                              <Dropdown item text={window.$wsCache.get('username')} inline>
                                <Dropdown.Menu>
                                  <Dropdown.Item onClick={this.handleLoginOutClick}>退出</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                          </div>)
                          :(
                          <div>
                              <Button as='a'  onClick={this.handleLoginClick}>登录</Button>
                              <Button as='a'  onClick={this.handleRegisterClick}>注册</Button>
                          </div>
                          )
                      }
                    </Menu.Menu>
                  </Container>
                </Menu>
            </div>
            )
        }
        </div>
        )
    }
}