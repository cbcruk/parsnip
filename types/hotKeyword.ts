export interface HotKeywordResponse {
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
