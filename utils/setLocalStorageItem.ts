export function setLocalStorageItem<T>(key: string, value: T | any) {
  localStorage.setItem(key, JSON.stringify(value))
}
