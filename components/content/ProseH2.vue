<template>
  <h2 :id="props.id">
    <AppLink
      v-if="props.id && generate"
      :to="`${$route.path}#${props.id}`"
    >
      <slot mdc-unwrap="p" />
    </AppLink>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>
