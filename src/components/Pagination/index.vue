<script setup>
  import { ref, computed } from 'vue';
  const props = defineProps({
    pageNo: Number,
    pageSize: Number,
    total: Number,
    continue: Number
  });
  const startEnd = ref({})
  const totalPage = computed(() => Math.ceil(props.total / props.pageSize));
  
  //计算出连续页码的起始数字和结束数字
  const startNumAndEndNum = () => {
    let start = 0 , end = 0;
    if(props.continue > totalPage.value) {
      start = 1;
      end = totalPage.value;
    } else {
      start = props.pageNo - parseInt(props.continue / 2);
      end = props.pageNo + parseInt(props.continue / 2);
    }
    if (start < 1) {
      start = 1;
      end = props.continue;
    }
    if (end > totalPage.value) {
      end = totalPage.value;
      start = totalPage.value - props.continue + 1;
    }
    return { start, end };
  }
  startEnd.value = startNumAndEndNum();
</script>

<template>
  <div class="pagination">
    <button :disabled="props.pageNo == 1" @click="$emit('getPageNo', props.pageNo - 1)">上一页</button>

      <button
        v-for="(page, idx) in startEnd.end"
        :key="idx"
        v-show="page >= startEnd.start"
        @click="$emit('getPageNo', page)"
        :class="{ active: props.pageNo == page}"
      >
        {{ page }}
      </button>
    
    <button :disabled="props.pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    <button>共{{ totalPage }}页</button>
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

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  .active{
    background: skyblue;
  }
}
</style>