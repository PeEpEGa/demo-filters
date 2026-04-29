import { FilterType } from '../api/types/Filter'
import { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

export const toggleOptionInDraft = (
	draft: SearchRequestFilter,
	categoryId: string,
	optionId: string
): SearchRequestFilter => {
	const existing = draft.find(filter => filter.id === categoryId)

	if (existing) {
		return draft.map(filter =>
			filter.id === categoryId
				? {
						...filter,
						optionsIds: filter.optionsIds.includes(optionId)
							? filter.optionsIds.filter(id => id !== optionId)
							: [...filter.optionsIds, optionId]
					}
				: filter
		)
	}

	return [
		...draft,
		{ id: categoryId, type: FilterType.OPTION, optionsIds: [optionId] }
	]
}
