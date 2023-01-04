<script setup>

</script>

<template>
  <!-- 今日推荐 -->
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img src="./images/clock.png" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <img src="./images/today01.png" />
        </li>
        <li class="banner">
          <img src="./images/today02.png" />
        </li>
        <li class="banner">
          <img src="./images/today03.png" />
        </li>
        <li class="banner">
          <img src="./images/today04.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.today-recommend {
  margin-top: 20px;

  .py-container {
    width: 1500px;
    margin: 0px auto;

    .recommend {
      height: 195px;
      background-color: #eaeaea;
      margin: 10px 0;
      display: flex;
      list-style: none;

      .clock {
        width: 16.67%;
        background-color: #5c5251;
        color: #fff;
        font-size: 18px;
        text-align: center;

        .time {
          padding: 45px 0;
        }

        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30.06px;
        }
      }

      .banner {
        width: 20.50%;

        img {
          width: 100%;
          height: 100%;
          transition: all 400ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>