<script setup>
import AppLink from './AppLink.vue';

const props = defineProps({
  navigationList: {
    type: Array,
    required: true
  },
  linkClass: {
    type: String,
    default: 'text-link'
  },
  spanClass: {
    type: String,
    default: 'mx-1'
  }
});
</script>
<template>
  <span
    v-for="(item, index) in navigationList"
    :key="item.title"
    class="inline-block">
    <AppLink
      v-if="item.path || item.url"
      :to="item.url ? item.url : { path: item.path, hash: item.hash }"
      :class="linkClass">
      {{ item.title }}</AppLink
    >
    <span v-else>{{ item.title }}</span>
    <span :class="spanClass" v-if="index !== navigationList.length - 1">
      <slot>|</slot>
    </span>
  </span>
</template>

<style scoped></style>
