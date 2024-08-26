<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    ...RouterLink.props,
    url: String
})

const isExternalLink = computed(() => {
    return typeof props.url === 'string'
})
</script>

<template>
    <a v-if="isExternalLink" :href="url">
        <slot></slot>
    </a>
    <router-link v-else v-bind="$props">
        <slot></slot>
    </router-link>
</template>