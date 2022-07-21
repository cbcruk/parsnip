import { HEADERS } from '../constants'
import { getQueryString } from '../utils'

export type Query = { region_id: string }

export interface Response {
  query_info: QueryInfo
  keyword: Keyword[]
}

export interface QueryInfo {
  test_group: string
  request_size: number
  request_region_id: number
  response_size: number
  response_region_id: number
  request_source: string
}

export interface Keyword {
  label: string
  score: number
  source: string
}

export async function getHotKeyword(query: Query) {
  const qs = getQueryString({
    ...query,
    user_id: process.env.USER_ID,
    size: 30,
  })
  const response = await fetch(
    `${process.env.SEARCH_API_V2_URL}/hotkeyword?${qs}`,
    {
      headers: {
        'x-search-auth-token': HEADERS['x-auth-token'],
      },
    }
  )
  const data: Response = await response.json()

  return data
}
