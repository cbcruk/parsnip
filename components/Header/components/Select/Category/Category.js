import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useMemo, useContext } from 'react'
import useSWRImmutable from 'swr/immutable'
import { atomWithToggle } from '../../../../../atoms/utils'
import { IconCategory } from '../../../../Icons'
import Modal from '../../../../Modal'
import { PropertiesContext } from '../../../../Provider'
import Categories from '../../Categories'
import Chip from '../shared/Chip'

export const modalAtom = atomWithToggle(false)

export function useApi() {
  const { data } = useSWRImmutable('/api/categories', (url) =>
    fetch(url).then((r) => r.json())
  )

  return data
}

function useCategory({ categoryId }) {
  const categories = useContext(PropertiesContext)
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
  const [isOpen, handleModal] = useAtom(modalAtom)
  const router = useRouter()
  const { list, current } = useCategory({
    categoryId: parseInt(router.query.category, 10),
  })

  if (!router.isReady) {
    return null
  }

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
