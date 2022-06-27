import { useAtom } from 'jotai'
import { modalAtom, ModalName } from '../../atoms/modal'

export function useModal({ name }) {
  const [modal, handleModal] = useAtom(modalAtom)
  const isOpen = modal === ModalName[name]
  const openModal = () => handleModal(ModalName[name])
  const closeModal = () => handleModal(null)

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
