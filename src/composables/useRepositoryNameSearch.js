import { ref, computed } from 'vue'

export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    console.log('repositories', repositories)
    return repositories && repositories.value.filter(
      repository => repository.name.includes(searchQuery.value)
    )
  })

  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}