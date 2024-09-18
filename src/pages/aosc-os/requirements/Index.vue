<script setup>
import { reactive, ref, onMounted } from 'vue';
import CategorySecond from '/src/components/CategorySecond.vue';
import AppLink from '../../../components/AppLink.vue';
import { useRoute } from 'vue-router';
import highlightElement from '../../../utils/animation';
import Support from '../../../components/Support.vue';

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
      title="安同 OS 系统配置需求表"
      id="aoscOsRequirementsTitle" />
    <div class="p-6">
      <p>
        安同 OS
        是一款面向桌面的、功能较为完整的操作系统，预装软件和基础管理特性等对设备处理器、显卡、存储和互联网连接等均有一定的需求。根据我们的测试，我们总结出了如下以使用体验良好为基本基准的系统配置需求表。
      </p>
      <table
        class="mt-6"
        ref="aoscOsRequirementsList">
        <caption
          class="text-[12pt] font-semibold">
          安同 OS 系统配置需求表
        </caption>
        <tr>
          <th>硬件组件</th>
          <th>配置需求</th>
        </tr>
        <tr>
          <td>处理器</td>
          <td>任意与安同 OS 兼容的处理器</td>
        </tr>
        <tr>
          <td>内存</td>
          <td>至少 2GiB</td>
        </tr>
        <tr>
          <td>显卡</td>
          <td
            >支持 OpenGL 2.1 / OpenGL ES 3.1
            或以上版本的显卡</td
          >
        </tr>
        <tr>
          <td>存储</td>
          <td>至少 64GiB</td>
        </tr>
        <tr>
          <td>网络连接</td>
          <td>国际互联网连接</td>
        </tr>
      </table>
    </div>

    <category-second
      title="补充说明"
      id="support" />
    <div class="pt-4 pb-4 px-16">
      <ul class="list-disc">
        <li
          >关于安同 OS
          兼容的处理器，详请见<AppLink
            :to="{
              path: '/aosc-os/isa',
              hash: '#aoscOsIsaTableTitle'
            }"
            >安同 OS 架构支持规格表</AppLink
          >
        </li>
        <li
          >浏览网页时，系统内存和处理器占用将显著提升：如需大量浏览网页和观看高清流媒体内容，推荐在搭配至少
          4 个处理器核心及 4GiB
          内存的设备上使用安同 OS</li
        >
        <li
          >一般来说，4K 分辨率的屏幕需要 2GiB
          显存的显卡才能流畅使用安同 OS
          桌面界面</li
        >
        <li
          >关于存储需求的建议是基于系统安装后还有足够空间进行日常工作和系统更新设定的；如果您的设备内存较大，安装程序创建的默认交换空间（虚拟内存文件）尺寸也会随之变大，因此您在分区时也要进行相关的考虑</li
        >
        <li
          >如有可能，建议使用固态硬盘作为系统主存储：固态硬盘在随机读写性能上的优势将显著提升系统响应、软件安装和多任务场景下的使用体验</li
        >
        <li
          >安同 OS
          通过互联网获取更新，请确保互联网连接畅通以便及时获得系统更新</li
        >
      </ul>
    </div>
    <br />

    <Support :navigationList="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
