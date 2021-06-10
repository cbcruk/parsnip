import { atom } from 'jotai'
import { uniqBy } from 'lodash'
import { getLocalStorageItem, setLocalStorageItem } from '../utils'
import { modalAtom } from './modal'

const CURRENT_REGION_KEY = 'CURRENT_REGION'
const HISTORY_REGION_KEY = 'HISTORY_REGION'

export const currentAtom = atom(getLocalStorageItem(CURRENT_REGION_KEY, null))

export const historyAtom = atom(getLocalStorageItem(HISTORY_REGION_KEY, []))

export const searchAtom = atom({
  status: 'idle',
  regions: [],
})

export const handleCurrentAtom = atom(
  (get) => get(currentAtom),
  (_get, set, value) => {
    set(currentAtom, value)
    setLocalStorageItem(CURRENT_REGION_KEY, value)

    set(historyAtom, (prev) => {
      const nextValue = uniqBy([...prev, value], 'id')
      setLocalStorageItem(HISTORY_REGION_KEY, nextValue)
      return nextValue
    })

    set(modalAtom, false)
  }
)

export const handleHistoryAtom = atom(
  (get) => get(historyAtom),
  (get, set, update) => {
    const nextValue = update(get(historyAtom))

    set(historyAtom, nextValue)
    setLocalStorageItem(HISTORY_REGION_KEY, nextValue)
  }
)

export async function getRegions(key, value) {
  const response = await fetch(`/api/regions?${key}=${value}`)
  const data = await response.json()

  return data
}

export const handleSearchAtom = atom(
  (get) => get(searchAtom),
  (get, set, { key, value }) => {
    async function fetchRegions() {
      set(searchAtom, {
        ...get(searchAtom),
        status: 'loading',
      })

      const data = await getRegions(key, value)

      set(searchAtom, {
        regions: data,
        status: 'succeeded',
      })
    }

    fetchRegions()
  }
)
