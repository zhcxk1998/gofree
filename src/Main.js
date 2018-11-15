require('normalize.css/normalize.css');
require('semantic-ui-css/semantic.min.css');
require('./styles/App.css');

import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from './page/Home.js';
import Recline from './page/Recline.js';


class AppComponent extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/lines" component={Recline}/>
            </Switch>
        </Router>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
