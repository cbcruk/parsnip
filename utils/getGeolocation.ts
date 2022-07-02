type Position = {
  lat: number
  lng: number
}

export function getGeolocation() {
  return new Promise<Position>((resolve, reject) => {
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
