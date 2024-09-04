<script setup>
/**
 * 版本及架构说明
 * 有两个子发行版，安同 OS 和星霞 OS
 * 这两个一同覆盖了这 15 个架构，且不重复
 * 然后两个子发行版支持的架构里分一级和二级架构
 *
 * 其中安同 OS 支持的一级架构包括 amd64, arm64, loongarch64；支持的二级架构有 ppc64el, riscv64 和 loongson3
 * 星霞 OS 暂定一级架构有 i486, loongson2f 和 powerpc；二级架构有 m68k, armv4, armv6hf 和 armv7hf
 * 由于两个子发行版各自支持不同的架构，所以可以通过架构名判断是安同 OS 还是星霞 OS，一二级架构同理
 */
import CategorySecond from "../../../src/components/CategorySecond.vue";
import DownloadButton from "./components/DownloadButton.vue";
import { onMounted, ref, watch, nextTick, onUnmounted, reactive } from "vue";
import { ElMessage } from "element-plus";
import { highlightElement } from "../../utils/animation.ts"
import Highlight from "../../components/Highlight.vue";
import { useRouter, useRoute, RouterView } from 'vue-router'
import { requestJson, title } from "../../utils/utils.js"
import { useHighBrightnessControllerStore } from "../../stores/miscellaneous"
import AccordionNavigation from "../../components/AccordionNavigation.vue";

const router = useRouter()
const route = useRoute()

let msStoreScript = document.createElement("script");
msStoreScript.setAttribute(
  "src",
  "https://get.microsoft.com/badge/ms-store-badge.bundled.js"
);
document.head.appendChild(msStoreScript);

const loading = ref(true);
const versionArch = ref([]);
const aoscOsDownload = ref()
const afterglowDownload = ref()
const omaDownload = ref();
const tier2Downloads = ref()
const downloadDocker = ref()

const omaNavigationList = [{
  title: '详细介绍',
  path: '/oma'
}, {
  title: '源代码',
  url: 'https://github.com/AOSC-Dev/oma'
}, {
  title: '下载 Debian/Ubuntu 安装包',
  url: 'https://github.com/AOSC-Dev/oma/releases/tag/v1.8.2'
}]

const aoscOsNavigationList = [{
  title: '发行说明',
  path: '/aosc-os/relnote'
}, {
  title: '配置需求',
  path: '/aosc-os/requirements'
}]

const liveKitNavigationList = [{
  title: '发行说明',
  path: ''
}, {
  title: '配置需求',
  path: ''
}]

const wslNavigationList = [{
  title: '发行说明',
  path: ''
}, {
  title: '配置需求',
  path: ''
}]

const highBrightnessControllerStore = useHighBrightnessControllerStore()

const switchHash = () => {
  switch (route.hash) {
    case "#oma-download": highlightElement(omaDownload); break
    case "#aosc-os-download": highlightElement(aoscOsDownload); break
    case "#afterglow-download": highlightElement(afterglowDownload); break
    case "#tier-2-downloads": highlightElement(tier2Downloads); break
    case "#otherDownload": {
      highlightElement(downloadDocker);
      highlightElement(tier2Downloads);
      break;
    }
  }
}

watch(() => highBrightnessControllerStore.obj[route.path], () => {
  switchHash()
}, {
  flush: 'post'
})

const aoscOsDownloadStyle = reactive({
  width: 224
})

const vss = (() => {
  let lessThen = true
  return () => {
    if (lessThen) {
      lessThen = false
      if (aoscOsDownload.value.clientWidth <= 496) {
        if (aoscOsDownload.value.clientWidth > 384) {
          aoscOsDownloadStyle.width = 224 - 0.55 * (496 - aoscOsDownload.value.clientWidth)
        }
        else
          aoscOsDownloadStyle.width = 157
      } else {
        aoscOsDownloadStyle.width = 224
      }
      lessThen = true
    }
  }
})()


onUnmounted(() => {
  window.removeEventListener('resize', vss);
})

onMounted(async () => {
  nextTick(() => {
    window.addEventListener('resize', vss);
    vss()
  })
  switchHash()
  let [res, err] = await requestJson('https://releases.aosc.io/manifest/livekit.json', 'downloadLivekit');
  if (res) {
    versionArch.value = res;
    antong1List.value.forEach((v) => {
      v.installer = getNewVersioArch(v.title, 'installer');
      v.livekit = getNewVersioArch(v.title, 'livekit');
    });
    antong2List.value.forEach((v) => {
      v.installer = getNewVersioArch(v.title, 'installer');
      v.livekit = getNewVersioArch(v.title, 'livekit');
    });
    xingxia1List.value.forEach((v) => {
      v.livekit = getNewVersioArch(v.title, 'livekit');
    });
    xingxia2List.value.forEach((v) => {
      v.livekit = getNewVersioArch(v.title, 'livekit');
    });
  } else if (err) {
    ElMessage.warning("版本信息获取失败");
    console.log("获取异常: ", err);
  }
  loading.value = false;
});

