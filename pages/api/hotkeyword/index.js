import { getHotKeyword } from '../../../lib/daangn'

async function search(req, res) {
  const data = await getHotKeyword({
    ...req.query,
  })

  res.json(data)
}

export default search
