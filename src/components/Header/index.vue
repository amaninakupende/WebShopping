<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { reqSearchInfo } from '@/api/ajax.js';
import { userStore } from '@/store/user.js' ;
const store = userStore();
const router = useRouter();

const userName = ref(store.username);
const keyword = ref('');

console.log('userName----',userName.value);



const goSearch = async () => {
  let param =  {
    keyword: ''
  }
  param.keyword = keyword.value;
  let res = await reqSearchInfo(param)
  if(res.code === 200) {
    const { data } = res;
  }
  console.log('===',param);
  
  router.push({name: 'search', query: param.keyword})
}
</script>

<template>
  <div class="header">
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>在线购物欢迎您！</p>
          <!-- 未登录 -->
          <p v-if="!userName">
            <router-link to="/login" style="color:black;text-decoration: none;">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
          <!-- 登录了 -->
          <p v-else>
            <a style="color: #e93854;font-size: 18px;">{{ userName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的主页</a>
          <a href="###">会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>

    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/home">
          <img src="../../assets/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.header {
  position: relative;
  height: 160px;

  .top {
    background-color: #eaeaea;
    height: 40px;
    line-height: 40px;

    .container {
      width: 1500px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
            color: black;
            text-decoration: none;
          }

        }

      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;
          text-decoration: none;
          color: black;

          &+a {
            border-left: 1px solid #b3aeae;
          }

        }

      }

      a:hover {
        color: lightcoral;
      }
    }
  }

  .bottom {
    width: 1500px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;
        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
