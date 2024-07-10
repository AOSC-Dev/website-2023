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
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 50,
  },
});
</script>

<template>
  <div>
    <a
      target="_blank"
      :href="link"
      class="flex justify-center items-center bg-primary text-white block hover:no-underline"
      :style="{ width: width + 'px', height: height + 'px' }"
      >{{ text }}</a
    >
  </div>
</template>

<style scoped></style>
