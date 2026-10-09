<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { IconArrowLeft } from '@tabler/icons-vue'

withDefaults(defineProps<{ fallback?: string }>(), { fallback: '/' })
const router = useRouter()

/** Go back to wherever the visitor came from (keeps the gallery scroll position). */
function goBack(fallback: string) {
  if (window.history.state?.back) router.back()
  else router.push(fallback)
}
</script>

<template>
  <RouterLink v-slot="{ href }" :to="fallback" custom>
    <a :href="href" class="inline-flex items-center gap-2 text-crimson hover:text-crimson-dark" @click.prevent="goBack(fallback)">
      <IconArrowLeft :size="18" :stroke-width="2" aria-hidden="true" />
      Back
    </a>
  </RouterLink>
</template>
