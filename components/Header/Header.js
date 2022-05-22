import { IconRefresh } from '../Icons'

function Header({ handleRefresh }) {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex gap-2 text-[22px] text-slate-800">당근마켓</div>
      <div className="flex items-center">
        <button className="p-2" onClick={handleRefresh}>
          <IconRefresh className="w-[16px] h-[16px]" />
        </button>
      </div>
    </header>
  )
}

export default Header
