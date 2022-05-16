import { useAtom } from 'jotai'
import useSWR from 'swr'
import { searchRegionAtom } from '../../../../atoms/region'
import { getGeolocation } from '../../../../utils'
import { IconSearch } from '../../../Icons'

function GeolocationButton() {
  const [, setSearchRegion] = useAtom(searchRegionAtom)
  const { mutate, isValidating } = useSWR(
    '/geolocation',
    () => getGeolocation(),
    { revalidateOnMount: false }
  )

  return (
    <button
      type="button"
      disabled={isValidating}
      className="w-full h-9 p-1 rounded mt-4 bg-yellow-500 text-white text-sm font-bold disabled:opacity-50"
      onClick={async () => {
        const { lat, lng } = await mutate()

        setSearchRegion({
          key: 'latLng',
          value: [lat, lng].join(','),
        })
      }}
    >
      현재 위치로 찾기
    </button>
  )
}

function Form() {
  const [, setSearchRegion] = useAtom(searchRegionAtom)

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault()

          const form = e.target

          setSearchRegion({
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

      <GeolocationButton />
    </>
  )
}

export default Form
