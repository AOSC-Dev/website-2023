<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.requirements');
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
useHighlightWatch(switchHash);
const aoscOsRequirementsRef = useTemplateRef('aoscOsRequirementsList');
</script>

<template>
  <div>
    <category-second id="aoscOsRequirementsTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>{{ textValue.p1 }}</p>
      <div ref="aoscOsRequirementsList">
        <app-table-ordinary
          :table-value="textValue.table1"
          my-key="aosc-os-require-1"
      /></div>
    </div>

    <category-second id="support" :title="textValue.title2" />
    <div class="px-16 pt-4 pb-4">
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`aosc-os-requirem-1-li-${index}`"
          ><template v-if="index === 0"
            >{{ item
            }}<link-standard
              :link="useHIndex(localLink.aoscIsaTableTitle, 0)" /> </template
          ><template v-else>{{ item }}</template></li
        >
      </ul>
    </div>
    <br />

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
