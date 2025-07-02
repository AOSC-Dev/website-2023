<script setup>
const nowYear = new Date().getFullYear();

const { tm } = useI18n();
const textValue = tm('BarFooter');
const linkValue = tm('allUniversalLink');
const navigationList = [
  ...Object.values(linkValue.barFooter.navigation),
  useTIndex(linkValue.local.home, 1)
];
</script>

<template>
  <div
    class="theme-bg-color-secondary-static text-white py-[2px] flex justify-center w-full footerbar">
    <div class="m-auto">
      <span class="pl-[0.5rem]"
        >&copy; {{ textValue.antong }}&nbsp;&nbsp;&nbsp;&nbsp;2011 -
        {{ nowYear }}</span
      >
      <span class="mx-[20px]">|</span>
      <AccordionNavigation
        :navigation-list="navigationList"
        span-class="mx-[20px]"
        link-class="cursor-pointer" />
    </div>
  </div>
</template>

<style scoped>
.footerbar {
  box-shadow: 0px 0px 8px #000000e0;
}

@media (max-width: 960px) {
  .footerbar .content-container {
    width: 100%;
    min-width: 0;
    overflow: auto;
  }
}
</style>
