import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'element-plus/dist/index.css';
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import './css/index.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import {
  BiChevronDoubleUp,
  BiChevronDoubleDown,
  BiChevronBarUp,
  BiChevronDoubleRight,
  HiSolidExternalLink,
  IoCloseCircleOutline,
  MdDeleteforeverOutlined,
  FaCopy,
} from 'oh-vue-icons/icons';

// prismjs
import Prism from 'prismjs';
import AppLink from './components/AppLink.vue';
import router from './router';
import App from './App.vue';

// highlightjs
import 'highlight.js/styles/stackoverflow-light.css';
// import hljs from 'highlight.js/lib/core';
import './utils/highlightjs';

addIcons(
  BiChevronDoubleUp,
  BiChevronDoubleDown,
  BiChevronBarUp,
  BiChevronDoubleRight,
  HiSolidExternalLink,
  IoCloseCircleOutline,
  MdDeleteforeverOutlined,
  FaCopy,
);

VMdPreview.use(vuepressTheme, {
  Prism,
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(VueMonacoEditorPlugin, {
  paths: {
    // The recommended CDN config
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs',
  },
});
app.component('v-icon', OhVueIcon);
app.component('AppLink', AppLink);
app.use(router);
app.use(pinia);
app.use(VMdPreview);
app.mount('#app');
