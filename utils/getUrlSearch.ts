import { getQueryString } from './getQueryString'

type Params = Record<string, string> | undefined

export function getUrlSearch(nextParams: Params) {
  return (params?: Params) => {
    const extendedParams = {
      ...nextParams,
      ...params,
    }

    return getQueryString(extendedParams)
  }
}
