<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  ...RouterLink.props,
  class: {
    type: String,
    default: 'text-link'
  }
});

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<template>
  <a v-if="isExternalLink" :href="to" target="_blank" :class="props.class">
    <slot />
  </a>
  <NuxtLinkLocale v-else v-bind="props">
    <slot />
  </NuxtLinkLocale>
</template>
