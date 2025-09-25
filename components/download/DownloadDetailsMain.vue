<script setup>
const { t, tm } = useI18n();
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
  ? tm('DownloadDetailsMain.downloadDetailsDownloadType')[0]
  : tm('DownloadDetailsMain.downloadDetailsDownloadType')[1];

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
  tm('DownloadDetailsMain.downloadDetailsMediaWriterButtonText'),
  'name'
);
</script>

<template>
  <div class="download-details-main flex flex-col gap-2">
    <app-h2>
      {{ t('DownloadDetailsMain.downloadDetailsBasicInfoTitle') }}
    </app-h2>
    <p>
      {{ t('DownloadDetailsMain.downloadDetailsBasicInfoText1')
      }}{{ spaceWord(arch)
      }}{{ spaceWord(t('DownloadDetailsMain.downloadDetailsBasicInfoText2'))
      }}{{ fileType }}，{{ content }}{{ linkValue.periodPoint }}
    </p>
    <p>
      {{ t('DownloadDetailsMain.downloadDetailsBasicInfoText3') }}
    </p>
    <el-container>
      <el-select
        v-model="selected_source_url"
        :placeholder="
          t('DownloadDetailsMain.downloadDetailsMirrorPlaceholder')
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
        :to="`${selected_source_url}${path}`"
        target="_blank"
        class="flex h-[32px] items-center bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        {{ t('DownloadDetailsMain.downloadDetailsDownloadButton') }}
      </AppLink>
    </el-container>
    <LinkStandard :link="useTIndex(locallink.aoscRelnote, 1)" />

    <app-h2>
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyTitle') }}
    </app-h2>
    <p>{{ t('DownloadDetailsMain.downloadDetailsHashVerifyText1') }}</p>
    <CopyButton
      :content="sha256sum"
      :button-text="t('DownloadDetailsMain.downloadDetailsHashVerifyText2')" />

    <p>
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText3')
      }}{{ spaceWord(fileType)
      }}{{ t('DownloadDetailsMain.downloadDetailsHashVerifyText4') }}
    </p>
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
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText5')
      }}{{ spaceWord(fileType)
      }}{{ t('DownloadDetailsMain.downloadDetailsHashVerifyText6') }}
    </p>
    <p>
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText7') }}
      <link-standard :link="linkValue.balenaEtcher" />
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText8') }}
      <link-standard :link="linkValue.usbimager" />
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText9')
      }}{{ spaceWord(fileType) }}{{ linkValue.periodPoint }}
    </p>

    <app-h2>
      {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText10') }}
    </app-h2>
    <p>
      <span>
        {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText11') }}
      </span>
      <link-standard :link="useTIndex(locallink.contact, 2)" />
      <span>
        {{ t('DownloadDetailsMain.downloadDetailsHashVerifyText12') }}
      </span>
    </p>
  </div>
</template>

<style scoped></style>
