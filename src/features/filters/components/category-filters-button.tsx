import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/components/ui/button'
import { ModalName } from '@/shared/enums/modal-name-enum'
import { useModal } from '@/shared/hooks/use-modal'

import { CategoryFiltersModal } from './category-filters-modal'

export const CategoryFiltersButton = () => {
	const { t } = useTranslation('filter')
	const { isOpen: isModalOpen, open: openModal } = useModal(
		ModalName.CategoryFilters
	)

	return (
		<>
			<Button
				className="bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white"
				onClick={openModal}
			>
				{t('category_filters.open')}
			</Button>
			{isModalOpen ? <CategoryFiltersModal /> : null}
		</>
	)
}
