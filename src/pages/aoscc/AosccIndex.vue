<script setup lang="ts">
import AosccLinkButton from './components/AosccLinkButton.vue';
import AppLink from '../../components/AppLink.vue';

const aosccList = [
  {
    year: 2025,
    title: '上海交通大学（2025 年 7 月 26 - 27 日）',
    hasLink: true
  },
  { year: 2024, title: '吉林大学（2024 年 7 月 13 - 14 日）', hasLink: true },
  {
    year: 2023,
    title: '上海科技大学（2023 年 7 月 15 - 16 日）',
    hasLink: true
  },
  {
    year: 2022,
    title: '由于新冠肺炎疫情，于线上举办（2022 年 9 月 17 日）',
    hasLink: true
  },
  {
    year: 2021,
    title: '由于新冠肺炎疫情，于线上举办（2021 年 9 月 19 - 20 日）',
    hasLink: true
  },
  {
    year: 2020,
    title: '由于新冠肺炎疫情，于线上举办（2020 年 9 月 25 - 26 日）',
    hasLink: true
  },
  {
    year: 2019,
    title: '中国科学技术大学（2019 年 7 月 12 - 14 日）',
    hasLink: true
  },
  { year: 2018, title: '聚会取消', hasLink: false },
  {
    year: 2017,
    title: '广东工业大学（2017 年 7 月 14 - 16 日）',
    hasLink: true
  },
  { year: 2016, title: '上海科技大学（2016 年 7 月）', hasLink: false },
  { year: 2015, title: '深圳长虹科技大厦（2015 年 7 月）', hasLink: false }
];
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
    <div class="p-6">
      <p>
        AOSCC
        是我社每年一度的线下聚会，公开邀请社区好友参与。活动期间，社区邀请社区贡献者、高校社团成员和行业代表等分享、交流工作，并组织抽奖、代号投票等趣味活动。近年来，AOSCC
        均由中国高校社团协办，每年吸引超过 100 来自与会者参与。以下是自 2015
        年的 AOSCC 活动地点、日期和会议信息记录：
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li v-for="{ year, title, hasLink } in aosccList" :key="year">
            <b>{{ year }} 年：</b>
            <AppLink v-if="hasLink" :to="`/aoscc/${year}`">{{ title }}</AppLink>
            <span v-else>{{ title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aoscc-banner-bg {
  background-image: url(/assets/aoscc/aoscc-2025-portal-banner.png);
  background-size: 1088px;
}
</style>
