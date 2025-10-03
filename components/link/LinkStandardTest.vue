<script setup lang="js">
const route = useRoute();
const props = defineProps({
  title: {
    type: [Object, String],
    required: true
  },
  hash: {
    type: [String, null],
    default: null
  },
  url: {
    type: [String, null],
    default: null
  }
});
</script>

<template>
  <app-link
    :to="
      url
        ? hash !== null
          ? `${url}${hash}`
          : url
        : `${route.path.replace(/\/+$/, '')}${hash}`
    ">
    <app-show v-if="typeof props.title === 'object'" :title="props.title" />
    <span v-else>{{ props.title }}</span>
  </app-link>
</template>
