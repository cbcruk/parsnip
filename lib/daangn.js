import { HEADERS } from '../constants'

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
