import { fakeFetch } from '@/shared/api/fake-fetch'
import { FilterChoose } from '@/shared/api/types/Filter'
import filterData from '@/shared/temp/filterData.json'

import { mapFilterType } from '../utils/mappers'

export const fetchCategoryFilters = () =>
	fakeFetch<FilterChoose[]>(
		filterData.filterItems.map(item => ({
			...item,
			type: mapFilterType(item.type)
		}))
	)
