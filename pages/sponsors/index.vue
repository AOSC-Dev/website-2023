<script setup>
const { tm } = useI18n();
const textValue = tm('sponsors.index');
const linkValue = tm('allUniversalLink');
useHead({ title: textValue.title1 });
const linkDevelopmentEquipment = linkValue.sponsors.developmentEquipment;
const sponsorList = [
  {
    title: textValue.title1,
    list: [...Object.values(linkValue.sponsors.servicesAndFacilities)]
  },
  {
    title: textValue.title2,
    list: [...Object.values(linkValue.sponsors.imageSource)]
  },
  {
    title: textValue.title3,
    list: [
      linkDevelopmentEquipment.bananaPi,
      linkValue.sponsors.servicesAndFacilities.loongson,
      linkDevelopmentEquipment.plctlab,
      linkDevelopmentEquipment.pine64
    ]
  },
  {
    title: textValue.title4,
    list: [...Object.values(linkValue.sponsors.softwareLicense)]
  },
  {
    title: textValue.title5,
    list: [...Object.values(linkValue.sponsors.oldServicesAndFacilities)]
  },
  {
    title: textValue.title6,
    list: [...Object.values(linkValue.sponsors.oldSoftwareLicense)]
  }
];
</script>

<template>
  <div>
    <category-second :title="textValue.title7" />
    <div class="p-6">
      {{ textValue.p1 }}
    </div>

    <div v-for="item in sponsorList" :key="item.title">
      <category-second :title="item.title" />
      <div class="p-6">
        <div class="grid grid-cols-4 gap-6 p-2">
          <app-link
            v-for="sponsor in item.list"
            :key="sponsor.title"
            class="cursor-pointer text-center"
            :href="sponsor.url"
            target="_blank">
            <div class="min-h-[91.74px]">
              <img
                loading="lazy"
                :src="`/sponsors/${sponsor.img}.svg`"
                :alt="sponsor.title"
                class="w-[100%] max-w-[100%]" />
            </div>
            <div class="text-link">{{ getSpecifiedTitle(sponsor) }}</div>
            <div v-if="sponsor.title == 'JetBrains'">
              <span style="font-size: 0.7rem; color: #666">
                Copyright © 2000-2024 JetBrains s.r.o. JetBrains and the
                JetBrains logo are registered trademarks of JetBrains s.r.o.
              </span>
            </div>
          </app-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
