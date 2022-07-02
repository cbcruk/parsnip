import path from 'path'
import proto from 'protobufjs'
import { IResponse } from './SearchFleaMarket_pb'

type Params = {
  regionId: number
  query: string
}

export async function getSearchFleaMarket(params: Params) {
  const SearchFleaMarket = await proto.load(
    path.join(process.cwd(), 'lib/SearchFleaMarket.proto')
  )
  const SearchFleaMarketRequest = SearchFleaMarket.lookupType('Request')
  const SearchFleaMarketResponse = SearchFleaMarket.lookupType('Response')

  const requestMessage = SearchFleaMarketRequest.create({
    name: 8,
    searchFleaMarketRequest: {
      ...params,
    },
  })
  const buffer = SearchFleaMarketRequest.encode(requestMessage).finish()
  const response = await fetch(process.env.SEARCH_API_URL as string, {
    method: 'POST',
    body: buffer,
    headers: {
      'content-type': 'application/protobuf',
    },
  })
  const responseMessage = SearchFleaMarketResponse.decode(
    new Uint8Array(await response.arrayBuffer())
  )
  const { searchFleaMarketResponse }: IResponse =
    SearchFleaMarketResponse.toObject(responseMessage, {
      enums: String,
      longs: String,
      bytes: String,
      defaults: true,
      arrays: true,
      objects: true,
      oneofs: true,
    })

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
