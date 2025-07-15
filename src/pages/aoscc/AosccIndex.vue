<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import AosccLinkButton from './components/AosccLinkButton.vue';

const error = ref();
const articleComponent = ref();

articleComponent.value = defineAsyncComponent(() =>
  //@ts-ignore
  import('./articles/2025-info.zh.md').catch((err) => {
    console.error('Article not found:', err);
    error.value = err;
  })
);
</script>

<template>
  <div>
    <category-second title="AOSCC：社区年度聚会" id="aoscc" />
    <div class="aoscc-banner-bg relative h-[280px] px-10 py-6 text-white">
      <div class="absolute bottom-0 mb-10 ml-1 flex gap-4">
        <AosccLinkButton to="https://aoscc.aosc.io" target="_blank"
          >报名与签到</AosccLinkButton
        >
        <AosccLinkButton to="/aoscc/2025-schedule">会议日程</AosccLinkButton>
        <AosccLinkButton to="/aoscc/2025-guide">交通和住宿</AosccLinkButton>
      </div>
    </div>
    <div class="vuepress-markdown-body">
      <h2>AOSCC 简介</h2>
      <p>
        AOSCC
        是我社每年一度的线下聚会，公开邀请社区好友参与。活动期间，社区邀请社区贡献者、高校社团成员和行业代表等分享、交流工作，并组织抽奖、代号投票等趣味活动。近年来，AOSCC
        均由中国高校社团协办，每年吸引超过 100 名与会者参与。
      </p>
    </div>
    <template v-if="error">
      <page-not-found />
    </template>
    <template v-else>
      <category-second v-if="!error" title="AOSCC 2025" class="mb-6" />
      <component class="vuepress-markdown-body" :is="articleComponent" />
    </template>
  </div>
</template>

<style scoped>
.aoscc-banner-bg {
  background-image: url(/assets/aoscc/aoscc-2025-portal-banner.png);
  background-size: 1088px;
}
</style>
