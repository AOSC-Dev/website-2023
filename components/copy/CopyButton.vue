<script setup>
const { tm, locale } = useI18n();
const textValue = tm('CopyButton');

const props = defineProps({
  content: { type: String },
  buttonText: {
    type: [String, undefined],
    optional: true,
    default: undefined
  }
});
</script>

<template>
  <el-container>
    <code
      class="grow overflow-x-auto p-[5px_10px] shadow-[inset_0_0_0_1px_var(--el-border-color)]">
      {{ content }}
    </code>
    <el-button color="gray" plain @click="copyToClipboard(content)">
      {{ buttonText ? buttonText : textValue.buttonTextDefault }}
    </el-button>
  </el-container>
</template>
