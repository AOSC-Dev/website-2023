<script setup></script>
<template>
  <h2 class="features mb-2 text-[1.2em] font-semibold">
    <slot />
  </h2>
</template>

<style scoped>
[class*='features']:not(:first-of-type) {
  margin-top: 1.5rem;
}
</style>
