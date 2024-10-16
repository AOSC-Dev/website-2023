<script setup>
const docList = [
  {
    title: '安同 OS 架构支持规格表',
    path: '/aosc-os/isa',
    hash: '#aoscOsIsaTableTitle'
  }
  /* TODO
  {
    title: '舒心畅玩：设备选购建议',
    path: '/aosc-os/better-devices'
  } */
];

const route = useRoute();

onMounted(() => {
  switch (route.hash) {
    case '#aoscOsRequirementsTitle':
      highlightElement(aoscOsRequirementsList);
      break;
  }
});
const aoscOsRequirementsList = ref();
</script>

<template>
  <div class="pl-[1px]">
    <category-second
      title="LiveKit 系统配置需求表"
      id="aoscOsRequirementsTitle" />
    <div class="p-6">
      <p>
        LiveKit 是用于维护安同 OS 和进行故障修复的可移动环境。其系统需求与安同
        OS
        类似，但由于该环境包含系统维护和安装等功能，且带有图形界面，因此对设备处理器、显卡、存储和互联网连接等均有一定的需求。根据我们的测试，我们总结出了如下以使用体验良好为基本基准的系统配置需求表。
      </p>
      <table class="mt-6" ref="aoscOsRequirementsList">
        <caption class="text-[12pt] font-semibold">
          安同 OS 系统配置需求表
        </caption>
        <thead>
          <tr>
            <th>硬件组件</th>
            <th>配置需求</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>处理器</td>
            <td>任意与安同 OS 兼容的处理器</td>
          </tr>
          <tr>
            <td>内存</td>
            <td>至少 2GiB</td>
          </tr>
          <tr>
            <td>显示</td>
            <td
              >支持输出 1024x768
              分辨率（图形模式），或基础帧缓冲支持（命令行模式）</td
            >
          </tr>
          <tr>
            <td>存储</td>
            <td>至少 4GiB 的可移动介质</td>
          </tr>
          <tr>
            <td>网络连接</td>
            <td>国际互联网连接</td>
          </tr>
        </tbody>
      </table>
    </div>

    <category-second title="补充说明" id="support" />
    <div class="pt-4 pb-4 px-16">
      <ul class="list-disc">
        <li
          >关于安同 OS 兼容的处理器，详请见<AppLink
            :to="{
              path: '/aosc-os/isa',
              hash: '#aoscOsIsaTableTitle'
            }"
            >安同 OS 架构支持规格表</AppLink
          >
        </li>
        <li
          >浏览网页时，系统内存和处理器占用将显著提升：如需大量浏览网页和观看高清流媒体内容，推荐在搭配至少
          4 个处理器核心及 4GiB 内存的设备上使用 LiveKit</li
        >
        <li>如显示器分辨率低于 1024x768，将无法正常使用 LiveKit 的图形模式</li>
        <li
          >如设备不支持帧缓冲（一般通过 EFI 和 VESA VBIOS
          等形式提供），则命令行模式无法使用非拉丁语言</li
        >
        <li
          >LiveKit 可通过互联网安装安同 OS，如有此需要，请确保互联网连接畅通</li
        >
      </ul>
    </div>
    <br />

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
