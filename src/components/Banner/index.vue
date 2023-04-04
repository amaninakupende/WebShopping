<script setup>
  import { Swiper, SwiperSlide, } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const props = defineProps({
    list: Array
  });

  const { list } = props; 
 
</script>

<template>
  <swiper >
    <swiper-slide v-for="item in list" :key="item.id" class="">
      <img :src="item.imgUrl" alt="">
    </swiper-slide>
  </swiper>
</template>

<style lang="less" scoped>

</style>