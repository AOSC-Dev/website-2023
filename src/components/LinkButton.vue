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
  <a target="_blank" :href="link"
    class="basis-1/4 flex justify-center items-center bg-primary text-white block hover:no-underline hover:opacity-85">{{ text
    }}</a>
</template>

<style scoped></style>
