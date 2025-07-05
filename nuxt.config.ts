// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      title: '社区门户',
      templateParams: {
        separator: '|'
      }
    }
  },

  site: {
    name: '安同开源社区 (AOSC)'
  },

  seo: {
    meta: {
      description:
        '安同开源社区（Anthon Open Source Community，简称 AOSC）是一个由计算机爱好者志愿组织工作，主要活动于线上的开源社区。',
      twitterCreator: '@aosc_dev_cn'
    }
  },

  ogImage: {
    fonts: ['Noto+Sans+SC:400']
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
        code: 'en',
        language: 'en-US'
      },
      {
        code: 'zh',
        language: 'zh-CN'
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
