<script setup>
import { useThemeStore } from '../stores/miscellaneous';

const props = defineProps({
  link: {
    type: String,
    default: "#",
  },
  text: {
    type: String,
    default: "",
  },
});

const themeStore = useThemeStore()
</script>

<template>
  <a target="_blank" :href="link"
    class="basis-1/4 flex justify-center items-center text-white block hover:no-underline hover:opacity-85"
    :style="{ backgroundColor: themeStore.primary }">{{ text
    }}</a>
</template>

<style scoped></style>
