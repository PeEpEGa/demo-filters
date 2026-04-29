import { Info } from 'lucide-react'

import { FilterChooseOption } from '@/shared/api/types/Filter'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/components/ui/tooltip'

import { CategoryFilterCheckbox } from './category-filter-checkbox'

interface Props {
	id: string
	name: string
	description?: string
	options: FilterChooseOption[]
}

export const CategoryFilterGroup = ({
	id,
	name,
	description,
	options
}: Props) => {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="font-medium text-2xl leading-none tracking-normal flex items-center gap-1.5">
				{name}
				<Tooltip>
					<TooltipTrigger asChild>
						<Info className="size-4 text-muted-foreground cursor-help" />
					</TooltipTrigger>
					<TooltipContent>{description}</TooltipContent>
				</Tooltip>
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 items-start">
				{options.map(option => (
					<CategoryFilterCheckbox
						key={option.id}
						categoryId={id}
						option={option}
					/>
				))}
			</div>
		</div>
	)
}
