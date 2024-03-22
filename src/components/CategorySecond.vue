<script setup name="Header">
const props = defineProps(['title', 'rightText', 'rightUrl'])
</script>
<template>
  <div class="flex justify-between items-end bg-secondary text-white py-[5px] px-[10px] m-p select-none">
    <span>
      {{ props.title }}
    </span>
    <router-link :to="props.rightUrl" v-if="props.rightText" class="text-xs">
      {{ props.rightText }}
    </router-link>
  </div>
</template>

<style scoped></style>
