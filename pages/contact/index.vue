<script setup>
const { tm } = useI18n();
const textValue = tm('contact.index');
const linkValue = tm('allUniversalLink');
const localLink = linkValue.local;

const mainRef = useTemplateRef('main');
const switchHash = () => {
  switch (route.hash) {
    case '#main':
      highlightElement(mainRef);
      break;
  }
};
const route = useRoute();
useHighlightWatch(switchHash);

const mainGroup = textValue.mainGroup;
const mainGroupLinks = [
  linkValue.telegramMain,
  linkValue.discord,
  linkValue.ircMain,
  linkValue.MatrixMain
];
const antiqueComputer = mainGroup.slice(2);

const antiqueComputerLinks = [
  linkValue.telegramRetro,
  linkValue.discord,
  linkValue.ircRetro,
  linkValue.MatrixRetro
];

const waterGroup = antiqueComputer;

const waterGroupLinks = [
  linkValue.telegramTuosai,
  linkValue.discord,
  linkValue.ircTuosai,
  linkValue.MatrixTuosai
];
</script>

<template>
  <div>
    <category-second :title="textValue.title1" />
    <div class="p-6">
      <p>
        {{ textValue.p1 }}
      </p>
    </div>

    <category-second :title="textValue.title2" />
    <div class="p-6">
      <p>{{ textValue.p2 }}</p>
    </div>

    <category-second id="main" :title="textValue.title3" />
    <div ref="main" class="p-6">
      <p>{{ textValue.p3 }}</p>
      <ul class="mt-2 list-disc pl-10">
        <li v-for="(item, index) in mainGroup" :key="index">
          {{ item }}
          <link-standard v-if="index > 1" :link="mainGroupLinks[index - 2]" />
        </li>
      </ul>
    </div>

    <category-second id="retro" :title="textValue.title4" />
    <div class="p-6">
      <p>{{ textValue.p4 }}</p>
      <ul class="mt-2 list-disc pl-10">
        <li v-for="(item, index) in antiqueComputer" :key="index">
          {{ item }}
          <link-standard :link="antiqueComputerLinks[index]" />
        </li>
      </ul>
    </div>

    <category-second id="offtopic" :title="textValue.title5" />
    <div class="p-6">
      <p>
        {{ textValue.p5 }}
        <link-standard :link="localLink.guidelines" />
      </p>
      <ul class="mt-2 list-disc pl-10">
        <li v-for="(item, index) in waterGroup" :key="index">
          {{ item }}
          <link-standard :link="waterGroupLinks[index]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
