import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import Header from './Header'

test('Header', () => {
  const handleRefresh = vi.fn()

  render(<Header handleRefresh={handleRefresh} />)

  const header = screen.getByTestId('Header')
  const headerWithIn = within(header)
  expect(header).toBeDefined()

  const button = headerWithIn.getByTestId('Header-refresh-button')
  fireEvent.click(button)
  expect(handleRefresh).toBeCalled()
})
