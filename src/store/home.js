import { defineStore } from 'pinia';

export const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    categoryList: [],
    floorList: []
  }),
  actions: {
    setCategoryList(val) {
      this.categoryList = val;
    },
    
    // async getCategoryList() {
    //   let res = await reqCategoryList();
    //   this.categoryList = res;
    // }
  },
  getters: {},
})