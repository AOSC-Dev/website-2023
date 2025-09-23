<script setup>
const { tm } = useI18n();
const textValue = tm('crowdsourcing.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.crowdsourcingTitle });
</script>

<template>
  <div>
    <category-second :title="textValue.crowdsourcingTitle" />
    <div class="heti">
      <p>
        <span>{{ textValue.crowdsourcingText1.text[0] }}</span>
        <link-standard :link="useTIndex(localLink.guidelines, 1)" />
        <span>{{ textValue.crowdsourcingText1.text[1] }}</span>
      </p>
      <p>
        <span>{{ textValue.crowdsourcingText2.text[0] }}</span>
        <link-standard :link="linkValue.crowdfundingRecord" />
        <span>{{ textValue.crowdsourcingText2.text[1] }}</span>
      </p>
    </div>

    <category-second :title="textValue.crowdsourcingAddendum" />
    <div class="heti">
      <app-ul-ordinary :lis="textValue.crowdsourcingTextList1.li" my-key="crowdsourcing-1" />
    </div>

    <category-second :title="textValue.crowdsourcingRecords" />
    <category-list category="crowdsourcing" />
  </div>
</template>

<style scoped></style>
