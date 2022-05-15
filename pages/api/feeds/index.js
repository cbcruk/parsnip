import { getFeeds } from '../../../lib/daangn'

function queryToString(query) {
  const searchParams = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    searchParams.append(key, value)
  })

  return searchParams.toString()
}

async function feeds(req, res) {
  const data = await getFeeds({ query: queryToString(req.query) })

  res.json(data)
}

export default feeds
