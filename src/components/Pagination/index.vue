<script setup>
  import { computed } from 'vue';
  const props = defineProps({
    pageNo: Number,
    pageSize: Number,
    total: Number,
    continue: Number
  });
  const totalPage = computed(() => Math.ceil(props.total / props.pageSize));
</script>

<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>

    <button @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    <button>共{{ props.total }}条</button>
  </div>
</template>

<style lang="less" scoped>
.pagination {
  text-align: center;
  
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 17px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    cursor: pointer;
  }
}
</style>