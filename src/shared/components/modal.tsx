import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../lib/utils'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	closeOnBackdrop?: boolean
	closeOnEscape?: boolean
	className?: string
}

const Modal = ({
	isOpen,
	onClose,
	children,
	closeOnBackdrop = true,
	closeOnEscape = true,
	className
}: ModalProps) => {
	const overlayRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!closeOnEscape) {
			return
		}

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown)
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, onClose, closeOnEscape])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (closeOnBackdrop && e.target === overlayRef.current) {
			onClose()
		}
	}

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div
			ref={overlayRef}
			onClick={handleBackdropClick}
			className={cn('fixed inset-0 z-50 backdrop-blur-[25px]', className)}
			style={{ backgroundColor: 'rgba(27, 27, 27, 0.3)' }}
			aria-modal="true"
			role="dialog"
		>
			{children}
		</div>,
		document.body
	)
}

export { Modal }
export type { ModalProps }
