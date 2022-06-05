import categories from './data.json'

export const HEADERS = {
  'x-auth-token': process.env.AUTH_TOKEN,
  'x-user-agent': process.env.USER_AGENT,
}

export const CATEGORIES = categories
