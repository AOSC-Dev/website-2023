<script setup>
const route = useRoute();
const { tm } = useI18n();
const textValue = tm('news.index');

const title = computed(() => {
  switch (route.params.category) {
    case 'advisories':
      return textValue.title1;
    case 'news':
      return textValue.title2;
    case 'journals':
      return textValue.title3;
    case 'minutes':
      return textValue.title4;
    default:
      return '';
  }
});
useHead({ title: title });

const categoryFilter = computed(() => [
  { key: 'categories', value: `%"${route.params.category}"%` }
]);
</script>

<template>
  <div>
    <category-second :title="title" class="border-r-solid border-r-white" />
    <category-list category="news" :filters="categoryFilter" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
