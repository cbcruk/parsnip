function getParams(query) {
  const params = new URLSearchParams()
  const { latLng, keyword } = query

  if (keyword) {
    params.set('keyword', keyword)
  }

  if (latLng) {
    params.set('latLng', latLng)
  }

  return params.toString()
}

async function region(req, res) {
  const response = await fetch(
    `${process.env.REGIONS_API_URL}/regions/search?${getParams(req.query)}`
  )
  const data = await response.json()

  res.json(data)
}

export default region
