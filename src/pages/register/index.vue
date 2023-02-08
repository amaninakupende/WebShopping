<script setup>
  import { ref } from 'vue';
  import { reqGetCode, reqUserRegister } from '../../api/ajax.js';
  const phone = ref(null);
  const code = ref(null);
  const password = ref(null);
  
  //验证码
  const getReqGetCode = async (code) => {
    let res = await reqGetCode();
    if(res.code === 200) {
      alert(res.data);
    }
  }
  const userRegister = () => {
    
  }
</script>

<template>
  <div class="register-container">
    <div class="register">
      <h3>注册新用户</h3>
      <div class="content-container">
        <div class="content">
          <label>手机号：</label>
          <input 
            placeholder="请输入你的手机号" 
            v-model="phone" 
            name="phone" 
            v-validate="{ required: true, regex: /^1\d{10}$/ }" 
          />
        </div>
        <div class="content">
          <label>验证码：</label>
          <input 
            placeholder="请输入你的验证码" 
            v-model="code" 
            name="code" 
            v-validate="{ required: true, regex: /^\d{6}$/ }" 
          />
          <button style="width:100px;height:38px" @click="getReqGetCode">获取验证码</button>
        </div>
        <div class="content">
          <label>登录密码：</label>
          <input
            placeholder="请输入你的密码"
            v-model="password"
            name="password"
            v-validate="{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"
          />
        </div>
        <div class="btn">
          <button @click="userRegister">完成注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1500px;
    height: 500px;
    border: 1px solid #dfdfdf;
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 25px;
      line-height: 30.06px;
    }

    .content-container {
      padding-top: 90px;
      margin: 0 auto;
      width: 475px;
      .content {
        margin-bottom: 18px;
        position: relative;
        label {
          font-size: 18px;
          width: 96px;
          display: inline-block;
        }
        input {
          width: 270px;
          height: 38px;
          padding-left: 8px;
          box-sizing: border-box;
          margin-left: 5px;
          outline: none;
          border: 1px solid #999;
        }
      }
      .btn {
        button {
          outline: none;
          width: 370px;
          height: 36px;
          background: #e1251b;
          color: #fff !important;
          display: inline-block;
          font-size: 16px;
          border: none;
        }
      }
    }

  }
}
</style> 