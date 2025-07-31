<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadDetailsAppleSiliconInstruction');
const linkValue = tm('allUniversalLink');
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>
      {{ textValue.text1 }}
      <link-standard :link="linkValue.asahiLinux" />
      {{ linkValue.aPeriod }}
    </p>
    <p>{{ textValue.text2 }}</p>
    <CopyButton content="curl https://releases.aosc.io/install-asahi | sh" />
    <p>{{ textValue.text3 }}</p>
    <el-descriptions size="small">
      <el-descriptions-item :label="textValue.label1">
        aosc
      </el-descriptions-item>
      <el-descriptions-item :label="textValue.label2">
        anthon
      </el-descriptions-item>
    </el-descriptions>

    <p>
      {{ textValue.text4 }}
      <link-standard :link="useTIndex(linkValue.contact, 2)" />
      {{ textValue.text5 }}
    </p>
  </div>
</template>

<style scoped>
/* For el-descriptions-item */
:deep(td[colspan='1']) {
  min-width: fit-content;
}
</style>
