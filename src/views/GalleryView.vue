<script setup lang="ts">
import { computed } from 'vue'
import GalleryGrid from '@/components/gallery/GalleryGrid.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import { artworksForSection, sectionTitles, type Section } from '@/composables/useArtworks'
import { usePageTitle } from '@/composables/usePageTitle'

const props = defineProps<{ section: Section }>()

const items = computed(() => artworksForSection(props.section))
const title = computed(() => sectionTitles[props.section])

usePageTitle(title)
</script>

<template>
  <section class="px-8 pb-12 pt-6 lg:pl-6 lg:pr-10 lg:pt-10">
    <GalleryGrid v-if="items.length" :artworks="items" />
    <EmptyState
      v-else
      title="Nothing here yet"
      body="New work is on the way. Meanwhile, have a look at the illustrations."
      link-text="See illustrations"
      link-to="/"
    />
    <h1 class="sr-only">{{ title }}</h1>
  </section>
</template>
