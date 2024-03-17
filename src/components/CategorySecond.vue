<script setup name="Header">
const props = defineProps(['title'])
</script>
<template>
  <div class="bg-secondary text-white py-[5px] px-[10px] m-p select-none">
    {{ props.title }}
  </div>
</template>

<style scoped></style>
