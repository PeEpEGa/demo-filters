import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from '@/shared/components/modal'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/shared/components/ui/alert-dialog'
import { ModalName } from '@/shared/enums/modal-name-enum'
import { useFilter } from '@/shared/hooks/use-filter'
import { useModal } from '@/shared/hooks/use-modal'

import { CategoryFilterModalActions } from './category-filter-modal-actions'
import { CategoryFilters } from './category-filters'
import { CategoryFiltersModalHeader } from './category-filters-modal-header'

export const CategoryFiltersModal = () => {
	const { t } = useTranslation('filter')
	const { isOpen, close } = useModal(ModalName.CategoryFilters)
	const [isConfirmOpen, setIsConfirmOpen] = useState(false)
	const { applyFilters, discardDraft, initDraft } = useFilter()

	useEffect(() => {
		if (isOpen) {
			initDraft()
		}
	}, [isOpen, initDraft])

	const handleApply = () => {
		setIsConfirmOpen(true)
	}

	const handleConfirm = () => {
		applyFilters()
		setIsConfirmOpen(false)
		close()
	}

	const handleCancel = () => {
		discardDraft()
		setIsConfirmOpen(false)
	}

	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={close}
				className="overflow-y-auto"
			>
				<div className="flex w-full justify-center min-h-full p-10">
					<div className="w-full h-fit rounded bg-white p-9 flex flex-col gap-8">
						<CategoryFiltersModalHeader onClose={close} />
						<CategoryFilters />
						<CategoryFilterModalActions onApply={handleApply} />
					</div>
				</div>
			</Modal>

			<AlertDialog open={isConfirmOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							{t('category_filters.confirm_title')}
						</AlertDialogTitle>
						<AlertDialogDescription>
							{t('category_filters.confirm_description')}
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={handleCancel}>
							{t('category_filters.cancel')}
						</AlertDialogCancel>
						<AlertDialogAction
							className="!bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white"
							onClick={handleConfirm}
						>
							{t('category_filters.confirm')}
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}
