<script setup>
// #region Common

const { tm, locale } = useI18n();
const textValue = tm('download.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
const route = useRoute();
// #endregion

// #region Highlight
const aoscOsRef = useTemplateRef('aoscOsDownload');
const otherRef = useTemplateRef('otherDownload');
const afterglowRef = useTemplateRef('afterglowDownload');
const omaRef = useTemplateRef('omaDownload');

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
useHighlightWatch(switchHash);
// #endregion

// #region remote
const versionArch = ref([]);
const recipe = ref({});
const recipeI18n = ref({});
const sources = ref(textValue.sources);

const getAntongDate = () => {
  if (versionArch.value.length === 0) return '...';
  const dateStr = getNewVersionArch('amd64', 'installer').date;
  return `${dateStr.substring(0, 4)}/${parseInt(
    dateStr.substring(4, 6)
  )}/${parseInt(dateStr.substring(6, 8))}`;
};

const antongDate = computed(getAntongDate);
const appleSiliconDate = ref('...');
const omaVersion = ref('...');

/**
 * 比较 ISO 的日期（或版本）
 */
const isoVersionCmp = (v1, v2) => {
  const d1 = v1.date;
  const d2 = v2.date;
  let c;
  const l = d1.length > d2.length ? d2.length : d1.length;
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
};

const initSinglePopoverData = (items, index) => {
  let placement = 'bottom';
  switch (index) {
    case 1:
      placement = 'top';
      break;
    case 2:
      placement = 'bottom';
      break;
  }
  items.forEach((item) => {
    // 确保每个对象有 popoverData 对象
    if (item.popoverData) {
      item.popoverData.placement = placement;
    } else {
      // 如果 popoverData 不存在，创建它并添加指定的 key
      item.popoverData = { placement: placement };
    }
  });
  return items;
};

// #region AOSC OS
const aoscOsNavigationList = [
  {
    title: antongDate,
    notLink: true
  },
  localLink.aoscRelnote,
  useTIndex(localLink.aoscRequirements, 2)
];
const appleSiliconNavigationList = ref([
  {
    title: appleSiliconDate,
    notLink: true
  },
  localLink.aoscRelnoteAsahi,
  linkValue.asahiRequirements
]);

const antong1List = ref(
  initSinglePopoverData(
    setNestedKeyValue(
      setNestedKeyValue(
        [
          {
            title: 'amd64'
          },
          {
            title: 'arm64'
          },
          {
            title: 'loongarch64'
          }
        ],
        textValue.contents.antong1,
        'popoverData.content'
      ),
      textValue.labels.antong1,
      'label'
    ),
    1
  )
);
const antong2List = ref(
  initSinglePopoverData(
    setNestedKeyValue(
      setNestedKeyValue(
        [
          {
            title: 'ppc64el'
          },
          {
            title: 'riscv64'
          },
          {
            title: 'loongson3'
          }
        ],
        textValue.contents.antong2,
        'popoverData.content'
      ),
      textValue.labels.antong2,
      'label'
    ),
    2
  )
);
// #endregion

/**
 * 根据架构找出最新的下载信息
 */
const getNewVersionArch = (arch, type) => {
  let list = versionArch.value.filter((v) => v.arch == arch);
  list = list.filter((v) => v.path.includes(type));
  list = list.sort(isoVersionCmp);
  return list[0];
};
const isReady = ref(false);
(async () => {
  // Installer and LiveKit
  const [res, err] = await requestGetJson(
    'https://releases.aosc.io/manifest/livekit.json'
  );
  if (res) {
    versionArch.value = res.data;
    antong1List.value.forEach((v) => {
      v.installer = getNewVersionArch(v.title, 'installer');
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
    antong2List.value.forEach((v) => {
      v.installer = getNewVersionArch(v.title, 'installer');
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
    xingxia1List.value.forEach((v) => {
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
    xingxia2List.value.forEach((v) => {
      v.livekit = getNewVersionArch(v.title, 'livekit');
    });
  } else if (err) {
    ElMessage.warning(textValue.errors.aosc);
  }

  // Apple silicon
  const [siliconRes, siliconError] = await requestGetJson(
    'https://releases.aosc.io/os-arm64/asahi/installer_data.json'
  );
  if (siliconError) {
    console.log(siliconError);
    ElMessage.warning(textValue.errors.apple);
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
    ElMessage.warning(textValue.errors.oma);
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
    ElMessage.warning(textValue.errors.mirrors);
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
// #endregion

// #region Afterglow OS
const afterglowOsNavigationList = ref([
  {
    title: textValue.y3.x0.p3,
    notLink: true
  },
  localLink.afterglowRelnote,
  useTIndex(localLink.afterglowRequirements, 2)
]);
const xingxia1List = ref(
  setNestedKeyValue(
    setNestedKeyValue(
      [
        {
          title: 'i486'
        },
        {
          title: 'loongson2f'
        },
        {
          title: 'powerpc'
        }
      ],
      textValue.contents.xingxia1,
      'popoverData.content'
    ),
    textValue.labels.xingxia1,
    'label'
  )
);
const xingxia2List = ref(
  setNestedKeyValue(
    setNestedKeyValue(
      [
        {
          title: 'armv4'
        },
        {
          title: 'armv6hf'
        },
        {
          title: 'armv7hf'
        },
        {
          title: 'decAlpha'
        },
        {
          title: 'ia64'
        },
        {
          title: 'm68k'
        },
        {
          title: 'ppc64'
        },
        {
          title: 'sparc64'
        }
      ],
      textValue.contents.xingxia2,
      'popoverData.content'
    ),
    textValue.labels.xingxia2,
    'label'
  )
);
// #endregion

// #region WSL
const wslDialogState = ref(false);
onMounted(() => {
  // For ms-store-badge. Ref: https://github.com/microsoft/app-store-badge
  const msStoreScript = document.createElement('script');
  msStoreScript.setAttribute(
    'src',
    'https://get.microsoft.com/badge/ms-store-badge.bundled.js'
  );
  document.head.appendChild(msStoreScript);
});
// #endregion

// #region oma
const omaNavigationList = [
  {
    title: omaVersion,
    notLink: true
  },
  useTIndex(localLink.oma, 1),
  useTIndex(linkValue.omaSourceGithub, 2)
  // , {
  //   title: '下载 Debian/Ubuntu 安装包',
  //   url: 'https://github.com/AOSC-Dev/oma/releases/tag/v1.8.2'
  // }
];
const omaInstallScript = 'curl -sSf https://repo.aosc.io/get-oma.sh | sudo sh';
// #endregion
</script>

<template>
  <div>
    <category-second id="aosc-os-download" :title="textValue.y0.p1" />

    <!-- AOSC OS -->
    <div
      ref="aoscOsDownload"
      class="aosc-os-container flex flex-wrap justify-between gap-6 p-[30px]">
      <TitleComponent
        :title="textValue.y1.x0.p1"
        :description="textValue.y1.x0.p2"
        :navigation-list="aoscOsNavigationList" />
      <div class="flex flex-col justify-end gap-2">
        <DownloadButtonGroup
          :title="textValue.archGroupInfo.first.name"
          :description="textValue.archGroupInfo.first.description"
          :button-props="
            antong1List.map((item) => ({
              archName: item.label,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources
            }))
          " />
        <DownloadButtonGroup
          :title="textValue.archGroupInfo.second.name"
          :description="textValue.archGroupInfo.second.description"
          :button-props="
            antong2List.map((item) => ({
              archName: item.label,
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
        class="wsl-container flex flex-col justify-between p-[24px_30px] text-white">
        <div>
          <TitleComponent
            :title="textValue.y2.x0.p1"
            :description="textValue.y2.x0.p2"
            small-title />
          <span
            class="cursor-pointer text-[11pt] hover:underline"
            @click="wslDialogState = true"
            >{{ textValue.y2.x0.p3 }}</span
          >
        </div>

        <el-dialog v-model="wslDialogState" width="80%">
          <download-wsl-details />
        </el-dialog>

        <ms-store-badge
          class="relative h-[65px] w-fit translate-y-[5.5px] [&::part(img)]:absolute [&::part(img)]:bottom-0 [&::part(img)]:h-[48px]"
          productid="9NMDF21NV65Z"
          window-mode="popup"
          theme="dark"
          animation="off"/>
      </div>

      <div
        class="apple-silicon-container flex flex-1 flex-col justify-between p-[24px_30px]">
        <TitleComponent
          :title="textValue.y2.x1.p1"
          :description="textValue.y2.x1.p2"
          :navigation-list="appleSiliconNavigationList"
          small-title />
        <div class="self-end">
          <DownloadButton
            :arch-name="textValue.y2.x1.b0"
            :popover-data="
              antong1List.filter((i) => i.title === 'arm64')[0].popoverData
            "
            :isa-info="antong1List.filter((i) => i.title === 'arm64')[0]"
            :sources="sources"
            initial-dialog-tab="apple-silicon-instruction" />
        </div>
      </div>
    </div>

    <!-- Afterglow -->
    <div
      id="afterglow-download"
      ref="afterglowDownload"
      class="afterglow-container flex flex-wrap justify-between gap-6 p-[30px] text-white">
      <TitleComponent
        :title="textValue.y3.x0.p1"
        :description="textValue.y3.x0.p2"
        :navigation-list="afterglowOsNavigationList" />
      <div class="flex flex-col justify-end gap-2">
        <DownloadButtonGroup
          :title="textValue.archGroupInfo.first.name"
          :description="textValue.archGroupInfo.first.description"
          :button-props="
            xingxia1List.map((item) => ({
              archName: item.label,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources,
              disabled: true
            }))
          " />
        <DownloadButtonGroup
          :title="textValue.archGroupInfo.second.name"
          :description="textValue.archGroupInfo.second.description"
          :button-props="
            xingxia2List.map((item) => ({
              archName: item.label,
              popoverData: item.popoverData,
              isaInfo: item,
              sources: sources,
              disabled: true
            }))
          " />
      </div>
    </div>

    <category-second
      id="oma-download"
      class="highlight"
      :title="textValue.title2" />

    <!-- oma -->
    <div id="oma-download" ref="omaDownload" class="oma-container p-[30px]">
      <TitleComponent
        :title="textValue.p9"
        :description="textValue.p10"
        :navigation-list="omaNavigationList" />
      <CopyCodeHighlight
        class="mt-4 w-fit bg-black/60 py-2 pr-14"
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
</template>

<style scoped>
/* For dialogs in this page */
:deep(.el-dialog) {
  max-width: 800px;
}

/* These background styles are too complicated for inline tailwindcss */
.aosc-os-container {
  background-image: url(/public/backgrounds/aosc-os.webp);
  background-position: 0 -40px;
  background-size: 1100px;
}

.wsl-container {
  background-image: url(/public/backgrounds/aosc-os-wsl.webp);
  background-size: 100%;
}

.apple-silicon-container {
  background-image: url(/public/backgrounds/aosc-os-asahi.jpg);
  background-position: 0 -40px;
  background-size: 800px;
}

.afterglow-container {
  background-image: url(/public/backgrounds/afterglow.webp);
  background-size: 1100px;
}

.oma-container {
  background:
    url(/public/download/oma-mascot.svg) right 40px bottom -4px / 160px auto
      no-repeat,
    url(/public/download/oma.svg) left/ auto 250%,
    rgb(218 206 187 / 100%);
}
</style>
