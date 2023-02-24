<script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { reqCategoryList } from './api/ajax';
  import { useHomeStore } from './store/home.js';
  import 'element-plus/dist/index.css';
  
  const _useHomeStore = useHomeStore();
  const route = useRoute();

  const getCategoryList = async () => {
    let res = await reqCategoryList();
    _useHomeStore.setCategoryList(res.data);
  }
  onMounted(() => {
    getCategoryList();
  })
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="route.meta.show"></Footer>
</template>

<style >
  * {
    margin: 0;
    padding: 0;
  }
</style>
