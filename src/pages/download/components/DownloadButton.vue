<script setup>
import { ref, computed } from 'vue';
import DownloadDetails from './DownloadDetails.vue';
import { useDownloadPageStore } from '../../../stores/download-page.js';
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
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const router = useRouter();
const dialogState = ref(false);
const downloadPageStore = useDownloadPageStore();
const archNameBrackets = props.archName.match(/(.*)([（(].*[）)])/);

const osName = '安同 OS'; // TODO: dynamic OS name (AOSC OS / Afterglow OS)
const dialogTitle = computed(
  () => `下载详情：${osName} - ${props.isaInfo?.zhLabel}`
);

const setDialogState = (state) => {
  if (props.isaInfo?.title === 'arm64') {
    downloadPageStore.dialogArm64State = state;
  } else {
    dialogState.value = state;
  }
};

const dialogModel = computed({
  get() {
    return props.isaInfo?.title === 'arm64'
      ? downloadPageStore.dialogArm64State
      : dialogState.value;
  },
  set(value) {
    if (props.isaInfo?.title === 'arm64') {
      downloadPageStore.dialogArm64State = value;
    } else {
      dialogState.value = value;
    }
  }
});
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
        <button
          :disabled="disabled"
          :style="{
            borderColor: 'var(--primary)',
            backgroundColor: buttonColor
          }"
          @click="
            url?.startsWith('#') ? router.push(url) : setDialogState(true)
          "
          class="theme-bg-color-secondary-primary flex h-full flex-col grow hover:no-underline cursor-pointer py-1 overflow-hidden">
          <slot></slot>
          <span v-if="!archNameBrackets" class="first-line-p">{{
            archName
          }}</span>
          <span v-if="archNameBrackets" class="first-line-p">{{
            archNameBrackets[1]
          }}</span>
          <span v-if="archNameBrackets" class="second-line-p">{{
            archNameBrackets[2]
          }}</span>
        </button>
      </template>
    </el-popover>

    <el-dialog
      v-if="!disabled"
      v-model="dialogModel"
      width="80%"
      :title="dialogTitle">
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
  font-weight: 450;
}

.second-line-p {
  font-size: var(--download-button-p-fount-size2);
  font-weight: 400;
}

span {
  margin: auto 0;
  text-align: center;
  color: white;
}

button:disabled {
  cursor: not-allowed;
  background-color: #8d8d8d;
}

button:disabled span {
  color: #dddddd;
}
</style>
