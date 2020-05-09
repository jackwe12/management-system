import axios from 'axios';
// import {browserHistory} from 'react-router-dom';
import {createHashHistory}from 'history';
import {message} from 'antd';

const instance = axios.create({
    baseURL: 'http://localhost:8413/',
    //cors?
    withCredentials: true,
    timeout: 3000
});

instance.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['token'] = token;
    }
    return config;
}, (err)=>{
    console.log(err);
    return Promise.reject(err);
})

//如果token 無效或不存在，會收到555,就會移除token 並導回login
instance.interceptors.response.use((response)=>{
    if (response.data.code === 555){
        localStorage.removeItem('token');
        message.warn('login expired or not authenticated login')
        createHashHistory().push('/login');
    }
    return response
}, (err)=>{
    console.log(err)
    return Promise.reject(err)
})

//?
class http {
    static async get(url, params){
        return await instance.get(url, {params});
    }
    static async post(url, data){
        return await instance.post(url, data)
    }
}

export default http;