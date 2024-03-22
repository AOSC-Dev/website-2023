<script setup name="Header">
const props = defineProps(["title", "rightText", "rightUrl"]);
</script>
<template>
  <div
    class="flex justify-between items-end bg-secondary text-white py-[5px] px-[10px] m-p select-none"
  >
    <span>
      {{ props.title }}
    </span>
    <span v-if="props.rightText" class="text-xs">
      <span v-if="props.rightUrl == undefined">
        {{ props.rightText }}
      </span>
      <router-link :to="props.rightUrl" v-else>
        {{ props.rightText }}
      </router-link>
    </span>
  </div>
</template>

<style scoped></style>
