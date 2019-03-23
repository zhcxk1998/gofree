import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

export default class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 0,
    };
  }

  render() {
    const { activeLink } = this.state;
    return (
      <div className="header-nav">
        <div className="nav-wrap">
          <h1>GoFree</h1>
          <div className="nav-feature">
            <div className={activeLink === 0 ? 'active' : ''}>旅游定制</div>
            <div className={activeLink === 1 ? 'active' : ''}>推荐城市</div>
            <div className={activeLink === 2 ? 'active' : ''}>联系我们</div>
            <Button circular color="green" icon="user" size="huge" />
          </div>
        </div>
      </div>
    );
  }
}
