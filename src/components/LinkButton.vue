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
    class="theme-bg-color-primary-static block flex items-center justify-center text-white hover:no-underline hover:opacity-85"
    >{{ text }}</a
  >
</template>

<style scoped></style>
