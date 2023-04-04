import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import pinia from '@/store/index'
import { useDetailStore } from '@/store/detail'
const store = useDetailStore(pinia);

const Axios = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

// 请求拦截器
Axios.interceptors.request.use(config => {
  if(store.uuid) {
    config.headers.userTempId = store.uuid
  }
  nprogress.start();
  return config;
})

//响应拦截器
Axios.interceptors.response.use(res => {
  nprogress.done();
  return res;
}, (error) => {
  //响应失败的回调
  alert("服务器响应失败");
});

export default Axios;