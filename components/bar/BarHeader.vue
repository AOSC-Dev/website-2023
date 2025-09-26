<script setup>
const { tm, locale, setLocale, locales } = useI18n();
// const textValue = tm('BarHeader');
const navigationList = computed(() => {
  const linkValue = tm('allUniversalLink');
  return [linkValue.local.download, linkValue.forum, linkValue.local.about];
});
</script>

<template>
  <div class="bg-cover">
    <div class="flex">
      <div class="grow" />
      <div class="content-container flex justify-end">
        <div
          class="theme-bg-color-primary-static flex justify-end py-[5px] pr-[0.5rem] pl-[50px] text-clip whitespace-nowrap text-white *:no-underline">
          <template v-if="locales.length > 1">
            <el-dropdown
              :teleported="false"
              :show-timeout="0"
              :hide-timeout="50"
              popper-class="language-menu">
              <span class="w-[1.5rem] fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 -3.5 30 30"
                  class="vt-locales-btn-icon"
                  data-v-817baab4="">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                    class="css-c4d79v" />
                </svg>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="localeKey in locales"
                    :key="localeKey.code"
                    @click="setLocale(localeKey.code)">
                    {{ localeKey.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <div class="mx-1">|</div>
          </template>
          <AccordionNavigation
            link-class=""
            span-class="mx-[0.51rem]"
            :navigation-list="navigationList" />
        </div>
      </div>
      <div class="theme-bg-color-primary-static grow" />
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
