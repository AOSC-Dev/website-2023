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

const aoscOsRef = useTemplateRef('aoscOsDownload');
const afterglowRef = useTemplateRef('afterglowDownload');
const omaRef = useTemplateRef('omaDownload');
const tier2Ref = useTemplateRef('tier2Downloads');
const dockerRef = useTemplateRef('downloadDocker');

const { tm, locale } = useI18n();
const textValue = tm('download.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const omaNavigationList = [
  useTIndex(localLink.oma, 1),
  useTIndex(linkValue.omaSourceGithub, 2)
];
const omaInstallScript = 'curl -sSf https://repo.aosc.io/get-oma.sh | sudo sh';

const aoscOsNavigationList = [
  localLink.aoscRelnote,
  useTIndex(localLink.aoscRequirements, 2)
];

const liveKitNavigationList = [
  localLink.aoscLivekitRelnote,
  localLink.aoscLivekitRequirements
];

const wslNavigationList = [
  localLink.aoscWslRelnote,
  localLink.aoscWslRequirements
];
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

const highBrightnessControllerStore = useHighBrightnessControllerStore();
watch(
  () => highBrightnessControllerStore.obj[route.path.replace(/\/+$/, '')],
  () => {
    switchHash();
  },
  {
    flush: 'post'
  }
);
onMounted(() => {
  switchHash();
});

const initSinglePopoverData = (contenlist, index) => {
  let placement = 'left';
  if (index === 0) {
    placement = 'top';
  } else if (index === contenlist.length - 1) {
    placement = 'bottom';
  }
  return { conten: contenlist[index], placement };
};

const initBiserialPopoverData = (contenlist, index) => {
  let placement = undefined;
  //前两个肯定top
  if (index <= 1) {
    placement = 'top';
  } else if (index % 2 === 0) {
    placement = 'left';
  } else {
    // 如果是总数是单数，最后一个bottom
    if (index === contenlist.length - 1) {
      placement = 'bottom';
    } else {
      placement = 'right';
    }
  }
  return { conten: contenlist[index], placement };
};

const antong1BorderlessList = [
  {
    title: 'amd64'
  },
  {
    title: 'arm64'
  },
  {
    title: 'loongarch64'
  }
];

const antong1List = ref(
  expandObjectArray(
    antong1BorderlessList,
    textValue.antong1TextList.lable,
    'lable'
  )
);
const antong2BorderlessList = [
  {
    title: 'ppc64el'
  },
  {
    title: 'riscv64'
  },
  {
    title: 'loongson3'
  }
];
const antong2List = ref(
  expandObjectArray(
    antong2BorderlessList,
    textValue.antong2TextList.lable,
    'lable'
  )
);

const xingxia1BorderlessList = [
  {
    title: 'i486'
  },
  {
    title: 'loongson2f'
  },
  {
    title: 'powerpc'
  },
  {
    title: 'ppc64'
  }
];
const xingxia1List = ref(
  expandObjectArray(
    xingxia1BorderlessList,
    textValue.xingxia1TextList.lable,
    'lable'
  )
);

const xingxia2BorderlessList = [
  {
    title: 'm68k'
  },
  {
    title: 'armv4'
  },
  {
    title: 'armv6hf'
  },
  {
    title: 'armv7hf'
  }
];
const xingxia2List = ref(
  expandObjectArray(
    xingxia2BorderlessList,
    textValue.xingxia2TextList.lable,
    'lable'
  )
);

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
const isReady = ref(false);
const versionArch = ref();
(async () => {
  if (import.meta.client) {
    const [res, err] = await requestGetJson(
      'https://releases.aosc.io/manifest/livekit.json'
    );
    if (res) {
      versionArch.value = res.data;
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
      isReady.value = true;
    }
  }
})();

const antong1RowNumber = Math.ceil(antong1List.value.length / 2);
const antong1Height = antong1RowNumber * 52 + (antong1RowNumber - 1) * 8 + 'px';

const liveKitHeight =
  antong1List.value.length * 52 + (antong1List.value.length - 1) * 8 + 'px';

const antong2Height =
  (antong1List.value.length - 1) * 52 +
  (antong1List.value.length - 2) * 8 +
  'px';
</script>

