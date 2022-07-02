import { HEADERS } from '../constants'

export interface Response {
  categories: Category[]
}

export interface Category {
  id: number
  name: string
  icon_image: string
  thumbnail: string
  kind: string
  target_uri: string
}

export const GET_CATEGORIES_DEFAULT_PARAMS = { kind: ['flea_market'] }

export async function getCategories({
  kind = [],
} = GET_CATEGORIES_DEFAULT_PARAMS) {
  const response = await fetch(process.env.CATEGORIES_API_URL as string, {
    headers: HEADERS,
  })
  const data: Response = await response.json()

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
