<script setup>
const docList = reactive([
  {
    title: '安同 OS 系统需求配置表',
    path: '/aosc-os/requirements',
    hash: '#aoscOsRequirementsTitle'
  }
  /* TODO
  {
    title: '舒心畅玩：设备选购建议',
    path: '/aosc-os/better-devices'
  } */
]);

const route = useRoute();

onMounted(() => {
  switch (route.hash) {
    case '#aoscOsIsaTableTitle': {
      highlightElement(aoscOsIsaList1);
      highlightElement(aoscOsIsaList2);
      break;
    }
    case '#aoscOsIsaTableTitle1':
      highlightElement(aoscOsIsaList1);
      break;
    case '#aoscOsIsaTableTitle2':
      highlightElement(aoscOsIsaList2);
      break;
  }
});

const aoscOsIsaList1 = ref();
const aoscOsIsaList2 = ref();
</script>

<template>
  <div>
    <category-second title="安同 OS 架构支持规格表" />
    <div class="p-6">
      <p>
        安同 OS
        支持多种处理器架构，本表介绍支持的各类处理器架构及相应的微架构指令集扩展支持、软件包架构名及编译器目标名等信息。本表分为一级架构、二级架构和实验性架构三组，对应不同支持和维护水平。 </p
      ><br />
    </div>
    <div id="aoscOsIsaTableTitle">
      <category-second title="一级架构" id="aoscOsIsaTableTitle1" />
    </div>
    <div class="p-6">
      <p>
        一级架构包含安同 OS
        支持水平最高的一类处理器架构，支持的软件及特性最为完整，更新也最为及时。此类架构在开发者间用户较多，有条件进行较为完整的使用测试。
      </p>
      <table class="mt-6" ref="aoscOsIsaList1">
        <caption class="text-[12pt] font-semibold">
          安同 OS 支持处理器架构（一级架构）表
        </caption>
        <thead>
          <tr>
            <th>处理器架构名</th>
            <th>微架构指令集扩展支持要求</th>
            <th>软件包架构名</th>
            <th>编译器目标名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x86-64</td>
            <td>SSE2*</td>
            <td><code>amd64</code></td>
            <td><code>x86_64-aosc-linux-gnu</code></td>
          </tr>
          <tr>
            <td>AArch64</td>
            <td>ARMv8.0, NEON</td>
            <td><code>arm64</code></td>
            <td><code>aarch64-aosc-linux-gnu</code></td>
          </tr>
          <tr>
            <td>龙架构 (LoongArch)</td>
            <td>LSX</td>
            <td><code>loongarch64</code></td>
            <td><code>loongarch64-aosc-linux-gnu</code></td>
          </tr>
        </tbody> </table
      ><br />
      <p>
        *: 一部分软件（如 Blender）可能需要更高级的微架构指令集支持，如 AVX2 </p
      ><br />
    </div>

    <category-second title="二级架构" id="aoscOsIsaTableTitle2" />
    <div class="p-6">
      <p>
        二级架构包含安同 OS
        支持较为完整的一类处理器架构，支持的软件和特性可能受限，更新也时有延误。此类架构在开发者间用户可能较少，且由于使用机会较少等各类因素，使用测试可能不完整。
      </p>
      <table class="mt-6" ref="aoscOsIsaList2">
        <caption class="text-[12pt] font-semibold">
          安同 OS 支持处理器架构（二级架构）表
        </caption>
        <thead>
          <tr>
            <th>处理器架构名</th>
            <th>微架构指令集扩展支持要求</th>
            <th>软件包架构名</th>
            <th>编译器目标名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>基于 MIPS 的龙芯三号*</td>
            <td>无</td>
            <td><code>loongson3</code></td>
            <td><code>mips64el-aosc-linux-gnuabi64</code></td>
          </tr>
          <tr>
            <td>IBM POWER（小端序）</td>
            <td>AltiVec, VMW, VSX</td>
            <td><code>ppc64el</code></td>
            <td><code>powerpc64le-aosc-linux-gnu</code></td>
          </tr>
          <tr>
            <td>RISC-V（64 位）</td>
            <td>G, C</td>
            <td><code>riscv64</code></td>
            <td><code>riscv64-aosc-linux-gnu</code></td>
          </tr>
        </tbody> </table
      ><br />
      <p>
        *: 这一系列处理器包括龙芯 3A1000, 3A1500-I, 3A2000(C), 3A3000, 3A4000,
        3B1000, 3B1500, 3B2000, 3B3000, 3B4000 等型号；型号为 5000
        或更高的均为基于龙架构 (LoongArch) 的处理器
      </p>
    </div>
    <Support :navigation-list="docList" />
    <!-- <category-second title="实验性架构" id="tier3" />
    <div class="p-6">
      <p>
        实验性架构包含初步进行移植的架构，对软件、特性和更新支持等均无保障。
      </p><br />
      <table>
        <tr>
          <th>处理器架构名</th>
          <th>微架构指令集扩展支持要求</th>
          <th>软件包架构名</th>
          <th>编译器目标名</th>
        </tr>
        <tr>
          <td>MIPS64 Release 6</td>
          <td>MSA</td>
          <td><code>mips64r6el</code></td>
          <td><code>mipsisa64r6el-aosc-linux-gnuabi64</code></td>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<style scoped></style>
./components/Header.vue
