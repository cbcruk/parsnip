import { NextApiHandler } from 'next'
import { getFeeds } from '../../../lib/daangn'
import { getQueryString } from '../../../utils'

const feeds: NextApiHandler = async (req, res) => {
  const data = await getFeeds({ query: getQueryString(req.query) })

  res.json(data)
}

export default feeds
