<script setup>
const { t } = useI18n();

const newsLimit = 10;
useHead({ title: t('news.newsIndex.headingMain') });
const filters = (newsCategory) => [
  { key: 'categories', value: `%"${newsCategory}"%` }
];
</script>

<template>
  <div class="flex flex-wrap *:w-1/2">
    <div>
      <category-second
        :title="t('news.newsIndex.headingAdvisories')"
        :right-text="t('news.newsIndex.seeAll')"
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
        :title="t('news.newsIndex.headingNews')"
        :right-text="t('news.newsIndex.seeAll')"
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
        :title="t('news.newsIndex.headingPeriodicals')"
        :right-text="t('news.newsIndex.seeAll')"
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
        :title="t('news.newsIndex.headingMinutes')"
        :right-text="t('news.newsIndex.seeAll')"
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
