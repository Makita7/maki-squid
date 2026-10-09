<script setup lang="ts">
import type { Artwork } from '@/types'

defineProps<{ artwork: Artwork }>()
</script>

<template>
  <header class="mt-5">
    <div class="flex items-baseline justify-between gap-4">
      <h1 class="text-2xl font-medium">{{ artwork.title }}</h1>
      <p class="text-lg text-ink-soft">{{ artwork.year }}</p>
    </div>
    <div v-if="artwork.description?.length" class="mt-3 flex max-w-[65ch] flex-col gap-4 text-lg leading-relaxed">
      <p v-for="(paragraph, i) in artwork.description" :key="i">{{ paragraph }}</p>
    </div>
  </header>
</template>
