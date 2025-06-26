import { defineCollection, defineContentConfig, z } from '@nuxt/content';

const newsSchema = z.object({
  title: z.string(),
  date: z.date(),
  categories: z.array(z.string()),
  important: z.optional(z.boolean()),
  home: z.optional(z.boolean())
});

export default defineContentConfig({
  collections: {
    zh: defineCollection({
      source: {
        include: 'zh/**',
        prefix: '/' // prefixes handled by @nuxtjs/i18n
      },
      type: 'page',
      schema: newsSchema
    }),
    en: defineCollection({
      source: {
        include: 'en/**',
        prefix: '/'
      },
      type: 'page',
      schema: newsSchema
    })
  }
});
