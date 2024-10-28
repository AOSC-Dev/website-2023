// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/download': { swr: 300 },
    '/news/detail/**': { prerender: true }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-monaco-editor'
  ],
  css: ['~/assets/css/main.css'],
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
