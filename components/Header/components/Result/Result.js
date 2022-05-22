import clsx from 'clsx'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import useSWR from 'swr'
import {
  handleCurrentAtom,
  handleHistoryAtom,
  searchRegionAtom,
} from '../../../../atoms/region'
import { getQueryString } from '../../../../utils'
import { IconX } from '../../../Icons'

function Item({ region, children, ...props }) {
  return (
    <div
      className="flex justify-between items-center py-2 border-b border-stone-700 cursor-pointer"
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
  const router = useRouter()
  const [search] = useAtom(searchRegionAtom)
  const { data: regions, isValidating } = useSWR(
    search || null,
    ({ key, value }) =>
      fetch(`/api/regions?${key}=${value}`).then((r) => r.json())
  )
  const [historyRegions, handleHistory] = useAtom(handleHistoryAtom)
  const [, setCurrent] = useAtom(handleCurrentAtom)
  const handleCurrent = useCallback(
    (region) => {
      setCurrent(region)

      router.push({
        pathname: '/',
        search: getQueryString({
          ...router.query,
          regionId: region.id,
        }),
      })
    },
    [router, setCurrent]
  )

  return (
    <div className="mt-8">
      <Group label="검색 결과">
        <div
          className={clsx('transition-opacity duration-500', {
            'opacity-50': isValidating,
          })}
        >
          {(regions || []).map((region) => (
            <Item
              key={region.id}
              region={region}
              onClick={() => handleCurrent(region)}
            />
          ))}
        </div>
      </Group>

      <Group label="최근 주소">
        {historyRegions.map((region) => (
          <Item
            key={region.id}
            region={region}
            onClick={() => handleCurrent(region)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()

                handleHistory((prev) =>
                  prev.filter((item) => item.id !== region.id)
                )
              }}
              className="text-stone-400"
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
