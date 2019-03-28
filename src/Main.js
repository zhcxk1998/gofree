import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './page/Home';
import Recline from './page/Recline';
import 'normalize.css/normalize.css';
import './styles/App.css';
import 'semantic-ui-css/semantic.min.css';


class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lines" component={Recline} />
        </Switch>
      </Router>
    );
  }
}


AppComponent.defaultProps = {};

export default AppComponent;
