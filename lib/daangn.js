import { HEADERS } from '../constants'
import { getQueryString } from '../utils'

export async function getFeeds({ query }) {
  const response = await fetch(
    `${process.env.FEEDS_API_URL}/feeds/home?${query}`,
    {
      headers: HEADERS,
    }
  )
  const data = await response.json()

  return data
}

export async function getAllFeeds() {
  const feeds = []
  const page = { next: '' }

  do {
    const data = await getFeeds(page.next)
    feeds.push(data.feeds)
    page.next = data.meta.pagination.next
  } while (feeds.length < 5)

  return feeds
}

export async function getCategories({ kind = ['flea_market'] }) {
  const response = await fetch(process.env.CATEGORIES_API_URL, {
    headers: HEADERS,
  })
  const data = await response.json()

  return data.categories
    .filter((category) => {
      const isMultiple = Array.isArray(kind)

      return isMultiple ? kind.includes(category.kind) : kind === category.kind
    })
    .map(({ id, name, icon_image }) => {
      return {
        id,
        name,
        icon_image,
      }
    })
}

export async function getArticles(search) {
  const response = await fetch(`${process.env.ARTICLES_API_URL}?${search}`, {
    headers: HEADERS,
  })
  const data = await response.json()

  return data
}

const DEFAULT_ARTICLE_PARAMS = getQueryString({
  feed_visible: 1,
  include: `user,first_image,images,is_watched_by_me,reviews,is_chat_room_opened_by_me,is_offered_by_me,recommend,user_articles,advertisement_status,user_flagged_by_me,chat_user_ids,is_republication_available,offers_count,offerable,buyer`,
})

export async function getArticle(articleId) {
  const response = await fetch(
    `${process.env.ARTICLE_API_URL}/${articleId}.json?${DEFAULT_ARTICLE_PARAMS}`,
    {
      headers: HEADERS,
    }
  )
  const data = await response.json()

  return data
}
