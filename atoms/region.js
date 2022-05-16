import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { uniqBy } from 'lodash'
import { modalAtom } from './modal'

const CURRENT_REGION_KEY = 'CURRENT_REGION'
const HISTORY_REGION_KEY = 'HISTORY_REGION'

export const currentAtom = atomWithStorage(CURRENT_REGION_KEY, null)

export const historyAtom = atomWithStorage(HISTORY_REGION_KEY, [])

export const handleCurrentAtom = atom(
  (get) => get(currentAtom),
  (_get, set, value) => {
    set(currentAtom, value)
    set(historyAtom, (prev) => {
      const nextValue = uniqBy([...prev, value], 'id')
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
  }
)

export const searchRegionAtom = atom(null)
