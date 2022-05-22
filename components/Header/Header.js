import Refresh from '../Icons/Refresh'
import SelectCategory from './components/Select/Category'
import SelectRegion from './components/Select/Region'

function Header({ handleRefresh }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <SelectRegion />
        <SelectCategory />
      </div>
      <button className="p-2 ml-auto" onClick={handleRefresh}>
        <Refresh className="w-4 h-4" />
      </button>
    </header>
  )
}

export default Header
