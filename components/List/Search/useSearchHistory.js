import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { searchHistoryAtom } from '../../../atoms/search'

export function useSearchHistory() {
  const router = useRouter()
  const [, handleSearchHistory] = useAtom(searchHistoryAtom)

  useEffect(() => {
    if (router.query.q) {
      handleSearchHistory((prev) => [...new Set(prev.concat(router.query.q))])
    }
  }, [handleSearchHistory, router.query.q])
}
