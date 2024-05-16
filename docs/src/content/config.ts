import { docsSchema } from '@astrojs/starlight/schema'
import { pageSchema } from '@fullui/ui'
import { defineCollection } from 'astro:content'

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  pages: defineCollection({
    type: 'content',
    schema: pageSchema(),
  }),
  layouts: defineCollection({
    type: 'data',
    schema: pageSchema(),
  }),
  contact: defineCollection({
    type: 'content',
    schema: pageSchema(),
  }),
  aanbod: defineCollection({
    type: 'content',
    schema: pageSchema(),
  }),
  sections: defineCollection({
    type: 'data',
    schema: pageSchema(),
  }),
  reviews: defineCollection({
    type: 'content',
    schema: pageSchema(),
  }),
  team: defineCollection({
    type: 'content',
    schema: pageSchema(),
  }),
}
