export interface ArticlesResponse {
  articles: Article[]
  meta: Meta
}

export interface Article {
  display_location_name: string
  id: number
  type: string
  title: string
  created_at: string
  updated_at: string
  destroyed_at: any
  comments_count: number
  likes_count: number
  images_count: number
  chat_rooms_count: number
  region_id: number
  user_id: number
  category_id: number
  category_name: string
  visible: boolean
  republish_count: number
  chat_enabled: boolean
  comment_enabled: boolean
  business_phone: any
  user_publish_range: string
  extra_description: any
  target_uri: any
  ad_cta: any
  smb_id: any
  group_id: any
  watches_count: number
  status: string
  status_name: string
  price: string
  display_region_name: string
  content: string
  first_image: FirstImage
  is_unpublished: boolean
  published_at: string
  published_at_f: number
  permalink: string
  is_chat_available: boolean
  reads_count: number
  article_property_contents: any[]
  reserved_user_id: any
  free_share_event_enabled: boolean
  bids_count: number
  bid_user_ids: any[]
  price_free_text_for_event: any
}

export interface FirstImage {
  width: number
  height: number
  id: number
  picture_id: string
  file: string
}

export interface Meta {
  recommend_index: any
  recommended_ids: any
  max_published_at_f: number
  total_count: number
}
