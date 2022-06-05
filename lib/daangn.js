import proto from 'protobufjs'
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

const GET_CATEGORIES_DEFAULT_PARAMS = { kind: ['flea_market'] }

export async function getCategories({
  kind = [],
} = GET_CATEGORIES_DEFAULT_PARAMS) {
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

export async function getSearchFleaMarket(params) {
  const SearchFleaMarket = await proto.load('lib/SearchFleaMarket.proto')
  const requestMessage = SearchFleaMarket.Request.create({
    name: 8,
    searchFleaMarketRequest: {
      ...params,
    },
  })
  const buffer = SearchFleaMarket.Request.encode(requestMessage).finish()
  const response = await fetch(process.env.SEARCH_API_URL, {
    method: 'POST',
    body: buffer,
    headers: {
      'content-type': 'application/protobuf',
    },
  })
  const responseMessage = SearchFleaMarket.Response.decode(
    new Uint8Array(await response.arrayBuffer())
  )
  const { searchFleaMarketResponse } = SearchFleaMarket.Response.toObject(
    responseMessage,
    {
      enums: String,
      longs: String,
      bytes: String,
      defaults: true,
      arrays: true,
      objects: true,
      oneofs: true,
    }
  )
  const docsList = searchFleaMarketResponse?.docsList ?? []

  return {
    docsList: docsList.map((doc) => {
      const {
        categoryId,
        content,
        title,
        id,
        createdAt,
        publishedAt,
        firstImage,
        regionName,
        watchesCount,
        chatRoomsCount,
      } = doc

      return {
        categoryId,
        content,
        title,
        id,
        regionName,
        watchesCount,
        chatRoomsCount,
        createdAt: createdAt?.seconds,
        publishedAt: publishedAt?.seconds,
        thumbnail: firstImage?.thumbnail,
      }
    }),
    nextPageToken: searchFleaMarketResponse?.nextPageToken ?? null,
  }
}

export async function getHotKeyword(query) {
  const qs = getQueryString({
    ...query,
    size: 30,
  })
  const response = await fetch(
    `${process.env.SEARCH_API_V2_URL}/hotkeyword?${qs}`
  )
  const data = await response.json()

  return data
}
