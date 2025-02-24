<script setup>
import CategorySecond from '../../components/CategorySecond.vue';
import TitleComponent from './components/TitleComponent.vue';
import DownloadButtonGroup from './components/DownloadButtonGroup.vue';
import WslDetails from './components/WslDetails.vue';
import { ref, useTemplateRef, watch, computed } from 'vue';
import DownloadButton from './components/DownloadButton.vue';
import { useRoute } from 'vue-router';
import useClipboard from 'vue-clipboard3';
import { ElMessage, ElDialog } from 'element-plus';
import { useHighBrightnessControllerStore } from '../../stores/miscellaneous.js';
import { useDownloadPageStore } from '../../stores/download-page.js';
import { highlightElement } from '../../utils/animation.ts';
import { requestGetJson } from '../../utils/utils.js';

//#region Common
const archGroupInfo = {
  first: {
    name: '一级架构',
    description:
      '“一级架构”是我们支持水平最高的一类目标架构，各类更新及时且特性完整，亦最受维护者关注、测试设备充分'
  },
  second: {
    name: '二级架构',
    description:
      '“二级架构”功能相对完整，但由于设备数量稀少、普遍性能较差或受维护者关注度不足，虽会及时响应安全更新，但其他类型更新、测试及反馈响应度可能略逊于一级架构'
  }
};

const route = useRoute();
const downloadPageStore = useDownloadPageStore();
//#endregion

//#region Clipboard
const { toClipboard } = useClipboard();
const copy = (content) => {
  toClipboard(content);
  ElMessage.success('复制成功');
};
//#endregion

//#region Highlight
const aoscOsRef = useTemplateRef('aoscOsDownload');
const otherRef = useTemplateRef('otherDownload');
const afterglowRef = useTemplateRef('afterglowDownload');
const omaRef = useTemplateRef('omaDownload');

const highBrightnessControllerStore = useHighBrightnessControllerStore();

const switchHash = () => {
  switch (route.hash) {
    case '#aosc-os-download':
      highlightElement(aoscOsRef);
      break;
    case '#otherDownload':
      highlightElement(otherRef);
      break;
    case '#afterglow-download':
      highlightElement(afterglowRef);
      break;
    case '#oma-download':
      highlightElement(omaRef);
      break;
  }
};

watch(
  () => highBrightnessControllerStore.obj[route.path],
  () => {
    switchHash();
  },
  {
    flush: 'post'
  }
);
//#endregion

//#region remote
const versionArch = ref([]);
const recipe = ref({});
const recipeI18n = ref({});
const sources = ref([
  {
    name: 'MirrorZ',
    loc: '自动',
    url: 'https://m.mirrorz.org/anthon/aosc-os/'
  },
  { name: '官方源', loc: '香港特别行政区', url: 'https://releases.aosc.io/' }
]);

function getAntongDate() {
  if (versionArch.value.length === 0) return '...';
  let dateStr = getNewVersionArch('amd64', 'installer').date;
  return `${dateStr.substring(0, 4)}/${parseInt(
    dateStr.substring(4, 6)
  )}/${parseInt(dateStr.substring(6, 8))}`;
}

const antongDate = computed(getAntongDate);
const appleSiliconDate = ref('...');
const omaVersion = ref('...');

/**
 * 比较 ISO 的日期（或版本）
 */
