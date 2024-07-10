<script setup>
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
</script>

<template>
  <a
    target="_blank"
    :href="link"
    class="flex justify-center items-center bg-primary text-white block hover:no-underline"
    >{{ text }}</a
  >
</template>

<style scoped></style>
