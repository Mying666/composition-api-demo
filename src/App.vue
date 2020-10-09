<template>
  <div class="wrap">
    <select name="users" id="users" v-model="selected">
      <option value="barnett617">我的</option>
      <option value="yyx990803">尤大</option>
      <option value="justjavac">迷渡</option>
    </select>
    <UserRepositories :user="who" />
    <!-- <UserRepositoriesV3 :user="who" /> -->
  </div>
</template>

<script>
import UserRepositories from './components/UserRepositories.vue'
// import UserRepositoriesV3 from './components/UserRepositoriesV3.vue'

export default {
  name: 'App',
  components: {
    UserRepositories,
    // UserRepositoriesV3
  },
  data() {
    return {
      selected: 'barnett617',
      who: 'barnett617'
    }
  },
  watch: {
    selected(newValue, oldValue) {
      this.who = newValue
    }
  }
}
</script>
<style scoped>
.wrap {
  height: 100%;
}
</style>
