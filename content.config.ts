import { defineCollection, defineContentConfig, z } from '@nuxt/content';

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.optional(z.date()),
  categories: z.optional(z.array(z.string())),
  important: z.optional(z.boolean()),
  home: z.optional(z.boolean()),
  tags: z.optional(z.array(z.string())),
  img: z.optional(z.string()),
});

export default defineContentConfig({
  collections: {
    zh: defineCollection({
      source: {
        include: 'zh/**',
        prefix: '/', // prefixes handled by @nuxtjs/i18n
        exclude: ['**/_*']
      },
      type: 'page',
      schema: contentSchema
    }),
    en: defineCollection({
      source: {
        include: 'en/**',
        prefix: '/',
        exclude: ['**/_*']
      },
      type: 'page',
      schema: contentSchema
    }),
    gallery: defineCollection({
      source: 'all/gallery.yml',
      type: 'data',
      schema: z.object({
        gallery: z.array(
          z.object({
            title: z.string(),
            album: z.array(
              z.object({ desc: z.string(), date: z.string(), file: z.string() })
            )
          })
        )
      })
    })
  }
});
