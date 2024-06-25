import { defineCollection, z } from 'astro:content'

const componentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    props: z
      .object({
        name: z.string(),
        options: z.array(z.any()).optional(),
        value: z.string().optional(),
      })
      .array(),
  }),
})

export const collections = {
  components: componentsCollection,
}
