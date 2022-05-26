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
      if (!router.isReady) return null

      if (!regionId) return null

      if (previousPageData && !previousPageData?.meta) return null

      if (pageIndex === 0) {
        return ['/api/articles', urlSearch()]
      }

      return [
        '/api/articles',
        urlSearch({
          max_published_at_f: previousPageData.meta.max_published_at_f,
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

export default useArticles
