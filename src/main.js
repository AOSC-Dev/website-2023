import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import './css/index.scss';
import './css/code-highlight.scss';
import './css/element-plus.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import AppLink from './components/AppLink.vue';
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
  MdArrowdropdown
} from 'oh-vue-icons/icons';

addIcons(
  BiChevronDoubleUp,
  BiChevronDoubleDown,
  BiChevronBarUp,
  BiChevronDoubleRight,
  HiSolidExternalLink,
  IoCloseCircleOutline,
  MdDeleteforeverOutlined,
  FaCopy,
  MdArrowdropdown
);

// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';
// import 'highlight.js';
// VMdPreview.use(githubTheme, { Hljs:hljs });

// prismjs
import Prism from 'prismjs';
VMdPreview.use(vuepressTheme, { Prism });

// copy code
VMdPreview.use(createCopyCodePlugin());

// highlightjs
import 'highlight.js/styles/stackoverflow-light.css';
// import hljs from 'highlight.js/lib/core';
import './utils/highlightjs';
import hljs from 'highlight.js';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(VueMonacoEditorPlugin, {
  paths: {
    // The recommended CDN config
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs'
  }
});
app.component('VIcon', OhVueIcon);
app.component('AppLink', AppLink);
app.use(router);
app.use(pinia);
app.use(VMdPreview);
app.mount('#app');
