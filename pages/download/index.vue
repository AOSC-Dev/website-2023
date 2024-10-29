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
const route = useRoute();
onMounted(() => {
  const msStoreScript = document.createElement('script');
  msStoreScript.setAttribute(
    'src',
    'https://get.microsoft.com/badge/ms-store-badge.bundled.js'
  );
  document.head.appendChild(msStoreScript);
  switchHash();
});

const aoscOsRef = useTemplateRef('aoscOsDownload');
const afterglowRef = useTemplateRef('afterglowDownload');
const omaRef = useTemplateRef('omaDownload');
const tier2Ref = useTemplateRef('tier2Downloads');
const dockerRef = useTemplateRef('downloadDocker');

const omaNavigationList = [
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

const aoscOsNavigationList = [
  {
    title: '发行注记',
    path: '/aosc-os/relnote'
  },
  {
    title: '配置需求',
    path: '/aosc-os/requirements'
  }
];

const liveKitNavigationList = [
  {
    title: '发行注记',
    path: '/aosc-os/livekit/relnote'
  },
  {
    title: '配置需求',
    path: '/aosc-os/livekit/requirements'
  }
];

const wslNavigationList = [
  {
    title: '发行注记',
    path: '/aosc-os/wsl/relnote'
  },
  {
    title: '配置需求',
    path: '/aosc-os/wsl/requirements'
  }
];

const highBrightnessControllerStore = useHighBrightnessControllerStore();

const switchHash = () => {
  switch (route.hash) {
    case '#oma-download':
      highlightElement(omaRef);
      break;
    case '#aosc-os-download':
      highlightElement(aoscOsRef);
      break;
    case '#afterglow-download':
      highlightElement(afterglowRef);
      break;
    case '#tier-2-downloads':
      highlightElement(tier2Ref);
      break;
    case '#otherDownload': {
      highlightElement(dockerRef);
      highlightElement(tier2Ref);
      break;
    }
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

const livekitPPlacement = ['top', 'left', 'bottom'];

const antong1List = ref([
  {
    title: 'amd64',
    zhLabel: 'x86-64',
    enLabel: 'x86-64',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备',
      placement: 'top'
    }
  },
  {
    title: 'arm64',
    zhLabel: 'AArch64',
    enLabel: 'AArch64',
    popoverData: {
      conten: '适用于兼容 Armv8-A 及以上版本的 64 位 Arm 设备',
      placement: 'top'
    }
  },
  {
    title: 'loongarch64',
    zhLabel: 'LoongArch',
    enLabel: 'LoongArch',
    popoverData: {
      conten:
        '适用于兼容龙架构 (LoongArch) 指令集及 128 位向量扩展 (LSX) 的 64 位设备',
      placement: 'bottom'
    }
  }
]);
const antong2List = ref([
  {
    title: 'ppc64el',
    zhLabel: 'IBM POWER（64 位，小端序）',
    enLabel: 'IBM POWER (64-bit, little endian)',
    popoverData: {
      conten: '适用于兼容 Power ISA v2.07 及以上版本的 64 位、小端序模式设备',
      placement: 'top'
    }
  },
  {
    title: 'riscv64',
    zhLabel: 'RISC-V（64 位）',
    enLabel: 'RISC-V (64-bit)',
    popoverData: {
      conten: '适用于兼容 RVA20 Architecture Profile 的 64 位 RISC-V 设备',
      placement: 'left'
    }
  },
  {
    title: 'loongson3',
    zhLabel: '基于 MIPS 的龙芯三号',
    enLabel: 'MIPS-based Loongson 3',
    popoverData: {
      conten: '适用于基于 MIPS 的龙芯三号设备',
      placement: 'bottom'
    }
  }
]);
const xingxia1List = ref([
  {
    title: 'i486',
    zhLabel: 'Intel 80486 或更新',
    enLabel: 'Intel 80486 or newer',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: 'loongson2f',
    zhLabel: '龙芯 2F',
    enLabel: 'Loongson 2F',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: 'powerpc',
    zhLabel: 'PowerPC（32 位，大端序）',
    enLabel: 'PowerPC (32-bit, big endian)',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: 'ppc64',
    zhLabel: 'PowerPC（64 位，大端序）',
    enLabel: 'PowerPC (64-bit, big endian)',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  }
]);
const xingxia2List = ref([
  {
    title: 'm68k',
    zhLabel: 'Motorola 68000 系列处理器**',
    enLabel: 'Motorola 68000',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: 'armv4',
    zhLabel: 'ARMv4',
    enLabel: 'ARMv4',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: 'armv6hf',
    zhLabel: 'ARMv6（硬浮点）',
    enLabel: 'ARMv6 (hard-float)',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  },
  {
    title: 'armv7hf',
    zhLabel: 'ARMv7（硬浮点，带有 NEON 指令集支持）',
    enLabel: 'ARMv7 (hard-float, with NEON support)',
    popoverData: {
      conten: '适用于兼容 AMD64 或 Intel 64 指令集扩展的 x86 设备'
    }
  }
]);

function getAntongDate() {
  if (versionArch.value.length == 0) return '...';
  const dateStr = getNewVersioArch('amd64', 'installer').date;
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
const getNewVersioArch = (arch, type) => {
  let list = versionArch.value.filter((v) => v.arch == arch);
  list = list.filter((v) => v.path.includes(type));
  list = list.sort(isoVersionCmp);
  return list[0];
};

const liveKitDivHeight = (
  antong1List.value.length * 43.99 +
  (antong1List.value.length - 1) * 8
).toFixed(2);

const { data: versionArch, status } = await useFetch(
  'https://releases.aosc.io/manifest/livekit.json'
);

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
</script>

<template>
  <div class="flex flex-col">
    <category-second id="aosc-os-download" title="操作系统" />
    <div class="flex flex-row flex-1">
      <div
        ref="aoscOsDownload"
        class="aosc-os-container flex flex-col w-[50%] px-[1rem]">
        <div class="flex flex-row justify-around">
          <div class="mt-[0.5rem] min-w-[96px] w-[24%] flex">
            <img src="/download/aosc-os-web.svg" />
          </div>
          <div class="text-aosc-os my-[1.5rem]">
            <p class="text-[32pt]">安同 OS</p>
            <p class="text-[14pt]">称心得意的桌面操作系统</p>
            <p
              v-if="status === 'success'"
              class="width-[220px] text-[10pt] mt-1">
              {{ getAntongDate() }}·
              <AccordionNavigation
                :navigation-list="aoscOsNavigationList"
                link-class=""
                >·</AccordionNavigation
              >
            </p>
          </div>
        </div>
        <div
          v-if="status === 'success'"
          class="mb-4 mx-4 grid grid-cols-2 gap-2 justify-center">
          <DownloadButton
            v-for="item in antong1List"
            :key="item.title"
            class="grow"
            :isa-info="item.installer"
            :arch-name="item.zhLabel"
            :popover-data="item.popoverData"
            :url="`https://releases.aosc.io/${item.installer.path}`" />
          <DownloadButton
            :class="antong1List.length % 2 === 0 ? 'col-span-2' : ''"
            button-color="#549c97"
            class="grow"
            :popover-data="{
              conten: '二级架构、Docker,及虚拟机镜像等其他下载',
              placement: 'bottom'
            }"
            :url="{ path: '/download', hash: '#otherDownload' }"
            arch-name="其他下载" />
        </div>
      </div>
      <div class="afterglow px-[1rem]" ref="afterglowDownload">
        <div class="my-[1.5rem] text-afterglow">
          <p class="text-white text-[32pt]">星霞 OS</p>
          <p class="text-white text-[14pt]">老设备也能发光发热</p>
          <p class="text-white text-[10pt] mt-1">敬请期待...</p>
        </div>
        <div class="mt-[1.5rem] min-w-[64px] w-[26%]">
          <img src="/download/afterglow-web.svg" />
        </div>
      </div>
    </div>

    <div class="livekit-container w-[100%] flex flex-row">
      <div class="flex flex-col">
        <div
          id="livekit-title"
          class="flex-col my-auto pl-[2rem] flex py-[1rem]">
          <p id="livekit" class="text-[24pt]">LiveKit</p>
          <p id="livekit-alt" class="text-[14pt]">功能完备的安同 OS 救援环境</p>
          <p class="mt-[2rem]">
            <AccordionNavigation
              :navigation-list="liveKitNavigationList"
              link-class=""
              >·</AccordionNavigation
            >
          </p>
        </div>
      </div>
      <div
        id="livekit-buttons"
        class="flex flex-col flex pr-[2rem] ml-auto my-2">
        <div
          v-if="status === 'success'"
          class="w-[200px] grid grid-cols-1 gap-2">
          <span v-for="(item, index) in antong1List" :key="item.title">
            <DownloadButton
              :popover-data="{
                ...item.popoverData,
                placement: livekitPPlacement[index]
              }"
              :second-line-font-size="8"
              :first-line-font-size="10"
              :arch-name="item.zhLabel"
              :url="`https://releases.aosc.io/${item.livekit.path}`"
              :isa-info="item.livekit" />
          </span>
        </div>
      </div>
    </div>
    <div class="wsl-container w-[100%] flex flex-row">
      <div class="flex flex-col pl-[2rem] py-[1rem]">
        <p id="wsl" class="text-[24pt]">WSL 环境</p>
        <p id="wsl-alt" class="text-[14pt]">适用于 WSL 的安同 OS</p>
        <p class="mt-[2rem]">
          <AccordionNavigation
            :navigation-list="wslNavigationList"
            link-class=""
            >·</AccordionNavigation
          >
        </p>
      </div>
      <div id="wsl-buttons" class="flex mt-auto mr-9 ml-auto">
        <ms-store-badge
          productid="9NMDF21NV65Z"
          window-mode="popup"
          theme="dark"
          animation="on">
        </ms-store-badge>
      </div>
    </div>
    <category-second class="highlight" title="实用工具" />
    <div
      id="oma-download"
      ref="omaDownload"
      class="oma-container w-[100%] flex flex-row py-[1rem]">
      <div class="pl-[2rem]">
        <p class="text-[24pt]">小熊猫包管理 (oma)</p>
        <p class="text-[14pt]">简明好用的 APT 软件包管理界面</p>
        <p class="mt-2">
          <AccordionNavigation
            :navigation-list="omaNavigationList"
            link-class=""
            >·</AccordionNavigation
          >
        </p>
        <CodeHighlight
          class="bg-black/60 mt-6"
          language="bash"
          :use-hljs="false"
          code-class="text-white"
          button-class="ml-6"
          :code-text="omaInstallScript" />
        <p class="mt-[6px] text-[10pt]"
          >使用终端运行该命令可在 Debian、Ubuntu 及衍生版，以及 deepin、开放麒麟
          (openKylin) 等<br />发行版安装小熊猫包管理</p
        >
      </div>
    </div>
    <div id="otherDownload">
      <category-second id="tier-2-downloads" title="安同 OS（二级架构）" />
      <div ref="tier2Downloads" class="w-[100%] flex-row py-[1rem] flex mb-[2rem]">
        <div class="pl-[2rem] my-auto">
          <p class="text-[13pt]">安同 OS 支持支持众多处理器微架构。</p>
          <p class="text-[13pt] mt-1">除 x86-64、AArch64 及 LoongArch 外，</p>
          <p class="text-[13pt] mt-1"
            >我们还支持一众存量较少或软件支持尚未完善的架构，</p
          >
          <p class="text-[13pt] mt-1">并发布镜像供各位玩家试用和评估。</p>
        </div>
        <div
          v-if="status === 'success'"
          class="ml-auto mr-[2rem] w-[200px] grid grid-cols-1 gap-2">
          <div v-for="item in antong2List" :key="item.title">
            <DownloadButton
            v-if="item.installer !== undefined"
              :popover-data="item.popoverData"
              :second-line-font-size="8"
              :first-line-font-size="10"
              :arch-name="item.zhLabel"
              :url="`https://releases.aosc.io/${item.installer.path}`"
              :isa-info="item.installer" />
          </div>
        </div>
      </div>
      <!-- 暂时不提供，需要确定架构支持等信息
      <category-second
        id="downloadDocker"
        title="容器镜像" />
      <div
        ref="downloadDocker"
        class="pt-[20px] pb-[30px] px-[30px]">
        <div class="text-[14pt]">
          我们为 Docker 用户提供了容器镜像，您可以通过如下命令获取安同 OS 容器。
        </div>
        <app-highlight
          lang="bash"
          code="docker pull aosc/aosc-os" />
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
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
    url(/backgrounds/afterglow.webp);
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

.button-container-afterglow {
  display: flex;
  justify-content: left;
  flex-flow: column;
  row-gap: 0.5em;
  margin-top: 1em;
}

.aosc-os-container {
  background: linear-gradient(90deg, rgb(255 255 255 / 0%), 100%, transparent),
    url(/backgrounds/aosc-os.webp);
  background-size: auto 300%;
}

.livekit-container {
  background: linear-gradient(90deg, #f6d5ac, 50%, transparent),
    url('/backgrounds/livekit.jpg');
  background-position-x: 0%, 100%;
}

.oma-container {
  background-color: rgb(218 206 187 / 100%);
  background-image: url(/download/oma-mascot.svg), url(/download/oma.svg);
  background-size:
    144px auto,
    100% auto;
  background-position:
    right 38px bottom -4px,
    center;
  background-repeat: no-repeat, no-repeat;
}

.oma-mascot {
  background: url(/download/oma_item-1.svg);
  align-self: flex-end;
}

.wsl-container {
  background: linear-gradient(90deg, #b7e4fc, 50%, transparent),
    url('/backgrounds/aosc-os-wsl.webp');
  background-color: #000;
  background-position-x: 0%, 30rem;
  background-size: 100%, 50rem;
  background-repeat: no-repeat;
}

ms-store-badge::part(img) {
  width: 200px;
  display: block;
}
</style>
