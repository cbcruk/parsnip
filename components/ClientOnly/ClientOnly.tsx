import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}

export function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
