<script setup name="ContentMain">
import { onMounted, reactive, ref } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import NewsCategoryList from "/src/pages/news/components/NewsCategoryList.vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

/**
 * 新闻资讯列表
 */
const newsListLoading = ref(true);
const newsList = ref([]);
onMounted(() => {
  axios
    .get(`/newsCategories/home.zh-cn.json`)
    .then((res) => {
      newsList.value = res.data;
      newsListLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      newsListLoading.value = false;
    });
});

const zhuanlanList = reactive([
  {
    img: "/assets/icons/computer-monitor.min.svg",
    title: "高效工作",
    description: "AOSC OS 以开箱即用及简明设计为目标，是您日常工作的得力伙伴。",
  },
  {
    img: "/assets/icons/globe.min.svg",
    title: "走向世界",
    description:
      "如果您在互联网连接受限的地区生活，AOSC OS 内建工具可助您畅游全球互联网。",
  },
  {
    img: "/assets/icons/shield.min.svg",
    title: "有备无患",
    description:
      "内建 Rescuekit 助您排除故障恢复数据。亦可用于备份等预防式维护。",
  },
]);

function toAoscOs() {
  router.push("/aoscos");
}
</script>

<template>
  <div class="w-[62.5%] bg-content-main-bg p-0">
    <img
      src="/assets/banners/banner_main1.svg"
      alt=""
      class="w-full cursor-pointer"
      @click="toAoscOs"
    />
    <!-- 咨讯要点 -->
    <div>
      <category-second title="资讯要点" />
      <article class="">
        <news-category-list :newsList="newsList" />
        <div
          class="text-right px-[15px] py-[10px] font-[12pt] leading-6 text-link"
        >
          <router-link to="/news">
            <span>查阅最新社区资讯</span>
            <v-icon name="bi-chevron-double-right" />
          </router-link>
        </div>
      </article>
    </div>
    <!-- 专栏 -->
    <div id="topic">
      <category-second title="专栏: 初识AOSC OS" />
      <article class="p-[1em] leading-6">
        <div
          class="flex items-center pb-[15px]"
          v-for="item in zhuanlanList"
          :key="item.title"
        >
          <div class="basis-[50px] mr-[20px] ml-[0.5em]">
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
        <div class="text-right px-[15px] text-[12pt] leading-6">
          <a
            class="text-[#0056cc] no-underline"
            href="https://wiki.aosc.io/zh/aosc-os/is-aosc-os-right-for-me/"
          >
            详情请见：AOSC OS 适合我吗？</a
          >
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
../../../components/CategorySecond.vue
