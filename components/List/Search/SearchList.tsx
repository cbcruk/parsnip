import Link from 'next/link'
import { ReactNode } from 'react'
import { CATEGORIES } from '../../../constants'
import { getTimeFromNow } from '../../../utils'
import { useSearch } from './useSearch'

type Props = {
  data: ReturnType<typeof useSearch>['data']
  children: ReactNode
}

export function SearchList({ data, children }: Props) {
  return (
    <div className="px-4 pb-4">
      {data?.map((response, index) => {
        return (
          <div key={`docsList-${index}`}>
            {response.docsList.map((doc) => {
              return (
                <Link key={doc.id} href={`/articles/${doc.id}`}>
                  <a>
                    <div className="p-4 bg-stone-800/90 mb-4 rounded-2xl">
                      <div className="flex justify-between">
                        <div className="overflow-hidden pr-4">
                          <div className="font-bold">{doc.title}</div>
                          <div className="mt-2 text-sm line-clamp">
                            {doc.content}
                          </div>
                        </div>
                        <img
                          src={doc.thumbnail}
                          alt=""
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="inline-flex py-2 px-3 rounded-xl bg-stone-700 mt-4 text-xs">
                        {[
                          CATEGORIES[doc.categoryId]?.name,
                          doc.regionName,
                          getTimeFromNow(doc.createdAt * 1000),
                        ].join(' • ')}
                      </div>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        )
      })}

      {children}
    </div>
  )
}
