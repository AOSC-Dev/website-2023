<script setup lang="ts">
import AosccLinkButton from './components/AosccLinkButton.vue';
</script>

<template>
  <div>
    <category-second title="AOSCC" />
    <div class="aoscc-banner-bg relative h-[280px] px-10 py-6 text-white">
      <div class="absolute bottom-0 mb-10 ml-1">
        <AosccLinkButton to="https://aoscc.aosc.io" class="mr-4"
          >前往报名</AosccLinkButton
        >
        <AosccLinkButton to="/aoscc/2025">实用信息</AosccLinkButton>
      </div>
    </div>
    <category-second title="AOSCC：社区年度聚会" id="aoscc" />
  </div>
</template>

<style scoped>
.aoscc-banner-bg {
  background-image: url(/assets/aoscc/aoscc-2025-portal-banner.png);
  background-size: 1088px;
}
</style>
