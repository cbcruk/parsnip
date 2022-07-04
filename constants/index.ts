import categories from './data.json'

type Category = {
  id: number
  name: string
  icon_image: string
}

export type CategorieType = Record<string, Category>

export const HEADERS = {
  'x-auth-token': process.env.AUTH_TOKEN || '',
  'x-user-agent': process.env.USER_AGENT || '',
}

export const CATEGORIES: CategorieType = categories
