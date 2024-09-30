<script setup>
const categories = ref({});
const categoryTitle = ref('');
const route = useRoute();

(async () => {
  const category = route.params.category;
  categoryTitle.value = route.params.categoryTitle;
  let [res, err] = await requestGetJson(
    `/newsCategories/${category}.zh-cn.json`
  );
  if (res) {
    console.log('新闻目录', res.data);
    categories.value = res.data;
  } else if (err) {
    console.log(err);
  }
})();
</script>

<template>
  <div class="pl-[1px]">
    <category-second
      :title="categoryTitle"
      class="border-r-solid border-r-white" />
    <news-category-list :news-list="categories || []" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
