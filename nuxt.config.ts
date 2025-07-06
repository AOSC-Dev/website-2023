// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  schemaOrg: {
    enabled: false
  },

  ogImage: {
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

  css: ['~/assets/css/main.css', '~/assets/index.scss'],

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
        '/pasteApi': {
          target: 'https://aosc.io',
          changeOrigin: true
        },
        '/pasteContent': {
          target: 'https://aosc.io',
          changeOrigin: true
        },
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

  i18n: {
    vueI18n: '~/i18n.config.ts',
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    locales: [
      {
        code: 'zh',
        language: 'zh-CN',
        name: '简体中文'
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English(en-US)'
      }
    ],
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
