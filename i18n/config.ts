// 用来存 i18n 相关的配置。基本是名称相关，剩下在 nuxt.config.ts

// 这个是给 Nuxt 配置里的 vueI18n 项用的
export default {
  fallbackLoacle: 'zh-cn'
}

export const nuxtI18nDefaultLocale = 'zh-cn'

// 这个非常的规律，但是动态生成的话 TypeScript 看不出来它很规律，暂时不太有想法
export const nuxtI18nLocales = [
  {
    code: 'zh-cn',
    language: 'zh-CN',
    name: '简体中文',
    contentCode: 'zhCN', // Nuxt Content
    file: 'zh-CN.js'
  },
  {
    code: 'en-us',
    language: 'en-US',
    name: 'English(en-US)',
    contentCode: 'enUS',
    file: 'en-US.js'
  }
] as const;

// 主要给 Nuxt Content 用的类型。因为它的 collection key 只支持符合变量名命名方式的格式
// 所以额外定义了一个 contentCode 作为它的 key。
export type NuxtI18nCode = (typeof nuxtI18nLocales)[number]['code'];

export type NuxtI18nContentCode =
  (typeof nuxtI18nLocales)[number]['contentCode'];
