<script setup>
const { tm } = useI18n();
const textValue = tm('news.index');
// const linkValue = tm('allUniversalLink');
const newsLimit = 10;
useHead({ title: textValue.title });
</script>

<template>
  <div class="flex flex-wrap *:w-1/2">
    <div>
      <category-second
        :title="textValue.title1"
        :right-text="textValue.all"
        right-url="/news/list/advisories"
        :show-right-chevron="true" />
      <news-category-list
        category="advisories"
        :limit="newsLimit"
        class="overflow-y-auto" />
    </div>
    <div class="">
      <category-second
        :title="textValue.title2"
        :right-text="textValue.all"
        right-url="/news/list/news"
        class="border-l border-l-white"
        :show-right-chevron="true" />
      <news-category-list
        category="news"
        :limit="newsLimit"
        class="theme-border-secondary overflow-y-auto border-l-[1px]" />
    </div>
    <div>
      <category-second
        :title="textValue.title3"
        :right-text="textValue.all"
        right-url="/news/list/journals"
        :show-right-chevron="true" />
      <news-category-list
        category="journals"
        :limit="newsLimit"
        class="overflow-y-auto" />
    </div>

    <div class="">
      <category-second
        :title="textValue.title4"
        :right-text="textValue.all"
        right-url="/news/list/minutes"
        :show-right-chevron="true"
        class="border-l border-l-white" />
      <news-category-list
        category="minutes"
        :limit="newsLimit"
        class="theme-border-secondary overflow-y-auto border-l-[1px]" />
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
