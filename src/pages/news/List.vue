<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import NewsCategoryList from "./components/NewsCategoryList.vue";
import { useRoute } from "vue-router";

const categories = ref({});
const categoryTitle = ref("");
const route = useRoute();
onMounted(() => {
  console.log("新闻列表页面: ");
  console.log(route.params);
  const category = route.params.category;
  categoryTitle.value = route.params.categoryTitle;
  axios
    .get(`/newsCategories/${category}.zh-cn.json`)
    .then((res) => {
      categories.value = res.data;
      console.log("新闻目录: ");
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <div class="pl-[1px]">
    <category-second
      :title="categoryTitle"
      class="border-r-[1px] border-r-solid border-r-white"
    />
    <news-category-list :newsList="categories || []" class="py-6 pl-16 pr-10" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
