<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.isa');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.title1 });

const docList = [useHIndex(useTIndex(localLink.aoscRequirements, 1), 0)];

const route = useRoute();
const switchHash = () => {
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
};
useHighlightWatch(switchHash);

const aoscOsIsaList1 = ref();
const aoscOsIsaList2 = ref();
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>{{ textValue.p1 }}</p>
    </div>
    <div id="aoscOsIsaTableTitle">
      <category-second id="aoscOsIsaTableTitle1" :title="textValue.title2" />
    </div>
    <div class="p-6">
      <p>{{ textValue.p2 }}</p>
      <div ref="aoscOsIsaList1">
        <app-table-isa my-key="aosc-os-isa-1" :table-value="textValue.table1" />
      </div>
      <p>{{ textValue.p3 }}</p>
    </div>

    <category-second id="aoscOsIsaTableTitle2" :title="textValue.title3" />
    <div class="p-6">
      <p>{{ textValue.p4 }}</p>
      <div ref="aoscOsIsaList2">
        <app-table-isa my-key="aosc-os-isa-2" :table-value="textValue.table2" />
      </div>
      <p>{{ textValue.p5 }}</p>
    </div>
    <AppSupport :navigation-list="docList" />
    <!-- <category-second title="实验性架构" id="tier3" />
    <div class="p-6">
      <p>
        实验性架构包含初步进行移植的架构，对软件、特性和更新支持等均无保障。
      </p>
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

<style scoped>
p:last-of-type:not(:first-of-type) {
  margin-top: 1rem;
}
</style>
./components/Header.vue
