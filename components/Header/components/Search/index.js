import { IconSearch } from '../../../Icons'

export function Search() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const form = e.target
        const value = form.q.value

        console.log(value)
      }}
    >
      <label className="flex items-center h-10 px-2 rounded-md bg-gray-200">
        <IconSearch />
        <input
          type="search"
          name="q"
          placeholder="검색어를 입력해 주세요"
          className="p-2 bg-gray-200 text-sm"
        />
      </label>
    </form>
  )
}
