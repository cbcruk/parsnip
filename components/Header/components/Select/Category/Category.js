import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import useSWRImmutable from 'swr/immutable'
import { atomWithToggle } from '../../../../../atoms/utils'
import { IconLocationMarker } from '../../../../Icons'
import Modal from '../../../../Modal'
import Categories from '../../Categories'

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
      <button
        suppressHydrationWarning
        className="inline-flex items-center gap-1 h-10 p-2 bg-blue-100 rounded-md text-xs text-green-500 font-bold cursor-pointer"
        onClick={() => handleModal(true)}
      >
        <IconLocationMarker />
        {currentCategory?.name ?? '카테고리'}
      </button>

      <Modal isOpen={isOpen} onRequestClose={() => handleModal(false)}>
        <Categories />
      </Modal>
    </>
  )
}

export default SelectCategory
