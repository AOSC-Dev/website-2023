<script setup>
const route = useRoute();
const { tm } = useI18n();
const textValue = tm('news.index');

const categoryTitle = () => {
  switch (route.params.category) {
    case 'advisories':
      return textValue.title1;
    case 'news':
      return textValue.title2;
    case 'journals':
      return textValue.title3;
    case 'minutes':
      return textValue.title4;
  }
};
</script>

<template>
  <div>
    <category-second
      :title="categoryTitle()"
      class="border-r-solid border-r-white" />
    <news-category-list :category="route.params.category" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
