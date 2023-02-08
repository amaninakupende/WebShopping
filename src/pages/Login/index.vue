<script setup>
  import { ref } from 'vue';
  const phone = ref(null);
  const password = ref(null);
  const userLogin = () => {
    
  }
</script>

<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <div class="account">
            <span class="current">账户登录</span>
          </div>
    
          <div class="content">
            <form>
              <div class="input-text clearFix">
                <input type="text" placeholder="邮箱/用户名/手机号" v-model="phone">
              </div>
              <div class="input-text clearFix">
                <input type="text" placeholder="请输入密码" v-model="password">
              </div>
              <button class="btn" @click.prevent="userLogin">登&nbsp;&nbsp;录</button>
            </form>
    
            <div class="call clearFix">
              <router-link class="register" to="/register">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-container {
    .login-wrap {
      height: 570px;
      background-color: #e93854;

      .login {
        width: 1500px;
        height: 570px;
        margin: 0 auto;
        background: url(./images/loginbg.png) no-repeat;
      }

      .loginform {
        width: 420px;
        height: 406px;
        box-sizing: border-box;
        background: #fff;
        float: right;
        top: 45px;
        position: relative;
        padding: 20px;

        .account { 
          text-align: center;
          border: 1px solid #ddd;

          .current {
            border-bottom: none;
            border-top-color: #28a3ef;
            color: #e1251b;
            font-size: 26px;
            font-weight: 700;
          }
        }
        
        .content {
          width: 380px;
          height: 316px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          padding: 18px;

          form {
            margin: 15px 0 18px 0;
            font-size: 12px;
            line-height: 18px;

            .input-text {
              input {
                width: 340px;
                height: 40px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                float: left;
                padding-top: 6px;
                padding-bottom: 6px;
                font-size: 19px;
                line-height: 22px;
                padding-right: 8px;
                padding-left: 8px;
                border-radius: 0 2px 2px 0;
                outline: none;
                margin-top: 18px;
              }
            }

            .btn {
              background-color: #e1251b;
              padding: 6px;
              border-radius: 0;
              font-size: 19px;
              font-family: 微软雅黑;
              word-spacing: 4px;
              border: 1px solid #e1251b;
              color: #fff;
              width: 100%;
              height: 36px;
              margin-top: 45px;
              outline: none;
            }
          }

          .call {
            margin-top: 30px;

            ul {
              float: left;

              li {
                float: left;
                margin-right: 5px;
              }
            }

            .register {
              float: right;
              font-size: 19px;
              line-height: 38px;
              text-decoration: none;
            }

            .register:hover {
              color: #4cb9fc;
              text-decoration: underline;
              text-decoration: none;

            }
          }

        }
      }
    }

    .copyright {
      width: 1200px;
      margin: 20px auto;
      text-align: center;
      line-height: 24px;

      ul {
        li {
          display: inline-block;
          border-right: 1px solid #e4e4e4;
          padding: 0 20px;
          margin: 15px 0;
        }
      }
      .address {
        margin-bottom: 20px;
        margin-top: 5px;
      }
    }

  }
</style>
