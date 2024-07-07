<script setup>
import CategorySecond from "/src/components/CategorySecond.vue";
import {toUrl} from "/src/utils/utils.js";
import {ref} from 'vue'

const sponsorList = ref([
  {
    title: "服务与设施",
    list: [
      {
        name: "光圈网络 (Apernet Internet Laboratory)",
        web: "https://apernet.io/",
        img: "apernet",
      },
      {
        name: "GlobalSign",
        web: "https://www.globalsign.com/",
        img: "globalsign",
      },
      {
        name: "Microsoft Open Source",
        web: "https://opensource.microsoft.com/",
        img: "microsoft",
      },
      {
        name: "龙芯中科（武汉）技术有限公司",
        web: "https://www.loongson.cn/",
        img: "loongson",
      },
    ],
  },
  {
    title: "镜像源",
    list: [
      {
        name: "北京外国语大学开源软件镜像站",
        web: "https://mirrors.bfsu.edu.cn/",
        img: "bfsu",
      },
      {
        name: "南阳理工学院计算机与信息化处理协会",
        web: "https://cips.nyist.edu.cn/",
        img: "nyist-cips",
      },
      {
        name: "Fastly CDN",
        web: "https://www.fastly.com/products/cdn",
        img: "fastly",
      },
      {
        name: "哈尔滨工业大学 Linux 开源学生俱乐部",
        web: "https://lug.hit.edu.cn",
        img: "hit",
      },
      {
        name: "Hexhu",
        web: "https://arch.hu.fo/",
        img: "hexhu",
      },
      {
        name: "吉林大学 Linux 用户协会",
        web: "https://jlulug.org/",
        img: "jlu-lug",
      },
      {
        name: "中国科学技术大学 Linux 用户组 (LUG@USTC)",
        web: "https://lug.ustc.edu.cn/",
        img: "lug-ustc",
      },
      {
        name: "兰州大学开源社区 (LZUOSS)",
        web: "https://github.com/lzuoss",
        img: "lzuoss",
      },
      {
        name: "上海科技大学 Geekpie 协会",
        web: "https://geekpie.club/",
        img: "geekpie",
      },
      {
        name: "南京大学 Linux 用户组",
        web: "https://mirror.nju.edu.cn/",
        img: "nju-lug",
      },
      {
        name: "荷兰本地 Unix 用户组 (NLUUG)",
        web: "https://nluug.nl/",
        img: "nluug",
      },
      {
        name: "QVQNetwork",
        web: "https://qvq.network/",
        img: "qvq",
      },
      {
        name: "上海交通大学 Linux 用户组",
        web: "https://mirror.sjtu.edu.cn/",
        img: "sjtug",
      },
      {
        name: "腾讯云",
        web: "https://cloud.tencent.com/",
        img: "tencent-cloud",
      },
      {
        name: "清华大学 TUNA 协会",
        web: "https://tuna.moe/",
        img: "tuna",
      },
      {
        name: "电子科技大学 Linux 用户组",
        web: "https://uestclug.org/",
        img: "uestclug",
      },
    ],
  },
  {
    title: "开发设备",
    list: [
      {
        name: "Banana Pi 社区",
        web: "https://www.banana-pi.org/",
        img: "bpi",
      },
      {
        name: "龙芯中科（武汉）技术有限公司",
        web: "https://www.loongson.cn/",
        img: "loongson",
      },
      {
        name: "PLCT 实验室",
        web: "https://plctlab.org/zh/",
        img: "plct",
      },
    ],
  },
  {
    title: "软件许可",
    list: [
      {
        name: "CodeWeavers",
        web: "https://www.codeweavers.com/",
        img: "codeweavers",
      },
      {
        name: "JetBrains",
        web: "https://www.jetbrains.com/",
        img: "jetbrains",
      },
      {
        name: "PINE64",
        web: "https://pine64.org/",
        img: "pine64",
      },
    ],
  },
  {
    title: "历史赞助方（服务与设施）",
    list: [
      {
        name: "FuslVZ",
        web: "https://fuslvz.ws/",
        img: "fuslvz",
      },
      {
        name: "KoDDoS",
        web: "https://koddos.net/",
        img: "koddos",
      },
      {
        name: "OSSPlanet",
        web: "https://ossplanet.net/",
        img: "ossplanet",
      },
      {
        name: "QingCloud",
        web: "https://ossplanet.net/",
        img: "qingcloud",
      },
      {
        name: "SB Blog",
        web: "https://sb.sb/",
        img: "sb-blog",
      },
      {
        name: "xTom",
        web: "https://xtom.com/",
        img: "xtom",
      },
    ],
  },
  {
    title: "历史赞助方（镜像源）",
    list: [
      {
        name: "首都在线",
        web: "http://mirrors.capitalonline.net/",
        img: "cods",
      },
      {
        name: "重庆大学蓝盟",
        web: "http://lanunion.cqu.edu.cn/",
        img: "cqu-launion",
      },
      {
        name: "重庆邮电大学 Linux 用户组",
        web: "https://github.com/cquptlug",
        img: "cqupt-lug",
      },
      {
        name: "上海大学开源社区",
        web: "https://www.shuosc.org/",
        img: "shuosc",
      },
    ],
  },
]);
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="赞助方一览" />
    <div class="p-6">
      多年来，社区内外诸多好友慷慨解囊，提供诸如服务器托管、测试设备和镜像源等形式的持续支持。在降低项目开发维护成本和提高工作体验的同时，也让社区各项目的用户们享受到了尽可能好的服务质量。赞助方们的大力支持让安同开源社区在保持独立运作、志愿驱动的基本原则的同时得以存活和发展，我们在此展示社区当今及历史上的各赞助单位与个人，谨以此表达我们由衷的感激。
    </div>

    <div v-for="(item) in sponsorList" :key="item.title">
      <category-second :title="item.title" />
      <div class="p-6">
        <div class="grid grid-cols-4 gap-6 p-2">
        <div
          v-for="(sponsor) in item.list"
          :key="sponsor.name"
          class="cursor-pointer text-center"
          @click="toUrl(sponsor.web)"
        >
          <img
            loading="lazy"
            :src="`/assets/sponsors/${sponsor.img}.svg`"
            :alt="sponsor.name"
            class="w-[100%] max-w-[100%]"
          />
          <span class="text-link">{{ sponsor.name }}</span>
        </div>
      </div>
      </div>
    </div>
    <category-second title="服务与设施" />
    <div class="p-6">
      多年来，社区内外诸多好友慷慨解囊，提供诸如服务器托管、测试设备和镜像源等形式的持续支持。在降低项目开发维护成本和提高工作体验的同时，也让社区各项目的用户们享受到了尽可能好的服务质量。赞助方们的大力支持让安同开源社区在保持独立运作、志愿驱动的基本原则的同时得以存活和发展，我们在此展示社区当今及历史上的各赞助单位与个人，谨以此表达我们由衷的感激。
    </div>

    <category-second title="赞助与众筹" />
    <div class="p-6">
      根据社区
      <router-link to="/guidelines" class="text-link"
        >《人际关系准则》</router-link
      >
      的要求，AOSC
      不接受作为社区及项目运转资金之用的捐款。但由于我社作为无运作资本的志愿者社区，在社区日常运营及为具体项目购置大宗物件（如构建用服务器和
      AOSCC
      年度聚会等场合）时经常需要资金及物质支持。因此，我们接受针对特定项目及购买计划的金钱、物品（如电脑机箱、电源及硬盘等）及服务（如网站服务器资源等）捐赠。
    </div>

    <category-second title="补充条例" />
    <ul class="list-disc py-6 pl-16">
      <li>
        资金及物品捐赠必须用于具体社区项目（例：为 AOSC OS
        移植构建或升级构建用服务器）。
      </li>
      <li>
        社区将鸣谢捐赠者，但捐赠者不会自动成为社区贡献者（后者享受如社区门户上的个人主页、Git
        写入访问及 @aosc.io 邮箱等福利）。捐赠者享有如下权利：
      </li>
      <ul class="list-disc pl-10">
        <li>捐赠者可请求访问其参与众筹的设备及服务。</li>
        <li>社区将通知捐赠者有关设备后续用途、维护及置换的具体事宜。</li>
      </ul>
      <li>在所需金额及物品集齐后，众筹项目即认定完成。</li>
      <li>如筹得额外资金，额外资金将按捐款顺序退还，直到还清为止。</li>
      <ul class="list-disc pl-10">
        <li>如捐款者不接受退款，可根据需要调整众筹内容。</li>
      </ul>
      <li>如众筹项目被取消，将全额退还捐款予捐赠者。</li>
    </ul>
  </div>
</template>

<style scoped></style>
./components/Header.vue
