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
import { onMounted, ref, nextTick, onUpdated } from "vue";
import { ElMessage } from "element-plus";
import highlightElement from "../../utils/animation.ts"

import Highlight from "../../components/Highlight.vue";
import { useRouter, useRoute, RouterLink, RouterView } from 'vue-router'

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
const omaDownload = ref();

onUpdated(() => {
  switch (route.hash) {
    case "#oma-download": highlightElement(omaDownload); break
    case "#aosc-os-download": highlightElement(aoscOsDownload); break
  }
})

onMounted(() => {
  fetch("https://releases.aosc.io/manifest/livekit.json", {
    headers: {
      Origin: "*",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("架构: ", res);
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
    })
    .catch((err) => {
      ElMessage.warning("版本信息获取失败");
      console.log("获取异常: ", err);
    })
    .finally(() => {
      loading.value = false;
    });
});

const antong1List = ref([
  {
    title: "amd64",
    zhLabel: "x86-64",
    enLabel: "x86-64",
  },
  {
    title: "arm64",
    zhLabel: "AArch64",
    enLabel: "AArch64",
  },
  {
    title: "loongarch64",
    zhLabel: "龙架构 (LoongArch)",
    enLabel: "LoongArch",
  },
]);
const antong2List = ref([
  {
    title: "ppc64el",
    zhLabel: "IBM POWER（小端序）",
    enLabel: "IBM POWER",
  },
  {
    title: "riscv64",
    zhLabel: "RISC-V（64 位）",
    enLabel: "RISC-V（64 位）",
  },
  {
    title: "loongson3",
    zhLabel: "基于 MIPS 的龙芯三号处理器",
    enLabel: "基于 MIPS 的龙芯三号处理器",
  },
]);
const xingxia1List = ref([
  {
    title: "i486",
    zhLabel: "Intel 80486 或更新",
    enLabel: "Intel 80486 or new",
  },
  {
    title: "loongson2f",
    zhLabel: "基于 MIPS 的龙芯二号处理器",
    enLabel: "基于 MIPS 的龙芯二号处理器",
  },
  {
    title: "powerpc",
    zhLabel: "PowerPC（32 位，大端序）",
    enLabel: "PowerPC/powerpc",
  },
]);
const xingxia2List = ref([
  {
    title: "m68k",
    zhLabel: "Motorola 68000 系列处理器**",
    enLabel: "Motorola 68000",
  },
  {
    title: "armv4",
    zhLabel: "ARMv4",
    enLabel: "ARMv4",
  },
  {
    title: "armv6hf",
    zhLabel: "ARMv6（硬浮点）",
    enLabel: "ARMv6",
  },
  {
    title: "armv7hf",
    zhLabel: "ARMv7（硬浮点）",
    enLabel: "ARMv7",
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
function getNewVersioArch(arch, type) {
  let list = versionArch.value.filter((v) => v.arch == arch);
  list = list.filter((v) => v.path.includes(type));
  list = list.sort(isoVersionCmp)
  return list[0];
}
</script>

<template>
  <div class="pl-[1px] flex flex-col min-w-[1148px] ss">
    <category-second title="系统下载" />
    <div class="flex flex-row flex-1">
      <div ref="aoscOsDownload"
        class="aosc-os-container justify-between flex flex-row w-[50%] justify-around bg-white px-[1rem] flex-wrap">
        <div class="mt-[1.5rem] min-w-[96px] w-[30%] flex">
          <img src="/assets/download/aosc-os-web.svg" />
        </div>
        <div class="text-aosc-os my-[2rem]">
          <p style="font-size: 32pt">安同 OS</p>
          <p style="font-size: 14pt">称心得意的桌面操作系统</p>
          <p style="width: 210px;font-size: 10pt">
            {{ getAntongDate() }}·
            <a class="cursor-pointer" href="/aosc-os/relnote">发行说明</a>·
            <a class="cursor-pointer" href="/aosc-os/requirements">配置需求</a>
          </p>
        </div>
        <div class="download-container mt-0 min-h-[129.97px] min-w-[150px]">

          <div v-loading="loading">

            <div class="button-container-aoscos-multicolumn buttons-col mb-3 mt-1 flex justify-center"
              v-if="versionArch.length > 0">
              <download-button v-for="item in antong1List" :key="item.title" :labelInfo="item"
                :isaInfo="item.installer" />
              <button class="w-[224px] text-white hover:opacity-85 cursor-pointer mx-1 text-[10pt]"
                style="background: #549c97; text-align: center; border: #7f979e;"
                onclick="location.href='#tier-2-downloads'">
                <p>二级架构、Docker</p>
                <p>及虚拟机镜像等其他下载</p>
              </button>

            </div>
          </div>
        </div>
      </div>
      <div class="afterglow  px-[1rem]">
        <div class="download-container my-[2rem] text-afterglow">
          <p style="font-size: 32pt; color: #fff">星霞 OS</p>
          <p style="font-size: 14pt; color: #fff">老设备也能发光发热</p>
          <p style="font-size: 10pt; color: #fff;width: 210px;">敬请期待...</p>
          <!-- <div class="button-container-afterglow buttons-col">
              <span v-for="item in xingxia1List" :key="item.title">
                <download-button
                  v-if="item.info != undefined"
                  :isaInfo="item"
                ></download-button>
              </span>
            </div> -->
        </div>
        <div class="mt-[2rem] min-w-[96px] w-[30%]">
          <img src="/assets/download/afterglow-web.svg" />
        </div>
      </div>
    </div>


    <div class="livekit-container w-[100%] flex flex-row">
      <div class="flex flex-col">
        <div id="livekit-title" class="flex-col my-auto pl-[2rem] py-[1rem] flex">
          <div class="flex flex-col">
            <span id="livekit" class="text-[24pt] leading-none">LiveKit</span>
            <span id="livekit-alt" class="leading-6 text-[14pt]">安同 OS 安装及救援环境</span>
          </div>

          <div class="flex flex-col mt-1">
            <span id="livekit" class="leading-8 text-[16pt]">功能完备，应不时之需</span>
            <div>
              <a href="#">发行说明</a>
              <span class="px-[.25rem]">·</span>
              <a href="#">配置需求</a>
            </div>
          </div>
        </div>
      </div>
      <div id="livekit-buttons" class=" flex flex-col flex pr-[2rem] ml-auto">
        <div v-loading="loading" class="my-auto">
          <div class="button-container-aoscos buttons-col " v-if="versionArch.length > 0">
            <span v-for="item in antong1List" :key="item.title">
              <download-button :secondLineFontSize=5 :width=140 :firstLineFontSize="8" :labelInfo="item"
                :isaInfo="item.livekit"></download-button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="wsl-container w-[100%] flex flex-row ">
      <div class="flex flex-col pl-[2rem] py-[1rem]">
        <div id="wsl-title">

          <span id="wsl" class="text-[24pt] leading-none">WSL 环境</span>
          <span id="wsl-alt" class="flex leading-6 text-[14pt]">适用于 WSL 的安同 OS</span>

        </div>
        <div class="mt-1">
          <span id="wsl-description" class="text-[16pt] leading-8">Windows 与安同双双联手，生产力触手可及</span>
          <p>
            <a href="#">发行说明</a>
            <span class="px-[.25rem]">·</span>
            <a href="#">配置需求</a>
          </p>
        </div>
      </div>
      <div id="wsl-buttons" class="buttons-col flex flex-col justify-between gap-2 my-[1rem] mt-auto pr-[36px] ml-auto">
        <ms-store-badge class=" h-[62px]"
          style="max-width: 224px;background-color: black;border-style: solid;border-width: 2px; border-color:lightgray; box-shadow: -1px 1px 2px 1px #00000036 ;"
          productid="9NMDF21NV65Z" window-mode="popup" theme="dark" language="en-us" animation="off">
        </ms-store-badge>
      </div>
    </div>
    <category-second class="highlight" title="实用工具" />
    <div id="oma-download" ref="omaDownload" class="oma-container w-[100%] flex flex-row ">
      <div class="flex flex-row my-auto pl-[1rem] py-[1rem]">
        <div id="oma-title" class="my-auto pl-[0.5rem]">
          <span id="oma" class="text-[24pt] leading-none">小熊猫(oma)</span>
          <span id="oma-alt" class="flex leading-6 text-[14pt]">安同 OS 默认包管理器 </span>
          <div class="mt-1">
            <span id="wsl-description" class="text-[16pt] leading-8">同时兼容其他基于dpkg的发行版</span>
            <p>
              <a href="#">GitHub</a>
              <span class="px-[.25rem]">·</span>
              <RouterLink to="/oma">详细介绍</RouterLink>
              <RouterView />
              <span class="px-[.25rem]">·</span>
              <a href="">下载oma</a>
            </p>
          </div>
        </div>
      </div>
      <div class="w-[80px] mr-[4rem] ml-auto mt-auto mb-[-2px]">
        <a href="">
          <img src="../../../public/assets/download/oma-mascot.svg">
        </a>
      </div>
    </div>

    <category-second id="tier-2-downloads" title="安同 OS（二级架构）" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        安同OS支持支持众多处理器微架构，除x86-64、AArch64及龙架构外，我们还支持一众存量较少或软件支持尚未完善的架构供各位玩家试用和评估。
      </div>
      <div class="w-full" v-loading="loading">
        <div class="flex justify-between" v-if="versionArch.length > 0">
          <span v-for="item in antong2List" :key="item.title">
            <download-button :secondLineFontSize=5 :width=170 :firstLineFontSize="8" class="py-[0.25rem]"
              v-if="item.livekit != undefined" :labelInfo="item" :isaInfo="item.livekit" />
          </span>
        </div>
      </div>
    </div>
    <!-- <category-second title="星霞 OS（其他版本）" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        星霞OS支持许多来自不同年代和不同形式的设备，点击下方对应您设备的下载按钮即可。
      </div>
      <div class="flex justify-between">
        <span v-for="item in xingxia2List" :key="item.title">
          <download-button
            v-if="item.info != undefined"
            :isaInfo="item"
          />
        </span>
      </div>
    </div> -->
    <category-second title="容器镜像" />
    <div class="pt-[20px] pb-[30px] px-[30px]">
      <div class="text-[14pt] mb-[20px]">
        我们为Docker用户提供了容器镜像，您可以通过如下命令抓取安同OS容器
      </div>
      <highlight lang="bash" code="docker pull aosc/aosc-os" />
    </div>
  </div>
</template>

<style scoped>
.aosc-os {
  display: flex;
  flex-flow: row;
  background-color: white;
  width: 47%;
  justify-content: space-around;
}

.download-container {
  display: flex;
  flex-flow: column;
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
  background-image: url(/public/assets/download/oma.svg);
  background-size: 100% auto;
  background-position-x: center;
  background-position-y: center;
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
  width: 160px;
  display: block;
  height: 60px;
}
</style>
