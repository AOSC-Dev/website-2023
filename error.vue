<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps({
  error: { type: Object as () => NuxtError, required: true }
});

useDefaultHead();
useHead({ title: error?.statusCode });

// npm run dev 时 error.data 即使构造时是对象也会变成 string
const errorData = computed(() =>
  typeof error?.data === 'string' ? JSON.parse(error.data) : error.data
);
</script>

<template>
  <NuxtLayout>
    <div class="flex-1">
      <CategorySecond :title="$t('error.errorPage')" />
      <div v-if="error?.statusCode === 404" class="heti">
        <h1>{{ $t('error.cannotFindPage.title') }}</h1>
        <p v-if="error?.data">
          {{
            $t('error.cannotFindPage.content.text1', {
              url: errorData.query.path
            })
          }}
        </p>
        <p>
          <span>{{ $t('error.cannotFindPage.content.text2') }}</span>
          <LinkStandard
            :link="useTIndex($tm('allUniversalLink.local.contact'), 4)" />
          <span>{{ $t('allUniversalLink.periodPoint') }}</span>
        </p>
      </div>
      <div v-else class="heti">
        <h1>
          {{ $t('error.unexpectedError', { statusCode: error?.statusCode }) }}
        </h1>
        <p>{{ error?.message ?? error?.statusMessage }}</p>
        <code>{{ error?.data }}</code>
      </div>
    </div>
  </NuxtLayout>
</template>
