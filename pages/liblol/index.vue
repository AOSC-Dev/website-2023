<script setup>
const { tm } = useI18n();
const textValue = tm('liblol.index');
const linkValue = tm('allUniversalLink');
const liblolLink = linkValue.liblol;
useHead({ title: textValue.title1 });

const navigationList = [
  liblolLink.sourceHomepage,
  liblolLink.usage,
  liblolLink.apps,
  linkValue.thisPageSupport
];

const docList = [
  ...Object.values(linkValue.liblol.doc),
  useTIndex(linkValue.liblol.apps, 1)
];
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="heti">
      <p>{{ textValue.p1 }}</p>
      <p>{{ textValue.p2 }}</p>
      <div class="mt-[1rem]">
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div class="liblolsvg">
        <img src="/liblol/liblol.svg" class="mt-2 h-auto !max-w-full" alt="" />
      </div>
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped>
.liblolsvg {
  aspect-ratio: 14/5;
}
</style>
./components/Header.vue
