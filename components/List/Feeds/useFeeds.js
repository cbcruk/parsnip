import { useAtom } from 'jotai'
import useSWRInfinite from 'swr/infinite'
import { currentAtom } from '../../atoms/region'

function getUrlSearch(url) {
  if (!url) {
    return ''
  }

  const { search } = new URL(url)

  return search?.slice(1)
}

function useFeeds() {
  const [current] = useAtom(currentAtom)
  const regionId = current?.id
  const response = useSWRInfinite(
    (pageIndex, previousPageData) => {
      if (!regionId) return null

      if (previousPageData && !previousPageData?.meta) return null

      if (pageIndex === 0) {
        return `/api/feeds?regionId=${regionId}&range=my&os_push=1`
      }

      return `/api/feeds?${getUrlSearch(previousPageData.meta.pagination.next)}`
    },
    (url) => fetch(url).then((res) => res.json()),
    {
      revalidateFirstPage: false,
    }
  )

  return response
}

export default useFeeds
