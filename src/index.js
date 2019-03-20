import React from 'react';
import ReactDOM from 'react-dom';
import WsCache from 'web-storage-cache';
import App from './Main';

window.$wsCache = new WsCache();

ReactDOM.render(<App />, document.getElementById('app'));


if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}
