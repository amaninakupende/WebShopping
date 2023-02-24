import Axios from "./index.js";
import mockAxios from './mockServe.js'
//三级联动
export const reqCategoryList = () => {
  return Axios.get('/product/getBaseCategoryList').then(res => res.data.data);
}

export const reqFloorList = () => {
  return mockAxios.get('/floor');
}
export const a = () => {
  
}

export const reqSearchInfo = (params) => {
  return Axios.post('/list', params).then(res => res.data);
}

export const reqGoodsInfo = (skuId) => {
  return Axios.get(`/item/${skuId}`).then(res => res.data);
}

export const reqCartList = () => {
  return Axios.get('/cart/cartList').then(res => res.data);
}

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return Axios.post(`/cart/addToCart/${skuId}/${skuNum}`).then(res => res.data);
}
