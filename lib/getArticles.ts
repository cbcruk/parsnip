import { HEADERS } from '../constants'
import { QueryString } from '../utils/getQueryString'

export async function getArticles(search: QueryString) {
  const response = await fetch(`${process.env.ARTICLES_API_URL}?${search}`, {
    headers: HEADERS,
  })
  const data = await response.json()

  return data
}
