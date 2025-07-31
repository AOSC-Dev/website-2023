<script setup>
const { tm } = useI18n();
const textValue = tm('mascot.index');
const linkValue = tm('allUniversalLink');
useHead({ title: textValue.title1 });

const navigationList = [
  linkValue.QQtexture,
  linkValue.Telegramtexture,
  linkValue.mascotsTexture
];
</script>

<template>
  <div class="grid grid-cols-1">
    <category-second :title="textValue.title1" />

    <div><img class="imgScale1 w-full" src="/mascot/anan.png" /></div>

    <div class="grid grid-cols-2">
      <category-second :title="textValue.title3" />
      <category-second
        :title="textValue.title6"
        class="border-l border-l-white" />

      <div class="flex">
        <div
          class="p-[1.75rem] text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
          <p>{{ textValue.p2 }}</p>
          <div class="mt-[1rem] flex flex-row justify-between">
            <div class="w-[50%]">
              <link-button
                class="h-full"
                :link="linkValue.antongMascotsSetDraft" />
            </div>
            <div class="grid-col-1 grid gap-y-3">
              <link-standard :link="linkValue.tysontan" />
              <link-standard :link="linkValue.mailtoTysontan" />
            </div>
          </div>
        </div>
      </div>
      <div class="theme-border-secondary flex border-l">
        <div
          class="flex flex-col justify-between p-[1.75rem] text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
          <p>
            <span>{{ textValue.p6 }}</span>
            <link-standard :link="linkValue.figuramc" />
            <span>{{ textValue.p7 }}</span>
          </p>

          <div class="mt-[1rem] flex flex-row justify-between">
            <link-button
              class="h-full w-[50%]"
              :link="linkValue.ananMcFigura" />
            <div class="grid-col-1 grid gap-y-3">
              <div class="invisible">占位</div>
              <div class="invisible">占位</div>
            </div>
          </div>
        </div>
      </div>

      <category-second :title="textValue.title2" />
      <category-second
        :title="textValue.title5"
        class="border-l border-l-white" />
      <div class="flex">
        <div class="grid grid-cols-2 p-[1.75rem]">
          <div class="mr-[1.5rem]">
            <div>
              <img src="/mascot/qr.png" alt="二维码" />
            </div>

            <p
              class="text-center text-[0.95em] xl:text-[1.3em] 2xl:text-[1.5em]">
              {{ textValue.p1 }}
            </p>
          </div>
          <div
            class="flex flex-col justify-between text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
            <div
              v-for="(item, index) in navigationList"
              :key="`mascot-index-1-link-${index}`"
              class="flex flex-row">
              <link-button class="w-full" :link="item" />
              <div class="grid-col-1 grid w-0 gap-y-3 whitespace-pre">
                <div class="invisible">占位</div>
                <div class="invisible">占位</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="theme-border-secondary flex border-l">
        <div
          class="flex flex-col justify-between p-[1.75rem] text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
          <div>
            <p>{{ textValue.p3 }}</p>
            <p>
              <span>{{ textValue.p4 }}</span>
              <link-standard :link="linkValue.tomatoScrambledEggsGoofish" />
              <span>{{ textValue.p5 }}</span>
              <link-standard :link="linkValue.tomatoScrambledEggsHuaJia" />
              <span>{{ textValue.p8 }}</span>
            </p>
          </div>

          <div class="mt-[1rem] flex flex-row justify-between">
            <div class="w-[50%]">
              <link-button
                class="h-full"
                :link="linkValue.fumoMascotsSetDraft" />
            </div>
            <div class="grid-col-1 grid w-0 gap-y-3 whitespace-pre">
              <div class="invisible">占位</div>
              <div class="invisible">占位</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <category-second :title="textValue.title4" />
    <div class="flex p-[1.75rem]">
      <!-- 左边 -->
      <div class="basis-1/2 pr-[1.75rem]">
        <p
          v-for="(item, index) in textValue.ps1"
          :key="`mascot-index-1-p-${index}`">
          {{ item }}
        </p>

        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul1.li"
          class="list-inside list-disc"
          :my-key="`mascot-index-1`" />

        <p
          v-for="(item, index) in textValue.ps2"
          :key="`mascot-index-2-p-${index}`">
          {{ item }}
        </p>
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul2.li"
          class="list-inside list-disc"
          :my-key="`mascot-index-2`" />
      </div>

      <!-- 右边 -->
      <div class="basis-1/2 pl-[1.75rem]">
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul3.li"
          class="list-inside list-disc"
          :my-key="`mascot-index-3`" />
        <p
          v-for="(item, index) in textValue.ps3"
          :key="`mascot-index-3-p-${index}`">
          {{ item }}
        </p>
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul4.li"
          class="list-inside list-disc"
          :my-key="`mascot-index-4`" />
        <p
          v-for="(item, index) in textValue.ps4"
          :key="`mascot-index-4-p-${index}`">
          {{ item }}
        </p>
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="textValue.ul5.li"
          class="list-inside list-disc"
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
.imgScale1 {
  aspect-ratio: 7/3;
}
</style>
