import { NextApiHandler, NextApiRequest } from 'next'

function getParams(query: NextApiRequest['query']) {
  const params = new URLSearchParams()
  const { latLng, keyword } = query

  if (keyword) {
    params.set('keyword', keyword as string)
  }

  if (latLng) {
    params.set('latLng', latLng as string)
  }

  return params.toString()
}

const region: NextApiHandler = async (req, res) => {
  const response = await fetch(
    `${process.env.REGIONS_API_URL}/regions/search?${getParams(req.query)}`
  )
  const data = await response.json()

  res.json(data)
}

export default region
