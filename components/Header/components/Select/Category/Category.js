import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { modalAtom, ModalName } from '../../../../../atoms/modal'
import { CATEGORIES } from '../../../../../constants'
import { IconCategory } from '../../../../Icons'
import Modal from '../../../../Modal'
import Categories from '../../Categories'
import Chip from '../shared/Chip'

function useCategory({ categoryId }) {
  const categories = CATEGORIES
  const currentCategory = categories[categoryId]

  return {
    list: categories,
    current: currentCategory?.name ?? '카테고리',
  }
}

function SelectCategory() {
  const router = useRouter()
  const [modal, handleModal] = useAtom(modalAtom)
  const { list, current } = useCategory({
    categoryId: parseInt(router.query.category, 10),
  })

  return (
    <>
      <Chip onClick={() => handleModal(ModalName.Category)}>
        <IconCategory width={16} height={16} className="mr-2" />
        {current}
      </Chip>

      <Modal
        isOpen={modal === ModalName.Category}
        onRequestClose={() => handleModal(null)}
      >
        <Categories categories={list} />
      </Modal>
    </>
  )
}

export default SelectCategory
