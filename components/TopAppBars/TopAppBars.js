import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { routeAtom } from '../../atoms/route'
import { IconArrowLeft } from '../Icons'

export function TopAppBars({ title }) {
  const router = useRouter()
  const [route] = useAtom(routeAtom)
  const hasHistory = Boolean(route)

  return (
    <div className="flex justify-between items-center h-[64px] px-[20px]">
      <div className="flex items-center">
        <button
          onClick={() => {
            if (hasHistory) {
              router.back()
            } else {
              router.push('/')
            }
          }}
        >
          <IconArrowLeft />
        </button>
        {title}
      </div>
      <></>
    </div>
  )
}
