import zhCNData from '~/locales/zh-CN.js';
import enUSData from '~/locales/en-US.js';

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'zh-cn',
  locale: 'zh-cn',
  messages: {
    'en-us': enUSData,
    'zh-cn': zhCNData
  }
}));
