import { useRouter } from 'next/router'

export function RouterIsReady({ children }) {
  const router = useRouter()

  if (!router.isReady) {
    return null
  }

  return children
}
