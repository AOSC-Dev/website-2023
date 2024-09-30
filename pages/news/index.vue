<script setup>
const categories = ref({});
(async () => {
  let [res, err] = await requestGetJson('/newsCategories/zh-cn.json');
  if (res) {
    categories.value = res.data;
    console.log('新闻目录:', res.data);
  } else if (err) {
    console.log(err);
  }
})();
</script>

<template>
  <div class="pl-[1px]">
    <div class="flex flex-wrap *:w-1/2">
      <div>
        <category-second
          title="用户公告"
          right-text="查看全部"
          right-url="/news/list/advisories/用户公告"
          :show-right-chevron="true" />
        <news-category-list
          :news-list="categories.advisories || []"
          class="overflow-y-auto" />
      </div>
      <div class="">
        <category-second
          title="新闻资讯"
          right-text="查看全部"
          right-url="/news/list/news/新闻资讯"
          class="border-l border-l-white"
          :show-right-chevron="true" />
        <news-category-list
          :news-list="categories.news || []"
          class="overflow-y-auto border-l-[1px] theme-border-secondary" />
      </div>
      <div>
        <category-second
          title="社区期刊"
          right-text="查看全部"
          right-url="/news/list/journals/社区期刊"
          :show-right-chevron="true" />
        <news-category-list
          :news-list="categories.journals || []"
          class="overflow-y-auto" />
      </div>

      <div class="">
        <category-second
          title="会议纪要"
          right-text="查看全部"
          right-url="/news/list/minutes/会议纪要"
          :show-right-chevron="true"
          class="border-l border-l-white" />
        <news-category-list
          :news-list="categories.minutes || []"
          class="overflow-y-auto border-l-[1px] theme-border-secondary" />
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
