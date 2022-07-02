export interface ArticleResponse {
  article: Article
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
  next_available_republication_time: string
  is_republication_available: boolean
  unavailable_republication_code: string
  watches_count: number
  status: string
  status_name: string
  price: string
  display_region_name: string
  user: User
  content: string
  first_image: FirstImage
  images: Image[]
  is_watched_by_me: boolean
  is_unpublished: boolean
  published_at: string
  published_at_f: number
  offerable: boolean
  offer_enabled: boolean
  permalink: string
  is_chat_available: boolean
  is_offered_by_me: boolean
  reviews_with_user_id: any[]
  reads_count: number
  user_articles: any[]
  article_property_contents: any[]
  recommend: Recommend
  lined_up_user_ids: any[]
  chat_user_ids: any[]
  reserved_user_id: any
  free_share_event_enabled: boolean
  bids_count: number
  bid_user_ids: any[]
  price_free_text_for_event: any
  offers_count: number
  buyer_id: any
  buyer_status: string
}

export interface User {
  display_location_name: string
  id: number
  identity: number
  nickname: string
  profile_image: string
  status: string
  destroyed_at: any
  user_flagged_by_me: any[]
  temperature: number
  profile_large_image: string
  has_profile_image_set: boolean
  bio: any
  account_type: string
  about_me: any
  about_me_left: any
  about_me_right: any
  can_use_about_me: boolean
}

export interface FirstImage {
  width: number
  height: number
  id: number
  picture_id: string
  file: string
}

export interface Image {
  width: number
  height: number
  id: number
  picture_id: string
  file: string
}

export interface Recommend {
  title: string
  key: string
  articles: Article[]
}

export interface Article {
  id: number
  type: string
  title: string
  category_id: number
  status: string
  status_name: string
  content: string
  region_id: number
  first_image: FirstImage2
  price: string
  price_free_text_for_event: any
}

export interface FirstImage2 {
  width: number
  height: number
  id: number
  picture_id: string
  file: string
}
