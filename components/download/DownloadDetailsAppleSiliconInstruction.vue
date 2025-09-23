<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadDetailsAppleSiliconInstruction');
const linkValue = tm('allUniversalLink');
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>
      {{ textValue.downloadDetailsAppleSiliconText1 }}
      <link-standard :link="linkValue.asahiDocumentation" />
      {{ linkValue.periodPoint }}
    </p>
    <p>{{ textValue.downloadDetailsAppleSiliconText2 }}</p>
    <CopyButton content="curl https://releases.aosc.io/install-asahi | sh" />
    <p>{{ textValue.downloadDetailsAppleSiliconText3 }}</p>
    <el-descriptions size="small">
      <el-descriptions-item :label="textValue.downloadDetailsAppleSiliconUsername">
        aosc
      </el-descriptions-item>
      <el-descriptions-item :label="textValue.downloadDetailsAppleSiliconPassword">
        anthon
      </el-descriptions-item>
    </el-descriptions>

    <p>
      {{ textValue.downloadDetailsAppleSiliconText4 }}
      <link-standard :link="useTIndex(linkValue.contact, 2)" />
      {{ textValue.downloadDetailsAppleSiliconText5 }}
    </p>
  </div>
</template>

<style scoped>
/* For el-descriptions-item */
:deep(td[colspan='1']) {
  min-width: fit-content;
}
</style>
