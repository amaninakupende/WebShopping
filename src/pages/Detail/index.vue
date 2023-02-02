<script setup>
import { ref, computed } from 'vue';
import { useDetailStore } from '../../store/detail.js';
import Zoom from './Zoom/index.vue';
const store = useDetailStore();

const curIndex = ref(0);
const changeCurIdx = (index) => {
  curIndex.value = index;
}
</script>

<template>
  <div class="detail">
    <TypeNav />

    <section class="con">
      <!-- 导航 -->
      <div class="conPoin">
        <span v-show="store.categoryView">{{ store.categoryView.category1Name }}</span>
        <span v-show="store.categoryView.category2Name">{{ store.categoryView.category2Name }}</span>
        <span v-show="store.categoryView.category3Name">{{ store.categoryView.category3Name }}</span>
      </div>
      <div class="mainPoin">
        <!-- 放大镜 -->
        <div class="previewWrap">
          <Zoom :skuImageList="store.skuInfo.skuImageList" :curIndex="curIndex" />
          <div class="container">
            <div class="slide" v-for="(img, idx) in store.skuInfo.skuImageList" :key="idx">
              <img :src="img.imgUrl" :class="{ active: curIndex === idx}" @click="changeCurIdx(idx)" />
            </div>
          </div>
        </div>
        
        <!-- 右侧 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{ store.skuInfo.skuName }}</h3>
            <p class="news">{{ store.skuInfo.skuDesc }}</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <span>¥{{ store.skuInfo.price }}</span>
                </div>
                <div class="remark">
                  <span>累计评价 65545</span>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                </div>
                <div class="fixWidth">
                  <span class="red-bg">加价购</span>
                  <span class="t-gray">  满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</span>
                  >
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
                </div>
                <div class="fixWidth">
                  以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed">
                <dl
                  v-for="spuSaleAttr in store.spuSaleAttrList"
                  :key="spuSaleAttr.id"
                >
                  <dt class="title">{{ spuSaleAttr.saleAttrName }}</dt>
                  <dd
                    v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList"
                    :key="spuSaleAttrValue.id"
                    @click="changeActive(spuSaleAttrValue, spuSaleAttr.spuSaleAttrValueList)"
                  >
                    {{ spuSaleAttrValue.saleAttrValueName }}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>


      </div>
      
    </section>


  </div>
</template>

<style lang="less" scoped>
.detail {
  .con {
    margin: 15px auto 0;
    margin-left: 200px;

    .conPoin {
      padding: 9px 15px 9px 0;

      &>span+span:before {
        content: "/\00a0";
        padding: 0 5px;
        color: #ccc;
      }
    }

    .mainPoin {
      overflow: hidden;

      .previewWrap {
        float: left;

        .container {
          height: 56px;
          width: 402px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;

          .slide {
            width: 56px;
            height: 56px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid #ccc;
              padding: 2px;
              width: 50px;
              height: 50px;
              display: block;

              &.active {
                border: 2px solid #f60;
                padding: 1px;
              }
            }
          }
        }

      }

      .InfoWrap {
        margin-left: 550px;
        width: 900px;
        .InfoName {
          font-size: 16px;
          line-height: 21px;
          margin-top: 15px;
        }

        .news {
          color: #e12228;
          margin-top: 15px;
        }

        .priceArea {
          background: #fee9eb;
          padding: 7px;
          margin: 13px 0;

          .priceArea1 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              float: left;
              margin-right: 15px;
            }

            .price {
              float: left;
              color: #c81623;
              font-size: 24px;
              font-weight: 700;
            }

            .remark {
              float: right;
            }
          }

          .priceArea2 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;

              .red-bg {
                background: #c81623;
                color: #fff;
                padding: 3px;
              }

              .t-gray {
                color: #999;
              }
            }
          }
        }

        .support {
          border-bottom: 1px solid #ededed;
          padding-bottom: 5px;

          .supportArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>