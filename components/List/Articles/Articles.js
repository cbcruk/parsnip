import Link from 'next/link'
import clsx from 'clsx'
import Header from '../../Header'
import Count from '../shared/Count'
import Price from '../shared/Price'
import Photo from '../shared/Photo'
import useArticles from './useArticles'
import { getTimeFromNow } from '../../../utils'
import SelectRegion from '../../Header/components/Select/Region'
import SelectCategory from '../../Header/components/Select/Category'
import Sticky from '../../Sticky'

function Articles() {
  const { data, isValidating, size, setSize, mutate } = useArticles()

  return (
    <>
      <Sticky>
        <Header
          handleRefresh={async () => {
            await setSize(1)
            await mutate()
            window.scroll(0, 0)
          }}
        />
      </Sticky>
      <div className="sticky top-[64px] z-10 flex items-center gap-2 p-4 bg-stone-900/90 backdrop-blur-sm">
        <SelectRegion />
        <SelectCategory />
      </div>
      <div className="px-4">
        {data?.map((response, index) => {
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
                        className={clsx(
                          'flex h-[80px] bg-stone-800/90 rounded-2xl mt-4 overflow-hidden',
                          {
                            'opacity-50': data.status === 'closed',
                          }
                        )}
                      >
                        <Photo src={data?.first_image?.file} />
                        <div className="px-4 py-2 overflow-hidden">
                          <div className="flex items-center gap-1">
                            <h3 className="relative font-500 truncate">
                              {data.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-1 text-sm truncate">
                            {data.status !== 'ongoing' && (
                              <span
                                className={clsx(
                                  `px-1 rounded-full text-xs text-stone-900`,
                                  {
                                    'bg-emerald-600 ': ['reserved'].includes(
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
                            <span className="text-xs text-stone-400">
                              {data.location_name} /{' '}
                              {getTimeFromNow(data.published_at)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mt-[4px] text-xs text-stone-500">
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
      </div>
      <div className="p-4">
        <button
          suppressHydrationWarning
          disabled={isValidating}
          className="w-full h-9 p-1 rounded-full bg-indigo-500 text-indigo-200 text-sm font-bold"
          onClick={() => setSize(size + 1)}
        >
          {isValidating ? '로딩중...' : '더보기'}
        </button>
      </div>
    </>
  )
}

export default Articles
