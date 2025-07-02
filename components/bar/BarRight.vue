<script setup>
const { tm } = useI18n();
const textValue = tm('BarRight');
const linkValue = tm('allUniversalLink');

const localLink = linkValue.local;
const distroList = [
  {
    img: '/distros/aosc-os.svg',
    links: [
      useHIndex(localLink.download, 0),
      useHIndex(localLink.aoscRelnote, 0)
    ],
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
  useTIndex(useHIndex(localLink.contact, 0), 3),
  useTIndex(localLink.paste, 1),
  useTIndex(linkValue.AOSCPackages),
  useTIndex(localLink.events, 1),
  useTIndex(localLink.internship, 1),
  linkValue.systemSecurityIssuse,
  linkValue.howToMirror,
  useTIndex(localLink.crowdsourcing, 1)
];
</script>

<template>
  <div class="flex w-[37.5%] flex-col">
    <AppLink to="/aosc-os/right-for-me">
      <img
        src="/jumbotron/minor1.svg"
        class="imgScale1 w-full cursor-pointer" />
    </AppLink>
    <AppLink to="https://bbs.aosc.io/">
      <img
        src="/jumbotron/minor2.svg"
        class="imgScale1 w-full cursor-pointer" />
    </AppLink>
    <div class="flex grow flex-col">
      <CategorySecond
        :title="textValue.title1"
        class="border-l border-solid border-content-main-bg" />
      <article
        class="theme-border-secondary border-l pt-[1em] pb-[0.5em] pl-[1em]">
        <div
          v-for="(item, index) in distroList"
          :key="`BarRight-1-div-${index}`"
          class="flex items-center pb-[15px]">
          <div class="mr-[20px] ml-[0.5em] basis-[50px]">
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
                class="mr-[0.5rem] text-link"
                :link="item.links[0]" />
              <link-standard :link="item.links[1]" />
            </div>
          </div>
        </div>
      </article>
      <CategorySecond :title="textValue.title2" />
      <div class="theme-border-secondary flex grow flex-col border-l">
        <link-standard
          v-for="(item, index) in commonLinkList"
          :key="`BarRight-1-link-${index}`"
          class="flex h-[2rem] cursor-pointer flex-row items-center justify-between bg-white px-[1rem] odd:bg-[#fefaf6] hover:bg-leftbar-bg"
          :link="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgScale1 {
  aspect-ratio: 96/55;
}
</style>
