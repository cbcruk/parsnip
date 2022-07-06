import { expect, test } from 'vitest'
import { getUrlSearch } from './getUrlSearch'

test('getUrlSearch', () => {
  const urlSearch = getUrlSearch({
    a: '1',
  })({
    b: '2',
  })

  expect(urlSearch).toMatchInlineSnapshot('"a=1&b=2"')
})
