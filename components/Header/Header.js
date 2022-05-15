import Select from './components/Select'

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      <div className="flex items-center gap-2">
        <Select />
      </div>
    </header>
  )
}

export default Header
