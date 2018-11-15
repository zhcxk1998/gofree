import axios from 'axios';
import qs from 'qs';
import {baseUrl} from './config.js'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;


axios.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data);
    return config;
});


axios.interceptors.response.use((res) => {
    if (res.data.code != 200) {
        alert(res.data.msg);
        return null;
    }
    return res.data;
}, (error) => {
	alert("网络异常！");
    return Promise.reject(error);
});

export default axios;
