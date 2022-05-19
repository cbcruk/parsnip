import { getArticles } from '../../../lib/daangn'
import { getQueryString } from '../../../utils'

async function articles(req, res) {
  const qs = getQueryString({
    include: 'first_image',
    'interests[position]': '1',
    limit: '20',
    range: 'adjacent',
    ...req.query,
  })
  const data = await getArticles(qs)

  res.json(data)
}

export default articles
