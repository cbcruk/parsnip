import { NextApiHandler } from 'next'

const id: NextApiHandler = async (req, res) => {
  const response = await fetch(
    `${process.env.REGIONS_API_URL}/regions/${req.query.id}`
  )
  const data = await response.json()

  return res.json(data)
}

export default id
