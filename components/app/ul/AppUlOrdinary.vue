<script setup lang="js">
const props = defineProps({
  lis: {
    type: Array,
    required: true
  },
  class: {
    type: String,
    default: 'list-disc'
  },
  myKey: {
    type: String,
    required: true
  },
  liClass: {
    type: String,
    default: 'list-disc'
  }
});
</script>

<template>
  <ul :class="props.class">
    <li
      v-for="(item, index) in lis"
      :key="`${myKey}-li-${index}`"
      :class="Array.isArray(item) ? 'list-none' : liClass">
      <span v-if="typeof item === 'string'">{{ item }}</span>
      <span v-else-if="Array.isArray(item)">
        <app-ul-ordinary
          :lis="item"
          :li-class="liClass"
          :my-key="`${myKey}-${index}`"
          class="py-[0.5rem] pl-[2.5rem]" />
      </span>
    </li>
  </ul>
</template>
