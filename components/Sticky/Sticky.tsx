import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Sticky({ children }: Props) {
  return (
    <div className="sticky top-0 z-10 bg-stone-900 shadow-md">{children}</div>
  )
}

export default Sticky
