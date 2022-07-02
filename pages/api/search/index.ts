import { NextApiHandler } from 'next'
import { getSearchFleaMarket } from '../../../lib/daangn'

const search: NextApiHandler = async (req, res) => {
  const data = await getSearchFleaMarket({
    regionId: parseInt(req.query?.regionId as string, 10),
    query: req.query?.query as string,
  })

  res.json(data)
}

export default search
