import { useAtom } from 'jotai'
import { modalAtom, ModalName } from '../../atoms/modal'

export function useModal(name: ModalName) {
  const [modal, handleModal] = useAtom(modalAtom)
  const isOpen = modal === name
  const openModal = () => handleModal(name)
  const closeModal = () => handleModal(null)

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
