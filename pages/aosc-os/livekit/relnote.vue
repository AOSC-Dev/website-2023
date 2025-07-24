<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.livekit.relnote');
useHead({ title: textValue.title1 });
</script>

<template>
  <div>
    <CategorySecond :title="textValue.title1" />
    <div class="p-6">
      <p class="mb-[1.5rem]">{{ textValue.p1 }}</p>
    </div>

    <CategorySecond :title="textValue.title2" />
    <div class="p-6">
      <p class="mb-[1.5rem]">{{ textValue.p2 }}</p>
      <div class="px-16 pt-2 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul1.li"
            :key="`aosc-os-livekit-relnote-1-li-${index}`">
            <span v-if="index !== 4">{{ item }}</span>
            <span v-else>
              <span>{{ item[0] }}</span>
              <AppLink to="https://github.com/AOSC-Dev/dkcli">dkcli</AppLink>
              <span>{{ item[1] }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
