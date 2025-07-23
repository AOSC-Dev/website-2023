<script setup>
const { tm } = useI18n();
const textValue = tm('about');
useHead({ title: textValue.title1 });
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="heti">
      <p>{{ textValue.p1 }}</p>
      <p>{{ textValue.p2 }}</p>
      <p>{{ textValue.p3 }}</p>
      <p>{{ textValue.p4 }}</p>
    </div>

    <category-second :title="textValue.title2" />
    <div class="heti">
      <p>{{ textValue.p5 }}</p>
      <h3 class="mt-[1.5rem]">{{ textValue.subheading1 }}</h3>
      <div>
        <p>{{ textValue.p6 }}</p>
        <p>{{ textValue.p7 }}</p>
      </div>
      <h3>{{ textValue.subheading2 }}</h3>
      <div>
        <p>{{ textValue.p8 }}</p>
      </div>
      <h3>{{ textValue.subheading3 }}</h3>
      <div>
        <p>{{ textValue.p9 }}</p>
      </div>
      <h3>{{ textValue.subheading4 }}</h3>
      <div>
        <p>{{ textValue.p10 }}</p>
      </div>
      <h3>{{ textValue.subheading5 }}</h3>
      <div>
        <p>{{ textValue.p11 }}</p>
      </div>
      <h3>{{ textValue.subheading6 }}</h3>
      <div>
        <p>{{ textValue.p12 }}</p>
      </div>
    </div>

    <category-second :title="textValue.title3" />
    <div class="heti">
      <p>{{ textValue.p13 }}</p>
      <p>{{ textValue.p14 }}</p>
      <p>{{ textValue.p15 }}</p>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
