<script setup>
const { tm } = useI18n();
const textValue = tm('about');
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p> {{ textValue.p1 }} </p>
      <p> {{ textValue.p2 }} </p>
      <p> {{ textValue.p3 }} </p>
      <p> {{ textValue.p4 }} </p>
    </div>

    <category-second :title="textValue.title2" />
    <div class="p-6">
      <p>{{ textValue.p5 }} </p
      ><app-h2 class="mt-[1.5rem]">{{ textValue.subheading1 }}</app-h2>
      <div>
        <p>{{ textValue.p6 }} </p>
        <p>{{ textValue.p7 }} </p>
      </div>
      <app-h2>{{ textValue.subheading2 }}</app-h2>
      <div>
        <p>{{ textValue.p8 }}</p>
      </div>
      <app-h2>{{ textValue.subheading3 }}</app-h2>
      <div>
        <p>{{ textValue.p9 }} </p>
      </div>
      <app-h2>{{ textValue.subheading4 }}</app-h2>
      <div>
        <p>{{ textValue.p10 }}</p>
      </div>
      <app-h2>{{ textValue.subheading5 }}</app-h2>
      <div>
        <p>{{ textValue.p11 }}</p>
      </div>
      <app-h2>{{ textValue.subheading6 }}</app-h2>
      <div>
        <p>{{ textValue.p12 }}</p>
      </div>
    </div>

    <category-second :title="textValue.title3" />
    <div class="p-6">
      <p>{{ textValue.p13 }}</p>
      <p>{{ textValue.p14 }}</p>
      <p>{{ textValue.p15 }}</p>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
