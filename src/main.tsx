import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query'

import './main.css'
import { App } from './pages/Home'
import { queryClient } from './query'
import { TooltipProvider } from './shared/components/ui/tooltip'
import './shared/i18n'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<App />
			</TooltipProvider>
		</QueryClientProvider>
	</StrictMode>
)
