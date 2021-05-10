import { useAtom } from 'jotai'
import { useSWRInfinite } from 'swr'
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

function getKey(index, previousPageData, regionId) {
  const maxPublishedAt = getMaxPublishedAt(previousPageData)
  const params = new URLSearchParams()

  params.set('regionId', regionId)
  params.set('page', index + 1)
  params.set('maxPublishedAt', maxPublishedAt)

  return `/api/feeds?${params.toString()}`
}

function useFeeds() {
  const [current] = useAtom(currentAtom)
  const regionId = current?.id
  const response = useSWRInfinite((...args) =>
    regionId ? getKey(...args, regionId) : null
  )

  return response
}

export default useFeeds
