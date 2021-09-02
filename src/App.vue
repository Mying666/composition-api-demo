<template>
	<div class="wrap">
		<select name="users" id="users" v-model="selected">
			<option value="barnett617">我的</option>
			<option value="yyx990803">尤大</option>
			<option value="justjavac">迷渡</option>
		</select>
		<UserRepositoriesV3 :user="selected" />
	</div>
</template>

<script setup>
import UserRepositoriesV3 from './components/UserRepositoriesV3.vue'
const selected = 'barnett617'
</script>
<style scoped>
.wrap {
	height: 100%;
}
</style>
