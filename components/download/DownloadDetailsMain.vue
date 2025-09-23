<script setup>
const { tm } = useI18n();
const textValue = tm('DownloadDetailsMain');
const linkValue = tm('allUniversalLink');
const locallink = linkValue.local;

const props = defineProps({
  arch: { type: String, required: true },
  content: { type: String, required: true },
  path: { type: String, required: true },
  sha256sum: { type: String, required: true },
  sources: {
    type: [{ name: String, loc: String, url: String }],
    required: true
  }
});

const selected_source_url = ref(props.sources[0].url);

const fileType = props.path.includes('livekit')
  ? textValue.downloadDetailsDownloadType[0]
  : textValue.downloadDetailsDownloadType[1];

const mediaWriterVersion = '0.3.3'; // FIXME: Currently unable to get dynamic Media Writer version
const mediaWritersInfo = setNestedKeyValue(
  [
    {
      type: 'win64',
      extension: 'exe'
    },
    {
      type: 'osx',
      extension: 'dmg'
    },
    {
      type: 'osx-arm64',
      extension: 'dmg'
    }
  ],
  textValue.downloadDetailsMediaWriterButtonText,
  'name'
);
</script>

<template>
  <div class="download-details-main flex flex-col gap-2">
    <app-h2>{{ textValue.downloadDetailsBasicInfoTitle }}</app-h2>
    <p>
      {{ textValue.downloadDetailsBasicInfoText1 }}{{ spaceWord(arch) }}{{ spaceWord(textValue.downloadDetailsBasicInfoText2)
      }}{{ fileType }}，{{ content }}{{ linkValue.periodPoint }}
    </p>
    <p>
      {{ textValue.downloadDetailsBasicInfoText3 }}
    </p>
    <el-container>
      <el-select
        v-model="selected_source_url"
        :placeholder="textValue.downloadDetailsMirrorPlaceholder">
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
        :to="`${selected_source_url}${path}`"
        target="_blank"
        class="flex h-[32px] items-center bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        {{ textValue.downloadDetailsDownloadButton }}
      </AppLink>
    </el-container>
    <LinkStandard :link="useTIndex(locallink.aoscRelnote, 1)" />

    <app-h2>{{ textValue.downloadDetailsHashVerifyTitle }}</app-h2>
    <p>{{ textValue.downloadDetailsHashVerifyText1 }}</p>
    <CopyButton :content="sha256sum" :button-text="textValue.text7" />

    <p>{{ textValue.downloadDetailsHashVerifyText3 }}{{ spaceWord(fileType) }}{{ textValue.downloadDetailsHashVerifyText4 }}</p>
    <el-container class="flex-wrap">
      <AppLink
        v-for="info in mediaWritersInfo"
        :key="info.type"
        :to="`${selected_source_url}writer/AOSCMediaWriter-${info.type}-${mediaWriterVersion}.${info.extension}`"
        target="_blank"
        class="el-button hover:no-underline">
        {{ info.name }}
      </AppLink>
    </el-container>
    <p>
      {{ textValue.downloadDetailsHashVerifyText5 }}{{ spaceWord(fileType) }}{{ textValue.downloadDetailsHashVerifyText6 }}
    </p>
    <p>
      {{ textValue.downloadDetailsHashVerifyText7 }}
      <link-standard :link="linkValue.balenaEtcher" />
      {{ textValue.downloadDetailsHashVerifyText8 }}
      <link-standard :link="linkValue.usbimager" />
      {{ textValue.downloadDetailsHashVerifyText9 }}{{ spaceWord(fileType) }}{{ linkValue.periodPoint }}
    </p>

    <app-h2>{{ textValue.downloadDetailsHashVerifyText10 }}</app-h2>
    <p>
      <span>{{ textValue.downloadDetailsHashVerifyText11 }}</span>
      <link-standard :link="useTIndex(locallink.contact, 2)" />
      <span>{{ textValue.downloadDetailsHashVerifyText12 }}</span>
    </p>
  </div>
</template>

<style scoped></style>
