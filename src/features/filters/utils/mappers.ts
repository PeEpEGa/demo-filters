import { FilterType } from '@/shared/api/types/Filter'

export const mapFilterType = (type: string): FilterType => {
	if (Object.values(FilterType).includes(type as FilterType)) {
		return type as FilterType
	}
	throw new Error(`Unknown filter type: ${type}`)
}
