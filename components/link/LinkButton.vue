<script setup>
defineProps({
  link: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <link-standard
    :link="link"
    class="theme-bg-color-primary-static flex items-center justify-center text-white hover:no-underline hover:opacity-85" />
</template>

<style scoped></style>
