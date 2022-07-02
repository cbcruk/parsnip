import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function RouterIsReady({ children }: Props) {
  const router = useRouter()

  if (!router.isReady) {
    return null
  }

  return children
}
