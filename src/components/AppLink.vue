<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  ...RouterLink.props,
  class: {
    type: String,
    default: 'text-link',
  },
});

const isExternalLink = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>

<template>
    <a v-if="isExternalLink" :href="to" :class>
        <slot></slot>
    </a>
    <router-link v-else v-bind="$props">
        <slot></slot>
    </router-link>
</template>
