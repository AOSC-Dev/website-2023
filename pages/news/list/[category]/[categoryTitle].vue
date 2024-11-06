<script setup>
const route = useRoute();

const { data: categories, status } = useFetch(
  `http://localhost:3001/newsCategories/${route.params.category}.zh-cn.json`
);
</script>

<template>
  <div>
    <category-second
      :title="route.params.categoryTitle"
      class="border-r-solid border-r-white" />
    <news-category-list
      v-if="status === 'success'"
      :news-list="categories || []" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
