import { getCategories } from '../../../lib/daangn'

async function categories(req, res) {
  const data = await getCategories({ kind: req.query.kind })

  res.json(data)
}

export default categories
