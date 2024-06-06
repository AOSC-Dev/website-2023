import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import './css/index.scss';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChevronDoubleUp, BiChevronDoubleDown, BiChevronBarUp, BiChevronDoubleRight, HiSolidExternalLink, IoCloseCircleOutline } from "oh-vue-icons/icons";

addIcons(BiChevronDoubleUp, BiChevronDoubleDown, BiChevronBarUp, BiChevronDoubleRight, HiSolidExternalLink, IoCloseCircleOutline);

// prismjs
import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router)
app.use(VMdPreview)
app.mount('#app')
