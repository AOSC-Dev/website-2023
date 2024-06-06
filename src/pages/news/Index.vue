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
    <div class="flex flex-wrap *:w-1/2">
      <div>
        <category-second
          title="用户公告"
          rightText="查看全部"
          rightUrl="/news/list/warning/用户公告"
          :showRightChevron="true"
        />
        <news-category-list
          :newsList="categories.warning || []"
          class="overflow-y-auto"
        />
      </div>
      <div class="">
        <category-second
          title="新闻资讯"
          rightText="查看全部"
          rightUrl="/news/list/news/新闻资讯"
          class="border-l border-l-white"
          :showRightChevron="true"
        />
        <news-category-list
          :newsList="categories.news || []"
          class="overflow-y-auto border-l-[1px] border-l-solid border-l-secondary"
        />
      </div>
      <div>
        <category-second
          title="社区期刊"
          rightText="查看全部"
          rightUrl="/news/list/book/社区期刊"
          :showRightChevron="true"
        />
        <news-category-list
          :newsList="categories.book || []"
          class="overflow-y-auto"
        />
      </div>

      <div class="">
        <category-second
          title="会议纪要"
          rightText="查看全部"
          rightUrl="/news/list/community/会议纪要"
          :showRightChevron="true"
          class="border-l border-l-white"
        />
        <news-category-list
          :newsList="categories.community || []"
          class="overflow-y-auto border-l-[1px] border-l-solid border-l-secondary"
        />
      </div>
      <!--  暂不实现 -->
      <!-- <div class="h-[20vw]" style="width: 100%">
        <category-second title="社区相册" />
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
