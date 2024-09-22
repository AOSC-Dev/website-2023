<script setup>
import { reactive, ref, onMounted } from 'vue';
import CategorySecond from '/src/components/CategorySecond.vue';
import AppLink from '../../../../components/AppLink.vue';
import { useRoute } from 'vue-router';
import highlightElement from '../../../../utils/animation';
import AppSupport from '../../../../components/AppSupport.vue';

const docList = reactive([
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
]);

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
      title="AOSC OS on WSL 系统配置需求表"
      id="aoscOsRequirementsTitle" />
    <div class="p-6">
      <p>
        WSL 版安同 OS (AOSC OS on WSL) 可用于运行 Windows 的设备，其基本系统需求与安同 OS 类似，但由于其依赖 WSL 及 WSLg 等技术架构运行，因此除对设备处理器、显卡、存储和互联网连接外，对 Windows 系统组件版本等均有一定的需求。根据我们的测试，我们总结出了如下以使用体验良好为基本基准的系统配置需求表。
      </p>
      <table
        class="mt-6"
        ref="aoscOsRequirementsList">
        <caption
          class="text-[12pt] font-semibold">
          WSL 版安同 OS (AOSC OS on WSL) 系统配置需求表 (x64)
        </caption>
        <thead>
          <tr>
            <th>软/硬件组件</th>
            <th>配置需求</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>处理器</td>
            <td>处理器需支持 x86-64（如 Intel 64 或 AMD64）指令集、Intel VT 或 AMD-V 等 VMM 特性、XD 位或 NX 位、以及 SLAT</td>
          </tr>
          <tr>
            <td>系统组件</td>
            <td>Windows 10, Version 1607 及以上（如需使用 WSLg 运行图形化应用程序，则需要 Windows 10, Version 2004 及以上或 Windows 11）</td>
          </tr>
          <tr>
            <td>显示</td>
            <td>WSLg 兼容的 GPU 驱动程序（使用 WSLg 运行图形化、OpenGL 加速的应用程序时）</td>
          </tr>
          <tr>
            <td>内存</td>
            <td>至少 4GiB</td>
          </tr>
          <tr>
            <td>存储</td>
            <td>至少 4GiB</td>
          </tr>
          <tr>
            <td>网络连接</td>
            <td>国际互联网连接</td>
          </tr>
        </tbody>
      </table><br />
      <table>
        <caption
          class="text-[12pt] font-semibold">
          WSL 版安同 OS (AOSC OS on WSL) 系统配置需求表 (ARM64)
        </caption>
        <thead>
          <tr>
            <th>软/硬件组件</th>
            <th>配置需求</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>处理器</td>
            <td>兼容 Windows on ARM 的 64 位 ARM 处理器</td>
          </tr>
          <tr>
            <td>系统组件</td>
            <td>Windows 10, Version 1709 及以上（如需使用 WSLg 运行图形化应用程序，则需要 Windows 10, Version 2004 及以上或 Windows 11）</td>
          </tr>
          <tr>
            <td>显示</td>
            <td>Windows 兼容的 GPU 驱动程序（使用 WSLg 运行图形化、OpenGL 加速的应用程序时）</td>
          </tr>
          <tr>
            <td>内存</td>
            <td>至少 4GiB</td>
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
      </table><br />
    </div>

    <category-second
      title="补充说明"
      id="support" />
    <div class="pt-4 pb-4 px-16">
      <ul class="list-disc">
        <li>WSL 版安同 OS (AOSC OS on WSL) 不支持 32 位 x86 (Windows x86) 及 ARM (Windows ARM32) 架构</li>
        <li>在虚拟机中运行 WSL 版安同 OS (AOSC OS on WSL) 时需开启嵌套虚拟化支持</li>
        <li>AOSC OS 绝大部分应用程序假设良好的 VT 支持，推荐使用最新版 Windows Terminal 而非 Windows Console（前者需要 Windows 10, Version 2004 及以上）</li>
        <li>WSL 2 中的 systemd 支持需要 0.67.6 或更新版本的 WSL 组件</li>
        <li>推荐使用最新的操作系统、WSL 及 Windows Terminal 版本，开发人员可能无法对不受微软支持版本软件中存在的兼容性问题提供协助</li>
        <li>如有可能，建议使用固态硬盘作为系统主存储：固态硬盘在随机读写性能上的优势将显著提升系统响应、软件安装和多任务场景下的使用体验</li>
        <li>安同 OS通过互联网获取更新，请确保互联网连接畅通以便及时获得系统更新</li>
      </ul>
    </div>
    <br />

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
