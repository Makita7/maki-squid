<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import BackLink from '@/components/ui/BackLink.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ProcessGallery from '@/components/project/ProcessGallery.vue'
import ProjectDetails from '@/components/project/ProjectDetails.vue'
import ProjectHeader from '@/components/project/ProjectHeader.vue'
import ProjectPager from '@/components/project/ProjectPager.vue'
import { findArtwork, neighboursOf } from '@/composables/useArtworks'
import { usePageTitle } from '@/composables/usePageTitle'
import { workImage } from '@/utils/assets'

const props = defineProps<{ slug: string }>()

const artwork = computed(() => findArtwork(props.slug))
const neighbours = computed(() => (artwork.value ? neighboursOf(artwork.value) : {}))

usePageTitle(() => artwork.value?.title ?? 'Not found')

// Tall pieces shouldn't be taller than the screen, so they get a height limit.
const isPortrait = ref(false)
watch(artwork, () => (isPortrait.value = false))
function onImageLoad(event: Event) {
  const img = event.target as HTMLImageElement
  isPortrait.value = img.naturalHeight > img.naturalWidth
}
</script>

<template>
  <article v-if="artwork" class="mx-auto max-w-[47rem] px-8 pb-16 pt-5 lg:pt-20">
    <BackLink :fallback="artwork.category === 'game-ui' ? '/game-ui' : '/'" />

    <img
      :key="artwork.slug"
      :src="workImage(artwork.image)"
      :alt="artwork.alt"
      decoding="async"
      class="mt-4 block rounded-lg"
      :class="isPortrait ? 'mx-auto h-auto max-h-[85dvh] w-auto max-w-full' : 'h-auto w-full'"
      @load="onImageLoad"
    />

    <ProjectHeader :artwork="artwork" />
    <ProjectDetails :artwork="artwork" />
    <ProcessGallery :artwork="artwork" />
    <ProjectPager :previous="neighbours.previous" :next="neighbours.next" />
  </article>

  <EmptyState
    v-else
    title="We couldn’t find that piece"
    body="The link may be old, or the piece may have moved."
    link-text="Back to illustrations"
    link-to="/"
  />
</template>
