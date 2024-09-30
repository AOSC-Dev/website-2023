import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueMonacoEditorPlugin)
  })