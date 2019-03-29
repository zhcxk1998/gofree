import React, { Component } from 'react';

export default class BaiduMap extends Component {
  constructor(props) {
    super(props);

    const ID = `itminus_bmap${parseInt(Math.random() * 10000000)}`;

    this.state = {
      ak: '',
      callback(map) {},
      id: ID,
    };
  }

  componentWillMount() {
    // 注意callback=init参数不能去掉，因为这是百度地图异步加载的接口，
    // 否则，会因为React异步创建了script，百度返回的script中又调用document.write()，从而触发错误
    const bmapSrc = `https://api.map.baidu.com/api?v=2.0&ak=${this.props.ak}&callback=init`;
    if (typeof BMap !== 'undefined') {
      return;
    }
    let script = document.querySelector(`script[src='${bmapSrc}']`);
    if (!script) {
      script = document.createElement('script');
      script.src = bmapSrc;
      document.body.appendChild(script);
    }
  }

  timeoutPromise(timeout) {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    }));
  }

  waitUntil(states) {
    return new Promise(((resolve, reject) => {
      const map = new BMap.Map(states.id);
      resolve(map);
    })).catch(err =>
    // console.log("there's no BMap yet. Waitting ...",err);
      this.timeoutPromise(300).then(() => this.waitUntil(states)));
  }

  componentDidMount() {
    this.waitUntil(this.state).then((map) => {
      // console.log(`[+] bmap loaded`,map);
      this.props.callback(map);
    });
  }

  componentWillReceiveProps(nextProps) {
    // 判断地图有没有变化，如果没有则不进行重新渲染
    if (nextProps.flag !== this.props.flag) {
      this.waitUntil(this.state).then((map) => {
      // console.log(`[+] bmap loaded`,map);
        this.props.callback(map);
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps',nextProps);
  //   console.log('thisProps',this.props);
  //   if (nextProps === this.props) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    return <div id={this.state.id} style={{ height: '400px' }} />;
  }
}
