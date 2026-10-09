<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-vue'
import type { Artwork } from '@/types'
import ContactButton from '@/components/ui/ContactButton.vue'

defineProps<{ previous?: Artwork; next?: Artwork }>()
</script>

<template>
  <nav aria-label="More work" class="mt-12 border-t border-ink/10 pt-8">
    <div class="flex items-start justify-between gap-6">
      <RouterLink
        v-if="previous"
        :to="{ name: 'project', params: { slug: previous.slug } }"
        class="inline-flex items-center gap-2 text-crimson hover:text-crimson-dark"
      >
        <IconArrowLeft :size="18" :stroke-width="2" aria-hidden="true" class="shrink-0" />
        <span><span class="sr-only">Previous: </span>{{ previous.title }}</span>
      </RouterLink>
      <span v-else />

      <RouterLink
        v-if="next"
        :to="{ name: 'project', params: { slug: next.slug } }"
        class="inline-flex items-center gap-2 text-right text-crimson hover:text-crimson-dark"
      >
        <span><span class="sr-only">Next: </span>{{ next.title }}</span>
        <IconArrowRight :size="18" :stroke-width="2" aria-hidden="true" class="shrink-0" />
      </RouterLink>
    </div>

    <div class="mt-10 text-center">
      <p class="mb-4 text-lg">Want something similar?</p>
      <ContactButton />
    </div>
  </nav>
</template>
