<script setup lang="js">
const props = defineProps({
  tableValue: {
    type: Object,
    required: true
  },
  class: {
    type: String,
    default: 'mt-6'
  },
  myKey: {
    type: String,
    required: true
  }
});
</script>
<template>
  <table :class="props.class">
    <caption class="text-[12pt] font-semibold">
      {{ tableValue.caption }}
    </caption>
    <thead>
      <tr>
        <th
          v-for="(item, index) in tableValue.th"
          :key="`${myKey}-th-${index}`">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item1, index1) in tableValue.tr"
        :key="`${myKey}-tr-${index1}`">
        <td
          v-for="(item2, index2) in item1"
          :key="`${myKey}-td-${index1}-${index2}`">
          {{ item2 }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
