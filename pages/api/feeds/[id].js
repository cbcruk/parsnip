import { HEADERS } from '../../../constants'

function getParams() {
  const params = new URLSearchParams()

  params.set('feed_visible', '1')
  params.set(
    'include',
    [
      'user',
      'first_image',
      'images',
      'is_watched_by_me',
      'reviews',
      'is_chat_room_opened_by_me',
      'is_offered_by_me',
      'user_articles',
      'advertisement_status',
      'chat_blocked',
      'user_flagged_by_me',
      'chat_user_ids',
    ].join(',')
  )

  return params.toString()
}

async function id(req, res) {
  const response = await fetch(
    `${process.env.MAIN_API_URL}/articles/${req.query.id}.json?${getParams()}`,
    {
      headers: HEADERS,
    }
  )
  const data = await response.json()

  res.json(data)
}

export default id
