<script setup>
import HomeIndex from './pages/home/HomeIndex.vue';
import { useRouter } from 'vue-router';
import {
  useHighBrightnessControllerStore,
  useThemeStore
} from './stores/miscellaneous.js';

const highBrightnessControllerStore = useHighBrightnessControllerStore();
const router = useRouter();

router.afterEach((to, from) => {
  highBrightnessControllerStore.obj[to.path] =
    !highBrightnessControllerStore.obj[to.path];
});

const themeStore = useThemeStore();
</script>

<template>
  <HomeIndex
    :style="{
      '--primary': themeStore.primary,
      '--secondary': themeStore.secondary,
      'backgroundImage':`url(/assets/backgrounds/${themeStore.backageImg})`
    }"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
