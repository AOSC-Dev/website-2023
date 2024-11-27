<script setup>
const { tm, locale } = useI18n();
const textValue = tm('BarHeader');
const linkValue = tm('allUniversalLink');
const navigationList = [
  linkValue.local.download,
  linkValue.forum,
  linkValue.local.about
];
</script>

<template>
  <div class="bg-cover">
    <div class="flex">
      <div class="grow"></div>
      <div class="content-container flex justify-end">
        <div
          class="theme-bg-color-primary-static text-white flex justify-end py-[5px] whitespace-nowrap text-clip *:no-underline pl-[50px] pr-[0.5rem]">
          <AccordionNavigation
            link-class=""
            span-class="mx-[0.51rem]"
            :navigation-list="navigationList" />
        </div>
      </div>
      <div class="grow theme-bg-color-primary-static"></div>
    </div>
    <div class="flex justify-center">
      <div class="content-container h-[69.2px]">
        <NuxtLinkLocale to="/">
          <img
            :src="`/heading/portal-logo.${locale}.svg`"
            class="w-[12rem] pb-[18px] pl-[0.5rem]"
            alt="logo" />
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  box-shadow: 0px 0px 10px #666;
}

.topbar-r {
  box-shadow: 10px 0px 10px #666;
}
</style>
