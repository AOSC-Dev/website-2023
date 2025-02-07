<script setup>
import { ref } from 'vue';
import { ElTabs, ElTabPane } from 'element-plus';
import DownloadDetailsMain from './DownloadDetailsMain.vue';
import DownloadDetailsAppleSiliconInstruction from './DownloadDetailsAppleSiliconInstruction.vue';

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
  <DownloadDetailsMain v-if="path.includes('livekit')" v-bind="props" />
  <el-tabs v-else v-model="activeTab" class="*:px-2 pb-2">
    <el-tab-pane label="系统安装盘" name="main">
      <DownloadDetailsMain v-bind="props" />
    </el-tab-pane>
    <el-tab-pane
      v-if="arch === 'AArch64'"
      label="Apple Silicon 安装向导"
      name="apple-silicon-instruction">
      <DownloadDetailsAppleSiliconInstruction />
    </el-tab-pane>
    <el-tab-pane
      v-if="arch === 'AArch64'"
      label="设备镜像"
      name="apple-silicon-image"></el-tab-pane>
    <el-tab-pane label="Docker" name="docker" disabled></el-tab-pane>
    <el-tab-pane
      label="虚拟机安装盘"
      name="virtual-machine"
      disabled></el-tab-pane>
  </el-tabs>
</template>
