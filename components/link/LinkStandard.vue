<script setup lang="js">
const route = useRoute();
const props = defineProps({
  link: {
    type: Object,
    required: true
  }
});
const linkTitle = getSpecifiedTitle(props.link);
</script>

<template>
  <app-link
    :to="
      link.url
        ? Number.isFinite(link.hIndex)
          ? `${link.url}${link.hash[link.hIndex]}`
          : link.url
        : `${route.path.replace(/\/+$/, '')}${link.hash}`
    ">
    <app-show v-if="typeof linkTitle === 'object'" :title="linkTitle" />
    <span v-else>{{ linkTitle }}</span>
  </app-link>
</template>
