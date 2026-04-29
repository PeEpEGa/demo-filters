import { Info } from 'lucide-react'

import { FilterChooseOption } from '@/shared/api/types/Filter'
import { Checkbox } from '@/shared/components/ui/checkbox'
import {
	Field,
	FieldContent,
	FieldGroup,
	FieldLabel
} from '@/shared/components/ui/field'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/shared/components/ui/tooltip'
import { useFilter } from '@/shared/hooks/use-filter'

interface Props {
	categoryId: string
	option: FilterChooseOption
}

export const CategoryFilterCheckbox = ({ categoryId, option }: Props) => {
	const { isSelected, toggleOption } = useFilter()

	return (
		<FieldGroup>
			<Field orientation="horizontal">
				<Checkbox
					id={option.id}
					name={option.id}
					checked={isSelected(categoryId, option.id)}
					onCheckedChange={() => toggleOption(categoryId, option.id)}
				/>
				<FieldContent>
					<FieldLabel
						htmlFor={option.id}
						className="flex items-center gap-1.5"
					>
						{option.name}
						<Tooltip>
							<TooltipTrigger asChild>
								<Info className="size-3.5 text-muted-foreground cursor-help" />
							</TooltipTrigger>
							<TooltipContent>{option.description}</TooltipContent>
						</Tooltip>
					</FieldLabel>
				</FieldContent>
			</Field>
		</FieldGroup>
	)
}
