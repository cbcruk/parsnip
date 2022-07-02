import { NextApiHandler } from 'next'
import { getCategories } from '../../../lib/daangn'

const categories: NextApiHandler = async (req, res) => {
  const data = await getCategories({ kind: req.query.kind as string[] })

  res.json(data)
}

export default categories
