<script setup>
const { tm } = useI18n();
const textValue = tm('afterglow.relnote');
</script>

<template>
  <div>
    <CategorySecond :title="textValue.title1" />
    <div class="p-6">
      <p class="mb-[1.5rem]"> {{ textValue.p1 }} </p>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
