<script setup lang="ts">
import type { Artwork } from '@/types'
import { workImage } from '@/utils/assets'

defineProps<{ artwork: Artwork }>()
</script>

<template>
  <section v-if="artwork.process?.length" class="mt-8 border-t border-ink/10 pt-6" aria-labelledby="process-heading">
    <h2 id="process-heading" class="text-lg font-medium">Process</h2>
    <ul class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <li v-for="step in artwork.process" :key="step.caption">
        <figure>
          <img
            :src="workImage(step.image)"
            :alt="step.alt ?? `${step.caption} stage of ${artwork.title}`"
            loading="lazy"
            decoding="async"
            class="aspect-square w-full rounded-md bg-ink/5 object-cover"
          />
          <figcaption class="mt-2 text-sm text-ink-soft">{{ step.caption }}</figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>
