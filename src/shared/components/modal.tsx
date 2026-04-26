import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	closeOnBackdrop?: boolean
	closeOnEscape?: boolean
}

const Modal = ({
	isOpen,
	onClose,
	children,
	closeOnBackdrop = true,
	closeOnEscape = true
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
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
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
