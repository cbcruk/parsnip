import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import Link from 'next/link'
import { searchHistoryAtom } from '../../atoms/search'
import { IconX } from '../Icons'

function useSearchHistory() {
  const [list, handleSearchHistory] = useAtom(searchHistoryAtom)
  const handleReset = () => handleSearchHistory(RESET)
  const handleDelete = (item: string) =>
    handleSearchHistory((prev) => prev.filter((prevItem) => prevItem !== item))

  return {
    list,
    handleReset,
    handleDelete,
  }
}

export function SearchHistoryComponent({
  list,
  handleReset,
  handleDelete,
}: ReturnType<typeof useSearchHistory>) {
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <div className="font-bold">최근 검색어</div>
        <button className="text-stone-500 text-sm" onClick={handleReset}>
          모두 지우기
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {list.map((item) => (
          <Link key={item} href={`/search?q=${item}`}>
            <a className="flex justify-between w-full pb-2 border-b border-stone-700 text-sm">
              {item}
              <button
                className="relative z-10"
                onClick={(e) => {
                  e.preventDefault()
                  handleDelete(item)
                }}
              >
                <IconX />
              </button>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function SearchHistory() {
  const { list, handleReset, handleDelete } = useSearchHistory()

  return (
    <SearchHistoryComponent
      list={list}
      handleReset={handleReset}
      handleDelete={handleDelete}
    />
  )
}