const livkitPPlacement = [
  'top', 'left', 'bottom'
]

const antong1List = ref([
  {
    title: "amd64",
    zhLabel: "x86-64",
    enLabel: "x86-64",
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备',
      placement: 'top'
    }
  },
  {
    title: "arm64",
    zhLabel: "AArch64",
    enLabel: "AArch64",
    popoverData: {
      conten: '适用于兼容 Armv8-A 及以上版本的 64 位 Arm 设备',
      placement: 'top'
    }
  },
  {
    title: "loongarch64",
    zhLabel: "LoongArch",
    enLabel: "LoongArch",
    popoverData: {
      conten: '适用于兼容龙架构 (LoongArch) 指令集及 128 位向量扩展 (LSX) 的 64 位设备',
      placement: 'bottom'
    }
  },
]);
const antong2List = ref([
  {
    title: "ppc64el",
    zhLabel: "IBM POWER（64 位，小端序）",
    enLabel: "IBM POWER (64-bit, little endian)",
    popoverData: {
      conten: '适用于兼容 Power ISA v2.07 及以上版本的 64 位、小端序模式设备',
      placement: 'top'
    }
  },
  {
    title: "riscv64",
    zhLabel: "RISC-V（64 位）",
    enLabel: "RISC-V (64-bit)",
    popoverData: {
      conten: '适用于兼容 RVA20 Architecture Profile 的 64 位 RISC-V 设备',
      placement: 'left'
    }
  },
  {
    title: "loongson3",
    zhLabel: "基于 MIPS 的龙芯三号",
    enLabel: "MIPS-based Loongson 3",
    popoverData: {
      conten: '适用于基于 MIPS 的龙芯三号设备',
      placement: 'bottom'
    }
  },
]);
const xingxia1List = ref([
  {
    title: "i486",
    zhLabel: "Intel 80486 或更新",
    enLabel: "Intel 80486 or newer",
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: "loongson2f",
    zhLabel: "龙芯 2F",
    enLabel: "Loongson 2F",
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: "powerpc",
    zhLabel: "PowerPC（32 位，大端序）",
    enLabel: "PowerPC (32-bit, big endian)",
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: "ppc64",
    zhLabel: "PowerPC（64 位，大端序）",
    enLabel: "PowerPC (64-bit, big endian)",
    popoverData: { conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备' }
  },
]);
const xingxia2List = ref([
  {
    title: "m68k",
    zhLabel: "Motorola 68000 系列处理器**",
    enLabel: "Motorola 68000",
    popoverData: { conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备' }
  },
  {
    title: "armv4",
    zhLabel: "ARMv4",
    enLabel: "ARMv4",
    popoverData: { conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备' }
  },
  {
    title: "armv6hf",
    zhLabel: "ARMv6（硬浮点）",
    enLabel: "ARMv6 (hard-float)",
    popoverData: { conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备' }
  },
  {
    title: "armv7hf",
    zhLabel: "ARMv7（硬浮点，带有 NEON 指令集支持）",
    enLabel: "ARMv7 (hard-float, with NEON support)",
    popoverData: { conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备' }
  },
]);

function getAntongDate() {
  if (versionArch.value.length == 0) return '...'
  let dateStr = getNewVersioArch("amd64", "installer").date;
  return `${dateStr.substring(0, 4)}/${dateStr.substring(
    4,
    6
  )}/${dateStr.substring(6, 8)}`;
}

/**
 * 比较 ISO 的日期（或版本）
 */
function isoVersionCmp(v1, v2) {
  let d1 = v1.date;
  let d2 = v2.date;
  let c;
  let l = d1.length > d2.length ? d2.length : d1.length
  for (c = 0; c < l; c++) {
    if (d1[c] > d2[c]) {
      return -1;
    }
    if (d1[c] < d2[c]) {
      return 1;
    }
    if (c == l - 1) {
      if (d1.length > d2.length) {
        return -1;
      } else {
        return 1;
      }
    }
  }
  return 0;
}

/**
 * 根据架构找出最新的下载信息
 */
const getNewVersioArch = (arch, type) => {
  let list = versionArch.value.filter((v) => v.arch == arch);
  list = list.filter((v) => v.path.includes(type));
  list = list.sort(isoVersionCmp)
  return list[0];
}
</script>

<template>
  <div class="pl-[1px] flex flex-col min-w-[1148px] ss">
    <category-second id="aosc-os-download" title="操作系统" />
    <div class="flex flex-row flex-1">
      <div ref="aoscOsDownload"
        class="aosc-os-container justify-between flex flex-row w-[50%] justify-around bg-white px-[1rem] flex-wrap">
        <div class="mt-[1.5rem] min-w-[96px] w-[30%] flex">
          <img src="/assets/download/aosc-os-web.svg" />
        </div>
        <div class="text-aosc-os my-[2rem]">
          <p class="text-[32pt]">安同 OS</p>
          <p class="text-[14pt]">称心得意的桌面操作系统</p>
          <p class="width-[220px] text-[10pt]">
            {{ getAntongDate() }}·
            <AccordionNavigation :navigationList="aoscOsNavigationList" linkClass="">·</AccordionNavigation>
          </p>
        </div>
        <div class="download-container mt-0 min-h-[129.97px] min-w-[150px]">

          <div v-loading="loading">

            <div class="button-container-aoscos-multicolumn buttons-col mb-3 mt-1 flex justify-center"
              v-if="versionArch.length > 0">
              <DownloadButton v-for="item in antong1List" :popoverData="item.popoverData"
                :width=aoscOsDownloadStyle.width :key="item.title" :archName="item.zhLabel" :isaInfo="item.installer" />
              <!-- <button class="text-white hover:opacity-85 cursor-pointer mx-1 text-[10pt] text-center bg-[#549c97]"
                :style="{ width: aoscOsDownloadStyle.width + 'px' }" onclick="location.href='#otherDownload'">
                <p>其他下载</p>
              </button> -->
              <DownloadButton buttonColor="#549c97" :width=aoscOsDownloadStyle.width :popoverData="{
                conten: '二级架构、Docker,及虚拟机镜像等其他下载',
                placement: 'bottom'
              }" :myClick="() => { location.href = '#otherDownload' }" archName="其他下载" />
            </div>
          </div>
        </div>
      </div>
      <div class="afterglow  px-[1rem]" ref="afterglowDownload">
        <div class="download-container my-[2rem] text-afterglow">
          <p class="text-white text-[32pt]">星霞 OS</p>
          <p class="text-white text-[14pt]">老设备也能发光发热</p>
          <p class="text-white text-[10pt]">敬请期待...</p>
        </div>
        <div class="mt-[2rem] min-w-[96px] w-[30%]">
          <img src="/assets/download/afterglow-web.svg" />
        </div>
      </div>
    </div>


    <div class="livekit-container w-[100%] flex flex-row">
      <div class="flex flex-col">
        <div id="livekit-title" class="flex-col my-auto pl-[2rem] py-[1rem] flex">
          <p id="livekit" class="text-[24pt]">LiveKit</p>
          <p id="livekit-alt" class="text-[14pt]">安同 OS 安装及救援环境</p>
          <p id="livekit" class="mt-2 text-[16pt]">功能完备，应不时之需</p>
          <p class="mt-1">
            <AccordionNavigation :navigationList="liveKitNavigationList" linkClass="">·</AccordionNavigation>
          </p>
        </div>
      </div>
      <div id="livekit-buttons" class=" flex flex-col flex pr-[2rem] ml-auto my-2">
        <div v-loading="loading" class="my-auto">
          <div class="button-container-aoscos buttons-col" v-if="versionArch.length > 0">
            <span v-for="(item, index) in antong1List" :key="item.title">
              <DownloadButton :popoverData="{ ...item.popoverData, placement: livkitPPlacement[index] }"
                :secondLineFontSize=8 :width=200 :firstLineFontSize="10" :archName="item.zhLabel"
                :isaInfo="item.livekit" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="wsl-container w-[100%] flex flex-row ">
      <div class="flex flex-col pl-[2rem] py-[1rem]">
        <p id="wsl" class="text-[24pt]">WSL 环境</p>
        <p id="wsl-alt" class="text-[14pt]">适用于 WSL 的安同 OS</p>
        <p id="wsl-description" class="mt-2 text-[16pt]">Windows 与安同双双联手，生产力触手可及</p>
        <p class="mt-1">
          <AccordionNavigation :navigationList="wslNavigationList" linkClass="">·</AccordionNavigation>
        </p>
      </div>
      <div id="wsl-buttons" class="flex mt-auto mr-9 ml-auto">
        <ms-store-badge 
          productid="9NMDF21NV65Z" window-mode="popup"  theme="dark" language="en-us" animation="on">
        </ms-store-badge>
      </div>
    </div>
    <category-second class="highlight" title="实用工具" />
    <div id="oma-download" ref="omaDownload" class="oma-container w-[100%] flex flex-row py-[1rem]">
      <div id="oma-title" class="pl-[2rem] my-auto">
        <p class="text-[24pt] ">小熊猫 (oma)</p>
        <p class="text-[14pt] ">简明好用的 APT 软件包管理界面</p>
        <p class="mt-2 text-[16pt] ">轻松管，轻松用！</p>
        <p class="mt-1">
          <AccordionNavigation :navigationList="omaNavigationList" linkClass="">·</AccordionNavigation>
        </p>
      </div>
    </div>
    <div id="otherDownload">
      <category-second id="tier-2-downloads" title="安同 OS（二级架构）" />
      <div ref="tier2Downloads" class="w-[100%] flex-row py-[1rem] flex">
        <div class="pl-[2rem] my-auto">
          <p class="text-[14pt]">安同 OS 支持支持众多处理器微架构</p>
          <p class="text-[14pt]">除 x86-64、AArch64 及 LoongArch 外</p>
          <p class="text-[14pt]">我们还支持一众存量较少或软件支持尚未完善的架构</p>
          <p class="text-[14pt]">供各位玩家试用和评估</p>
        </div>
        <div class=" flex flex-col pr-[2rem] gap-y-[0.5rem] ml-auto my-2" v-loading="loading"
          v-if="versionArch.length > 0">
          <span v-for="item in antong2List" :key="item.title">
            <DownloadButton :popoverData="item.popoverData" :secondLineFontSize=8 :width=200 :firstLineFontSize="10"
              class="py-[0.25rem]" v-if="item.livekit !== undefined" :archName="item.zhLabel" :isaInfo="item.livekit" />
          </span>
        </div>
      </div>
      <category-second id="downloadDocker" title="容器镜像" />
      <div ref="downloadDocker" class="pt-[20px] pb-[30px] px-[30px]">
        <div class="text-[14pt]">
          我们为Docker用户提供了容器镜像，您可以通过如下命令抓取安同OS容器
        </div>
        <highlight lang="bash" code="docker pull aosc/aosc-os" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-container {
  display: flex;
  flex-flow: column;
}

p {
  line-height: 1.2;
}

.text-aosc-os {
  display: flex;
  text-align: right;
  flex-flow: column;
}

.text-afterglow {
  display: flex;
  text-align: left;
  flex-flow: column;
}

.afterglow {
  background: linear-gradient(90deg, rgb(0 0 0 / 65%), 100%, transparent),
    url(/assets/backgrounds/afterglow.webp);
  background-size: auto 150%;
  background-color: black;
  width: 50%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

.normal-p {
  font-size: 12pt;
  color: #fff;
  justify-content: right;
  display: flex;
}

.button-p {
  font-size: 10pt;
}

.button-container-aoscos {
  display: flex;
  justify-content: right;
  flex-flow: column;
  row-gap: 0.5em;
  align-self: flex-end;
  margin: 0 auto;
}

.button-container-aoscos-multicolumn {
  display: flex;
  row-gap: 0.5em;
  flex-wrap: wrap;
  align-self: flex-end;
}

.button-container-afterglow {
  display: flex;
  justify-content: left;
  flex-flow: column;
  row-gap: 0.5em;
  margin-top: 1em;
}

.aosc-os-container {
  background: linear-gradient(90deg, rgb(255 255 255 / 0%), 100%, transparent),
    url(/assets/backgrounds/aosc-os.webp);
  background-size: auto 185%;
}

.afterglow-container {}

.livekit-container {
  background: linear-gradient(90deg, #f6d5ac, 75%, transparent),
    url("/assets/backgrounds/livekit.jpg");
  background-position-x: 0%, 100%;
}

.oma-container {
  background-color: rgb(218 206 187 / 100%);
  background-image: url(../../../public/assets/download/oma-mascot.svg), url(/public/assets/download/oma.svg);
  background-size: 112px auto, 100% auto;
  background-position: right 64px bottom -4px, center;
  background-repeat: no-repeat, no-repeat;
}

.oma-mascot {
  background: url(../../../public/assets/download/oma_item-1.svg);
  align-self: flex-end;
}

.wsl-container {
  background: linear-gradient(90deg, #b7e4fc, 75%, transparent),
    url("/assets/backgrounds/aosc-os-wsl.webp");
  background-color: #000;
  background-position-x: 0%, 30rem;
  background-size: 100%, 50rem;
  background-repeat: no-repeat;
}

.buttons-col button {
  padding: 0.25rem 0;
}

ms-store-badge::part(img) {
  width: 200px;
  display: block;
}
</style>
