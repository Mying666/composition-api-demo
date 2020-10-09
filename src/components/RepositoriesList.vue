<template>
  <div class="list-wrap">
    <div class="has-data" v-if="dataList && dataList.length > 0">
      <div class="item" v-for="item of dataList" :key="item.id">
        <span>{{ item.owner.login }}</span>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div v-else class="blank">
      无数据
    </div>
  </div>
</template>
<script>
export default {
  created() {
  },
  mounted() {
  },
  props: {
    list: { type: Array },
  },
  computed: {
    dataList() {
      console.log('this.list', this.list)
      return this.list
    } 
  }
};
</script>
<style scoped>
.list-wrap .has-data .item {
  display: flex;
  justify-content: center;
}
.list-wrap .has-data .item span {
  border: 1px solid gray;
  padding: 10px;
  flex: 1 1 0%;
}
</style>