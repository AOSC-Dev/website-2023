import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    news: defineCollection({
      source: 'news/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
        date: z.date(),
        categories: z.array(z.string()),
        important: z.optional(z.boolean()),
        home: z.optional(z.boolean())
      })
    })
  }
});
