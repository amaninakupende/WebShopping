<script setup>
import SearchSelector from './SearchSelector/index.vue';
import { ref, onMounted, reactive, computed, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { reqSearchInfo, reqGoodsInfo } from '../../api/ajax';
import { useDetailStore } from '../../store/detail.js';
const route = useRoute();
const router = useRouter();
const store = useDetailStore();

const searchParams = reactive({
  category1Id: "",
  category2Id: "",
  category3Id: "",
  categoryName: "",
  keyword: "",
  order: "1:desc",
  pageNo: 1,
  pageSize: 5,
  props: [],
  trademark: "",
})
const totalNum = ref(0);
const _attrsList = ref([]);
const _goodsList = ref([]);
const _trademarkList = ref([]);
const isTwo = ref(true);
const isAsc = ref(true);
const flag = ref(false); //判断是否加载分页器

onMounted(() => {
  Object.assign(searchParams, route.query, route.params);
  console.log('searchParams', searchParams);
  getReqSearchInfo(searchParams);
})


const getReqSearchInfo = async (searchParams) => {
  let res = await reqSearchInfo(searchParams);
  if(res.code === 200) {
    let { attrsList, goodsList, trademarkList, total } = res.data;
    _attrsList.value = attrsList;
    _goodsList.value = goodsList;
    _trademarkList.value = trademarkList;
    totalNum.value = total;
    flag.value = true;
    // searchParams.pageNo = 
  }
}

const getReqGoodsInfo = async (param) => {
  let res = await reqGoodsInfo(param);
  if(res.code === 200) {
    store.setGoodInfo(res.data);

  }
} 

const removeCategory = () => {
  searchParams.categoryName = "";
  searchParams.category1Id = "";
  searchParams.category2Id = "";
  searchParams.category3Id = "";
  getReqSearchInfo(searchParams);
  // if(route.params) {
  //   router.push({ name: 'search', params: router.params});
  // }
}
const removeKeyword = () => {

}
const changeOrder = () => {
  isAsc.value = !isAsc.value;
}
const clickImg = async (goodsId) => {
  await getReqGoodsInfo(goodsId);
  router.push(`/detail/${goodsId}`);
}
const getPageNo = (pageNo) => {
  searchParams.pageNo = pageNo;
  getReqSearchInfo(searchParams);
}

</script>

<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!-- bread -->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <span>全部结果</span>
            </li>
          </ul>
          <ul class="fl sui-tag" v-if="searchParams.categoryName">
            <li class="with-x" >{{searchParams.categoryName}}<i @click="removeCategory">x</i></li>
            <li class="with-x" v-if="searchParams.keyword">{{searchParams.keyword}}<i @click="removeKeyword">x</i></li>
          </ul>
        </div>

        <SearchSelector :attrsList="_attrsList" :trademarkList="_trademarkList"/>

        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active: isTwo}" @click="changeOrder(2)">
                  <a>价格<span v-show="isTwo" v-if="isAsc">↑</span><span v-else>↓</span></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in _goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <img :src="good.defaultImg" @click="clickImg(good.id)">
                  </div>
                  <div class="price">
                    <span class="goods_price">¥ {{ good.price }}</span>
                    <span class="goods_title">{{ good.title }}</span>
                  </div>
                  
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <Pagination 
            v-if="flag"
            :pageNo="searchParams.pageNo"
            :pageSize="searchParams.pageSize"
            :total="totalNum"
            :continue="5"
            @getPageNo="getPageNo"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1500px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .fl {
        list-style: none;
      }

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        float: left;
        background-color: #e1251b;

        li {
          display: inline-block;
          line-height: 18px;

          span {
            color: white;

          }
        }
      }

      .sui-tag {
        padding: 2px 13px;
        margin-left: 20px;
        float: left;
        border: 1px solid #dedede;
        background-color: #f7f7f7;

        .with-x {
          display: inline-block;
          white-space: nowrap;
          transition: color 400ms;

          i {
            margin: 0;
            margin-left: 10px;
            font-style: normal;
            cursor: pointer;
          }

          &:hover {
            color: #28a3ef;
          }
        }

      }
    }

    .details {
      margin-bottom: 10px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            list-style: none;
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        .yui3-g {
          display: flex;
          flex-wrap: wrap;
          list-style: none;

          .yui3-u-1-5 {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 215px;
                overflow: hidden;

                img {
                  max-width: 100%;
                  height: auto;
                  vertical-align: middle;
                  cursor: pointer;
                  
                }
              }

              .price {
                display: flex;
                flex-direction: column;
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;
                height: 100px;
                .goods_price {
                  font-weight: 700;
                }

                .goods_title {
                  width: 255px;
                  font-size: 15px;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 7px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 15px;
                  line-height: 18px;
                  text-align: center;
                  cursor: pointer;
                  background-color: transparent;
                  margin-right: 15px;
                  text-decoration: none;
                }

                .btn-bordered {
                  width: 120px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>