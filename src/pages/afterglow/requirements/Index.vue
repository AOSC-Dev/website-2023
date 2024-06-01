<script setup>
import { reactive } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";

const docList = reactive([
  {
    title: '星霞 OS 架构支持规格表',
    url: '/afterglow/isa'
  }
])
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="星霞 OS 系统配置需求表" />
    <div class="p-6">
      <p>
        Afterglow 是一款面向老旧设备、功能受限的操作系统，预装软件和基础管理特性等对设备处理器、显卡、存储和互联网连接等均有一定的需求。根据我们的测试，我们总结出了如下以使用体验良好为基本基准的系统配置需求表。
      </p>
      <br />
      <table>
        <tr>
          <th>硬件组件</th>
          <th>配置需求</th>
        </tr>
        <tr>
          <td>处理器</td>
          <td>任意与星霞 OS 兼容的处理器</td>
        </tr>
        <tr>
          <td>内存</td>
          <td>至少 64MiB</td>
        </tr>
        <tr>
          <td>显卡</td>
          <td>任意支持显示信号输出的显卡或帧缓冲卡、抑或串口终端</td>
        </tr>
        <tr>
            <td>存储</td>
            <td>至少 1GiB（基本版）或 3GiB（桌面版）</td>
        </tr>
        <tr>
            <td>网络连接</td>
            <td>国际互联网连接</td>
        </tr>
      </table>
    </div>

    <category-second title="补充说明" id="support" />
    <div class="pt-4 pb-4 px-16">
      <ul class="list-disc">
        <li>关于星霞 OS 兼容的处理器，详请见<a class="text-link" href="/afterglow/isa">星霞 OS 架构支持规格表</a></li>
        <li>对于带有图形界面的桌面版来说，需要至少支持 SVGA 分辨率和色深（800×600 分辨率，16 位色深 / 65535 色）</li>
        <li>关于存储需求的建议是基于系统安装后还有足够空间进行日常工作和系统更新设定的；如果您的设备内存较大，安装程序创建的默认交换空间（虚拟内存文件）尺寸也会随之变大，因此您在分区时也要进行相关的考虑</li>
      </ul>
    </div>
    <br />

    <category-second title="支持文档" id="support" />
    <div class="pt-4 pb-[60px] px-16">
      <ul class="list-disc">
        <li v-for="item in docList" :key="item.title">
          <router-link class="text-link" :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped></style>
./components/Header.vue
