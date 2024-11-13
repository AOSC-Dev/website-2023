<script setup>
const props = defineProps({
  loadingClass: {
    type: String,
    default: 'loader'
  },
  isReady: {
    type: Boolean,
    Required: true
  },
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div v-if="!isReady" class="m-auto" :class="loadingClass"></div>
  <div v-if="isReady" :class="props.class"><slot></slot></div>
</template>

<style scoped></style>
