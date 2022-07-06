import { expect, test } from 'vitest'
import { getAnchormeString } from './getAnchormeString'

test('anchorme', () => {
  const result = getAnchormeString('https://google.com')

  expect(result).toMatchSnapshot()
})
