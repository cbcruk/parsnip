function getPriceText(value) {
  if (value === 0) {
    return '무료나눔'
  }

  if (!value) {
    return null
  }

  return value.toLocaleString() + '원'
}

function Price({ value }) {
  return <span className="font-bold">{getPriceText(value)}</span>
}

export default Price
