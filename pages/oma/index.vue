<script setup>
const { tm } = useI18n();
const textValue = tm('oma.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;
useHead({ title: textValue.title1 });

const navigationList = [
  linkValue.omaSourceGithub,
  useHIndex(useTIndex(localLink.download, 1), 2)
];
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
        <link-standard :link="linkValue.dpkgWiki" />
        {{ textValue.p2 }}
      </p>
      <div class="px-16 pt-4 pb-4">
        <ul class="list-disc">
          <li
            v-for="(item, index) in textValue.ul1.li"
            :key="`oma-index-1-li-${index}`">
            <b>{{ item[0] }}</b>
            {{ item[1] }}
          </li>
        </ul>
      </div>
      <div>
        <AccordionNavigation :navigation-list="navigationList" />
      </div>
      <div ref="bgImg" class="h-[685px]">
        <img src="/oma/oma.png" class="mt-2 h-auto w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
