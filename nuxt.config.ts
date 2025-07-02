// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  // extends: '@nuxt-themes/docus',

  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-monaco-editor',
    '@nuxtjs/i18n',
    '@nuxt/icon'
  ],

  devtools: { enabled: true },
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
          target: 'http://localhost:46203',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pasteApi/, '')
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: true
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
