<script setup>
import { ref } from 'vue';
import { reqFloorList } from '../../../api/ajax';
import '../../../mock/config.js'; 

const getReqFloorList = async () => {
  let result = await reqFloorList();
  console.log(result);
}
getReqFloorList();
</script>

<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{ }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active">
              <a href="#tab1" data-toggle="tab"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>