import { z } from 'zod'

export const pokemonSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(z.object({ name: z.string(), url: z.string() }))
})
