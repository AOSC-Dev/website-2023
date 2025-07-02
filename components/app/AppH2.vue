<script setup></script>
<template>
  <h2 class="font-semibold text-[1.2em] mb-2 features">
    <slot/>
  </h2>
</template>

<style scoped>
[class*='features']:not(:first-of-type) {
  margin-top: 1.5rem;
}
</style>
