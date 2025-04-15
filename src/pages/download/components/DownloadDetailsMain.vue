<script setup>
import { ref, onMounted } from 'vue';
import { ElContainer, ElOption, ElSelect } from 'element-plus';
import pangu from 'pangu';
import AppLink from '../../../components/AppLink.vue';
import AppH2 from '../../../components/AppH2.vue';
import CopyCodeComponent from './CopyCodeComponent.vue';

const props = defineProps({
  arch: { type: String },
  content: { type: String },
  path: { type: String },
  sha256sum: { type: String },
  sources: { type: [{ name: String, loc: String, url: String }] }
});

const selected_source_url = ref(props.sources[0].url);

const fileType = props.path.includes('livekit')
  ? 'LiveKit 救援启动盘'
  : '安装盘';

const mediaWriterVersion = '0.3.3'; // FIXME: Currently unable to get dynamic Media Writer version
const mediaWritersInfo = [
  {
    name: 'Windows (x64)',
    type: 'win64',
    extension: 'exe'
  },
  {
    name: 'macOS（Intel 芯片）',
    type: 'osx',
    extension: 'dmg'
  },
  {
    name: 'macOS（Apple 芯片）',
    type: 'osx-arm64',
    extension: 'dmg'
  }
];

onMounted(() => {
  pangu.spacingElementByClassName('download-details-main');
});
</script>

<template>
  <div class="download-details-main flex flex-col gap-2">
    <app-h2>基础信息</app-h2>
    <p>您正在下载{{ arch }}版安同 OS {{ fileType }}，{{ content }}。</p>
    <p>
      您可以根据自身网络配置和物理位置选择最合适的镜像源，以便更快完成下载。
    </p>
    <el-container>
      <el-select v-model="selected_source_url" placeholder="请选择下载源">
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
        下载
      </AppLink>
    </el-container>

    <AppLink
      :to="`/aosc-os${props.path.includes('livekit') ? '/livekit' : ''}/relnote`"
      >查阅最新发行注记...</AppLink
    >

    <app-h2>校验和使用</app-h2>
    <p>我们推荐您在下载后校验相关文件的 SHA-256 校验和，详情如下：</p>
    <CopyCodeComponent :content="sha256sum" button-text="复制 SHA-256 校验和" />

    <p
      >如果您在使用 Windows 或 macOS，我们建议您下载“AOSC
      启动盘制作向导”来制作{{ fileType }}：</p
    >
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
    <p
      >如果您在使用安同 OS，可从应用菜单直接启动“启动盘制作向导”工具制作{{
        fileType
      }}。</p
    >
    <p
      >如果您在使用其他 Linux 系统，建议使用
      <AppLink to="https://etcher.balena.io/" target="_blank"
        >balenaEtcher</AppLink
      >
      或
      <AppLink to="https://gitlab.com/bztsrc/usbimager" target="_blank"
        >usbimager</AppLink
      >
      工具制作{{ fileType }}。
    </p>

    <app-h2>帮助与支持</app-h2>
    <p>
      如果您在安装或使用安同 OS 时遇到问题，请于<AppLink to="contact"
        >社区聊天群组</AppLink
      >与我们联系。
    </p>
  </div>
</template>

<style scoped></style>
