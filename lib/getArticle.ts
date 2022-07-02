import { HEADERS } from '../constants'
import { getQueryString } from '../utils'

export const DEFAULT_ARTICLE_PARAMS = getQueryString({
  feed_visible: 1,
  include: `user,first_image,images,is_watched_by_me,reviews,is_chat_room_opened_by_me,is_offered_by_me,recommend,user_articles,advertisement_status,user_flagged_by_me,chat_user_ids,is_republication_available,offers_count,offerable,buyer`,
})

export async function getArticle(articleId: string) {
  const response = await fetch(
    `${process.env.ARTICLE_API_URL}/${articleId}.json?${DEFAULT_ARTICLE_PARAMS}`,
    {
      headers: HEADERS,
    }
  )
  const data = await response.json()

  return data
}
