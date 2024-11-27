// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-monaco-editor',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css', '~/assets/index.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  content: {
    documentDriven: false,
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        sepia: 'monokai'
      }
    }
  },
  i18n: {
    vueI18n: '~/plugins/i18n.config.ts',
    strategy: 'prefix_and_default',
    defaultLocale: 'zh-cn',
    locales: [
      {
        code: 'en-us',
        language: 'en-US'
      },
      {
        code: 'zh-cn',
        language: 'zh-CN'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  extends: '@nuxt-themes/docus',
  vite: {
    server: {
      proxy: {
        '/pasteApi': {
          target: 'http://localhost:46203',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pasteApi/, '')
        }
      }
    }
  }
});
