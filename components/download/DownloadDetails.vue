<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadDetails');

const props = defineProps({
  isaInfo: {
    type: [
      {
        title: String,
        label: String,
        popoverData: { content: String, placement: String },
        installer: Object,
        livekit: Object
      }
    ],
    required: true
  },
  sources: {
    type: [{ name: String, loc: String, url: String }],
    required: true
  },
  initialTab: {
    type: String,
    default: 'installer'
  }
});

const dialogTab = ref(props.initialTab);
</script>

<template>
  <el-tabs v-model="dialogTab" class="pb-2 *:px-2">
    <el-tab-pane
      :disabled="!isaInfo.installer"
      :label="textValue.label1"
      name="installer">
      <DownloadDetailsMain
        :arch="isaInfo.label"
        :content="isaInfo.popoverData.content"
        :path="isaInfo.installer?.path ?? ''"
        :sha256sum="isaInfo.installer?.sha256sum ?? ''"
        :sources="sources" />
    </el-tab-pane>
    <el-tab-pane
      :disabled="!isaInfo.livekit"
      :label="textValue.label2"
      name="livekit">
      <DownloadDetailsMain
        :arch="isaInfo.label"
        :content="isaInfo.popoverData.content"
        :path="isaInfo.livekit?.path ?? ''"
        :sha256sum="isaInfo.livekit?.sha256sum ?? ''"
        :sources="sources" />
    </el-tab-pane>
    <el-tab-pane
      v-if="isaInfo.title === 'arm64'"
      :label="textValue.label3"
      name="apple-silicon-instruction">
      <DownloadDetailsAppleSiliconInstruction />
    </el-tab-pane>
    <el-tab-pane
      v-if="isaInfo.title === 'arm64'"
      :label="textValue.label4"
      name="apple-silicon-image"
      disabled>
      <!-- TODO -->
    </el-tab-pane>
    <el-tab-pane :label="textValue.label5" name="docker" disabled />
    <el-tab-pane :label="textValue.label6" name="vm" disabled />
  </el-tabs>
</template>
