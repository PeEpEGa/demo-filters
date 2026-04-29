import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/components/ui/button'
import { useFilter } from '@/shared/hooks/use-filter'

interface Props {
	onApply: () => void
}

export const CategoryFilterModalActions = ({ onApply }: Props) => {
	const { t } = useTranslation('filter')
	const { clearDraft } = useFilter()

	return (
		<div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
			<div className="hidden md:block" />
			<div className="flex justify-center">
				<Button
					className="h-16 rounded-2xl px-[70px] bg-[#FF5F00] hover:bg-[#FF5F00]/90 text-white"
					onClick={onApply}
				>
					{t('category_filters.apply')}
				</Button>
			</div>
			<div className="flex justify-center md:justify-end">
				<Button
					variant="link"
					className="font-medium text-base leading-none tracking-normal underline text-[#078691] hover:text-[#078691]/90"
					onClick={clearDraft}
				>
					{t('category_filters.clear_all')}
				</Button>
			</div>
		</div>
	)
}
