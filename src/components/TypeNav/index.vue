<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router'
//防抖
import throttle from "lodash/throttle";
import { reqCategoryList } from '../../api/ajax';
import { useHomeStore } from '../../store/home.js';
const _useHomeStore = useHomeStore();
const route = useRoute();
const router = useRouter();

//控制三级联动显示
const show = ref(true);
const currentIndex = ref(-1);

onMounted(() => {
  if(route.path != '/home') {
    show.value = false;
  }
})

const getCategoryList = async () => {
  let res = await reqCategoryList();
  _useHomeStore.setCategoryList(res);
}
getCategoryList();

const categoryList = computed(() => _useHomeStore.categoryList);

const changeIndex = (index) => {
  currentIndex.value = index;
}

throttle(changeIndex ,20);

const leaveShow = () => {
  currentIndex.value = -1;
  if(route.path != '/home') {
    show.value = false;
  }
};
const enterShow = () => {
  show.value = true;
};
const goSearch = (e) => {
  console.log(e)
  const { categoryName, categoryId } = e;
  router.push({name: "search", query: {categoryName, categoryId}});
}
</script>

<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="show">
          <div class="all-sort-list2" >
            <div class="item" v-for="(item, idx) in categoryList" :key="item.categoryId">
              <h3 :class="{ cur: currentIndex === idx }" @mouseenter="changeIndex(idx)">
                <a :data-categoryName="item.categoryName" :data-category1Id="item.categoryId">{{ item.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{ display: currentIndex === idx ? 'block' : 'none' }">
                <div class="subitem">
                  <dl class="item2" v-for="item2 in item.categoryChild" :key="item2.categoryId">
                    <dt>
                      <a :data-categoryName="item2.categoryName"
                        :data-category2Id="item2.categoryId">{{ item2.categoryName }}</a>
                    </dt>
                    <dd>
                      <div class="item3" v-for="item3 in item2.categoryChild" :key="item3.categoryId" @click="goSearch(item3)">
                        <a :data-categoryName="item3.categoryName"
                          :data-category3Id="item3.categoryId">{{ item3.categoryName }}</a>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
 
  .container {
    width: 1500px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
    width: 210px;
    height: 45px;
    background-color: #e1251b;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  .nav {
    margin-left: 35px;
    a {
      height: 45px;
      margin: 0 35px;
      line-height: 45px;
      font-size: 16px;
      color: #333;
      text-decoration: none;
    }
  }

  .sort {
    position: absolute;
    left: 0;
    top: 47px;
    width: 210px;
    position: absolute;
    background: #fafafa;
    z-index: 999;

    .all-sort-list2 {
      .item {
        h3 {
          line-height: 27px;
          font-size: 17px;
          font-weight: 400;
          overflow: hidden;
          padding: 2px 20px;
          margin: 0;

          a {
              color: #333;
          }
          &.cur {
            background: skyblue;
          }
        }

        .item-list {
          display: none;
          position: absolute;
          width: 734px;
          min-height: 460px;
          background: #f7f7f7;
          left: 210px;
          border: 1px solid #ddd;
          top: 0;
          z-index: 9999 !important;

          .subitem {
            float: left;
            width: 650px;
            padding: 0 4px 0 8px;

            dl {
              border-top: 1px solid #eee;
              padding: 6px 0;
              overflow: hidden;
              zoom: 1;

              & .item2 {
                border-top: 0;

                a {
                  font-size: 14px;
                }
              }

              dt {
                float: left;
                width: 70px;
                line-height: 22px;
                text-align: right;
                padding: 3px 6px 0 0;
                font-weight: 700;
                color: #555;
              }

              dd {
                float: left;
                width: 415px;
                padding: 3px 0 0;
                overflow: hidden;

                .item3 {
                  float: left;
                  height: 14px;
                  line-height: 14px;
                  padding: 0 10px;
                  margin-top: 5px;
                  border-left: 1px solid #ccc;
                  font-size: 14px;
                  color: #666;
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