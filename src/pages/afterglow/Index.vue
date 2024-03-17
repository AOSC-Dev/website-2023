<script setup>
import { reactive } from "vue";
import CategorySecond from "/src/components/CategorySecond.vue";
import H2 from "/src/components/H2.vue";

const urlList = reactive([
  {
    title: '下载系统',
    url: '/download'
  }, {
    title: '系统特性',
    url: '/'
  }, {
    title: '发行说明',
    url: '/'
  }, {
    title: '系统配置需求',
    url: '/'
  }, {
    title: '支持文档',
    url: '/'
  }
])

const docList = reactive([
  {
    title: '安装指南',
    url: '/'
  }, {
    title: '系统需求与架构支持指南',
    url: '/'
  }, {
    title: '其他支持文档',
    url: '/'
  }
])
</script>

<template>
  <div class="pl-[1px]">
    <category-second title="Afterglow" />
    <div class="p-6">
      <p>
        Afterglow（中译：星霞 OS）基于 AOSC OS 开发，通过精简特性、配置调优和软件精选等手段，致力于为各类老旧设备提供持续软件和技术更新，通过持续维护良好体验和性能让老旧设备焕发新生、让用户们“重拾旧爱”。
      </p>
      <br />
      <div>
        <span v-for="(item, index) in urlList" :key="item.title">
          <router-link :to="item.url" class="text-link">{{ item.title }}</router-link>
          <span class="mx-1" v-if="index < urlList.length - 1">|</span>
        </span>
      </div>
      <img src="/assets/afterglow/afterglow.zh-cn.jpg" class="w-full h-auto mt-2" alt="">
    </div>

    <category-second title="系统特性" />
    <div class="p-6">
      <H2>因地制宜</H2>
      <p>Afterglow 支持已经年近三旬的设备，如搭载 486 处理器的 PC 机和 m68k 处理器麦金塔 (Macintosh) 电脑，也支持较新的设备，如来自 2010 年前后搭载的 Intel 凌动 (Atom) 上网本或 PowerPC 处理器的 Mac。通过配置调优和特性分级等手段，Afterglow 可确保各类老旧设备上良好的使用体验。</p><br />
      <H2>持续维护</H2>
      <p>让老旧设备继续发光发热的基本前提就是持续且完整的软件支持，Afterglow 提供持续的特性更新和安全漏洞修复，让您放心地在各类场景继续使用老旧设备。</p><br />
      <H2>面向未来</H2>
      <p>我们计划在未来数年继续维护 Afterglow 并周期性地发布更新包，让您安心地继续享用和把玩曾经给您带来过快乐和承载早年记忆的电脑。</p><br />
    </div>

    <category-second title="支持文档" />
    <div class="pt-4 pb-[60px] px-16">
      <ul class="list-disc">
        <li v-for="item in docList" :key="item.title">
          <router-link class="text-link" :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped></style>
./components/Header.vue
