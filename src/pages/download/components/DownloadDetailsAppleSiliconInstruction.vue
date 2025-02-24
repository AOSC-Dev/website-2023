<script setup>
import { ElDescriptions, ElDescriptionsItem } from 'element-plus';
import AppLink from '../../../components/AppLink.vue';
import CopyCodeComponent from './CopyCodeComponent.vue';
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>
      安同 OS 可在基于 Apple 芯片的 Mac 设备上安装使用，具体设备兼容与外设支持情况请见
      <AppLink to="https://asahilinux.org/docs/">
        Asahi Linux 官方文档</AppLink
      >。
    </p>
    <p>在 macOS Ventura (13) 或更新版本的系统中输入如下命令即可安装安同 OS：</p>
    <CopyCodeComponent
      content="curl https://releases.aosc.io/install-asahi | sh" />
    <p> 默认登录信息如下： </p>
    <el-descriptions border size="small">
      <el-descriptions-item label="用户名">aosc</el-descriptions-item>
      <el-descriptions-item label="密码">anthon</el-descriptions-item>
    </el-descriptions>

    <p>
      如果您在安装或使用安同 OS 时遇到问题，请于<AppLink to="contact"
        >社区聊天群组</AppLink
      >与我们联系。
    </p>
  </div>
</template>

<style scoped>
/* For el-descriptions-item */
:deep(td[colspan='1']) {
  min-width: fit-content;
}
</style>
