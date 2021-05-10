import { useAtom } from 'jotai'
import {
  handleCurrentAtom,
  handleHistoryAtom,
  searchAtom,
} from '../../../../atoms/region'
import { IconX } from '../../../Icons'

function Item({ region, children, ...props }) {
  return (
    <div
      className="flex justify-between items-center py-2 border-b cursor-pointer"
      {...props}
    >
      {[region.name1, region.name2, region.name3].join(' ')}
      {children}
    </div>
  )
}

function Group({ label, children }) {
  if (children?.length === 0) {
    return null
  }

  return (
    <div className="mt-6">
      <div className="text-sm font-bold">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function Result() {
  const [searchRegions] = useAtom(searchAtom)
  const [historyRegions, handleHistory] = useAtom(handleHistoryAtom)
  const [, setCurrent] = useAtom(handleCurrentAtom)

  return (
    <div className="mt-8">
      <Group label="검색 결과">
        {searchRegions.map((region) => (
          <Item
            key={region.id}
            region={region}
            onClick={() => setCurrent(region)}
          />
        ))}
      </Group>

      <Group label="최근 주소">
        {historyRegions.map((region) => (
          <Item
            key={region.id}
            region={region}
            onClick={() => setCurrent(region)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()

                handleHistory((prev) =>
                  prev.filter((item) => item.id !== region.id)
                )
              }}
            >
              <IconX />
            </button>
          </Item>
        ))}
      </Group>
    </div>
  )
}

export default Result
