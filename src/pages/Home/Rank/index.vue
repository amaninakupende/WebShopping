<script setup>
</script>

<template>
  <!-- 商品排行 -->
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" class="on">
          <p class="img">
            <i></i>
          </p>
          <p class="text">热卖排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">特价排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">新品排行</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/goods_one.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">箱居kn95口罩 30只</a>
              </div>
              <p class="info-price">¥59.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/goods_two.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">茅台53度500ml单瓶</a>
              </div>
              <p class="info-price">¥6199.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/goods_three.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">洽乐 进口车厘子3斤</a>
              </div>
              <p class="info-price">¥150.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/goods_four.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >荣耀 Magic3</a
                >
              </div>
              <p class="info-price">¥5969.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style lang="less" scoped>
.rank {
  width: 1500px;
  margin: 0 auto;

  .tab {
    margin: 0 auto;
    overflow: hidden;
    width: 312px;

    .tab-tit {
      text-align: center;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(./images/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;

    ul {
      margin-top: 10px;
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;
        display: flex;
        justify-content: space-between;

        .img-item {
          border: 1px solid #e1251b;
          width: 310px;
          float: left;
          overflow: hidden;
          background: #fff;

          .tab-pic {
            width: 310px;
            height: 250px;
            text-align: center;
            border-bottom: 1px solid #e1251b;
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              margin: 0 auto;
              width: 160px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>