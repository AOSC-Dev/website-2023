<script setup>
const route = useRoute();
const { t } = useI18n();

const title = computed(() => {
  switch (route.params.category) {
    case 'advisories':
      return t('news.newsIndex.headingAdvisories');
    case 'news':
      return t('news.newsIndex.headingNews');
    case 'journals':
      return t('news.newsIndex.headingPeriodicals');
    case 'minutes':
      return t('news.newsIndex.headingMinutes');
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
