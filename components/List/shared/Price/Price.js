function getPriceText(value) {
  const intValue = parseFloat(value)

  if (intValue === 0) {
    return '무료나눔'
  }

  if (!intValue) {
    return null
  }

  return intValue.toLocaleString() + '원'
}

function Price({ value }) {
  return <span className="font-bold">{getPriceText(value)}</span>
}

export default Price
