<script setup>
</script>

<template>
  <div>
    <CategorySecond title="发行注记：2024 年 9 月" />
    <div class="p-6">
      <p>
        LiveKit 是用于维护安同 OS
        和进行故障修复的可移动环境，本次发行包含的新特性与更改如下。 </p
      ><br />
    </div>

    <CategorySecond title="新特性与更改" id="features" />
    <div class="p-6">
      <p>除将系统组件更新到 2024 年 9 月的基线外，LiveKit 还包含如下新特性：</p
      ><br />
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li>更新 Linux 内核至 6.10 分支，支持更多新硬件</li>
          <li>支持龙架构旧世界固件引导安同 OS 安装盘</li>
          <li
            >修复带有 Optimus（带有核显及 NVIDIA
            独显的双显卡设备）功能的多显卡设备支持</li
          >
          <li>将安同 OS 安装程序（在线模式）更新至最新版，修复大量已知问题</li>
          <li
            >以基于新 DeployKit 后端编写的新命令行安装程序
            [dkcli](https://github.com/AOSC-Dev/dkcli)
            取代旧的命令行安装程序，可支持无人值守安装</li
          >
          <li
            >为安装及试用环境禁用屏幕节电及自动睡眠等电源功能，避免产生意外故障</li
          >
          <li>采取措施避免生成安装盘时预生成 SSH 主机密钥</li>
          <li>删除预设的 `live` 用户密码</li>
          <li>将内存检测工具 Memtest86+ 升级至 7.00</li>
          <li>新增救援与修复控制台（命令行安装环境）说明文字的简体中文翻译</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
