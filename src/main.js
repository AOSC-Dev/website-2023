import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import './css/index.scss';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChevronDoubleUp, BiChevronDoubleDown } from "oh-vue-icons/icons";

addIcons(BiChevronDoubleUp, BiChevronDoubleDown);

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router)
app.use(VMdPreview)
app.mount('#app')
