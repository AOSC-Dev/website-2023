<script setup>
const { tm, locale } = useI18n();
const textValue = tm('aosc-os.wsl.requirements');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const docList = [useHIndex(localLink.aoscIsaTableTitle, 0)];

const route = useRoute();
const switchHash = () => {
  switch (route.hash) {
    case '#aoscOsRequirementsTitle':
      highlightElement(aoscOsRequirementsRef);
      break;
  }
};

const aoscOsRequirementsRef = useTemplateRef('aoscOsRequirementsList');
const highBrightnessControllerStore = useHighBrightnessControllerStore();
watch(
  () => highBrightnessControllerStore.obj[route.path.replace(/\/+$/, '')],
  () => {
    switchHash();
  },
  {
    flush: 'post'
  }
);

onMounted(() => {
  switchHash();
});
</script>

<template>
  <div>
    <category-second id="aoscOsRequirementsTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <table class="mt-6 mb-1.5rem" ref="aoscOsRequirementsList">
        <caption class="text-[12pt] font-semibold">
          {{ textValue.table1.caption }}
        </caption>
        <thead>
          <tr
            ><th
              v-for="(item, index) in textValue.table1.th"
              :key="`aosc-os-wsl-require-1-th-${index}`"
              >{{ item }}</th
            >
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item1, index1) in textValue.table1.tr"
            :key="`aosc-os-wsl-require-1-tr-${index1}`">
            <td
              v-for="(item2, index2) in item1"
              :key="`aosc-os-wsl-require-1-td-${index1}-${index2}`"
              >{{ item2 }}</td
            >
          </tr>
        </tbody>
      </table>
      <table class="mb-[1.5rem]">
        <caption class="text-[12pt] font-semibold">
          {{ textValue.table2.caption }}
        </caption>
        <thead>
          <tr>
            <th
              v-for="(item, index) in textValue.table2.th"
              :key="`aosc-os-wsl-require-2-th-${index}`"
              >{{ item }}</th
            >
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item1, index1) in textValue.table1.tr"
            :key="`aosc-os-wsl-require-2-tr-${index1}`">
            <td
              v-for="(item2, index2) in item1"
              :key="`aosc-os-wsl-require-2-td-${index1}-${index2}`"
              >{{ item2 }}</td
            >
          </tr>
        </tbody>
      </table>
    </div>

    <category-second id="support" :title="textValue.title2" />
    <div class="pt-4 pb-4 px-16">
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`aosc-os-wsl-requirem-1-li-${index}`"
          >{{ item }}</li
        >
      </ul>
    </div>

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
