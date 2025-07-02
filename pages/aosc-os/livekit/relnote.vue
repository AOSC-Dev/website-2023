<script setup>
const { tm } = useI18n();
const textValue = tm('aosc-os.livekit.relnote');
</script>

<template>
  <div>
    <CategorySecond :title="textValue.title1" />
    <div class="p-6">
      <p class="mb-[1.5rem]"> {{ textValue.p1 }} </p>
    </div>

    <CategorySecond :title="textValue.title2" />
    <div class="p-6">
      <p class="mb-[1.5rem]">{{ textValue.p2 }}</p>
      <div class="pt-2 pb-4 px-16">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul1.li"
            :key="`aosc-os-livekit-relnote-1-li-${index}`">
            <template v-if="index !== 4">{{ item }}</template>
            <template v-else
              >{{ item[0]
              }}<AppLink
                to="https://github.com/AOSC-Dev/dkcli">dkcli</AppLink>{{ item[1] }}</template
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
