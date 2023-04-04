<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const skuInfo = computed(() => JSON.parse(sessionStorage.getItem('SKUINFO')))
</script>

<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img :src="skuInfo.skuDefaultImg" >
          </div>
          <div class="right-info">
            <p class="title">{{ skuInfo.skuName }}</p>
            <p class="attr">{{ skuInfo.skuDesc }} 数量：{{ route.query.skuNum }}</p>
          </div>
        </div>
        <div class="right-gocart">
          <router-link class="sui-btn btn-xlarge" :to="`/detail/${skuInfo.id}`">查看商品详情</router-link>
          <router-link to="/shopcart" >去购物车结算 > </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cart-complete-wrap {
    background-color: #f4f4f4;

    .cart-complete {
      width: 1500px;
      margin: 0 auto;

      h3 {
        font-weight: 400;
        font-size: 19px;
        color: #6aaf04;
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 0;

        .icon-pc-right {
          background-color: #fff;
          border: 2px solid #6aaf04;
          padding: 3px;
          margin-right: 8px;
          border-radius: 15px;
        }
      }

      .goods {
        overflow: hidden;
        padding: 10px 0;

        .left-good {
          float: left;

          .left-pic {
            border: 1px solid #dfdfdf;
            width: 80px;
            float: left;
            img {
              width: 80px;
              height: 80px;
            }
          }

          .right-info {
            color: #444;
            float: left;
            margin-left: 25px;

            .title {
              width: 100%;
              line-height: 28px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 18px;
            }

            .attr {
              color: #aaa;
            }
          }
        }

        .right-gocart {
          float: right;

          a, button {
            padding: 7px 36px;
            font-size: 19px;
            line-height: 25px;
            color: #333;
            background-color: #eee;
            text-decoration: none;
            box-sizing: border-box;
            border: 1px solid #e1e1e1;
          }
          button:hover {
            background-color: #f7f7f7;
            border: 1px solid #eaeaea;
          }
          button:active {
            background-color: #e1e1e1;
            border: 1px solid #d5d5d5;
          }
          a:hover {
            background-color: #f7f7f7;
            border: 1px solid #eaeaea;
          }

          a:active {
            background-color: #e1e1e1;
            border: 1px solid #d5d5d5;
          }

          .btn-danger {
            background-color: #e1251b;
            color: #fff;
          }

          .btn-danger:hover {
            background-color: #e1251b;
          }
        }

      }
    }
  }
</style>