function isoVersionCmp(v1, v2) {
  let d1 = v1.date;
  let d2 = v2.date;
  let c;
  let l = d1.length > d2.length ? d2.length : d1.length;
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
const getNewVersionArch = (arch, type) => {
  let list = versionArch.value.filter((v) => v.arch == arch);
  list = list.filter((v) => v.path.includes(type));
  list = list.sort(isoVersionCmp);
  return list[0];
};

(async () => {
  // Installer and LiveKit
  let [res, err] = await requestGetJson(
    'https://releases.aosc.io/manifest/livekit.json'
  );
  if (res) {
    versionArch.value = res.data;
    console.log(res.data);
    antong1List.value.forEach((v) => {
      v.installer = getNewVersionArch(v.title, 'installer');
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
    antong2List.value.forEach((v) => {
      v.installer = getNewVersionArch(v.title, 'installer');
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
    console.log(antong2List.value);
    xingxia1List.value.forEach((v) => {
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
    xingxia2List.value.forEach((v) => {
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
  } else if (err) {
    ElMessage.warning('AOSC OS 版本信息获取失败');
  }

  // Apple silicon
  const [siliconRes, siliconError] = await requestGetJson(
    'https://releases.aosc.io/os-arm64/asahi/installer_data.json'
  );
  if (siliconError) {
    console.log(siliconError);
    ElMessage.warning('AOSC OS Apple Silicon 版本信息获取失败');
  } else if (siliconRes) {
    const appleSiliconDateRaw =
      siliconRes.data.os_list[0].name.match(/\((.*)\)/)[1];
    appleSiliconDate.value = `${appleSiliconDateRaw.substring(0, 4)}/${parseInt(
      appleSiliconDateRaw.substring(4, 6)
    )}/${parseInt(appleSiliconDateRaw.substring(6, 8))}`;
  }

  // oma
  const [omaRes, omaResError] = await requestGetJson(
    'https://packages.aosc.io/packages/oma?type=json'
  );
  if (omaResError) {
    console.log(omaResError);
    ElMessage.warning('oma 版本信息获取失败');
  } else if (omaRes) {
    omaVersion.value = omaRes.data.pkg.version;
  }

  // Mirrors
  const [recipeResponse, recipeError] = await requestGetJson(
    'https://releases.aosc.io/manifest/recipe.json'
  );
  const [recipeI18nResponse, recipeI18nError] = await requestGetJson(
    'https://releases.aosc.io/manifest/recipe-i18n.json'
  );
  if (recipeError || recipeI18nError) {
    ElMessage.warning('镜像信息获取失败');
    console.log(recipeError, recipeI18nError);
  } else {
    recipe.value = recipeResponse.data;
    recipeI18n.value = recipeI18nResponse.data;
    sources.value = sources.value.concat(
      recipe.value.mirrors.map((mirror) => ({
        name: recipeI18n.value['zh-CN'][mirror['name-tr']],
        loc: recipeI18n.value['zh-CN'][mirror['loc-tr']],
        url: mirror.url
      }))
    );
  }
})();
//#endregion

//#region AOSC OS
const aoscOsNavigationList = ref([
  {
    title: antongDate
  },
  {
    title: '发行注记',
    path: '/aosc-os/relnote'
  },
  {
    title: '配置需求',
    path: '/aosc-os/requirements'
  }
]);
const appleSiliconNavigationList = ref([
  {
    title: appleSiliconDate
  },
  {
    title: '发行注记',
    url: '/aosc-os/asahi/relnote'
  },
  {
    title: '配置需求',
    url: 'https://github.com/AsahiLinux/docs/wiki/Feature-Support'
  }
]);
const antong1List = ref([
  {
    title: 'amd64',
    zhLabel: 'x86-64',
    enLabel: 'x86-64',
    popoverData: {
      content: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备',
      placement: 'top'
    }
  },
  {
    title: 'arm64',
    zhLabel: 'AArch64',
    enLabel: 'AArch64',
    popoverData: {
      content: '适用于兼容 Armv8-A 及以上版本的 64 位 Arm 设备',
      placement: 'top'
    }
  },
  {
    title: 'loongarch64',
    zhLabel: 'LoongArch',
    enLabel: 'LoongArch',
    popoverData: {
      content:
        '适用于兼容龙架构 (LoongArch) 指令集及 128 位向量扩展 (LSX) 的 64 位设备',
      placement: 'top'
    }
  }
]);
const antong2List = ref([
  {
    title: 'ppc64el',
    zhLabel: 'POWER（64 位）',
    enLabel: 'POWER (64-bit, little endian)',
    popoverData: {
      content: '适用于兼容 Power ISA v2.07 及以上版本的 64 位、小端序模式设备',
      placement: 'bottom'
    }
  },
  {
    title: 'riscv64',
    zhLabel: 'RISC-V（64 位）',
    enLabel: 'RISC-V (64-bit)',
    popoverData: {
      content: '适用于兼容 RVA20 Architecture Profile 的 64 位 RISC-V 设备',
      placement: 'bottom'
    }
  },
  {
    title: 'loongson3',
    zhLabel: '龙芯三号 (MIPS)',
    enLabel: 'Loongson 3 (MIPS)',
    popoverData: {
      content: '适用于基于 MIPS 的龙芯三号设备',
      placement: 'bottom'
    }
  }
]);
//#endregion

//#region Afterglow OS
const afterglowOsNavigationList = ref([
  {
    title: '敬请期待'
  },
  {
    title: '发行注记',
    path: '/afterglow/relnote'
  },
  {
    title: '配置需求',
    path: '/afterglow/requirements'
  }
]);
const xingxia1List = ref([
  {
    title: 'i486',
    zhLabel: 'x86（32 位）',
    enLabel: 'x86',
    popoverData: {
      content: '适用于兼容 i486 (Intel486) 的 32 位 x86 设备'
    }
  },
  {
    title: 'loongson2f',
    zhLabel: '龙芯二号 (MIPS)',
    enLabel: 'Loongson 2F',
    popoverData: {
      content: '适用于基于 MIPS 并支持 LoongMMI 指令集扩展的龙芯二号 (2F) 设备'
    }
  },
  {
    title: 'powerpc',
    zhLabel: 'PowerPC（32 位，大端序）',
    enLabel: 'PowerPC (32-bit, big endian)',
    popoverData: {
      content:
        '适用于兼容 PowerPC 指令集的 32 位大端序设备（IBM CHRP/PReP 或 Apple Macintosh 及兼容平台）'
    }
  }
]);
const xingxia2List = ref([
  {
    title: 'armv4',
    zhLabel: 'ARMv4',
    enLabel: 'ARMv4',
    popoverData: {
      content: '适用于兼容 ARMv4 指令集的 Arm 设备'
    }
  },
  {
    title: 'armv6hf',
    zhLabel: 'ARMv6（硬浮点）',
    enLabel: 'ARMv6 (hard-float)',
    popoverData: {
      content: '适用于兼容 ARMv6 指令集及 Thumb-2、NEON 扩展的 Arm 设备'
    }
  },
  {
    title: 'armv7hf',
    zhLabel: 'ARMv7（硬浮点）',
    enLabel: 'ARMv7 (hard-float)',
    popoverData: {
      content: '适用于兼容 ARMv7 指令集及 Thumb-2、NEON 扩展的 Arm 设备'
    }
  },
  {
    title: 'decAlpha',
    zhLabel: 'DEC Alpha',
    enLabel: 'DEC Alpha',
    popoverData: {
      content: '适用于基于 DEC Alpha（原称 Alpha AXP）指令集架构的设备'
    }
  },
  {
    title: 'ia64',
    zhLabel: 'IA-64',
    enLabel: 'IA-64',
    popoverData: {
      content: '适用于兼容 IA-64 指令集架构的设备（安腾，Itanium）'
    }
  },
  {
    title: 'm68k',
    zhLabel: 'Motorola 68000',
    enLabel: 'Motorola 68000',
    popoverData: {
      content: '用于兼容 Motorola 68020 且搭载内存管理单元 (MMU) 的设备'
    }
  },
  {
    title: 'ppc64',
    zhLabel: 'PowerPC（64 位，大端序）',
    enLabel: 'PowerPC (64-bit, big endian)',
    popoverData: {
      content:
        '适用于兼容 PowerPC 指令集的 64 位大端序设备（IBM CHRP/PReP 及 Apple Macintosh 及兼容平台）'
    }
  },
  {
    title: 'sparc64',
    zhLabel: 'SPARC（64 位）',
    enLabel: 'SPARC (64-bit)',
    popoverData: {
      content: '适用于兼容 SPARC V9 指令集及 VIS 1.0 扩展的 64 位 SPARC 设备'
    }
  }
]);
//#endregion

//#region WSL
const wslDialogState = ref(false);

// For ms-store-badge. Ref: https://github.com/microsoft/app-store-badge
let msStoreScript = document.createElement('script');
msStoreScript.setAttribute(
  'src',
  'https://get.microsoft.com/badge/ms-store-badge.bundled.js'
);
document.head.appendChild(msStoreScript);
//#endregion

//#region oma
const omaNavigationList = [
  {
    title: omaVersion
  },
  {
    title: '详细介绍',
    path: '/oma'
  },
  {
    title: '源代码',
    url: 'https://github.com/AOSC-Dev/oma'
  }
  // , {
  //   title: '下载 Debian/Ubuntu 安装包',
  //   url: 'https://github.com/AOSC-Dev/oma/releases/tag/v1.8.2'
  // }
];
const omaInstallScript = 'curl -sSf https://repo.aosc.io/get-oma.sh | sudo sh';
//#endregion
</script>

<template>
  <div>
    <category-second id="aosc-os-download" title="操作系统" />

    <!-- AOSC OS -->
    <div
      ref="aoscOsDownload"
      class="aosc-os-container flex flex-wrap justify-between p-[30px] gap-6">
      <TitleComponent
        title="安同 OS"
        description="称心得意的桌面操作系统"
        :navigation-list="aoscOsNavigationList" />
      <div class="flex flex-col justify-end gap-2">
        <DownloadButtonGroup
          :title="archGroupInfo.first.name"
          :description="archGroupInfo.first.description"
          :button-props="
            antong1List.map((item) => ({
              archName: item.zhLabel,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources
            }))
          " />
        <DownloadButtonGroup
          :title="archGroupInfo.second.name"
          :description="archGroupInfo.second.description"
          :button-props="
            antong2List.map((item) => ({
              archName: item.zhLabel,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources
            }))
          " />
      </div>
    </div>

    <!-- WSL, Apple silicon -->
    <div ref="otherDownload" class="flex flex-wrap">
      <div
        class="wsl-container flex-2 flex flex-col justify-between text-white p-[24px_30px]">
        <div>
          <TitleComponent
            title="WSL"
            description="在 Windows 上使用安同 OS"
            small-title />
          <span
            @click="wslDialogState = true"
            class="hover:underline cursor-pointer text-[11pt]"
            >其他下载方式与支持详情...</span
          >
        </div>

        <el-dialog v-model="wslDialogState" width="80%">
          <WslDetails />
        </el-dialog>

        <ms-store-badge
          class="relative [&::part(img)]:absolute [&::part(img)]:bottom-0 [&::part(img)]:h-[48px] h-[65px] translate-y-[5.5px] w-fit"
          productid="9NMDF21NV65Z"
          window-mode="popup"
          theme="dark"
          animation="off">
        </ms-store-badge>
      </div>

      <div
        class="apple-silicon-container flex-1 flex flex-col justify-between p-[24px_30px]">
        <TitleComponent
          title="Apple Silicon"
          description="适用于基于 Apple 芯片的 Mac 设备"
          :navigation-list="appleSiliconNavigationList"
          small-title />
        <div
          class="flex flex-col self-end [&_.theme-bg-color-secondary-primary]:py-2">
          <DownloadButton
            arch-name="下载"
            @click="
              downloadPageStore.dialogTabArm64 = 'apple-silicon-instruction';
              downloadPageStore.dialogArm64State = true;
            " />
        </div>
      </div>
    </div>

    <!-- Afterglow -->
    <div
      ref="afterglowDownload"
      class="afterglow-container flex flex-wrap justify-between p-[30px] text-white gap-6">
      <TitleComponent
        title="星霞 OS"
        description="老设备也能发光发热"
        :navigation-list="afterglowOsNavigationList" />
      <div class="flex flex-col justify-end gap-2">
        <DownloadButtonGroup
          :title="archGroupInfo.first.name"
          :description="archGroupInfo.first.description"
          :button-props="
            xingxia1List.map((item) => ({
              archName: item.zhLabel,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources,
              disabled: true
            }))
          " />
        <DownloadButtonGroup
          :title="archGroupInfo.second.name"
          :description="archGroupInfo.second.description"
          :button-props="
            xingxia2List.map((item) => ({
              archName: item.zhLabel,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources,
              disabled: true
            }))
          " />
      </div>
    </div>

    <category-second class="highlight" title="实用工具" />

    <!-- oma -->
    <div ref="omaDownload" class="oma-container p-[30px]">
      <TitleComponent
        title="小熊猫包管理 (oma)"
        description="简明好用的 APT 软件包管理界面"
        :navigation-list="omaNavigationList" />
      <div class="bg-black/60 py-2 pr-14 mt-4 w-fit">
        <code class="text-white text-[0.9em] pl-[1em]"
          >{{ omaInstallScript }}
          <v-icon
            name="fa-copy"
            class="ml-6 mt-[2px] absolute cursor-pointer"
            @click="copy(omaInstallScript)"></v-icon>
        </code>
      </div>
      <p class="mt-[6px] text-[10pt]"
        >使用终端运行该命令可在 Debian、Ubuntu、Linux Mint 及衍生版，以及
        deepin、<br />开放麒麟 (openKylin) 等发行版安装小熊猫包管理
      </p>
    </div>
  </div>
</template>

<style scoped>
/* For dialogs in this page */
:deep(.el-dialog) {
  max-width: 800px;
}

/* These background styles are too complicated for inline tailwindcss */
.aosc-os-container {
  background-image: url(/assets/backgrounds/aosc-os.webp);
  background-position: 0 -40px;
  background-size: 1100px;
}

.wsl-container {
  background-image: url(/assets/backgrounds/aosc-os-wsl.webp);
  background-size: 100%;
}

.apple-silicon-container {
  background-image: url(/assets/backgrounds/aosc-os-asahi.jpg);
  background-position: 0 -40px;
  background-size: 800px;
}

.afterglow-container {
  background-image: url(/assets/backgrounds/afterglow.webp);
  background-size: 1100px;
}

.oma-container {
  background:
    url(/assets/download/oma-mascot.svg) right 40px bottom -4px / 160px auto no-repeat,
    url(/assets/download/oma.svg) left/ auto 250%,
    rgb(218 206 187 / 100%);
}
</style>
