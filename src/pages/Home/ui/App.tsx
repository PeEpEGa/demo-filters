import { Button } from '@/shared/components/ui/button'

export const App = () => {
	return (
		<section className="w-full h-dvh flex items-center justify-center flex-col gap-2">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button variant="ghost">+</Button>
		</section>
	)
}
