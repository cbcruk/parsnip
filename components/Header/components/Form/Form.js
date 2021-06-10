import { useAtom } from 'jotai'
import { handleSearchAtom } from '../../../../atoms/region'
import { getGeolocation } from '../../../../utils'
import { IconSearch } from '../../../Icons'

function Form() {
  const [search, handleSearch] = useAtom(handleSearchAtom)

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault()

          const form = e.target

          handleSearch({
            key: 'keyword',
            value: form.q.value,
          })
        }}
      >
        <label className="flex items-center gap-2 py-2 border-b">
          <IconSearch />
          <input
            type="search"
            name="q"
            placeholder="우리 동네 이름(동, 읍, 면)으로 검색"
            className="w-full px-2"
          />
        </label>
      </form>

      <button
        type="button"
        disabled={search.status === 'loading'}
        className="w-full h-9 p-1 rounded mt-4 bg-yellow-500 text-white text-sm font-bold"
        onClick={async () => {
          const { lat, lng } = await getGeolocation()

          handleSearch({
            key: 'latLng',
            value: [lat, lng].join(','),
          })
        }}
      >
        현재 위치로 찾기
      </button>
    </>
  )
}

export default Form
