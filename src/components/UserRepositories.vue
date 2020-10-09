<template>
  <div class="wrap">
    <div class="search">
      <h3>v2</h3>
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
import { fetchUserRepositories } from '../api/repositories'
export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { type: String },
  },
  data() {
    return {
      // 1
      repositories: [],
      // 3
      filter: {},
      // 2
      searchQuery: "",
    };
  },
  computed: {
    // 3
    filteredRepositories() {},
    // 2
    repositoriesMatchingSearchQuery() {},
  },
  watch: {
    // 1
    user: "getUserRepositories",
  },
  methods: {
    // 1
    async getUserRepositories() {
      console.log('this.user', this.user)
      const result = await fetchUserRepositories(this.user)
      this.repositories = result;
    },
    // 3
    updateFilters(value) {
      console.log('value', value)
      this.searchQuery = value
    },
  },
  mounted() {
    // 1
    this.getUserRepositories();
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