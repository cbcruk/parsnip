import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { atomWithToggle } from '../../../../../atoms/utils'
import { IconCategory } from '../../../../Icons'
import Modal from '../../../../Modal'
import Categories from '../../Categories'
import Chip from '../shared/Chip'
import data from './data.json'

export const modalAtom = atomWithToggle(false)

function useCategory({ categoryId }) {
  const categories = data
  const currentCategory = useMemo(
    () =>
      categories
        ? categories.find((category) => category.id === categoryId)
        : '',
    [categories, categoryId]
  )

  return {
    list: categories,
    current: currentCategory?.name ?? '카테고리',
  }
}

function SelectCategory() {
  const router = useRouter()
  const [isOpen, handleModal] = useAtom(modalAtom)
  const { list, current } = useCategory({
    categoryId: parseInt(router.query.category, 10),
  })

  return (
    <>
      <Chip onClick={() => handleModal(true)}>
        <IconCategory width={16} height={16} className="mr-2" />
        {current}
      </Chip>

      <Modal isOpen={isOpen} onRequestClose={() => handleModal(false)}>
        <Categories categories={list} />
      </Modal>
    </>
  )
}

export default SelectCategory
