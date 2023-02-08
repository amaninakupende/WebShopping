<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
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
