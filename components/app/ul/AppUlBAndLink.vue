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
  }
});
</script>
<template>
  <ul :class="props.class">
    <li v-for="(item, index) in lis" :key="`${myKey}-li-${index}`"
      ><template v-if="Array.isArray(item)"
        ><app-ul-b-and-link
          :lis="item"
          :my-key="`${myKey}-${index}`"
          class="pl-[2.5rem] py-[0.5rem]" /></template
      ><template v-else
        ><b>{{ item.b }}</b
        ><app-link :to="item.link.url">{{
          item.link.title
        }}</app-link></template
      ></li
    >
  </ul>
</template>
