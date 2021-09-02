<template>
  <div class="wrap">
    <input type="text" v-model="username" placeholder="用户名">
    <input type="text" v-model="repo" placeholder="仓库名">
    <button>搜索</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      repo: null
    }
  },
  watch: {
    repo(newValue, oldValue) {
      // console.log(newValue, oldValue)
      this.$emit('handleFilter', newValue)
    }
  }
}
</script>
<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap input {
  height: 30px;
  margin: 10px;
}
.wrap button {
  height: 30px;
}
</style>