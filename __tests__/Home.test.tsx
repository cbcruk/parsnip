import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

test('Home', () => {
  render(
    <RouterContext.Provider
      value={
        {
          query: {},
        } as NextRouter
      }
    >
      <Home />
    </RouterContext.Provider>
  )

  const main = screen.getByTestId('main')
  expect(main).toBeDefined()
})
