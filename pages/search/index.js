import { SearchList } from '../../components/List/Search'
import { useSearch } from '../../components/List/Search/useSearch'
import { useSearchHistory } from '../../components/List/Search/useSearchHistory'
import Sticky from '../../components/Sticky'
import { TopAppBars } from '../../components/TopAppBars'

function Search() {
  const { data, isValidating, size, setSize } = useSearch()
  useSearchHistory()

  return (
    <>
      <Sticky>
        <TopAppBars title="검색" />
      </Sticky>
      <SearchList data={data}>
        <button
          disabled={isValidating}
          className="w-full h-9 p-1 rounded-full bg-indigo-500 text-indigo-200 text-sm font-bold"
          onClick={() => setSize(size + 1)}
        >
          {isValidating ? '로딩중...' : '더보기'}
        </button>
      </SearchList>
    </>
  )
}

export default Search
