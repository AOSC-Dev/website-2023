import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import './css/index.scss';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChevronDoubleUp, BiChevronDoubleDown, BiChevronBarUp, BiChevronDoubleRight, HiSolidExternalLink, IoCloseCircleOutline, MdDeleteforeverOutlined } from "oh-vue-icons/icons";

addIcons(BiChevronDoubleUp, BiChevronDoubleDown, BiChevronBarUp, BiChevronDoubleRight, HiSolidExternalLink, IoCloseCircleOutline, MdDeleteforeverOutlined);

// prismjs
import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
  Prism,
});



// highlightjs
import 'highlight.js/styles/stackoverflow-light.css'
// import hljs from 'highlight.js/lib/core';
import './utils/highlightjs'


const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // The recommended CDN config
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs'
  },
})
app.component("v-icon", OhVueIcon);
app.use(router)
app.use(VMdPreview)
app.mount('#app')
