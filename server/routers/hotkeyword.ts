import { z } from 'zod'
import { createRouter } from '../createRouter'

export const hotkeywordRouter = createRouter().query('all', {
  input: z.object({
    region_id: z.string(),
  }),
  resolve() {
    return []
  },
})
