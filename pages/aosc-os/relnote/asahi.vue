<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.relnote.asahi');
// const linkValue = tm('allUniversalLink');
// const localLink = linkValue.local;
</script>

<template>
  <div class="pl-[1px]">
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p> {{ textValue.p1 }} </p><br />
    </div>

    <category-second :title="textValue.title2" />
    <div class="p-6">
      <p> {{ textValue.p2 }} </p><br />
    </div>

    <category-second :title="textValue.title3" />
    <div class="p-6">
      <p> {{ textValue.p3 }} </p><br />
      <div class="px-12 pt-2 pb-4">
        <app-ul-ordinary
          key="aosc-os-relnote-asahi-1"
          :lis="textValue.ul1.li" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
