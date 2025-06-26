import zhCNData from '~/locales/zh-CN.js';
import enUSData from '~/locales/en-US.js';

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'zh',
  locale: 'zh',
  messages: {
    'en': enUSData,
    'zh': zhCNData
  }
}));
