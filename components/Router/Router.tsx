import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { routeAtom } from '../../atoms/route'

function useRoute() {
  const router = useRouter()
  const [route, setRoute] = useAtom(routeAtom)

  useEffect(() => {
    const handleRouteChange = (url: string) => setRoute(url)

    router.events.on('routeChangeStart', handleRouteChange)

    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [])

  return route
}

export function Router() {
  useRoute()

  return null
}
