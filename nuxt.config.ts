// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
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
  colorMode: {  // TODO: implement dark mode
    preference: 'light'
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
  compatibilityDate: '2024-04-03',
  vite: {
    plugins: [tailwindcss()],
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
  i18n: {
    vueI18n: '~/i18n.config.ts',
    strategy: 'prefix_except_default',
    defaultLocale: 'zh-cn',
    skipSettingLocaleOnNavigate: true,
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
  pinceau: {
    preflight: false
  },
});
