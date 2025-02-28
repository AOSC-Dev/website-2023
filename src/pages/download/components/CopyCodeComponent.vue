<script setup>
import { ElMessage } from 'element-plus';
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();

const props = defineProps({
  content: { type: String },
  buttonText: { type: String, optional: true, default: '复制' }
});

function copy(content) {
  toClipboard(content);
  ElMessage.success('复制成功');
}
</script>

<template>
  <el-container>
    <code
      class="grow overflow-x-auto p-[5px_10px] text-nowrap shadow-[inset_0_0_0_1px_var(--el-border-color)]">
      {{ content }}
    </code>
    <el-button @click="copy(content)" plain color="gray">
      {{ buttonText }}
    </el-button>
  </el-container>
</template>
