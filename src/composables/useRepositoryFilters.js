import { computed, ref } from 'vue'

export default function useRepositoryFilters(query) {
	const filters = ref({})
	const filteredRepositories = computed(() => {})
	const updateFilters = (value) => value
	return {
		filters,
		updateFilters,
		filteredRepositories
	}
}
