import { IconSearch } from '../Icons'
import Select from './components/Select'

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      <div className="flex items-center gap-2">
        <Select />
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
      </div>
    </header>
  )
}

export default Header
