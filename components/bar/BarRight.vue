<script setup>
const { tm, locale } = useI18n();
const textValue = tm('BarRight');
const linkValue = tm('allUniversalLink');

const localLink = linkValue.local;
const distroList = [
  {
    img: '/distros/aosc-os.svg',
    links: [useHIndex(localLink.download, 0), useHIndex(localLink.aoscRelnote,0)],
    description: textValue.description1,
    title: textValue.title3
  },
  {
    img: '/distros/afterglow.svg',
    links: [useHIndex(localLink.download, 1), localLink.afterglowRelnote],
    description: textValue.description2,
    title: textValue.title4
  }
];

const commonLinkList = [
  localLink.contactMain,
  useTIndex(localLink.paste, 1),
  useTIndex(localLink.events, 1),
  useTIndex(localLink.internship, 1),
  linkValue.systemSecurityIssuse,
  linkValue.howToMirror,
  useTIndex(localLink.crowdsourcing, 1)
];
</script>

<template>
  <div class="bg-right-bar-bg w-[37.5%] flex flex-col">
    <AppLink to="/aosc-os/right-for-me">
      <img
        src="/jumbotron/minor1.svg"
        class="w-full imgScale1 cursor-pointer" />
    </AppLink>
    <AppLink to="https://bbs.aosc.io/">
      <img
        src="/jumbotron/minor2.svg"
        class="w-full imgScale1 cursor-pointer" />
    </AppLink>
    <div class="flex flex-col grow">
      <CategorySecond
        :title="textValue.title1"
        class="border-l border-solid border-content-main-bg" />
      <article
        class="pt-[1em] pb-[0.5em] pl-[1em] border-l theme-border-secondary">
        <div
          v-for="(item, index) in distroList"
          :key="`BarRight-1-div-${index}`"
          class="flex items-center pb-[15px]">
          <div class="basis-[50px] mr-[20px] ml-[0.5em]">
            <img :src="item.img" alt="" class="w-full" />
          </div>
          <div class="flex-1 p-0">
            <div class="text-[14pt] font-semibold">
              {{ item.title }}
            </div>
            <div class="text-[12pt]">
              {{ item.description }}
            </div>
            <div class="text-[12pt]">
              <link-standard
                class="text-link mr-[0.5rem]"
                :link="item.links[0]" />
              <link-standard :link="item.links[1]" />
            </div>
          </div>
        </div>
      </article>
      <CategorySecond :title="textValue.title2" />
      <div class="border-l theme-border-secondary flex flex-col flex-grow">
        <app-link
          v-for="(item, index) in commonLinkList"
          :key="`BarRight-1-link-${index}`"
          :to="item.hIndex ? `${item.url}${item.hash[item.hIndex]}` : item.url"
          class="hover:bg-leftbar-bg cursor-pointer flex flex-row justify-between items-center px-[1rem] h-[2rem] odd:bg-[#fefaf6] bg-white">
          <span>{{ getSpecifiedTitle(item) }}</span>
          <!-- <v-icon name="hi-solid-external-link" /> -->
        </app-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgScale1 {
  aspect-ratio: 96/55;
}
</style>
