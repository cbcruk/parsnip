import Link from 'next/link'
import clsx from 'clsx'
import Count from '../shared/Count'
import Price from '../shared/Price'
import Photo from '../shared/Photo'
import useArticles from './useArticles'
import { getTimeFromNow } from '../../../utils'

function Articles() {
  const { data, isValidating, size, setSize } = useArticles()

  if (!data) {
    return null
  }

  return (
    <>
      {data.map((response, index) => {
        return (
          <div key={index} id={`articles-${index}`}>
            {response.articles.map((data) => {
              if (!['FleaMarketArticle'].includes(data.type)) {
                return null
              }

              return (
                <Link key={data.id} href={`/articles/${data.id}`}>
                  <a>
                    <div
                      className={clsx('flex p-4 border-t border-b', {
                        'opacity-50': data.status === 'closed',
                      })}
                    >
                      <Photo src={data?.first_image?.file} />
                      <div className="ml-4">
                        <div className="flex items-center gap-1">
                          <h3 className="relative">{data.title}</h3>
                          <span className="text-xs text-gray-400">
                            {data.location_name} /{' '}
                            {getTimeFromNow(data.published_at)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          {data.status !== 'ongoing' && (
                            <span
                              className={clsx(
                                `px-1 rounded text-xs text-white`,
                                {
                                  'bg-green-600': ['reserved'].includes(
                                    data.status
                                  ),
                                  'bg-zinc-600': ['closed'].includes(
                                    data.status
                                  ),
                                }
                              )}
                            >
                              {data.status_name}
                            </span>
                          )}
                          <Price value={data.price} />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Count
                            items={[
                              { type: 'comment', value: data.comments_count },
                              { type: 'chat', value: data.chat_rooms_count },
                              { type: 'watch', value: data.watches_count },
                              { type: 'like', value: data.likes_count },
                              { type: 'read', value: data.reads_count },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        )
      })}
      <div className="p-4">
        <button
          disabled={isValidating}
          className="w-full h-9 p-1 rounded bg-yellow-500 text-white text-sm font-bold"
          onClick={() => setSize(size + 1)}
        >
          {isValidating ? '로딩중...' : '더보기'}
        </button>
      </div>
    </>
  )
}

export default Articles
