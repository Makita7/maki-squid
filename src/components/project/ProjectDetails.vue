<script setup lang="ts">
import { computed } from 'vue'
import type { Artwork } from '@/types'

const props = defineProps<{ artwork: Artwork }>()

// Only the details you filled in are shown.
const details = computed(() =>
  [
    { label: 'Medium', value: props.artwork.medium },
    { label: 'Made with', value: props.artwork.tools?.join(', ') },
    { label: 'Project', value: props.artwork.project },
  ].filter((d): d is { label: string; value: string } => Boolean(d.value)),
)
</script>

<template>
  <dl v-if="details.length" class="mt-8 grid gap-6 border-t border-ink/10 pt-6 sm:grid-cols-3">
    <div v-for="detail in details" :key="detail.label">
      <dt class="text-sm text-crimson">{{ detail.label }}</dt>
      <dd class="mt-1 text-lg">{{ detail.value }}</dd>
    </div>
  </dl>
</template>
