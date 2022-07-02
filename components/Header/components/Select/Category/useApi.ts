import useSWRImmutable from 'swr/immutable'

export function useApi() {
  const { data } = useSWRImmutable('/api/categories', (url) =>
    fetch(url).then((r) => r.json())
  )

  return data
}
