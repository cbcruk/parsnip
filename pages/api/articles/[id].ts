import { NextApiHandler } from 'next'
import { getArticle } from '../../../lib/daangn'

const article: NextApiHandler = async (req, res) => {
  const id = req.query.id
  const response = await getArticle(id as string)
  const data = await response.json()

  res.json(data)
}

export default article
