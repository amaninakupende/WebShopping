<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  skuImageList: Array,
  curIndex: Number
})
const big = ref(null);
const mask = ref(null);

const imgObj = computed(() => props.skuImageList[props.curIndex] || {});

const handler = (event) => {
  let bigEl = big.value;
  let maskEl = mask.value;
  let left = event.offsetX - maskEl.offsetWidth / 2;
  let top = event.offsetY - maskEl.offsetHeight / 2;

  if(left <= 0) left = 0;
  if(left >= maskEl.offsetWidth) left = maskEl.offsetWidth;
  if(top <= 0) top = 0;
  if(top >= maskEl.offsetHeight) top = maskEl.offsetHeight;
  maskEl.style.left = left + 'px';
  maskEl.style.top = top + 'px';
  bigEl.style.left = -2 * left + 'px';
  bigEl.style.top = -2 * top + 'px';
}
</script>

<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big" >
      <img :src="imgObj.imgUrl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<style lang="less" scoped>
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>