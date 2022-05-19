import { getArticle } from '../../../lib/daangn'

async function article(req, res) {
  const id = req.query.id
  const response = await getArticle(id)
  const data = await response.json()

  res.json(data)
}

export default article
