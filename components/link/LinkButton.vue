<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <app-link
    target="_blank"
    :to="link.url"
    class="flex justify-center items-center text-white block hover:no-underline hover:opacity-85 theme-bg-color-primary-static"
    >{{ link.title }}</app-link
  >
</template>

<style scoped></style>
