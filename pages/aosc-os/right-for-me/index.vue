<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.right-for-me.index');
</script>

<template>
  <div>
    <category-second id="aoscOsRequirementsTitle" :title="textValue.title1" />
    <div class="p-6">
      <p class="pb-[1rem]">
        {{ textValue.p1 }}
      </p>
      <p>
        {{ textValue.p2 }}
      </p>
    </div>
    <category-second id="design" :title="textValue.title2" />
    <div class="p-6">
      <p>{{ textValue.p3 }}</p>
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul1.li"
          :key="`aosc-os-right-for-me-index-1-li-${index}`"
          >{{ item }}</li
        >
      </ul>
    </div>
    <category-second id="pros" :title="textValue.title3" />
    <div class="p-6">
      <p>{{ textValue.p4 }}</p>
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul2.li"
          :key="`aosc-os-right-for-me-index-2-li-${index}`"
          >{{ item }}</li
        >
      </ul>
    </div>
    <category-second id="cons" :title="textValue.title4" />
    <div class="p-6">
      <p>{{ textValue.p5 }}</p>
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul3.li"
          :key="`aosc-os-right-for-me-index-3-li-${index}`"
          >{{ item }}</li
        >
      </ul>
    </div>
    <category-second id="recommended-usage" :title="textValue.title5" />
    <div class="p-6">
      <p>{{ textValue.p6 }}</p>
      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul4.li"
          :key="`aosc-os-right-for-me-index-4-li-${index}`"
          >{{ item }}</li
        >
      </ul>
    </div>
    <category-second id="discouraged-usage" :title="textValue.title6" />
    <div class="p-6">
      <p>{{ textValue.p7 }}</p>

      <ul class="list-disc">
        <li
          v-for="(item, index) in textValue.ul5.li"
          :key="`aosc-os-right-for-me-index-5-li-${index}`"
          >{{ item }}</li
        >
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding: 1rem 4rem 0.5rem 4rem;
}
</style>
./components/Header.vue
