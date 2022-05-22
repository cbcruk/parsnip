import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import useSWRImmutable from 'swr/immutable'
import { atomWithToggle } from '../../../../../atoms/utils'
import { IconCategory } from '../../../../Icons'
import Modal from '../../../../Modal'
import Categories from '../../Categories'
import Chip from '../shared/Chip'

export const modalAtom = atomWithToggle(false)

function SelectCategory() {
  const [isOpen, handleModal] = useAtom(modalAtom)
  const { data } = useSWRImmutable('/api/categories', (url) =>
    fetch(url).then((r) => r.json())
  )
  const router = useRouter()
  const currentCategory = useMemo(() => {
    return data
      ? data.find(
          (category) => category.id === parseInt(router.query.category, 10)
        )
      : ''
  }, [data, router.query.category])

  return (
    <>
      <Chip onClick={() => handleModal(true)}>
        <IconCategory width={16} height={16} className="mr-2" />
        {currentCategory?.name ?? '카테고리'}
      </Chip>

      <Modal isOpen={isOpen} onRequestClose={() => handleModal(false)}>
        <Categories />
      </Modal>
    </>
  )
}

export default SelectCategory
