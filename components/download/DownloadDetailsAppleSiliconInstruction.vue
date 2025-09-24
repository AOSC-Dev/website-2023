<script setup>
const { t, tm } = useI18n();
const linkValue = tm('allUniversalLink');
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>
      {{
        t(
          'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconText1'
        )
      }}
      <link-standard :link="linkValue.asahiDocumentation" />
      {{ linkValue.periodPoint }}
    </p>
    <p>
      {{
        t(
          'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconText2'
        )
      }}
    </p>
    <CopyButton content="curl https://releases.aosc.io/install-asahi | sh" />
    <p>
      {{
        t(
          'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconText3'
        )
      }}
    </p>
    <el-descriptions size="small">
      <el-descriptions-item
        :label="
          t(
            'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconUsername'
          )
        ">
        aosc
      </el-descriptions-item>
      <el-descriptions-item
        :label="
          t(
            'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconPassword'
          )
        ">
        anthon
      </el-descriptions-item>
    </el-descriptions>

    <p>
      {{
        t(
          'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconText4'
        )
      }}
      <link-standard :link="useTIndex(linkValue.contact, 2)" />
      {{
        t(
          'DownloadDetailsAppleSiliconInstruction.downloadDetailsAppleSiliconText5'
        )
      }}
    </p>
  </div>
</template>

<style scoped>
/* For el-descriptions-item */
:deep(td[colspan='1']) {
  min-width: fit-content;
}
</style>
