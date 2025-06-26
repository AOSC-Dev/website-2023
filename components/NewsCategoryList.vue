<script lang="ts" setup>
import type { Collections } from '@nuxt/content';

const { locale } = useI18n();
// const textValue = tm('NewsCategoryList');

const props = defineProps<{
  category?: string;
  limit?: number;
}>();

const queryNewsCollectionCategory = (
  locale: keyof Collections,
  category?: string,
  limit: number = 0
) => {
  const q = queryCollection(locale)
    .select('path', 'title', 'date')
    .where('path', 'LIKE', '/news%')
    .order('date', 'DESC')
    .limit(limit);
  return category
    ? () => q.where('categories', 'LIKE', `%"${category}"%`).all() // `["category1","category2"]`
    : () => q.all();
};

const { data, error, status } = await useAsyncData(
  computed(
    () => `${locale.value}:NewsCategoriesList:${props.category}:${props.limit}`
  ),
  queryNewsCollectionCategory(locale.value, props.category, props.limit)
);
</script>

<template>
  <div>
    <div v-if="status === 'error'">
      {{ error }}
    </div>
    <div v-else-if="status === 'success'" class="flex flex-col">
      <div v-for="item in data" :key="item.path" class="newslist-item">
        <NuxtLinkLocale
          :to="item.path"
          class="flex h-[2rem] cursor-pointer pl-6 leading-8 hover:bg-leftbar-bg">
          <span class="flex-1 truncate">
            {{ item.title }}
          </span>
          <span class="pr-6">[{{ item.date.split('T')[0] }}]</span>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newslist-item:nth-child(2n) {
  background-color: #fefaf6;
}
.newslist-item:nth-child(2n + 1) {
  background-color: white;
}
</style>
