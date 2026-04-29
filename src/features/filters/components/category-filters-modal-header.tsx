import { useTranslation } from 'react-i18next'

import { X } from 'lucide-react'

import { Button } from '@/shared/components/ui/button'

interface Props {
	onClose: () => void
}

export const CategoryFiltersModalHeader = ({ onClose }: Props) => {
	const { t } = useTranslation('filter')

	return (
		<div className="grid grid-cols-3 items-center">
			<div />
			<h2 className="font-medium text-[40px] leading-none tracking-normal text-center">
				{t('category_filters.modal_title')}
			</h2>
			<div className="flex justify-end">
				<Button
					variant="ghost"
					size="icon"
					onClick={onClose}
				>
					<X className="size-5 text-[#31393C]" />
				</Button>
			</div>
		</div>
	)
}
