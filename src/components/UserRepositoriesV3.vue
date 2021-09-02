<template>
	<div class="wrap">
		<div class="search">
			<h3>v3</h3>
			<RepositoriesFilters @handleFilter="updateFilters" />
		</div>
		<main class="main">
			<RepositoriesSortBy />
			<RepositoriesList :list="repositoriesMatchingSearchQuery" />
		</main>
	</div>
</template>
<script setup>
import RepositoriesFilters from './RepositoriesFilters.vue'
import RepositoriesSortBy from './RepositoriesSortBy.vue'
import RepositoriesList from './RepositoriesList.vue'
import useUserRepositories from '../composables/useUserRepositories'
import useRepositoryNameSearch from '../composables/useRepositoryNameSearch'
import { toRefs, defineProps, onMounted, ref } from 'vue'

const props = defineProps({
	user: { type: String }
})

const { user } = toRefs(props)

const { repositories } = useUserRepositories(user)

const { updateFilters, repositoriesMatchingSearchQuery } =
	useRepositoryNameSearch(repositories)
</script>
<style scoped>
.wrap .search {
	height: 100px;
	padding: 20px;
	background-color: gainsboro;
}
.wrap .main {
	padding: 60px;
	background-color: aliceblue;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
