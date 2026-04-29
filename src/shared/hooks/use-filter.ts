import { useFilterStore } from '../stores/use-filter-store'

export const useFilter = () => {
	const savedFilters = useFilterStore(state => state.savedFilters)
	const draft = useFilterStore(state => state.draft)
	const initDraft = useFilterStore(state => state.initDraft)
	const toggleOption = useFilterStore(state => state.toggleOption)
	const applyFilters = useFilterStore(state => state.applyFilters)
	const discardDraft = useFilterStore(state => state.discardDraft)
	const clearDraft = useFilterStore(state => state.clearDraft)
	const isSelected = useFilterStore(state => state.isSelected)

	return {
		savedFilters,
		draft,
		initDraft,
		toggleOption,
		applyFilters,
		discardDraft,
		clearDraft,
		isSelected
	}
}
