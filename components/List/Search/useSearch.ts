import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import useSWRInfinite from 'swr/infinite'
import { currentAtom } from '../../../atoms/region'
import { SearchResponse } from '../../../types/search'
import { getUrlSearch } from '../../../utils'

export function useSearch() {
  const router = useRouter()
  const [current] = useAtom(currentAtom)
  const regionId = current?.id
  const urlSearch = getUrlSearch({
    regionId: `${regionId}`,
    query: router.query.q as string,
  })
  const response = useSWRInfinite<SearchResponse>(
    (pageIndex, previousPageData) => {
      if (!router.isReady) return null

      if (!regionId) return null

      if (pageIndex === 0) {
        return ['/api/search', urlSearch()]
      }

      return [
        '/api/search',
        urlSearch({
          pageToken: previousPageData?.nextPageToken ?? '',
        }),
      ]
    },
    (url, search) => fetch(`${url}?${search}`).then((res) => res.json()),
    {
      revalidateFirstPage: false,
    }
  )

  return response
}
