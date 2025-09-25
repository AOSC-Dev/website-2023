<script setup>
const { t, tm } = useI18n();
const linkValue = tm('allUniversalLink');
useHead({ title: t('mascot.mascotIndex.titleMain') });

const navigationList = [
  linkValue.qqStickers,
  linkValue.telegramStickers,
  linkValue.mascotsTexture
];
</script>

<template>
  <div class="grid grid-cols-1">
    <category-second :title="t('mascot.mascotIndex.titleMain')" />

    <div><img class="imgScale1 w-full" src="/mascot/anan.png" /></div>

    <div class="grid grid-cols-2">
      <category-second :title="t('mascot.mascotIndex.titleCharacterSheet')" />
      <category-second
        :title="t('mascot.mascotIndex.titleFigura')"
        class="border-l border-l-white" />

      <div class="flex">
        <div
          class="p-[1.75rem] text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
          <p>{{ t('mascot.mascotIndex.textCharacterSheetLicense') }}</p>
          <div class="mt-[1rem] flex flex-row justify-between">
            <div class="w-[50%]">
              <link-button
                class="h-full"
                :link="linkValue.antongMascotsCharacterSheet" />
            </div>
            <div class="grid-col-1 grid gap-y-3">
              <link-standard :link="linkValue.tysonTan" />
              <link-standard :link="linkValue.mailtoTysonTan" />
            </div>
          </div>
        </div>
      </div>
      <div class="theme-border-secondary flex border-l">
        <div
          class="flex flex-col justify-between p-[1.75rem] text-[0.8rem] xl:text-[1.07rem] 2xl:text-[1.2rem]">
          <p>
            <span>{{ t('mascot.mascotIndex.textFiguraText1') }}</span>
            <link-standard :link="linkValue.figura" />
            <span>{{ t('mascot.mascotIndex.textFiguraText2') }}</span>
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

      <category-second :title="t('mascot.mascotIndex.titleStickerPack')" />
      <category-second
        :title="t('mascot.mascotIndex.titleFumo')"
        class="border-l border-l-white" />
      <div class="flex">
        <div class="grid grid-cols-2 p-[1.75rem]">
          <div class="mr-[1.5rem]">
            <div>
              <img src="/mascot/qr.png" alt="二维码" />
            </div>

            <p
              class="text-center text-[0.95em] xl:text-[1.3em] 2xl:text-[1.5em]">
              {{ t('mascot.mascotIndex.textWeChatStickerPackQrCode') }}
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
            <p>{{ t('mascot.mascotIndex.textFumoLicense') }}</p>
            <p>
              <span>{{ t('mascot.mascotIndex.textFumoReference') }}</span>
              <link-standard :link="linkValue.tomatoScrambledEggsGoofish" />
              <span>{{ t('mascot.mascotIndex.textFumoContact') }}</span>
              <link-standard :link="linkValue.tomatoScrambledEggsHuaJia" />
              <span>{{ t('mascot.mascotIndex.textFiguraText3') }}</span>
            </p>
          </div>

          <div class="mt-[1rem] flex flex-row justify-between">
            <div class="w-[50%]">
              <link-button
                class="h-full"
                :link="linkValue.fumoMascotsCharacterSheetDownload" />
            </div>
            <div class="grid-col-1 grid w-0 gap-y-3 whitespace-pre">
              <div class="invisible">占位</div>
              <div class="invisible">占位</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <category-second :title="t('mascot.mascotIndex.titleBackStory')" />
    <div class="flex p-[1.75rem]">
      <!-- 左边 -->
      <div class="basis-1/2 pr-[1.75rem]">
        <p
          v-for="(item, index) in tm('mascot.mascotIndex.textMascotTagline')"
          :key="`mascot-index-1-p-${index}`">
          {{ item }}
        </p>

        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="tm('mascot.mascotIndex.textMascotBasicInfoList.li')"
          class="list-inside list-disc"
          :my-key="`mascot-index-1`" />

        <p
          v-for="(item, index) in tm(
            'mascot.mascotIndex.textMascotCharacteristics'
          )"
          :key="`mascot-index-2-p-${index}`">
          {{ item }}
        </p>
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="tm('mascot.mascotIndex.textMascotCharacteristicsList1.li')"
          class="list-inside list-disc"
          :my-key="`mascot-index-2`" />
      </div>

      <!-- 右边 -->
      <div class="basis-1/2 pl-[1.75rem]">
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="tm('mascot.mascotIndex.textMascotCharacteristicsList2.li')"
          class="list-inside list-disc"
          :my-key="`mascot-index-3`" />
        <p
          v-for="(item, index) in tm(
            'mascot.mascotIndex.textMascotLanguageSkils'
          )"
          :key="`mascot-index-3-p-${index}`">
          {{ item }}
        </p>
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="tm('mascot.mascotIndex.textMascotLanguageSkilsList1.li')"
          class="list-inside list-disc"
          :my-key="`mascot-index-4`" />
        <p
          v-for="(item, index) in tm(
            'mascot.mascotIndex.textMascotRetroComputingHobby'
          )"
          :key="`mascot-index-4-p-${index}`">
          {{ item }}
        </p>
        <app-ul-ordinary
          li-class="my-[1rem]"
          :lis="tm('mascot.mascotIndex.textMascotRetroComputingHobbyList1.li')"
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
