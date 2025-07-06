<script setup>
const { tm } = useI18n();
const textValue = tm('l10n.index');
const linkValue = tm('allUniversalLink');
useHead({ title: textValue.title1 });
const navigationList = [linkValue.thisPageSupport, linkValue.weblate];

const docList = linkValue.l10nWorkGuide;
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="heti">
      <p> {{ textValue.p1 }} </p>
      <p> {{ textValue.p2 }} </p>
      <div class="mt-[1rem]">
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
