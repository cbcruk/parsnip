import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { searchHistoryAtom } from '../../../atoms/search'

export function useSearchHistory() {
  const router = useRouter()
  const [, handleSearchHistory] = useAtom(searchHistoryAtom)

  useEffect(() => {
    const q = router.query.q as string

    if (q) {
      handleSearchHistory((prev) => {
        if (prev.includes(q)) {
          return prev
        }

        return prev.concat(q)
      })
    }
  }, [handleSearchHistory, router.query.q])
}
