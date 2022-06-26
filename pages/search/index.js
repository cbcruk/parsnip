import Head from 'next/head'
import { useRouter } from 'next/router'
import { SearchList } from '../../components/List/Search'
import { useSearch } from '../../components/List/Search/useSearch'
import { useSearchHistory } from '../../components/List/Search/useSearchHistory'
import { LoadMore } from '../../components/List/shared/LoadMore/LoadMore'
import Sticky from '../../components/Sticky'
import { TopAppBars } from '../../components/TopAppBars'

function Search() {
  const router = useRouter()
  const { data, isValidating, size, setSize } = useSearch()
  useSearchHistory()

  return (
    <>
      <Head>
        <title>{router.query.q} - 다른마켓 검색</title>
      </Head>
      <Sticky>
        <TopAppBars title="검색" />
      </Sticky>
      <SearchList data={data}>
        <LoadMore
          isValidating={isValidating}
          handleSize={() => setSize(size + 1)}
        />
      </SearchList>
    </>
  )
}

export default Search
