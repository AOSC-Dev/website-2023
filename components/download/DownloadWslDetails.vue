<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadWslDetails');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
</script>

<template>
  <div class="flex flex-col gap-2 pb-1">
    <app-h2>{{ textValue.title1 }}</app-h2>
    <ms-store-badge
      class="h-[48px] w-fit [&::part(img)]:h-[48px]"
      productid="9NMDF21NV65Z"
      window-mode="popup"
      theme="dark"
      animation="on"/>
    <p class="mb-0">{{ textValue.text2 }}</p>
    <div>
      <el-button>
        <link-standard
          :link="linkValue.AOSCOSLauncher"
          target="_blank"
          class="border-0 hover:no-underline" />
      </el-button>
      <el-button disabled> {{ textValue.text4 }} </el-button>
    </div>

    <app-h2>{{ textValue.title2 }}</app-h2>
    <p>{{ textValue.text6 }}</p>
    <p
      >{{ textValue.text7 }}
      <link-standard :link="useTIndex(localLink.aoscWslRequirements, 1)" />
      {{ linkValue.aPeriod }}</p
    >

    <app-h2>{{ textValue.title3 }}</app-h2>
    <p>
      {{ textValue.text11
      }}<link-standard :link="useTIndex(localLink.contact, 2)" />{{
        textValue.text13
      }}
    </p>
  </div>
</template>

<style scoped></style>
