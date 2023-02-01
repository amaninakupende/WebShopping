import Axios from "./index.js";
import mockAxios from './mockServe.js'
//三级联动
export const reqCategoryList = () => {
  return Axios.get('/product/getBaseCategoryList').then(res => res.data.data);
}

export const reqFloorList = () => {
  return mockAxios.get('/floor');
}

export const reqSearchInfo = (params) => {
  return Axios.post('/list', params).then(res => res.data);
}