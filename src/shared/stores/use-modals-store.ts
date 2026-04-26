import { create } from 'zustand'

import { ModalName } from '../enums/modal-name-enum'

interface ModalStore {
	activeModal: ModalName | null
	openModal: (name: ModalName) => void
	closeModal: () => void
}

export const useModalStore = create<ModalStore>()(set => ({
	activeModal: null,
	openModal: name => set({ activeModal: name }),
	closeModal: () => set({ activeModal: null })
}))
