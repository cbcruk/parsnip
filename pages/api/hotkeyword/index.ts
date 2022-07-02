import { NextApiHandler } from 'next'
import { getHotKeyword } from '../../../lib/daangn'
import { Query } from '../../../lib/getHotKeyword'

const search: NextApiHandler = async (req, res) => {
  const data = await getHotKeyword({
    ...(req.query as Query),
  })

  res.json(data)
}

export default search
