<script setup>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router'
  import axios from 'axios';
  import { ElMessage } from 'element-plus'
  const router = useRouter();
  const formRef = ref(null);

  const rules = {
    username: { required: true, message:'请输入用户名', trigger: ['blur'] },
    password: { required: true, message:'请输入密码', trigger: ['blur'] }
  }
  const loginForm = ref({
    username: '',
    password: ''
  })
  const register = async () => {
    const loginData = loginForm.value;
    let res = await axios.post('http://127.0.0.1:3000/register', loginData);
    const { data } = res;
    return data;
  }
  const goReg = () => {
    formRef.value.validate(async (valid) => {
      if(valid) {
        let data = await register();
        if( data.code === 60000 ) {
          ElMessage({
            message: '注册成功',
            type: 'success',
            duration: 2000
          });
          setTimeout(() => {
           router.push({name: 'login'})
          }, 2000);
        } else {
          ElMessage({
            message: `${data.message}`,
            type: 'warning',
            duration: 2000
          })
        }
        
      }
    })
  }
  
</script>

<template>
  
  <div class="register-container">
    <div class="register">
      <h3>注册新用户</h3>
      <el-form :model="loginForm" ref="formRef" :rules="rules">
        <el-form-item label="用户" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" show-password placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goReg">注册</el-button>
          <el-button type="primary" >已有帐号,去登录</el-button>
        </el-form-item>
      </el-form>
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
    
    /deep/.el-form {
      width: 500px;
      margin: 0 auto;
      padding-top: 130px;
      
      .el-form-item__label {
        font-size: 21px;
        font-weight: 700;
        color: #333;
      }
      
      .el-button {
        background-color: red;
        width: 48.80%;
        font-size: 18px;
        font-weight: 700;
        border: none;
      }
    }
  }
}
</style> 