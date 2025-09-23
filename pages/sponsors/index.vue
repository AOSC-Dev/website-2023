<script setup>
const { tm } = useI18n();
const textValue = tm('sponsors.sponsorsIndex');
const linkValue = tm('allUniversalLink');
useHead({ title: textValue.title });
const linkDevelopmentEquipment = linkValue.sponsors.devices;
const sponsorList = [
  {
    title: textValue.infrastructure,
    list: [...Object.values(linkValue.sponsors.infrastructure)]
  },
  {
    title: textValue.mirrors,
    list: [...Object.values(linkValue.sponsors.mirrors)]
  },
  {
    title: textValue.devices,
    list: [
      linkDevelopmentEquipment.bananaPi,
      linkValue.sponsors.infrastructure.loongson,
      linkDevelopmentEquipment.plctlab,
      linkDevelopmentEquipment.pine64
    ]
  },
  {
    title: textValue.licenses,
    list: [...Object.values(linkValue.sponsors.licenses)]
  },
  {
    title: textValue.individualDonors.title
  },
  {
    title: textValue.historicInfrastructure,
    list: [...Object.values(linkValue.sponsors.historicInfrastructure)]
  },
  {
    title: textValue.historicMirrors,
    list: [...Object.values(linkValue.sponsors.historicSoftwareLicense)]
  }
];
</script>

<template>
  <div>
    <category-second :title="textValue.title" />
    <div class="p-6">{{ textValue.introduction }}</div>

    <div v-for="item in sponsorList" :key="item.title">
      <category-second :title="item.title" />
      <div v-if="item.title !== textValue.individualDonors.title" class="p-6">
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
      <div v-else class="heti">
        <p
          v-for="description in textValue.individualDonors.introduction"
          :key="description">
          {{ description }}
        </p>
        <AppTableOrdinary
          :table-value="textValue.individualDonors.tableAoscc2025"
          my-key="sponsors-index-1" />
        <br />
        <AppTableOrdinary
          :table-value="textValue.individualDonors.tableServerHardDrive"
          my-key="sponsors-index-1" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./components/Header.vue
