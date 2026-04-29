import { CategoryFiltersButton } from '@/features/filters/components/category-filters-button'
import { useFilterStore } from '@/shared/stores/use-filter-store'

export const App = () => {
	const savedFilters = useFilterStore(state => state.savedFilters)
	return (
		<section className="w-full h-dvh flex items-center justify-center flex-col gap-2">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<CategoryFiltersButton />

			<div>
				<pre>{JSON.stringify(savedFilters, null, 2)}</pre>
			</div>
		</section>
	)
}
