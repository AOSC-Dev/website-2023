<script setup>
import { ref } from 'vue';
import DownloadDetails from './DownloadDetails.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  archName: {
    type: String
  },
  isaInfo: {
    type: Object
  },
  secondLineFontSize: {
    type: Number,
    default: 10
  },
  firstLineFontSize: {
    type: Number,
    default: 12
  },
  width: {
    type: Number,
    default: 224
  },
  popoverData: {
    type: Object
  },
  buttonColor: {
    type: String
  },
  url: {
    type: String
  },
  sources: {
    type: Array
  }
});

const dialogVisible = ref(false);
const router = useRouter();

const byteToGb = (bytes) => {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
};
</script>
<template>
  <div
    class="flex mx-1"
    :style="{
      '--download-button-p-fount-size1': $props.firstLineFontSize + 'pt',
      '--download-button-p-fount-size2': $props.secondLineFontSize + 'pt',
      width: $props.width + 'px'
    }">
    <el-popover
      :placement="popoverData.placement"
      :hide-after="0"
      trigger="hover"
      :content="popoverData.content">
      <template #reference>
        <div
          :style="{
            borderColor: 'var(--primary)',
            backgroundColor: buttonColor
          }"
          @click="
            url.startsWith('#') ? router.push(url) : (dialogVisible = true)
          "
          class="theme-bg-color-secondary-primary flex h-full flex-col grow hover:no-underline cursor-pointer py-1">
          <slot></slot>
          <p v-if="archName" class="first-line-p">{{ archName }}</p>
          <p v-if="isaInfo" class="second-line-p"
            >{{ byteToGb(isaInfo.downloadSize) }}GiB ISO</p
          >
        </div>
      </template>
    </el-popover>

    <el-dialog
      v-model="dialogVisible"
      title="下载详情"
      style="--el-border-radius-base: 0">
      <DownloadDetails
        :arch="archName"
        :content="popoverData.content"
        :path="isaInfo.path"
        :sha256sum="isaInfo.sha256sum"
        :sources="sources" />
    </el-dialog>
  </div>
</template>

<style scoped>
.first-line-p {
  font-size: var(--download-button-p-fount-size1);
}

.second-line-p {
  font-size: var(--download-button-p-fount-size2);
}

p {
  margin: auto 0;
  text-align: center;
  color: white;
}
</style>
