<script setup>
const { tm,locale } = useI18n();
const textValue = tm('mascot.index');
const linkValue = tm('allUniversalLink');

const navigationList = [
  linkValue.QQtexture,
  linkValue.Telegramtexture,
  linkValue.mascotsTexture
];
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div> <img src="/mascot/anan.png" /></div>

    <div class="flex flex-wrap *:w-1/2">
      <div>
        <category-second
          :title="textValue.title2"
          class="border-r border-r-white" />
        <div
          class="p-[2rem] flex justify-between border-r-[1px] theme-border-secondary">
          <div class="basis-1/2 mr-[1em]">
            <div>
              <img src="/mascot/qr.png" alt="二维码" />
            </div>

            <p
              class="text-[0.95em] xl:text-[1.3em] 2xl:text-[1.5em] text-center">
              {{ textValue.p1 }}
            </p>
          </div>
          <div class="basis-1/2 ml-[1em] flex flex-col justify-between">
            <link-button
              v-for="(item, index) in navigationList"
              :key="`mascot-index-1-link-${index}`"
              class="basis-1/4"
              :link="item" />
          </div>
        </div>
      </div>

      <div>
        <category-second :title="textValue.title3" />
        <div class="p-[2em] justify-between h-[calc(100%-2em)] flex">
          <div class="my-auto">
            <p class="text-[0.8em] xl:text-[1.07em] 2xl:text-[1.2em]">
              {{ textValue.p2 }}
            </p>
            <div class="flex flex-row">
              <div class="flex flex-col w-full py-[18px] mr-12">
                <link-button
                  class="h-full my-auto"
                  :link="linkValue.mascotsSetDraft" />
              </div>
              <ul class="text-[0.8em] xl:text-[1.07em] 2xl:text-[1.2em]">
                <li><link-standard :link="linkValue.tysontan" /></li>
                <li>
                  <link-standard :link="linkValue.mailtoTysontan" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <category-second :title="textValue.title4" />
    <div class="flex p-[2em]">
      <!-- 左边 -->
      <div class="basis-1/2 pr-[2em]">
        <p
          v-for="(item, index) in textValue.ps1"
          :key="`mascot-index-1-p-${index}`"
          >{{ item }}</p
        >

        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul1.li"
          class="list-disc list-inside"
          :my-key="`mascot-index-1`" />

        <p
          v-for="(item, index) in textValue.ps2"
          :key="`mascot-index-2-p-${index}`"
          >{{ item }}</p
        >
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul2.li"
          class="list-disc list-inside"
          :my-key="`mascot-index-2`" />
      </div>

      <!-- 右边 -->
      <div class="basis-1/2 pl-[2em]">
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul3.li"
          class="list-disc list-inside"
          :my-key="`mascot-index-3`" />
        <p
          v-for="(item, index) in textValue.ps3"
          :key="`mascot-index-3-p-${index}`"
          >{{ item }}</p
        >
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul4.li"
          class="list-disc list-inside"
          :my-key="`mascot-index-4`" />
        <p
          v-for="(item, index) in textValue.ps4"
          :key="`mascot-index-4-p-${index}`"
          >{{ item }}</p
        >
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul5.li"
          class="list-disc list-inside"
          :my-key="`mascot-index-5`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
