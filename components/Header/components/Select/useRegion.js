import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { handleCurrentAtom } from '../../../../atoms/region'

function useRegion() {
  const router = useRouter()
  const { regionId } = router.query
  const [current, setCurrent] = useAtom(handleCurrentAtom)

  useSWR(regionId ? ['/api/regions/', regionId] : null, async (url, id) => {
    const response = await fetch(url + id)
    const data = await response.json()

    setCurrent(data)

    return data
  })

  return {
    hasRegion: current,
    regionName: current ? current.name4 || current.name3 : '우리 동네 선택',
  }
}

export default useRegion
