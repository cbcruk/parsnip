import Link from 'next/link'
import clsx from 'clsx'
import { uniqBy } from 'lodash'
import { getTimeFromNow } from '../../utils'
import Count from './components/Count'
import Price from './components/Price'
import Photo from './components/Photo'
import Label from './components/Label'
import useFeeds from './useFeeds'

function Feeds() {
  const { data, size, setSize } = useFeeds()

  if (!data) {
    return null
  }

  const feeds = uniqBy(data.map(({ feeds }) => feeds).flat(), 'data.meta.id')

  return (
    <>
      {feeds.map(({ data, type }) => {
        if (type !== 'FleaMarketOverview') {
          return null
        }

        return (
          <Link key={data.meta.id} href={`/feeds/${data.meta.id}`}>
            <a>
              <div
                className={clsx('flex p-4 border-t	border-b', {
                  'opacity-50': data.meta.status === 'closed',
                })}
              >
                <Photo src={data.image} />
                <div className="ml-4">
                  <div className="flex items-center gap-1">
                    <h3 className="relative">{data.title}</h3>
                    <span className="text-xs text-gray-400">
                      {data.sub_title} / {getTimeFromNow(data.meta.extra.time)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Label status={data.meta.status} />
                    <Price value={data.price} />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Count items={data?.counts ?? []} />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
      <div className="p-4">
        <button
          className="w-full h-9 p-1 rounded bg-yellow-500 text-white text-sm font-bold"
          onClick={() => setSize(size + 1)}
        >
          더보기
        </button>
      </div>
    </>
  )
}

export default Feeds
