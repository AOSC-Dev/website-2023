<script setup>
import { ref } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import NewsCategoryList from "./components/NewsCategoryList.vue";
import { useRoute } from "vue-router";
import { requestGetJson } from "../../utils/utils";

const categories = ref({});
const categoryTitle = ref("");
const route = useRoute();

(async () => {
  const category = route.params.category;
  categoryTitle.value = route.params.categoryTitle;
  let [res, err] = await requestGetJson(`/newsCategories/${category}.zh-cn.json`);
  if (res) {
    console.log("新闻目录", res.data);
    categories.value = res.data;
  } else if (err) {
    console.log(err);
  }
})()
</script>

<template>
  <div class="pl-[1px]">
    <category-second :title="categoryTitle" class="border-r-[1px] border-r-solid border-r-white" />
    <news-category-list :newsList="categories || []" class="py-6 pr-10" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
