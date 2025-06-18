<script setup>
import { RouterLink } from 'vue-router';
import AppLink from '../../../components/AppLink.vue';
const props=defineProps({...RouterLink.props});
</script>

<template>
  <AppLink
    v-bind="props"
    class="theme-bg-color-secondary-primary cursor-pointer overflow-hidden px-4 py-2 hover:no-underline">
    <slot></slot>
  </AppLink>
</template>
