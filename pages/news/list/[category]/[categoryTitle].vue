<script setup>
const route = useRoute();
const { locale } = useI18n();

const { data: categories } = useFetch(
  `http://localhost:3001/newsCategories/${route.params.category}.${locale.value}.json`
);
</script>

<template>
  <div>
    <category-second
      :title="route.params.categoryTitle"
      class="border-r-solid border-r-white" />
    <news-category-list :news-list="categories || []" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
