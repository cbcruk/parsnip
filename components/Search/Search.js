import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import useSWRImmutable from 'swr/immutable'
import { modalAtom, ModalName } from '../../atoms/modal'
import { currentAtom } from '../../atoms/region'
import { getQueryString } from '../../utils'
import { ClientOnly } from '../ClientOnly'
import { HotKeyword } from '../HotKeyword'
import { IconSearch } from '../Icons'
import Modal from '../Modal'
import { SearchHistory } from '../SearchHistory'

export function Search() {
  const router = useRouter()
  const [modal, handleModal] = useAtom(modalAtom)
  const [region] = useAtom(currentAtom)
  const { data } = useSWRImmutable(
    [
      '/api/hotkeyword',
      {
        region_id: region?.id,
      },
    ],
    (url, query) => {
      if (!query.region_id) {
        return null
      }

      const search = getQueryString({ ...query })

      return fetch(`${url}?${search}`).then((r) => r.json())
    }
  )

  return (
    <ClientOnly>
      <button className="p-2" onClick={() => handleModal(ModalName.Search)}>
        <IconSearch />
      </button>
      <Modal
        isOpen={modal === ModalName.Search}
        onRequestClose={() => handleModal(null)}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()

            const form = e.target
            const value = form.q.value

            router.push(`/search?q=${value}`)
          }}
        >
          <label className="flex items-center h-10 px-2 rounded-md bg-stone-700">
            <input
              type="search"
              name="q"
              placeholder={`${
                region?.name4 || region?.name3 || ''
              } 근처에서 검색`}
              className="w-full p-2 bg-transparent text-sm text-stone-400"
            />
          </label>
        </form>
        <div className="mt-4">{data && <HotKeyword list={data.keyword} />}</div>
        <SearchHistory />
      </Modal>
    </ClientOnly>
  )
}
