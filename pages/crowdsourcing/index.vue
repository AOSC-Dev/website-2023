<script setup>
const { tm } = useI18n();
const textValue = tm('crowdsourcing.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.title1 });
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="heti">
      <p>
        <span>{{ textValue.p1.text[0] }}</span>
        <link-standard :link="useTIndex(localLink.guidelines, 1)" />
        <span>{{ textValue.p1.text[1] }}</span>
      </p>
      <p>
        <span>{{ textValue.p2.text[0] }}</span>
        <link-standard :link="linkValue.crowdfundingProjectRecord" />
        <span>{{ textValue.p2.text[1] }}</span>
      </p>
    </div>

    <category-second :title="textValue.title2" />
    <div class="heti">
      <app-ul-ordinary :lis="textValue.ul1.li" my-key="crowdsourcing-1" />
    </div>

    <category-second :title="textValue.title3" />
    <category-list category="crowdsourcing" />
  </div>
</template>

<style scoped></style>
