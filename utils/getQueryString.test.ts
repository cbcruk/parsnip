import { expect, test } from 'vitest'
import { getQueryString } from './getQueryString'

test('getQueryString', () => {
  expect(
    getQueryString({
      a: 1,
    })
  ).toBe('a=1')

  expect(getQueryString({})).toBe('')
})
