import Link from 'next/link'
import { Keyword } from '../../types/hotKeyword'

type Props = {
  list: Keyword[]
}

type ItemProps = {
  label: string
}

function Item({ label }: ItemProps) {
  return (
    <Link href={`/search?q=${label}`}>
      <a className="p-1 px-2 border border-stone-500 hover:bg-stone-400 hover:text-stone-900 rounded-full text-sm transition">
        {label}
      </a>
    </Link>
  )
}

export function HotKeyword({ list }: Props) {
  return (
    <div className="py-4">
      <p className="font-bold">이웃들이 많이 찾고 있어요!</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {list
          .filter((item) => item.source === 'fleamarket')
          .map((item) => {
            return <Item key={item.label} label={item.label} />
          })}
      </div>
    </div>
  )
}
