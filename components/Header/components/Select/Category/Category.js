import { useRouter } from 'next/router'
import { ModalName } from '../../../../../atoms/modal'
import { CATEGORIES } from '../../../../../constants'
import { IconCategory } from '../../../../Icons'
import Modal from '../../../../Modal'
import { useModal } from '../../../../Modal/useModal'
import Categories from '../../Categories'
import Chip from '../shared/Chip'

function useCategory() {
  const router = useRouter()
  const categoryId = parseInt(router.query.category, 10)
  const categories = CATEGORIES
  const currentCategory = categories[categoryId]

  return {
    list: categories,
    current: currentCategory?.name ?? '카테고리',
  }
}

function SelectCategory() {
  const { isOpen, openModal, closeModal } = useModal(ModalName.Category)
  const { list, current } = useCategory()

  return (
    <>
      <Chip onClick={openModal}>
        <IconCategory width={16} height={16} className="mr-2" />
        {current}
      </Chip>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <Categories categories={list} />
      </Modal>
    </>
  )
}

export default SelectCategory
