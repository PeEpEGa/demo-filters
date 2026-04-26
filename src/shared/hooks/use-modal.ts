import { ModalName } from '../enums/modal-name-enum'
import { useModalStore } from '../stores/use-modals-store'

export const useModal = (name: ModalName) => {
	const isOpen = useModalStore(state => state.activeModal === name)
	const openModal = useModalStore(state => state.openModal)
	const closeModal = useModalStore(state => state.closeModal)

	return {
		isOpen,
		open: () => openModal(name),
		close: closeModal
	}
}
