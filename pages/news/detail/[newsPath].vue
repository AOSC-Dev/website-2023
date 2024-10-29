<script setup>
const route = useRoute();
</script>

<template>
  <ContentDoc
    :path="'news/' + route.params.newsPath.replace(/.md$/, '')"
    v-slot="{ doc }">
    <article>
      <category-second
        :title="doc.title"
        :right-text="doc.date.substring(0, 10)"
        class="sticky top-0 z-[1]" />
      <div class="my-12 mx-24">
        <ContentRenderer :value="doc" />
      </div>
    </article>
  </ContentDoc>
</template>

<style lang="css" scoped></style>
