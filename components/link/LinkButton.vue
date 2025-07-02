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
    class="flex justify-center items-center text-white hover:no-underline hover:opacity-85 theme-bg-color-primary-static" />
</template>

<style scoped></style>
