<script setup>
const { t, tm } = useI18n();
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const props = defineProps({
  recipeWsl: { type: {}, required: true },
  sources: {
    type: [{ name: String, loc: String, url: String }],
    required: true
  }
});
const selected_source_url = ref(props.sources[0].url);

function latestTarball(tarballs, arch) {
  return tarballs
    .filter((tarball) => tarball.arch === arch)
    .reduce((max, obj) => (+obj.date > +max.date ? obj : max));
}
</script>

<template>
  <div class="flex flex-col gap-2 pb-1">
    <app-h2>{{ t('DownloadWslDetails.downloadWslDetailTitle') }}</app-h2>
    <ms-store-badge
      class="h-[48px] w-fit [&::part(img)]:h-[48px]"
      productid="9NMDF21NV65Z"
      window-mode="popup"
      theme="dark"
      animation="on" />
    <p class="mb-0">
      {{ t('DownloadWslDetails.downloadWslDetailText1') }}
      <LinkStandard :link="linkValue.mordenDistribution" />
      {{ t('DownloadWslDetails.downloadWslDetailText2') }}
    </p>
    <el-container>
      <el-select
        v-model="selected_source_url"
        :placeholder="
          t('DownloadWslDetails.downloadWslDetailMirrorPlaceholder')
        ">
        <el-option
          v-for="source in sources"
          :key="source.name"
          :label="`${source.name} | ${source.loc}`"
          :value="source.url">
          <span class="float-left">{{ source.name }}</span>
          <span class="float-right">{{ source.loc }}</span>
        </el-option>
      </el-select>
      <AppLink
        :to="`${selected_source_url}${latestTarball(recipeWsl.tarballs, 'amd64').path}`"
        target="_blank"
        class="flex h-[32px] items-center border-r bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        {{ t('DownloadWslDetails.downloadWslDetailArch.x86_64') }}
      </AppLink>
      <AppLink
        :to="`${selected_source_url}${latestTarball(recipeWsl.tarballs, 'arm64').path}`"
        target="_blank"
        class="flex h-[32px] items-center bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        {{ t('DownloadWslDetails.downloadWslDetailArch.aarch64') }}
      </AppLink>
    </el-container>

    <div class="col-span-2">
      {{ t('DownloadWslDetails.downloadWslDetailManualDownload.description') }}
    </div>

    <LinkStandard
      :link="linkValue.aoscOsLauncher"
      target="_blank"
      class="el-button max-w-min hover:no-underline" />

    <LinkStandard :link="localLink.aoscWslRelnote" />

    <app-h2>{{ t('DownloadWslDetails.downloadWslDetailSysReqTitle') }}</app-h2>
    <p>{{ t('DownloadWslDetails.downloadWslDetailSysReqText1') }}</p>
    <p>
      {{ t('DownloadWslDetails.downloadWslDetailSysReqText1') }}
      <link-standard :link="useTIndex(localLink.aoscWslRequirements, 1)" />
      {{ linkValue.periodPoint }}
    </p>

    <app-h2>
      {{ t('DownloadWslDetails.downloadWslDetailHelpAndSupportTitle') }}
    </app-h2>
    <p>
      {{ t('DownloadWslDetails.downloadWslDetailHelpAndSupportText1') }}
      <link-standard :link="useTIndex(localLink.contact, 2)" />
      {{ t('DownloadWslDetails.downloadWslDetailHelpAndSupportText2') }}
    </p>
  </div>
</template>

<style scoped></style>
