<script setup lang="js">
const props = defineProps({
  lis: {
    type: Array,
    required: true
  },
  class: {
    type: String,
    default: ''
  },
  myKey: {
    type: String,
    required: true
  },
  liClass: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <ul :class="props.class">
    <li
      v-for="(item, index) in lis"
      :key="`${myKey}-li-${index}`"
      :class="Array.isArray(item) ? 'app-li-none' : liClass">
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
<style lang="scss">
li.app-li-none {
  list-style-type: none;
}
</style>
