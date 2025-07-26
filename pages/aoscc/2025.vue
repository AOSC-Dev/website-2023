<script setup lang="ts">
const { locale } = useI18n();

const { data, status } = await useAsyncData(
  computed(() => `${locale.value}:aoscc-index`),
  () => queryCollection(locale.value).path('/aoscc/2025-index').first()
);
</script>

<template>
  <div>
    <category-second id="aoscc" title="AOSCC：社区年度聚会" />
    <div class="aoscc-banner-bg relative h-[280px] px-10 py-6 text-white">
      <div class="absolute bottom-0 mb-10 ml-1 flex gap-4">
        <AosccLinkButton to="https://aoscc.aosc.io" target="_blank">
          报名与签到
        </AosccLinkButton>
        <AosccLinkButton to="/aoscc/2025-schedule">会议日程</AosccLinkButton>
        <AosccLinkButton to="/aoscc/2025-guide">交通和住宿</AosccLinkButton>
      </div>
    </div>
    <div class="heti">
      <h2>AOSCC 简介</h2>
      <p>
        AOSCC
        是我社每年一度的线下聚会，公开邀请社区好友参与。活动期间，社区邀请社区贡献者、高校社团成员和行业代表等分享、交流工作，并组织抽奖、代号投票等趣味活动。近年来，AOSCC
        均由中国高校社团协办，每年吸引超过 100 名与会者参与。
      </p>
    </div>
    <ContentRenderer
      v-if="status === 'success' && data"
      :value="data"
      class="heti" />
  </div>
</template>

<style scoped>
.aoscc-banner-bg {
  background-image: url(/aoscc/aoscc-2025-portal-banner.png);
  background-size: 1088px;
}
</style>
