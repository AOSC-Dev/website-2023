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
  ? textValue.fileType[0]
  : textValue.fileType[1];

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
  textValue.mediaWritersInfo,
  'name'
);
</script>

<template>
  <div class="download-details-main flex flex-col gap-2">
    <app-h2>{{ textValue.title1 }}</app-h2>
    <p
      >{{ textValue.text1 }}{{ arch }}{{ textValue.text2 }} {{ fileType }}，{{
        content
      }}{{ linkValue.aPeriod }}</p
    >
    <p>
      {{ textValue.text3 }}
    </p>
    <el-container>
      <el-select
        v-model="selected_source_url"
        :placeholder="textValue.placeholder1">
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
        {{ textValue.text4 }}
      </AppLink>
    </el-container>

    <app-h2>{{ textValue.title2 }}</app-h2>
    <p>{{ textValue.text6 }}</p>
    <CopyButton :content="sha256sum" :button-text="textValue.text7" />

    <p>{{ textValue.text8 }}{{ fileType }}{{ textValue.text9 }}</p>
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
      {{ textValue.text10 }}{{ fileType }}{{ textValue.text11 }}
      <link-standard :link="linkValue.balenaEtcher" />
      {{ textValue.text12 }}
      <link-standard :link="linkValue.usbimager" />
      {{ textValue.text13 }} {{ fileType }}{{ linkValue.aPeriod }}
    </p>

    <app-h2>{{ textValue.title3 }}</app-h2>
    <p>
      {{ textValue.text14 }}
      <link-standard :link="useTIndex(locallink.contact, 2)" />
      {{ textValue.text15 }}
    </p>
  </div>
</template>

<style scoped></style>
