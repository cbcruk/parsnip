import { HEADERS } from '../constants'
import { QueryString } from '../utils/getQueryString'

type Params = {
  query: QueryString
}

export async function getFeeds({ query }: Params) {
  const response = await fetch(
    `${process.env.FEEDS_API_URL}/feeds/home?${query}`,
    {
      headers: HEADERS,
    }
  )
  const data = await response.json()

  return data
}
