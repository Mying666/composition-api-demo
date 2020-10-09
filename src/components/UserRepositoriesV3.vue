<template>
  <div class="wrap">
    <div class="search">
      <h3>v3</h3>
      <RepositoriesFilters @handleFilter="updateFilters" />
    </div>
    <main class="main">
      <RepositoriesSortBy />
      <RepositoriesList :list="repositories" />
    </main>
  </div>
</template>
<script>
import RepositoriesFilters from "./RepositoriesFilters.vue";
import RepositoriesSortBy from "./RepositoriesSortBy.vue";
import RepositoriesList from "./RepositoriesList.vue";
import useUserRepositories from '../composables/useUserRepositories'
import useRepositoryNameSearch from '../composables/useRepositoryNameSearch'
import useRepositoryFilters from "../composables/useRepositoryFilters"
import { onMounted, toRefs } from 'vue'
export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { type: String },
  },
  setup(props) {
    const { user } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(user)

    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    const {
      filters,
      updateFilters,
      filteredRepositories
    } = useRepositoryFilters(repositoriesMatchingSearchQuery)

    return {
      // 因为不关心未过滤的仓库，可以只暴露过滤后的结果
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
      filters,
      updateFilters
    }
  },
  data() {
    return {
      // 3
      filter: {},
    };
  },
  computed: {
    // 3
    filteredRepositories() {},
  },
  methods: {
    // 3
    updateFilters(value) {
      console.log('value', value)
      this.searchQuery = value
    },
  },
};
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