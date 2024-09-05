<script setup>
import { reactive, ref } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import NewsCategoryList from "./components/NewsCategoryList.vue";
import { requestGetJson } from "../../utils/utils";

const categories = ref({});
(async () => {
  let [res, err] = await requestGetJson('/newsCategories/zh-cn.json');
  if (res) {
    categories.value = res.data;
    console.log("新闻目录:", res.data);
  } else if (err) {
    console.log(err)
  }
})()


</script>

<template>
  <div class="pl-[1px]">
    <div class="flex flex-wrap *:w-1/2">
      <div>
        <category-second title="用户公告" rightText="查看全部" rightUrl="/news/list/advisories/用户公告" :showRightChevron="true" />
        <news-category-list :newsList="categories.advisories || []" class="overflow-y-auto" />
      </div>
      <div class="">
        <category-second title="新闻资讯" rightText="查看全部" rightUrl="/news/list/news/新闻资讯" class="border-l border-l-white"
          :showRightChevron="true" />
        <news-category-list :newsList="categories.news || []"
          class="overflow-y-auto border-l-[1px] border-l-solid border-l-secondary" />
      </div>
      <div>
        <category-second title="社区期刊" rightText="查看全部" rightUrl="/news/list/journals/社区期刊" :showRightChevron="true" />
        <news-category-list :newsList="categories.journals || []" class="overflow-y-auto" />
      </div>

      <div class="">
        <category-second title="会议纪要" rightText="查看全部" rightUrl="/news/list/minutes/会议纪要" :showRightChevron="true"
          class="border-l border-l-white" />
        <news-category-list :newsList="categories.minutes || []"
          class="overflow-y-auto border-l-[1px] border-l-solid border-l-secondary" />
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
