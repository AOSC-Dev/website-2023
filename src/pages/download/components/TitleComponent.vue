<script setup>
import AccordionNavigation from '../../../components/AccordionNavigation.vue';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  navigationList: { type: Array }
});
</script>

<template>
  <div class="flex flex-col">
    <h2 :class="'leading-none pb-2 ' + (navigationList ? 'text-[32pt]' : 'text-[24pt]')">{{ title }}</h2>
    <h3 class="text-[14pt]">{{ description }}</h3>
    <div class="text-[11pt]">
      <AccordionNavigation
        v-if="navigationList"
        :navigation-list="navigationList"
        link-class=""
        >·</AccordionNavigation
      >
    </div>
  </div>
</template>

<style scoped></style>
