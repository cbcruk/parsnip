import { HEADERS } from '../../../constants'

function getParams(query) {
  const params = new URLSearchParams()
  const { page, regionId, maxPublishedAt = '' } = query

  params.set('range', 'my')
  params.set('feedSize', 15)
  params.set('page', page || 1)

  if (regionId) {
    params.set('regionId', regionId)
  }

  if (maxPublishedAt) {
    params.set('maxPublishedAt', maxPublishedAt)
  }

  return params.toString()
}

async function feeds(req, res) {
  const response = await fetch(
    `${process.env.FEEDS_API_URL}/feeds/home?${getParams(req.query)}`,
    {
      headers: HEADERS,
    }
  )
  const data = await response.json()

  res.json(data)
}

export default feeds
