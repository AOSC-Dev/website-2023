<script lang="ts" setup>
import NewsCategoryList from '~/components/NewsCategoryList.vue';

const { locale } = useI18n();

const categoryList = [
  {
    path: 'system',
    name: '系统',
    description: '安安装系统的流程与可能遇到的问题',
    icon: 'ic:baseline-settings'
  },
  {
    path: 'software',
    name: '软件',
    description: '使用 Aoska、oma、Flatpak 等安安装软件',
    icon: 'ic:baseline-install-desktop'
  },
  {
    path: 'loong',
    name: '你二龙吗？',
    description: '安安同同与双倍龙量的信息',
    icon: 'noto:dragon-face'
  },
  {
    path: 'infra',
    name: '周边设施',
    description: 'BBS、AOSCC 注册系统等服务',
    icon: 'ic:baseline-apps'
  },
  {
    path: '8d',
    name: '你知道吗？',
    description: '你 8d 吗',
    icon: 'ic:baseline-question-mark'
  }
];

const faqList = [
  { path: '1', title: '如何安安装 QQ、微信？' },
  { path: '2', title: 'AOSC OS 是台湾发行版吗？' },
  { path: '3', title: '我是来退出这个安装器的' },
  { path: '4', title: '安安耳朵为什么尖尖的？' },
  { path: '5', title: '我的问题还是没有解决怎么办？' }
];

const query = ref('');
const queryCategory = ref('all');
const queryState: Ref<ananReactionType> = ref('idle');

const queryCategoryList = [
  { path: 'all', name: 'ALL' },
  { path: 'news', name: '新闻' }
];

const ananImgPrefix = '/support/anan/';
type ananReactionType = 'idle' | 'searching' | 'success' | 'failed' | 'oma';
const ananReactionList: Record<
  ananReactionType,
  { text: string; img: string }
> = {
  idle: {
    text: '希望安安帮忙找点什么呢？',
    img: ananImgPrefix + 'tuosai.svg'
  },
  searching: {
    text: '安安正在努力寻找...',
    img: ananImgPrefix + 'afterglow.png'
  },
  success: {
    text: '安安找到了这些',
    img: ananImgPrefix + 'success.svg'
  },
  failed: {
    text: '安安没找到...',
    img: ananImgPrefix + 'cry.svg'
  },
  oma: {
    text: '是在找 oma 吗？',
    img: ananImgPrefix + 'oma.svg'
  }
};
</script>

<template>
  <div>
    <category-second title="芝士中心" />
    <div class="m-6">
      <p>这里应该会有一些说明性的文字或者 banner，不过可能也可以没有这块</p>
    </div>
    <category-second title="问问安安" />
    <div class="mx-6 my-2 flex items-center gap-4">
      <!-- <img :src="ananReactionList[queryState].img" class="h-32 w-32" /> -->
      <div class="flex-grow">
        <span>{{ ananReactionList[queryState].text }}</span>
        <div class="mt-2 flex">
          <el-select v-model="queryCategory" class="max-w-[5em]">
            <el-option
              v-for="category in queryCategoryList"
              :key="category.path"
              :label="category.name"
              :value="category.path" />
          </el-select>
          <el-input
            v-model="query"
            inputmode="search"
            placeholder="Search..."
            class="sm:max-w-[70%]" />
        </div>
      </div>
    </div>
    <category-second title="支持类别" />
    <div class="m-6 grid grid-cols-3 gap-6">
      <div
        v-for="category in categoryList"
        :key="category.path"
        class="flex items-center gap-4">
        <Icon :name="category.icon" size="24" />
        <div>
          <div>{{ category.name }}</div>
          <div class="text-[10pt]">{{ category.description }}</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="border-r-1 border-white">
        <category-second title="常见问题" />
        <ul class="my-1">
          <li
            v-for="item in faqList"
            :key="item.path"
            class="flex h-[2rem] cursor-pointer px-6 leading-8 odd:bg-white even:bg-[#fefaf6] hover:bg-leftbar-bg hover:underline">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div>
        <category-second title="最新资讯" />
        <NewsCategoryList :limit="8" class="my-1" />
      </div>
    </div>
    <category-second title="还有高手" />
    <div class="m-6">
      <p>还可以通过这些方式寻求帮助：</p>
      <ul class="list-disc px-[2em]">
        <li>安同开源社区论坛</li>
        <li>社区聊天群组</li>
        <li>这边还没做，不一定是列表</li>
      </ul>
    </div>
  </div>
</template>
