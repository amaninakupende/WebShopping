<script setup>
import { reqUpdateCheckedByid } from '@/api/ajax'
import { onMounted, ref } from 'vue';
import { reqCartList } from '../../api/ajax.js';
import { useRoute } from 'vue-router';
const route = useRoute();

const cartInfoList = ref({});


const getReqCartList = async () => {
  let res = await reqCartList();
  console.log('-----shopcartRes', res);
  if(res.code === 200) {
    cartInfoList.value = res.data[0].cartInfoList || []
  }
}
const handler = (type, num, cart) => {
  switch(type) {
    case "minus": 
      num = cart.skuNum > 1 ? -1 : 0;
      break;
    case "change":
      if (isNaN(num) || num < 1) {
        num = 0;
      } else {
        num = parseInt(num) - cart.skuNum;
      }
      break;
    case "add": 
      num = 1;
      break;
  }
}
const updateChecked = async (cart, event) => {
  try {
    let isChecked = event.target.checked ? "1" : "0";
    let res = await reqUpdateCheckedByid(cart.skuId, isChecked);
    if(res.code === 200) {
      getReqCartList();
    }
  } catch (error) {
    alert(error.message);
  }
}
onMounted(() => {
  getReqCartList();
})
</script>

<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cart, id) in cartInfoList" :key="id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              class="checkbox"
              name="chk_list"
              :checked="cart.isChecked == 1"
              @change="updateChecked(cart, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('minus', -1, cart)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @change="handler('change', $event.target.value * 1, cart)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('add', 1, cart)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <el-button class="sindelet" @click="deleteCartById(cart)">删除</el-button>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isAllCheck&&cartInfoList.length>0"
          @change="updateAllCartChecked"
        />
        <span>全选</span>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0 </span>件商品</div>
        <div class="sumprice">
          <span>总价：</span>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cart {
  width: 1500px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 19px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
        font-size: 18px;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        list-style: none;
        
        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
          .checkbox {
            width: 20px;
            height: 20px;
          }
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 11%;
          .price {
            font-size: 18px;
          }
        }

        .cart-list-con5 {
          width: 15%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 6px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }
          input:focus {
            outline: none;
          }
          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 6px;
          }
        }

        .cart-list-con6 {
          width: 11%;

          .sum {
            font-size: 18px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          .sindelet {
            font-size: 17px;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 15px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
        font-style: 18px;
        margin-left: 5px;
      }

      input {
        vertical-align: middle;
        width: 20px;
        height: 20px;
      }
    }
  
    .money-box {
      float: right;
      font-size: 18px;
      .chosed {
        line-height: 52px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 52px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          text-decoration: none;
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>