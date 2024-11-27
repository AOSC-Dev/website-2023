<script setup>
const { tm, locale } = useI18n();
const textValue = tm('news.index');
const linkValue = tm('allUniversalLink');

const { data: categories } = await useFetch(
  `http://localhost:3001/newsCategories/${locale.value}.json`
);
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
        :news-list="categories.advisories || []"
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
        :news-list="categories.news || []"
        class="overflow-y-auto border-l-[1px] theme-border-secondary" />
    </div>
    <div>
      <category-second
        :title="textValue.title3"
        :right-text="textValue.all"
        right-url="/news/list/journals"
        :show-right-chevron="true" />
      <news-category-list
        :news-list="categories.journals || []"
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
        :news-list="categories.minutes || []"
        class="overflow-y-auto border-l-[1px] theme-border-secondary" />
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
