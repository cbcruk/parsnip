import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { routeAtom } from '../../atoms/route'
import { IconArrowLeft } from '../Icons'

export function useHistory() {
  const router = useRouter()
  const [route] = useAtom(routeAtom)
  const hasHistory = Boolean(route)
  const handleRouter = () => {
    if (hasHistory) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return { handleRouter }
}

export function TopAppBarsComponent({ title, handleRouter }) {
  return (
    <div className="flex justify-between items-center h-[64px] px-[20px]">
      <div className="flex items-center">
        <button onClick={handleRouter} className="mr-4">
          <IconArrowLeft />
        </button>
        {title}
      </div>
    </div>
  )
}

export function TopAppBars({ title }) {
  const { handleRouter } = useHistory()

  return <TopAppBarsComponent title={title} handleRouter={handleRouter} />
}
