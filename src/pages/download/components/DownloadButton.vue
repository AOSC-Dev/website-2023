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
    default: 9
  },
  firstLineFontSize: {
    type: Number,
    default: 11
  },
  width: {
    type: Number,
    default: 140
  },
  popoverData: {
    type: {
      placement: { type: String },
      content: { type: String }
    }
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

const router = useRouter();
const dialogVisible = ref(false);
const archNameBrackets = props.archName.match(/(.*)([（(].*[）)])/);
</script>
<template>
  <div
    class="flex"
    :style="{
      '--download-button-p-fount-size1': $props.firstLineFontSize + 'pt',
      '--download-button-p-fount-size2': $props.secondLineFontSize + 'pt',
      width: $props.width + 'px'
    }">
    <el-popover
      :disabled="popoverData === undefined"
      :placement="popoverData?.placement"
      :hide-after="0"
      trigger="hover"
      :content="popoverData?.content">
      <template #reference>
        <div
          :style="{
            borderColor: 'var(--primary)',
            backgroundColor: buttonColor
          }"
          @click="
            url?.startsWith('#') ? router.push(url) : (dialogVisible = true)
          "
          class="theme-bg-color-secondary-primary flex h-full flex-col grow hover:no-underline cursor-pointer py-1">
          <slot></slot>
          <p v-if="!archNameBrackets" class="first-line-p">{{ archName }}</p>
          <p v-if="archNameBrackets" class="first-line-p">{{
            archNameBrackets[1]
          }}</p>
          <p v-if="archNameBrackets" class="second-line-p">{{
            archNameBrackets[2]
          }}</p>
        </div>
      </template>
    </el-popover>

    <el-dialog
      v-if="isaInfo?.installer && isaInfo?.livekit && sources"
      v-model="dialogVisible"
      title="下载详情">
      <DownloadDetails
        :arch="archName"
        :content="popoverData.content"
        :isa-info="isaInfo"
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
