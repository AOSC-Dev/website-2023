<script setup>
import { ElTabs, ElTabPane } from 'element-plus';
import { ref } from 'vue';
import DownloadDetailsMain from './DownloadDetailsMain.vue';

const props = defineProps({
  arch: { type: String },
  content: { type: String },
  path: { type: String },
  sha256sum: { type: String },
  sources: { type: [{ name: String, loc: String, url: String }] }
});

const activeTab = ref('main');
</script>

<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="系统安装盘" name="main">
      <DownloadDetailsMain v-bind="props" />
    </el-tab-pane>
    <el-tab-pane
      v-if="arch === 'AArch64'"
      label="Apple Silicon 安装向导"
      name="apple-silicon-instruction"></el-tab-pane>
    <el-tab-pane
      v-if="arch === 'AArch64'"
      label="设备镜像"
      name="apple-silicon-image"></el-tab-pane>
    <el-tab-pane label="Docker" name="docker" disabled></el-tab-pane>
    <el-tab-pane label="虚拟机安装盘" name="virtual-machine" disabled></el-tab-pane>
  </el-tabs>
</template>
