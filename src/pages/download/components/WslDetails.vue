<script setup>
import { ElContainer, ElOption, ElSelect } from 'element-plus';
import AppH2 from '../../../components/AppH2.vue';
import AppLink from '../../../components/AppLink.vue';
import { ref } from 'vue';

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
    <app-h2>下载 WSL 版安同 OS</app-h2>
    <ms-store-badge
      class="h-[48px] w-fit [&::part(img)]:h-[48px]"
      productid="9NMDF21NV65Z"
      window-mode="popup"
      theme="dark"
      animation="on">
    </ms-store-badge>
    <p
      >为满足不同用户的喜爱和需要，我们还提供了 WSL 现代发行版
      <AppLink to="https://learn.microsoft.com/windows/wsl/build-custom-distro"
        >(Modern Distribution)
      </AppLink>
      分发所需的 .wsl 文件一键包：
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
        :to="`${selected_source_url}${latestTarball(recipeWsl.tarballs, 'amd64').path}`"
        target="_blank"
        class="flex h-[32px] items-center border-r bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        下载 x86-64
      </AppLink>
      <AppLink
        :to="`${selected_source_url}${latestTarball(recipeWsl.tarballs, 'arm64').path}`"
        target="_blank"
        class="flex h-[32px] items-center bg-[var(--secondary)] px-[15px] text-nowrap text-white hover:bg-[var(--primary)] hover:no-underline">
        下载 AArch64
      </AppLink>
    </el-container>

    <div class="col-span-2"
      >如无法使用上述两种方式，也可手动下载 AppX 侧载包部署：
    </div>

    <AppLink
      to="https://github.com/AOSC-Dev/AOSCOSLauncher/releases/latest"
      target="_blank"
      class="el-button max-w-min hover:no-underline">
      GitHub Releases（无须使用 Microsoft Store）
    </AppLink>

    <AppLink :to="`/aosc-os/wsl/relnote`">查阅最新发行注记...</AppLink>

    <app-h2>系统需求</app-h2>
    <p
      >WSL 版安同 OS (AOSC OS on WSL) 可用于运行 Windows
      的设备，其基本系统需求与安同 OS 类似，但由于其依赖 WSL 及 WSLg
      等技术架构运行，因此除对设备处理器、显卡、存储和互联网连接外，对 Windows
      系统组件版本等均有一定的需求。</p
    >
    <p
      >欲知具体需求详情，请参阅
      <AppLink to="/aosc-os/wsl/requirements"
        >WSL 版安同 OS 系统配置需求表
      </AppLink>
      。
    </p>

    <app-h2>帮助与支持</app-h2>
    <p>
      如果您在安装或使用安同 OS 时遇到问题，请于
      <AppLink to="contact">社区聊天群组</AppLink>
      与我们联系。
    </p>
  </div>
</template>

<style scoped></style>
