import { useQuery } from '@tanstack/react-query'

import { fetchCategoryFilters } from '../api/category-filters.api'

export const useFilters = () =>
	useQuery({
		queryKey: ['filters'],
		queryFn: fetchCategoryFilters
	})
