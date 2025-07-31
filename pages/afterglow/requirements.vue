<script setup>
const { tm } = useI18n();
const textValue = tm('afterglow.requirements');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.title1 });

const docList = [useHIndex(localLink.afterlowIsaTitle, 0)];

const route = useRoute();

const switchHash = () => {
  switch (route.hash) {
    case '#afterlowRequirementsTitle':
      highlightElement(afterlowRequirementsList);
      break;
  }
};
useHighlightWatch(switchHash);

const afterlowRequirementsList = ref();
</script>

<template>
  <div>
    <category-second id="afterlowRequirementsTitle" :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
      <table ref="afterlowRequirementsList" class="mt-6">
        <caption class="text-[12pt] font-semibold">
          {{ textValue.table1.caption }}
        </caption>
        <thead>
          <tr>
            <th
              v-for="(item, index) in textValue.table1.th"
              :key="`afterlow-requirements-1-th-${index}`">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item1, index1) in textValue.table1.tr"
            :key="`afterlow-requirements-1-tr-${index1}`">
            <td
              v-for="(item2, index2) in item1"
              :key="`afterlow-requirements-1-td-${index1}-${index2}`">
              {{ item2 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <category-second :title="textValue.title2" />
    <div class="px-16 pt-4 pb-4">
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`afterlow-requirements-1-li-${index}`">
          <div v-if="index === 0">
            <span>{{ item }}</span>
            <link-standard :link="useHIndex(localLink.afterlowIsaTitle, 0)" />
          </div>
          <div v-else>{{ item }}</div>
        </li>
      </ul>
    </div>
    <br />

    <AppSupport :navigation-list="docList" />
  </div>
</template>

<style scoped></style>
./components/Header.vue
