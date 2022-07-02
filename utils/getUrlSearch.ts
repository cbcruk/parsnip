type Params = Record<string, string> | undefined

export function getUrlSearch(nextParams: Params) {
  return (params?: Params) => {
    const searchParams = new URLSearchParams()
    const extendedParams = {
      ...nextParams,
      ...params,
    }

    Object.entries(extendedParams).forEach(([key, value]) => {
      if (value) {
        searchParams.append(key, value)
      }
    })

    return searchParams.toString()
  }
}
