import { ref, computed } from 'vue'

export default function useRepositoryNameSearch(repositories) {
	const searchQuery = ref('')
	const updateFilters = (value) => {
		searchQuery.value = value
	}
	const repositoriesMatchingSearchQuery = computed(() => {
		return (
			repositories &&
			repositories.value.filter((repository) =>
				repository.name.includes(searchQuery.value)
			)
		)
	})

	return {
		searchQuery,
		updateFilters,
		repositoriesMatchingSearchQuery
	}
}
