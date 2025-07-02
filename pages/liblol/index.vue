<script setup>
const { tm } = useI18n();
const textValue = tm('l10n.index');
const linkValue = tm('allUniversalLink');
const liblolLink = linkValue.liblol;

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
    <div class="p-6">
      <p> {{ textValue.p1 }} </p>
      <p>{{ textValue.p2 }} </p>
      <div class="mt-[1rem]">
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div class="liblolsvg">
        <img src="/liblol/liblol.svg" class="w-full h-auto mt-2" alt="" />
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
