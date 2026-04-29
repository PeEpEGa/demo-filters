import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/components/ui/button'

import { useFilters } from '../hooks/use-category-filters'
import { CategoryFilterGroup } from './category-filter-group'
import { CategoryFiltersSkeleton } from './category-filters-skeleton'

export const CategoryFilters = () => {
	const { t } = useTranslation('filter')
	const { data: categoryFilters, isLoading, isError, refetch } = useFilters()

	if (isLoading) {
		return <CategoryFiltersSkeleton />
	}

	if (isError) {
		return (
			<div className="flex flex-col items-center gap-4 py-8">
				<p className="text-muted-foreground">{t('category_filters.error')}</p>
				<Button
					variant="outline"
					onClick={() => refetch()}
				>
					{t('category_filters.retry')}
				</Button>
			</div>
		)
	}

	return (
		<div className="w-full flex flex-col gap-8">
			<hr className="border-none h-[2px] bg-[#B4B4B4]" />
			{categoryFilters?.map(category => (
				<>
					<CategoryFilterGroup
						id={category.id}
						name={category.name}
						description={category.description}
						options={category.options}
					/>
					<hr className="border-none h-[2px] bg-[#B4B4B4]" />
				</>
			))}
		</div>
	)
}
