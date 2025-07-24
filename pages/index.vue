<script setup>
const { tm } = useI18n();
const textValue = tm('index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.title });

const columnBorderlessList = [
  '/icons/key-enter.min.svg',
  '/icons/document-properties.min.svg',
  '/icons/tools-wizard.min.svg',
  '/icons/love.min.svg'
];
</script>

<template>
  <div class="flex">
    <div class="w-[62.5%] bg-content-main-bg p-0">
      <app-link to="/download#aosc-os-download" class="flex w-full">
        <img class="imgScale1 w-full" src="/jumbotron/main1.svg" />
      </app-link>
      <!-- 资讯要点 -->
      <div>
        <CategorySecond :title="textValue.title1" />
        <article>
          <NewsCategoryList :limit="10" />
          <div
            class="px-[15px] py-[10px] text-right leading-6 font-[12pt] text-link">
            <link-standard :link="useTIndex(localLink.news, 1)" />
          </div>
        </article>
      </div>
      <!-- 专栏 -->
      <div id="topic">
        <CategorySecond :title="textValue.title2" />
        <article class="p-[1em] leading-6">
          <div
            v-for="(item, index) in textValue.columnTextList"
            :key="item.title"
            class="flex items-center pb-[15px]">
            <div class="mr-[20px] ml-[0.5em] basis-[50px]">
              <img :src="columnBorderlessList[index]" />
            </div>
            <div class="flex-1 p-0">
              <div class="text-[14pt] font-semibold">{{ item.title }}</div>
              <div class="text-[12pt]">{{ item.description }}</div>
            </div>
          </div>
          <div class="px-[15px] text-right text-[12pt] leading-6">
            <link-standard :link="useTIndex(localLink.aoscRightForMe, 1)" />
          </div>
        </article>
      </div>
    </div>
    <BarRight />
  </div>
</template>

<style scoped>
.imgScale1 {
  aspect-ratio: 16/11;
}
</style>
