import { expect, test } from 'vitest'
import { getTimeFromNow } from './getTimeFromNow'

test('getTimeFromNow', () => {
  expect(getTimeFromNow('1985-03-01')).toMatchInlineSnapshot('"37년 전"')
  expect(getTimeFromNow('')).toMatchInlineSnapshot('""')
})
