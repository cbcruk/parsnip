import { useAtom } from 'jotai'
import useSWRInfinite from 'swr/infinite'
import { currentAtom } from '../../atoms/region'

function getMaxPublishedAt(previousPageData) {
  if (!previousPageData) {
    return ''
  }

  const url = new URL(previousPageData.meta.pagination.next)
  const params = new URLSearchParams(url.search)
  const maxPublishedAt = params.get('maxPublishedAt')

  return maxPublishedAt
}

function useFeeds() {
  const [current] = useAtom(currentAtom)
  const regionId = current?.id
  const response = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData?.meta) return null

      if (!regionId) {
        return null
      }

      const maxPublishedAt = getMaxPublishedAt(previousPageData)
      const params = new URLSearchParams()

      params.set('regionId', regionId)
      params.set('page', index + 1)
      params.set('maxPublishedAt', maxPublishedAt)

      return `/api/feeds?${params.toString()}`
    },
    (url) => fetch(url).then((res) => res.json()),
    {
      revalidateFirstPage: false,
    }
  )

  return response
}

export default useFeeds
