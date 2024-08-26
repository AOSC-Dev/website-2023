<script setup>
import Home from './pages/home/Home.vue'
import { useRouter } from 'vue-router';
import { useHighBrightnessControllerStore } from "./stores/miscellaneous.js"

const highBrightnessControllerStore = useHighBrightnessControllerStore()
const router = useRouter()

router.afterEach((to, from) => {
  highBrightnessControllerStore.obj[to.path] = !highBrightnessControllerStore.obj[to.path]
})
</script>

<template>
  <Home />
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
