<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import NewsCategoryList from "./components/NewsCategoryList.vue";

const categories = ref({});
onMounted(() => {
  axios
    .get("/newsCategories/zh-cn.json")
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
    <img src="/assets/banners/banner_news.svg" alt="" />
    <div class="flex flex-wrap *:w-1/2">
      <div class="h-[20vw] border-r-[1px] border-r-solid border-r-secondary">
        <category-second
          title="用户公告"
          rightText="查看全部"
          rightUrl="/news/list/news/用户公告"
        />
        <news-category-list
          :newsList="categories.news || []"
          class="py-6 pl-16 pr-10 overflow-y-auto h-[calc(18vw)]"
        />
      </div>
      <div class="h-[20vw]">
        <category-second
          title="安全公告"
          rightText="查看全部"
          rightUrl="/news/list/warning/安全公告"
        />
        <news-category-list
          :newsList="categories.warning || []"
          class="py-6 pl-16 pr-10 overflow-y-auto h-[calc(18vw)]"
        />
      </div>
      <div class="h-[20vw] border-r-[1px] border-r-solid border-r-secondary">
        <category-second
          title="社区新闻"
          rightText="查看全部"
          rightUrl="/news/list/community/社区新闻"
        />
        <news-category-list
          :newsList="categories.community || []"
          class="py-6 pl-16 pr-10 overflow-y-auto h-[calc(18vw)]"
        />
      </div>
      <div class="h-[20vw]">
        <category-second
          title="社区期刊"
          rightText="查看全部"
          rightUrl="/news/list/book/社区期刊"
        />
        <news-category-list
          :newsList="categories.book || []"
          class="py-6 pl-16 pr-10 overflow-y-auto h-[calc(18vw)]"
        />
      </div>
      <div class="h-[20vw]" style="width: 100%">
        <category-second title="社区相册" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
