import { createPinia } from 'pinia';
import './style.css';
import 'element-plus/dist/index.css';
import App from './App.vue';
import { routes } from './router';
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import './css/index.scss';
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
  FaCopy
} from 'oh-vue-icons/icons';

addIcons(
  BiChevronDoubleUp,
  BiChevronDoubleDown,
  BiChevronBarUp,
  BiChevronDoubleRight,
  HiSolidExternalLink,
  IoCloseCircleOutline,
  MdDeleteforeverOutlined,
  FaCopy
);
import { ViteSSG } from 'vite-ssg';

// prismjs
import Prism from 'prismjs';

// highlightjs
import 'highlight.js/styles/stackoverflow-light.css';
// import hljs from 'highlight.js/lib/core';
import './utils/highlightjs';

let ssgRouter;
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    VMdPreview.use(vuepressTheme, {
      Prism
    });
    
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    // TODO: https://github.com/antfu-collective/vite-ssg?tab=readme-ov-file#initial-state

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

    ssgRouter = router;
  }
);

export { ssgRouter };
