import { ClientOnly } from '../../../ClientOnly'

type Props = {
  isValidating: boolean
  handleSize: () => void
}

export function LoadMore({ isValidating, handleSize }: Props) {
  return (
    <ClientOnly>
      <div className="p-4">
        <button
          disabled={isValidating}
          className="w-full h-9 p-1 rounded-full bg-indigo-500 text-indigo-200 text-sm font-bold"
          onClick={handleSize}
        >
          {isValidating ? '로딩중...' : '더보기'}
        </button>
      </div>
    </ClientOnly>
  )
}
