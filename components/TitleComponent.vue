<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  navigationList: { type: Array, default: () => [] },
  smallTitle: { type: Boolean, default: false }
});
</script>

<template>
  <div class="flex flex-col">
    <h2
      :class="
        'font-[450] leading-[0.8] pb-2 ' +
        (smallTitle ? 'text-[24pt]' : 'text-[32pt]')
      "
      >{{ title }}</h2
    >
    <h3 class="font-[450] text-[14pt]">{{ description }}</h3>
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
