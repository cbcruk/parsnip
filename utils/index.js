import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.locale('ko')
dayjs.extend(relativeTime)

export function isBrowser() {
  return typeof window !== 'undefined'
}

export function getGeolocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      })
    } else {
      reject('위치정보 사용 불가능')
    }
  })
}

export function getLocalStorageItem(key, defaultValue) {
  return isBrowser()
    ? JSON.parse(localStorage.getItem(key)) || defaultValue
    : defaultValue
}

export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getTimeFromNow(time) {
  return dayjs(time).fromNow()
}

export function getParams(query) {
  const params = new URLSearchParams()
  const { page, regionId, maxPublishedAt = '' } = query

  params.set('range', 'my')
  params.set('feedSize', 15)
  params.set('page', page || 1)

  if (regionId) {
    params.set('regionId', regionId)
  }

  if (maxPublishedAt) {
    params.set('maxPublishedAt', maxPublishedAt)
  }

  return params.toString()
}
