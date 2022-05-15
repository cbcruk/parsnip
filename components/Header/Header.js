import SelectRegion from './components/Select/Region'

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      <div className="flex items-center gap-2">
        <SelectRegion />
      </div>
    </header>
  )
}

export default Header
