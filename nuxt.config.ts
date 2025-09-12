// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import { nuxtI18nLocales, nuxtI18nDefaultLocale } from './i18n/config';

export default defineNuxtConfig({
  site: {
    url: 'https://aosc.io'
  },

  // TODO: Fix generated schema.org fields
  schemaOrg: {
    enabled: false
  },

  // TODO: Make custom OpenGraph templates
  ogImage: {
    enabled: false
  },

  // TODO: Check links in content
  linkChecker: {
    enabled: false
  },

  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-monaco-editor',
    '@nuxtjs/i18n',
    '@nuxt/icon'
  ],

  icon: {
    mode: 'css',
    cssLayer: 'base'
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  css: ['~/assets/css/main.css', '~/assets/index.scss', '~/assets/theme.scss'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['ms-store-badge'].includes(tag)
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: {
            // Default theme (same as single string)
            default: 'github-light'
          }
        }
      }
    }
  },

  compatibilityDate: '2025-06-22',

  runtimeConfig: {
    public: {
      pasteApi: process.env.PASTE_API || 'https://paste.aosc.io'
    }
  },

  vite: {
    resolve: {
      alias: {
        // Workaround for form-data (axios)
        'form-data': 'form-data/lib/form_data.js'
      }
    },
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true // For heti
        }
      }
    },
    server: {
      proxy: {
        '/galleryFile': {
          target: 'https://aosc.io',
          changeOrigin: true
        },
        '/assets/news': {
          target: 'https://aosc.io',
          changeOrigin: true
        }
      }
    }
  },

  nitro: {
    prerender: {
      ignore: ['/paste/detail'],
      // https://github.com/nuxt/nuxt/issues/15462#issuecomment-2995718316
      autoSubfolderIndex: false
    }
  },

  i18n: {
    vueI18n: 'config.ts',
    strategy: 'prefix_except_default',
    defaultLocale: nuxtI18nDefaultLocale,
    locales: [...nuxtI18nLocales],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    // https://github.com/nuxt-modules/i18n/issues/3238#issuecomment-2672492536
    bundle: {
      optimizeTranslationDirective: false
    }
  }
});
