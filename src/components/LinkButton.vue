<script setup>
const props = defineProps({
  link: {
    type: String,
    default: '#'
  },
  text: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <a
    target="_blank"
    :href="link"
    class="flex justify-center items-center text-white block hover:no-underline hover:opacity-85 theme-bg-color-primary-static"
    >{{ text }}</a
  >
</template>

<style scoped></style>
