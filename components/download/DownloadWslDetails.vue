<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadWslDetails');
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
    <app-h2>{{ textValue.title1 }}</app-h2>
    <ms-store-badge
      class="h-[48px] w-fit [&::part(img)]:h-[48px]"
      productid="9NMDF21NV65Z"
      window-mode="popup"
      theme="dark"
      animation="on" />
    <p class="mb-0">{{ textValue.text2 }}</p>
    <el-container>
      <el-select
        v-model="selected_source_url"
        :placeholder="textValue.selectSourcePlaceholder">
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
        {{ textValue.download.x86_64 }}
      </AppLink>
      <AppLink
        :to="`${selected_source_url}${latestTarball(recipeWsl.tarballs, 'arm64').path}`"
        target="_blank"
        class="flex h-[32px] items-center bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        {{ textValue.download.aarch64 }}
      </AppLink>
    </el-container>

    <div class="col-span-2">
      {{ textValue.manualDownload.description }}
    </div>

    <AppLink
      to="https://github.com/AOSC-Dev/AOSCOSLauncher/releases/latest"
      target="_blank"
      class="el-button max-w-min hover:no-underline">
      {{ textValue.manualDownload.githubLink }}
    </AppLink>

    <AppLink :to="`/aosc-os/wsl/relnote`">
      {{ textValue.viewReleaseNotes }}
    </AppLink>

    <app-h2>{{ textValue.title2 }}</app-h2>
    <p>{{ textValue.text6 }}</p>
    <p
      >{{ textValue.text7 }}
      <link-standard :link="useTIndex(localLink.aoscWslRequirements, 1)" />{{
        linkValue.aPeriod
      }}</p
    >

    <app-h2>{{ textValue.title3 }}</app-h2>
    <p>
      {{ textValue.text11
      }}<link-standard :link="useTIndex(localLink.contact, 2)" />{{
        textValue.text13
      }}
    </p>
  </div>
</template>

<style scoped></style>
