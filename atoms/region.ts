import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { uniqBy } from 'lodash'
import { modalAtom } from './modal'

type Region = {
  fullname: string
  id: number
  name: string
  name1: string
  name2: string
  name3: string
  name4: string
}

type SearchRegion = {
  key: string
  value: string
}

const CURRENT_REGION_KEY = 'CURRENT_REGION'
const HISTORY_REGION_KEY = 'HISTORY_REGION'

export const currentAtom = atomWithStorage<Region | null>(
  CURRENT_REGION_KEY,
  null
)

export const historyAtom = atomWithStorage<Region[]>(HISTORY_REGION_KEY, [])

export const handleCurrentAtom = atom(
  (get) => get(currentAtom),
  (_get, set, value: Region) => {
    set(currentAtom, value)
    set(historyAtom, (prev) => {
      const nextValue = uniqBy([...prev, value], 'id')
      return nextValue
    })
    set(modalAtom, null)
  }
)

export const handleHistoryAtom = atom(
  (get) => get(historyAtom),
  (_get, set, nextValue: Region[]) => {
    set(historyAtom, nextValue)
  }
)

export const searchRegionAtom = atom<SearchRegion | null>(null)
