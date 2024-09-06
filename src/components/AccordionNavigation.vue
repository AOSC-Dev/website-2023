<script setup>
import { defineProps } from 'vue';
import AppLink from './AppLink.vue';

const props = defineProps({
  navigationList: {
    type: Array,
    required: true,
  },
  linkClass: {
    type: String,
    default: 'text-link',
  },
  spanClass: {
    type: String,
    default: 'mx-1',
  },
});
</script>
<template>
  <span v-for="(item, index) in navigationList" :key="item.title">
    <span :class="spanClass" v-if="index !== 0">
      <slot>|</slot>
    </span>
    <AppLink
      :to="item.url ? item.url : { path: item.path, hash: item.hash }"
      :class="linkClass"
      >{{ item.title }}</AppLink
    >
  </span>
</template>

<style scoped></style>
