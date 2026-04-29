import { create } from 'zustand'

import { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'
import { toggleOptionInDraft } from '../utils/toggle-option-in-draft'

interface FilterStore {
	savedFilters: SearchRequestFilter
	draft: SearchRequestFilter
	initDraft: () => void
	toggleOption: (categoryId: string, optionId: string) => void
	applyFilters: () => void
	discardDraft: () => void
	clearDraft: () => void
	isSelected: (categoryId: string, optionId: string) => boolean
}

export const useFilterStore = create<FilterStore>((set, get) => ({
	savedFilters: [],
	draft: [],

	initDraft: () => set({ draft: get().savedFilters }),

	toggleOption: (categoryId, optionId) =>
		set(state => ({
			draft: toggleOptionInDraft(state.draft, categoryId, optionId)
		})),

	applyFilters: () => set(state => ({ savedFilters: state.draft })),

	discardDraft: () => set(state => ({ draft: state.savedFilters })),

	clearDraft: () => set({ draft: [] }),

	isSelected: (categoryId, optionId) =>
		get()
			.draft.find(filter => filter.id === categoryId)
			?.optionsIds.includes(optionId) ?? false
}))
