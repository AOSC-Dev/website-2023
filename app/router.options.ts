import type { RouterConfig } from '@nuxt/schema';
import { useScrollStore } from '~/stores/scroll';

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) useScrollStore().scrollOrSet(to.hash);
  }
};
