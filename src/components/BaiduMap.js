import React, { Component } from 'react'

export default class BaiduMap extends Component {
    constructor(props){
        super(props);

        const ID=`itminus_bmap${parseInt(Math.random()*10000000)}`;

        this.state = {
            ak:'',
            callback:function(map){},
            id:ID,
        };
    }

    componentWillMount(){
        // 注意callback=init参数不能去掉，因为这是百度地图异步加载的接口，
        // 否则，会因为React异步创建了script，百度返回的script中又调用document.write()，从而触发错误
        let bmapSrc=`http://api.map.baidu.com/api?v=2.0&ak=${this.props.ak}&callback=init`;
        if(typeof BMap !='undefined'){
            return;
        }else{
            let script=document.querySelector(`script[src='${bmapSrc}']`);
            if(!script){
                script= document.createElement("script");
                script.src = bmapSrc;
                document.body.appendChild(script);
            }
        }
    }

    timeoutPromise(timeout){
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, timeout);
        });
    }

    waitUntil(states){
        return new Promise(function(resolve,reject){
            const map=new BMap.Map(states.id);
            resolve(map);
        }).catch(err=>{
            // console.log("there's no BMap yet. Waitting ...",err);
            return this.timeoutPromise(300).then(()=>{
                return this.waitUntil(states);
            });
        });
    }

    componentDidMount(){
        this.waitUntil(this.state).then(map=>{
            // console.log(`[+] bmap loaded`,map);
            this.props.callback(map);
        });
    }

    componentWillReceiveProps(nextProps){
        this.waitUntil(this.state).then(map=>{
            // console.log(`[+] bmap loaded`,map);
            this.props.callback(map);
        });
    }

    render(){ 
        return <div id={this.state.id} style={{height:'400px'}}></div>;
    } 
}