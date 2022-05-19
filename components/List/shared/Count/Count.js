const LABEL = {
  comment: '댓글',
  chat: '채팅',
  watch: '관심',
  like: '좋아요',
  read: '조회',
}

function Count({ items }) {
  return items
    .filter((item) => Boolean(item.value))
    .map((item) => `${LABEL[item.type]} ${item.value}`)
    .join(' ∙ ')
}

export default Count
