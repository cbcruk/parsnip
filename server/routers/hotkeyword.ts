import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { getHotKeyword } from '../../lib/getHotKeyword'
import { createRouter } from '../createRouter'

export const hotkeywordRouter = createRouter().query('all', {
  input: z.object({
    region_id: z.string().nullish(),
  }),
  async resolve({ input }) {
    const { region_id } = input

    if (!region_id) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
      })
    }

    const data = await getHotKeyword({ region_id })

    return data
  },
})
