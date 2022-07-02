export interface SearchResponse {
  docsList: DocsList[]
  nextPageToken: string
}

export interface DocsList {
  categoryId: number
  content: string
  title: string
  id: number
  regionName: string
  watchesCount: number
  chatRoomsCount: number
  createdAt: number
  publishedAt: number
  thumbnail: string
}
