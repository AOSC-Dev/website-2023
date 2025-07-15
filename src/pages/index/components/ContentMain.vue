<script setup name="ContentMain">
import { reactive, ref } from 'vue';
import CategorySecond from '/src/components/CategorySecond.vue';
import NewsCategoryList from '/src/pages/news/components/NewsCategoryList.vue';
import { requestGetJson } from '../../../utils/utils';
import { ElIcon } from 'element-plus';

/**
 * 新闻资讯列表
 */
const newsListLoading = ref(true);
const newsList = ref([]);
const isLoad = ref(false);

(async () => {
  let [res, err] = await requestGetJson(`/newsCategories/home.zh-cn.json`);
  if (res) {
    newsList.value = res.data;
    newsListLoading.value = false;
  } else if (err) {
    console.log(err);
    newsListLoading.value = false;
  }
  isLoad.value = true;
})();

const zhuanlanList = reactive([
  {
    img: '/assets/icons/key-enter.min.svg',
    title: '高效工作',
    description:
      '以开箱即用作为主要设计目标，安同 OS 是您日常工作的得力助手。从文字办公到服务器运维，摄影后期到 3D 建模，课堂笔记到文档翻译，我们的系统助您快速部署、高效工作、尽情创作。'
  },
  {
    img: '/assets/icons/document-properties.min.svg',
    title: '高兼容性',
    description:
      '我们相信，操作系统是应用程序和生产力的舞台。除软件源中提供的经官方验证的软件外，安同 OS 还支持如意玲珑、Flatpak、Snap 和 AppImage 等跨发行版生态，扩充软件支持的范畴。此外，Spiral 项目可改善 Debian 及 Ubuntu 软件包的兼容性。'
  },
  {
    img: '/assets/icons/tools-wizard.min.svg',
    title: '易于管理',
    description:
      '从安装到系统更新，从组件管理到日常维护，安同 OS 内建许多易于使用的管理工具，助您轻松管理、舒心使用。内建的小熊猫包管理 (oma) 以其简明且人性化的界面，让系统管理尽可能低风险、低耗时、高可靠。'
  },
  {
    img: '/assets/icons/love.min.svg',
    title: '如影随形',
    description:
      '我社一向以友好负责的支持工作著称，尊重用户的时间与精力是我们的工作准则。社区也是信息共享的强大后盾——在各社区聊天群组，我们时刻准备着为您排忧解难。'
  }
]);
</script>

<template>
  <div class="w-[62.5%] bg-content-main-bg p-0">
    <app-link to="/aoscc" class="flex w-full">
      <el-image class="aspect-16/11 w-full" src="/assets/jumbotron/main1.png">
        <template #error>
          <div class="image-slot cursor-pointer">
            <el-icon>
              <Picture />
            </el-icon>
          </div>
        </template>
      </el-image>
    </app-link>
    <!-- 资讯要点 -->
    <div>
      <category-second title="资讯要点" />
      <article v-if="isLoad">
        <news-category-list :news-list="newsList" />
        <div
          class="px-[15px] py-[10px] text-right leading-6 font-[12pt] text-link">
          <router-link to="/news">
            <span>查阅最新社区资讯</span>
            <v-icon name="bi-chevron-double-right" />
          </router-link>
        </div>
      </article>
    </div>
    <!-- 专栏 -->
    <div v-if="isLoad" id="topic">
      <category-second title="专栏：初识安同 OS" />
      <article class="p-[1em] leading-6">
        <div
          class="flex items-center pb-[15px]"
          v-for="item in zhuanlanList"
          :key="item.title">
          <div class="mr-[20px] ml-[0.5em] basis-[50px]">
            <img :src="item.img" />
          </div>
          <div class="flex-1 p-0">
            <div class="text-[14pt] font-semibold">
              {{ item.title }}
            </div>
            <div class="text-[12pt]">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div class="px-[15px] text-right text-[12pt] leading-6">
          <router-link
            class="text-[#0056cc] no-underline"
            to="/aosc-os/right-for-me">
            详情请见：安同 OS 适合我吗？</router-link
          >
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
../../../components/CategorySecond.vue
