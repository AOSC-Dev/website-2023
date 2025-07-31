<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.wsl.relnote');
useHead({ title: textValue.title1 });
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>{{ textValue.p1 }}</p>
    </div>

    <category-second id="features" :title="textValue.title2" />
    <div class="p-6">
      <p>{{ textValue.p2 }}</p>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
