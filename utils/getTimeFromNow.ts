import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.locale('ko')
dayjs.extend(relativeTime)

export function getTimeFromNow(time: string | number) {
  if (time === '') {
    return ''
  }

  return dayjs(time).fromNow()
}
