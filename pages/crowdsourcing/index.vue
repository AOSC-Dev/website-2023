<script setup>
const { t, tm } = useI18n();
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: t('crowdsourcing.index.crowdsourcingTitle') });
</script>

<template>
  <div>
    <category-second :title="t('crowdsourcing.index.crowdsourcingTitle')" />
    <div class="heti">
      <p>
        <span>{{ tm('crowdsourcing.index.crowdsourcingText1.text')[0] }}</span>
        <link-standard :link="useTIndex(localLink.guidelines, 1)" />
        <span>{{ tm('crowdsourcing.index.crowdsourcingText1.text')[1] }}</span>
      </p>
      <p>
        <span>{{ tm('crowdsourcing.index.crowdsourcingText2.text')[0] }}</span>
        <link-standard :link="linkValue.crowdfundingRecord" />
        <span>{{ tm('crowdsourcing.index.crowdsourcingText2.text')[1] }}</span>
      </p>
    </div>

    <category-second :title="t('crowdsourcing.index.crowdsourcingAddendum')" />
    <div class="heti">
      <app-ul-ordinary
        :lis="tm('crowdsourcing.index.crowdsourcingTextList1.li')"
        my-key="crowdsourcing-1" />
    </div>

    <category-second :title="t('crowdsourcing.index.crowdsourcingRecords')" />
    <category-list category="crowdsourcing" />
  </div>
</template>

<style scoped></style>
