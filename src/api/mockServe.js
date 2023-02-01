import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Axios = axios.create({
  baseURL: "/mock",
  timeout: 5000,
})

//请求拦截器
// Axios.interceptors.request.use(config => {
//   nprogress.start();
//   return config;
// })

// //响应拦截器
// Axios.interceptors.response.use(res => {
//   nprogress.done();
//   return res.data;
// }, (error) => {
//   //响应失败的回调
//   alert("服务器响应失败");
// });

export default Axios;