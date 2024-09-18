<script setup>
import {
  onMounted,
  reactive,
  ref,
  watch
} from 'vue';
import CategorySecond from '/src/components/CategorySecond.vue';
import { useRoute } from 'vue-router';
import highlightElement from '../../../utils/animation';
import AppSupport from '../../../components/AppSupport.vue';

const docList = reactive([
  {
    title: '星霞 OS 系统需求配置表',
    path: '/afterglow/requirements',
    hash: '#afterLowRequirementsTitle'
  }
]);

const route = useRoute();

onMounted(() => {
  switch (route.hash) {
    case '#afterLowIsaTitle':
      highlightElement(afterLowIsaList);
      break;
  }
});

const afterLowIsaList = ref();
</script>

<template>
  <div class="pl-[1px]">
    <category-second
      title="星霞 OS 架构支持规格表"
      id="afterLowIsaTitle" />
    <div class="p-6">
      <p>
        星霞 OS
        支持多种处理器架构，本表介绍支持的各类处理器架构及相应的微架构指令集扩展支持、软件包架构名及编译器目标名等信息。
      </p>
      <table
        class="mt-6"
        ref="afterLowIsaList"
        id="afterLowIsaList">
        <caption
          class="text-[12pt] font-semibold">
          星霞 OS 支持处理器架构一览表
        </caption>
        <tr>
          <th>处理器架构名</th>
          <th>微架构指令集扩展支持要求</th>
          <th>软件包架构名</th>
          <th>编译器目标名</th>
        </tr>
        <tr>
          <td>Alpha</td>
          <td>无</td>
          <td><code>alpha</code></td>
          <td
            ><code>alpha-aosc-linux-gnu</code></td
          >
        </tr>
        <tr>
          <td>ARMv4</td>
          <td>无</td>
          <td><code>armv4</code></td>
          <td
            ><code
              >arm-aosc-linux-gnueabi</code
            ></td
          >
        </tr>
        <tr>
          <td>ARMv6（硬浮点）</td>
          <td>Thumb-2, NEON</td>
          <td><code>armv6hf</code></td>
          <td
            ><code
              >arm-aosc-linux-gnueabihf</code
            ></td
          >
        </tr>
        <tr>
          <td>ARMv7（硬浮点）</td>
          <td>Thumb-2, NEON</td>
          <td><code>armv7hf</code></td>
          <td
            ><code
              >arm-aosc-linux-gnueabihf</code
            ></td
          >
        </tr>
        <tr>
          <td>基于 MIPS 的龙芯二号处理器*</td>
          <td>LoongMMI</td>
          <td><code>loongson2f</code></td>
          <td
            ><code
              >mips64el-aosc-linux-gnuabi64</code
            ></td
          >
        </tr>
        <tr>
          <td>Intel 80486 或更新</td>
          <td>无</td>
          <td><code>i486</code></td>
          <td
            ><code>i486-aosc-linux-gnu</code></td
          >
        </tr>
        <tr>
          <td>Motorola 68000 系列处理器**</td>
          <td>无</td>
          <td><code>m68k</code></td>
          <td
            ><code>m68k-aosc-linux-gnu</code></td
          >
        </tr>
        <tr>
          <td>PowerPC（32 位，大端序）</td>
          <td>无</td>
          <td><code>powerpc</code></td>
          <td
            ><code
              >powerpc-aosc-linux-gnu</code
            ></td
          >
        </tr>
        <tr>
          <td>PowerPC（64 位，大端序）</td>
          <td>AltiVec</td>
          <td><code>ppc64</code></td>
          <td
            ><code
              >powerpc64-aosc-linux-gnu</code
            ></td
          >
        </tr>
        <tr>
          <td>SPARC（64 位）</td>
          <td>SPARC V9, VIS 1.0</td>
          <td><code>sparc64</code></td>
          <td
            ><code
              >sparc64-aosc-linux-gnu</code
            ></td
          >
        </tr>
      </table>
    </div>
    <div class="p-6">
      <p>
        *: 该架构移植仅支持龙芯 2F 处理器，不支持
        2E 及之前的处理器型号
      </p>
      <p>
        **: 该架构移植仅支持 68020
        及更新的，带有内存管理单元 (MMU)
        的处理器型号 </p
      ><br />
    </div>
    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
