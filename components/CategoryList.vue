<script lang="ts" setup>
const { locale } = useI18n();
// const textValue = tm('NewsCategoryList');

const props = defineProps<{
  category?: string;
  filters?: Array<{ key: string; value: string }>;
  limit?: number;
}>();

const { data, error, status } = await useAsyncData(
  computed(
    () =>
      `${locale.value}:CategoryList:${props.category}:${props.limit}:${props.filters?.map((obj) => `${obj.key}-${obj.value}`).join('--')}`
  ),
  queryCollectionCategory(props.category, props.limit, props.filters)
);
</script>

<template>
  <div>
    <div v-if="status === 'error'">
      {{ error }}
    </div>
    <ul v-else-if="status === 'success'">
      <li v-for="item in data" :key="item.path" class="even:bg-[#fefaf6] odd:bg-white">
        <NuxtLinkLocale
          :to="item.path"
          class="flex h-[2rem] cursor-pointer pl-6 leading-8 hover:bg-leftbar-bg">
          <span class="flex-1 truncate">
            {{ item.title }}
          </span>
          <span v-if="item.date" class="pr-6">
            [{{ item.date.split('T')[0] }}]
          </span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </div>
</template>
