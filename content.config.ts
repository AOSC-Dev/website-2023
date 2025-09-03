import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import type { DefinedCollection } from '@nuxt/content';
import { nuxtI18nLocales } from './i18n/config';
import type { NuxtI18nCode, NuxtI18nContentCode } from './i18n/config';

const pageSchama = z.object({
  title: z.string(),
  date: z.date(),
  categories: z.array(z.string()),
  important: z.optional(z.boolean()),
  home: z.optional(z.boolean())
});

const definePageCollection = (locale: NuxtI18nCode) =>
  defineCollection({
    source: {
      include: `${locale}/**`,
      prefix: '/', // prefixes are handled by @nuxtjs/i18n
      exclude: ['**/_*']
    },
    type: 'page',
    schema: pageSchama
  });

export default defineContentConfig({
  collections: {
    ...Object.fromEntries(
      nuxtI18nLocales.map((locale) => [
        locale.contentCode,
        definePageCollection(locale.code)
      ])
    ),
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
  } as { [key in NuxtI18nContentCode | 'gallery']: DefinedCollection }
});
