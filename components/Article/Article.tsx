import { ArticleResponse } from '../../types/article'
import { getAnchormeString, getTimeFromNow } from '../../utils'
import Count from '../List/shared/Count/Count'
import Price from '../List/shared/Price'

type Props = {
  article: ArticleResponse['article']
}

function Article({ article }: Props) {
  const { user } = article

  return (
    <main className="p-4" data-testid="Article">
      <div className="flex gap-4 overflow-x-auto">
        {article.images.map((image) => (
          <img
            key={image.id}
            src={image.file}
            alt=""
            className="w-96 h-96 object-cover rounded-2xl"
          />
        ))}
      </div>

      <div className="flex items-center justify-between py-4 border-b border-stone-600">
        <div className="flex items-center gap-2">
          <img
            src={user.profile_image}
            alt=""
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          <div className="text-sm">
            <div className="font-bold">{user.nickname}</div>
            <div className="text-xs">{article.display_region_name}</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="relative">{user.temperature}°C</div>
          <div className="overflow-hidden relative h-1 rounded-full bg-gray-300">
            <div
              className="absolute top-0 left-0 h-full bg-gray-600"
              style={{
                width: `${user.temperature}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-lg font-bold">{article.title}</h2>
        <div className="py-2 text-xs text-gray-400">
          {article.category_name} ∙ {getTimeFromNow(article.updated_at)}
        </div>

        <p
          className="py-4 whitespace-pre-line break-words"
          dangerouslySetInnerHTML={{
            __html: getAnchormeString(article.content),
          }}
        />

        <div className="text-xs text-gray-500">
          <Count
            items={[
              { type: 'comment', value: article.comments_count },
              { type: 'chat', value: article.chat_rooms_count },
              { type: 'watch', value: article.watches_count },
              { type: 'like', value: article.likes_count },
              { type: 'read', value: article.reads_count },
            ]}
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-4 border-t border-stone-600">
        <div className="relative">
          <Price value={article.price} />
          <div className="text-xs text-gray-400">
            {article.offerable ? '가격제안가능' : '가격제안불가'}
          </div>
        </div>
        <div className="p-2 px-4 rounded-full border border-stone-600 text-sm">
          {article.status_name}
        </div>
      </div>
    </main>
  )
}

export default Article
