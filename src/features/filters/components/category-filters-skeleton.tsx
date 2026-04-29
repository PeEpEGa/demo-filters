import { Skeleton } from '@/shared/components/ui/skeleton'

export const CategoryFiltersSkeleton = () => {
	return (
		<div className="w-full flex flex-col gap-8">
			<Skeleton className="h-10 w-64 mx-auto" />
			<hr className="border-none h-[2px] bg-[#B4B4B4]" />
			{Array.from({ length: 3 }).map((_, i) => (
				<div
					key={i}
					className="flex flex-col gap-4"
				>
					<Skeleton className="h-6 w-48" />
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
						{Array.from({ length: 6 }).map((_, j) => (
							<Skeleton
								key={j}
								className="h-5 w-40"
							/>
						))}
					</div>
					<hr className="border-none h-[2px] bg-[#B4B4B4]" />
				</div>
			))}
		</div>
	)
}
