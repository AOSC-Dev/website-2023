<script lang="ts" setup>
const { locale } = useI18n();
// const textValue = tm('NewsCategoryList');

const props = defineProps<{
  category?: string;
  filters?: Array<{ key: string; value: string }>;
  limit?: number;
  large?: boolean;
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
    <ul v-else-if="status === 'success' && !large">
      <li
        v-for="item in data"
        :key="item.path"
        class="odd:bg-white even:bg-[#fefaf6]">
        <NuxtLinkLocale
          :to="item.path"
          class="flex h-[2rem] cursor-pointer pl-6 leading-8 hover:bg-leftbar-bg hover:no-underline">
          <span class="flex-1 truncate">
            {{ item.title }}
          </span>
          <span v-if="item.date" class="pr-6">
            [{{ item.date.split('T')[0] }}]
          </span>
        </NuxtLinkLocale>
      </li>
    </ul>
    <div v-else-if="status === 'success'" class="grid grid-cols-2">
      <NuxtLinkLocale
        v-for="item in data"
        :key="item.path"
        :to="item.path"
        class="item cursor-pointer p-4 hover:bg-[#ddd] hover:no-underline">
        <div class="flex h-20 justify-between gap-4 overflow-hidden">
          <div class="">
            <div class="font-bold">{{ item.title }}</div>
            <div class="text-[12px]">{{ item.date?.split('T')[0] }}</div>
            <div class="item-description">{{ item.description }}</div>
          </div>
          <img :src="item.img" class="h-full" />
        </div>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped>
/* Just use img instead of bg? */
.item {
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
}

/* .item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
}

.item:hover::before {
  opacity: 1;
} */

.item-description {
  font-size: small;
  overflow: hidden;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
