export function getQueryString(query: Record<string, any>) {
  const params = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      params.append(key, value)
    }
  })

  return params.toString()
}

export type QueryString = ReturnType<typeof getQueryString>
