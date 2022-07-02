import { isBrowser } from './isBrowser'

export function getLocalStorageItem<T>(key: string, defaultValue: T | any) {
  return isBrowser()
    ? JSON.parse(localStorage.getItem(key) || '') || defaultValue
    : defaultValue
}
