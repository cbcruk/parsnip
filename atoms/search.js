import { atomWithStorage } from 'jotai/utils'

const SEARCH_HISTORY = 'SEARCH_HISTORY'

export const searchHistoryAtom = atomWithStorage(SEARCH_HISTORY, [])
