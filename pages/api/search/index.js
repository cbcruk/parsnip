import { getSearchFleaMarket } from '../../../lib/daangn'

async function search(req, res) {
  const data = await getSearchFleaMarket({
    ...req.query,
  })

  res.json(data)
}

export default search
