<script setup>
import { ElButton } from 'element-plus';
import AppH2 from '../../../components/AppH2.vue';
import AppLink from '../../../components/AppLink.vue';
</script>

<template>
  <div class="flex flex-col gap-2 pb-1">
    <app-h2>下载 WSL 版安同 OS</app-h2>
    <ms-store-badge
      class="[&::part(img)]:h-[48px] h-[48px] w-fit"
      productid="9NMDF21NV65Z"
      window-mode="popup"
      theme="dark"
      animation="on">
    </ms-store-badge>
    <p
      >为满足不同用户的喜爱和需要，我们还提供了如下几种安装或下载 WLS 版安同 OS
      (AOSC OS on WSL) 的方式：</p
    >
    <div>
      <el-button>
        <AppLink
          to="https://github.com/AOSC-Dev/AOSCOSLauncher/releases/latest"
          target="_blank"
          class="hover:no-underline border-0">
          GitHub Releases（无须使用 Microsoft Store）
        </AppLink>
      </el-button>
      <el-button disabled> WSL 一键包（敬请期待） </el-button>
    </div>

    <app-h2>系统需求</app-h2>
    <p
      >WSL 版安同 OS (AOSC OS on WSL) 可用于运行 Windows
      的设备，其基本系统需求与安同 OS 类似，但由于其依赖 WSL 及 WSLg
      等技术架构运行，因此除对设备处理器、显卡、存储和互联网连接外，对 Windows
      系统组件版本等均有一定的需求。</p
    >
    <p
      >欲知具体需求详情，请参阅
      <AppLink to="/aosc-os/wsl/requirements"
        >WSL 版安同 OS 系统配置需求表</AppLink
      >。</p
    >

    <app-h2>帮助与支持</app-h2>
    <p>
      如果您在安装或使用安同 OS 时遇到问题，请于<AppLink to="contact"
        >社区聊天群组</AppLink
      >与我们联系。
    </p>
  </div>
</template>

<style scoped></style>
