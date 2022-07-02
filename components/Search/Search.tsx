import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import useSWRImmutable from 'swr/immutable'
import { ModalName } from '../../atoms/modal'
import { currentAtom } from '../../atoms/region'
import { HotKeywordResponse } from '../../types/hotKeyword'
import { getQueryString } from '../../utils'
import { ClientOnly } from '../ClientOnly'
import { HotKeyword } from '../HotKeyword'
import { IconSearch } from '../Icons'
import Modal from '../Modal'
import { useModal } from '../Modal/useModal'
import { SearchHistory } from '../SearchHistory'

function useHotkeyword() {
  const [region] = useAtom(currentAtom)
  const { data } = useSWRImmutable<HotKeywordResponse>(
    [
      '/api/hotkeyword',
      {
        region_id: region?.id,
      },
    ],
    async (url, query) => {
      if (!query.region_id) {
        return null
      }

      const search = getQueryString({ ...query })

      return fetch(`${url}?${search}`).then((r) => r.json())
    }
  )
  const hotkeywordList = data?.keyword

  return { hotkeywordList }
}

function Form({
  regionName,
  handleSubmit,
}: {
  regionName: string
  handleSubmit: (value: string) => void
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const value = form.q.value

        handleSubmit(value)
      }}
    >
      <label className="flex items-center h-10 px-2 rounded-md bg-stone-700">
        <input
          type="search"
          name="q"
          placeholder={`${regionName} 근처에서 검색`}
          className="w-full p-2 bg-transparent text-sm text-stone-400"
        />
      </label>
    </form>
  )
}

export function SearchComponent({
  isOpen,
  openModal,
  closeModal,
  children,
}: ReturnType<typeof useModal> & { children: ReactNode }) {
  return (
    <ClientOnly>
      <button className="p-2" onClick={openModal}>
        <IconSearch />
      </button>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        {children}
        <SearchHistory />
      </Modal>
    </ClientOnly>
  )
}

export function Search() {
  const router = useRouter()
  const { isOpen, openModal, closeModal } = useModal(ModalName.Search)
  const [region] = useAtom(currentAtom)
  const { hotkeywordList } = useHotkeyword()

  return (
    <SearchComponent
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
    >
      <Form
        regionName={region?.name4 || region?.name3 || ''}
        handleSubmit={(value) => router.push(`/search?q=${value}`)}
      />
      <div className="mt-4">
        {hotkeywordList && <HotKeyword list={hotkeywordList} />}
      </div>
    </SearchComponent>
  )
}
