import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import useSWRInfinite from 'swr/infinite'
import { currentAtom } from '../../../atoms/region'

function getUrlSearch(nextParams) {
  return (params) => {
    const searchParams = new URLSearchParams()
    const extendedParams = {
      ...nextParams,
      ...params,
    }

    Object.entries(extendedParams).forEach(([key, value]) => {
      searchParams.append(key, value)
    })

    return searchParams.toString()
  }
}

function useArticles() {
  const [current] = useAtom(currentAtom)
  const regionId = current?.id
  const router = useRouter()
  const categoryId = router.query.category
  const urlSearch = getUrlSearch({
    region_id: regionId,
    category_id: categoryId,
  })
  const response = useSWRInfinite(
    (pageIndex, previousPageData) => {
      if (!regionId || !categoryId) return null

      if (previousPageData && !previousPageData?.meta) return null

      if (pageIndex === 0) {
        return `/api/articles?${urlSearch()}`
      }

      return `/api/articles?${urlSearch({
        max_published_at_f: previousPageData.meta.max_published_at_f,
      })}`
    },
    (url) => fetch(url).then((res) => res.json()),
    {
      revalidateFirstPage: true,
    }
  )

  return response
}

export default useArticles
