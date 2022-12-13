import { defineStore } from 'pinia';
import { reqCategoryList } from '../api/ajax';

export const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    categoryList: [],
    bannerList: [],
    floorList: []
  }),
  actions: {
    setCategoryList(val) {
      this.categoryList = val;
    },
    async getCategoryList() {
      let res = await reqCategoryList();
      this.categoryList = res;
    }
  },
  getters: {},
})