import { IconRefresh } from '../Icons'
import { Search } from '../Search'

type Props = {
  handleRefresh: () => void
}

function Header({ handleRefresh }: Props) {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex gap-2 text-[22px] text-stone-300">
        <button onClick={() => window.scrollTo(0, 0)}>🍆</button>
      </div>
      <div className="flex items-center">
        <button className="p-2" onClick={handleRefresh}>
          <IconRefresh className="w-[16px] h-[16px]" />
        </button>
        <Search />
      </div>
    </header>
  )
}

export default Header
