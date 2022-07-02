import Link from 'next/link'
import clsx from 'clsx'
import Header from '../../Header'
import Count from '../shared/Count'
import Price from '../shared/Price'
import Photo from '../shared/Photo'
import { getTimeFromNow } from '../../../utils'
import SelectRegion from '../../Header/components/Select/Region'
import SelectCategory from '../../Header/components/Select/Category'
import Sticky from '../../Sticky'
import Progress from '../../Progress'
import { LoadMore } from '../shared/LoadMore/LoadMore'
import useArticles from './useArticles'

function Articles() {
  const { data, isValidating, size, setSize, mutate } = useArticles()

  return (
    <>
      <Progress isLoading={isValidating} />
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
                          'flex h-[80px] bg-stone-800/90 rounded-lg mt-4 overflow-hidden',
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
                              {data.display_location_name} /{' '}
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
      <LoadMore
        isValidating={isValidating}
        handleSize={() => setSize(size + 1)}
      />
    </>
  )
}

export default Articles
