import { defineStore } from 'pinia';
export const useDetailStore = defineStore({
  id: "detail",
  state: () => ({
    goodInfo: {},
    uuid: ""
  }),
  getters: {
    skuInfo: (state) => state.goodInfo.skuInfo,
    categoryView: (state) => state.goodInfo.categoryView,
    spuSaleAttrList: (state) => state.goodInfo.spuSaleAttrList
  },
  actions: {
    setGoodInfo(val) {
      this.goodInfo = val;
    },
    setuuid(val) {
      this.uuid = val
    }
  }
})