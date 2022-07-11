import superjson from 'superjson'
import { createRouter } from '../createRouter'
import { hotkeywordRouter } from './hotkeyword'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('hotkeyword.', hotkeywordRouter)

export type AppRouter = typeof appRouter
