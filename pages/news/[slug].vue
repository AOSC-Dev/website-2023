<script setup>
const route = useRoute();
const { locale } = useI18n();
</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }" :path="`/news/${locale}/${route.params.slug}`"
      ><article>
        <category-second
          :title="doc.title"
          :right-text="doc.date.substring(0, 10)"
          class="sticky top-0 z-[1]" />
        <div class="my-12 mx-24">
          <ContentRenderer :value="doc" />
        </div> </article></ContentDoc
  ></div>
</template>

<style lang="css" scoped></style>
