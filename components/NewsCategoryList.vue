<script setup>
const { tm, locale } = useI18n();
const textValue = tm('NewsCategoryList');

console.log(textValue.defaultText);

const props = defineProps({
  newsList: {
    type: [Array, undefined, null]
  }
});
</script>

<template>
  <div>
    <div v-if="!props.newsList || props.newsList.length === 0">
      {{ textValue.defaultText }}
    </div>
    <div v-else class="flex flex-col">
      <div v-for="item in newsList" :key="item.title" class="newslist-item">
        <NuxtLinkLocale
          :to="'/news/' + item.Path.replace(/.md$/, '')"
          class="flex h-[2rem] cursor-pointer pl-6 leading-8 hover:bg-leftbar-bg">
          <span class="flex-1 truncate">
            {{ item.Title }}
          </span>
          <span class="pr-6">[{{ item.Date }}]</span>
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
