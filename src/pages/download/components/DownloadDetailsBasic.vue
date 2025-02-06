<script setup>
import { ElSelect, ElOption, ElButton, ElContainer } from 'element-plus';
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';
import AppLink from '../../../components/AppLink.vue';
import AppH2 from '../../../components/AppH2.vue';

const props = defineProps({
  arch: { type: String },
  content: { type: String },
  path: { type: String },
  sha256sum: { type: String },
  sources: { type: [{ name: String, loc: String, url: String }] }
});

const { toClipboard } = useClipboard();

const selected_source_url = ref(props.sources[0].url);

// Assumes that there are only 2 file types
const fileType = props.path.includes('livekit')
  ? 'LiveKit 救援启动盘'
  : '安装盘';

const mediaWritersInfo = [
  {
    type: 'Windows (x64)',
    url: 'https://github.com/AOSC-Dev/MediaWriter/releases/download/v0.3.5/AOSCMediaWriter-win64-0.3.5.exe'
  },
  {
    type: 'macOS (Intel)',
    url: 'https://github.com/AOSC-Dev/MediaWriter/releases/download/0.3.3/AOSCMediaWriter-osx-0.3.3.dmg'
  },
  {
    type: 'macOS (Apple Silicon)',
    url: 'https://github.com/AOSC-Dev/MediaWriter/releases/download/0.3.3/AOSCMediaWriter-osx-arm64-0.3.3.dmg'
  }
];
</script>

<template>
  <div class="flex flex-col gap-2" style="--el-color-primary: var(--primary)">
    <app-h2>基础信息</app-h2>
    <p> 您正在下载 {{ arch }} 版安同 OS {{ fileType }}，{{ content }}。</p>
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
          <span style="float: left">{{ source.name }}</span>
          <span style="float: right">{{ source.loc }}</span>
        </el-option>
      </el-select>
      <el-button class="el-button-primary">
        <AppLink
          :to="`${selected_source_url}${path}`"
          target="_blank"
          class="hover:no-underline">
          下载
        </AppLink>
      </el-button>
    </el-container>

    <app-h2>校验和使用</app-h2>
    <p>我们推荐您在下载后校验相关文件的 SHA-256 校验和，详情如下：</p>
    <el-container>
      <span
        class="flex-grow overflow-x-scroll text-nowrap p-[4px_8px] shadow-[inset_0_0_0_1px_var(--el-border-color)]">
        {{ sha256sum }}
      </span>
      <el-button @click="toClipboard(sha256sum)" plain color="gray">
        复制 SHA-256 校验和
      </el-button>
    </el-container>

    <p>要制作{{ fileType }}，我们建议您使用我社开发的启动盘制作向导。</p>
    <el-container class="flex-wrap">
      <el-button v-for="info in mediaWritersInfo" :key="info.type">
        <AppLink
          :to="info.url"
          target="_blank"
          class="hover:no-underline">
          {{ info.type }}
        </AppLink>
      </el-button>
    </el-container>
    <p>
      如果您在使用安同 OS，可从应用菜单直接启动“启动盘制作向导”工具制作{{
        fileType
      }}；如果您在使用其他 Linux 系统，建议使用
      <AppLink to="https://rufus.ie" target="_blank">Rufus</AppLink>（dd
      模式）或
      <AppLink to="https://etcher.balena.io/" target="_blank">
        balenaetcher
      </AppLink>
      工具制作 {{ fileType }}。
    </p>

    <app-h2>帮助与支持</app-h2>
    <p>如果您在安装或使用安同 OS 时遇到问题，请于<AppLink to="contact">社区聊天群组</AppLink>与我们联系。</p>
  </div>
</template>

<style scoped>
.el-button-primary {
  --el-button-bg-color: var(--secondary);
  --el-button-hover-bg-color: var(--primary);
  --el-button-text-color: white;
  --el-button-hover-text-color: white;
  border: 0;
}
</style>