<template>
  <div class="flex flex-col">
    <category-second id="aosc-os-download" :title="textValue.title1" />
    <div class="flex flex-row flex-1">
      <div
        ref="aoscOsDownload"
        class="aosc-os-container flex flex-col w-[50%] px-[1rem]">
        <div class="flex flex-row justify-around">
          <div class="mt-[0.5rem] min-w-[96px] w-[24%] flex">
            <img src="/download/aosc-os-web.svg" />
          </div>
          <div class="text-aosc-os min-h-[94px] my-[1.5rem]">
            <p class="text-[32pt]">{{ textValue.p1 }}</p>
            <p class="text-[14pt]">{{ textValue.p2 }}</p>
            <p v-if="isReady" class="width-[220px] text-[10pt] mt-1">
              {{ getAntongDate() }}·
              <AccordionNavigation
                :navigation-list="aoscOsNavigationList"
                link-class=""
                >·</AccordionNavigation
              >
            </p>
          </div>
        </div>
        <div id="antong1-buttons" class="mb-[1rem]">
          <ShowLoading
            :is-ready="isReady"
            class="mx-4 grid grid-cols-2 gap-2 justify-center">
            <DownloadButton
              v-for="(item, index) in antong1List"
              :key="item.title"
              class="grow"
              :isa-info="item.installer"
              :arch-name="item.lable"
              :popover-data="
                initBiserialPopoverData(textValue.antong1TextList.conten, index)
              "
              :url="`https://releases.aosc.io/${item.installer.path}`" />
            <DownloadButton
              :class="antong1List.length % 2 === 0 ? 'col-span-2' : ''"
              button-color="#549c97"
              class="grow"
              :popover-data="{
                ...textValue.otherDownloadButtons.popoverData,
                placement: 'bottom'
              }"
              url="/download#otherDownload"
              :arch-name="textValue.otherDownloadButtons.archName" />
          </ShowLoading>
        </div>
      </div>
      <div class="afterglow px-[1rem]" ref="afterglowDownload">
        <div class="my-[1.5rem] text-afterglow">
          <p class="text-white text-[32pt]">{{ textValue.p3 }}</p>
          <p class="text-white text-[14pt]">{{ textValue.p4 }}</p>
          <p class="text-white text-[10pt] mt-1">{{ textValue.p5 }}</p>
        </div>
        <div class="mt-[1.5rem] min-w-[64px] w-[26%]">
          <img src="/download/afterglow-web.svg" />
        </div>
      </div>
    </div>

    <div class="livekit-container w-[100%] flex flex-row">
      <div class="flex flex-col">
        <div class="flex-col my-auto pl-[2rem] flex py-[1rem]">
          <p class="text-[24pt]">LiveKit</p>
          <p class="text-[14pt]">{{ textValue.p6 }}</p>
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
        class="flex flex-col flex ml-auto mr-[2rem] my-[0.5rem]">
        <ShowLoading
          :is-ready="isReady"
          class="w-[200px] grid grid-cols-1 gap-2">
          <DownloadButton
            v-for="(item, index) in antong1List"
            :key="item.title"
            :popover-data="
              initSinglePopoverData(textValue.antong1TextList.conten, index)
            "
            second-line-font-size="8pt"
            first-line-font-size="10pt"
            :arch-name="item.lable"
            :url="`https://releases.aosc.io/${item.livekit.path}`"
            :isa-info="item.livekit" />
        </ShowLoading>
      </div>
    </div>
    <div class="wsl-container w-[100%] flex flex-row">
      <div class="flex flex-col pl-[2rem] py-[1rem]">
        <p class="text-[24pt]">{{ textValue.p7 }}</p>
        <p class="text-[14pt]">{{ textValue.p8 }}</p>
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
    <category-second
      id="oma-download"
      class="highlight"
      :title="textValue.title2" />
    <div
      ref="omaDownload"
      class="oma-container w-[100%] flex flex-row py-[1rem]">
      <div class="pl-[2rem]">
        <p class="text-[24pt]">{{ textValue.p9 }}</p>
        <p class="text-[14pt]">{{ textValue.p10 }}</p>
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
          >{{ textValue.p11[0] }}<br />{{ textValue.p11[1] }}
        </p>
      </div>
    </div>
    <div id="otherDownload">
      <category-second id="tier-2-downloads" :title="textValue.title3" />
      <div ref="tier2Downloads" class="w-[100%] flex-row py-[1rem] flex">
        <div class="pl-[2rem] my-auto">
          <p class="text-[13pt]">{{ textValue.p12 }}</p>
          <p class="text-[13pt] mt-1">{{ textValue.p13 }}</p>
          <p class="text-[13pt] mt-1">{{ textValue.p14 }}</p>
          <p class="text-[13pt] mt-1">{{ textValue.p15 }}</p>
        </div>
        <div id="antong2-buttons" class="ml-auto mr-[2rem] my-[0.5rem]">
          <ShowLoading :is-ready="isReady" class="grid grid-cols-1 gap-2">
            <DownloadButton
              v-for="(item, index) in antong2List.filter(
                (obj) => obj.installer
              )"
              :key="item.title"
              :popover-data="
                initSinglePopoverData(textValue.antong2TextList.conten, index)
              "
              second-line-font-size="8pt"
              first-line-font-size="10pt"
              :arch-name="item.lable"
              :url="`https://releases.aosc.io/${item.installer.path}`"
              :isa-info="item.installer" />
          </ShowLoading>
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
      </div> -->
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

#antong1-buttons {
  min-height: v-bind(antong1Height);
}
#livekit-buttons {
  min-height: v-bind(liveKitHeight);
}
#antong2-buttons {
  min-height: v-bind(antong2Height);
}
p {
  margin-bottom: auto;
}
</style>
