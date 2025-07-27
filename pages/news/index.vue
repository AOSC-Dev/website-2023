<script setup>
const { tm } = useI18n();
const textValue = tm('news.index');
// const linkValue = tm('allUniversalLink');
const newsLimit = 10;
useHead({ title: textValue.title });
const filters = (newsCategory) => [{ key: 'categories', value: `%"${newsCategory}"%` }];
</script>

<template>
  <div class="flex flex-wrap *:w-1/2">
    <div>
      <category-second
        :title="textValue.title1"
        :right-text="textValue.all"
        right-url="/news/list/advisories"
        :show-right-chevron="true" />
      <category-list
        category="news"
        :limit="newsLimit"
        :filters="filters('advisories')"
        class="overflow-y-auto" />
    </div>
    <div class="">
      <category-second
        :title="textValue.title2"
        :right-text="textValue.all"
        right-url="/news/list/news"
        class="border-l border-l-white"
        :show-right-chevron="true" />
      <category-list
        category="news"
        :limit="newsLimit"
        :filters="filters('news')"
        class="theme-border-secondary overflow-y-auto border-l-[1px]" />
    </div>
    <div>
      <category-second
        :title="textValue.title3"
        :right-text="textValue.all"
        right-url="/news/list/journals"
        :show-right-chevron="true" />
      <category-list
        category="news"
        :limit="newsLimit"
        :filters="filters('journals')"
        class="overflow-y-auto" />
    </div>

    <div class="">
      <category-second
        :title="textValue.title4"
        :right-text="textValue.all"
        right-url="/news/list/minutes"
        :show-right-chevron="true"
        class="border-l border-l-white" />
      <category-list
        category="news"
        :limit="newsLimit"
        :filters="filters('minutes')"
        class="theme-border-secondary overflow-y-auto border-l-[1px]" />
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
