import Axios from "./index.js";

//三级联动
export const reqCategoryList = () => {
  return Axios.get('/product/getBaseCategoryList').then(res => res.data.data);
}