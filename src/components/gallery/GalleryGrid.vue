<script setup lang="ts">
import type { Artwork } from '@/types'
import GalleryItem from './GalleryItem.vue'

defineProps<{ artworks: Artwork[] }>()
</script>

<template>
  <!--
    The outer box is a "container": the grid reacts to the width of the gallery
    itself (not the whole screen), so it works with or without the sidebar.
  -->
  <div class="@container">
    <ul class="gallery grid grid-flow-dense grid-cols-1">
      <GalleryItem v-for="artwork in artworks" :key="artwork.slug" :artwork="artwork" />
    </ul>
  </div>
</template>

<style scoped>
/*
  Phones: one column, each piece at its own natural shape.
  Wider: 2 → 3 → 4 columns.

  Rows are a third of a column (minus the gaps), so:
    3 rows = a square, 2 rows = a short landscape strip, 4 rows = a portrait.
  Two 2-row pieces stacked end up exactly as tall as one 4-row piece.
*/
.gallery {
  --gap: 1rem;
  gap: var(--gap);
}
@container (min-width: 32rem) {
  .gallery {
    --cols: 2;
    --col: calc((100cqw - (var(--cols) - 1) * var(--gap)) / var(--cols));
    grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
    grid-auto-rows: calc((var(--col) - 2 * var(--gap)) / 3);
  }
}
@container (min-width: 42rem) {
  .gallery {
    --cols: 3;
  }
}
@container (min-width: 56rem) {
  .gallery {
    --cols: 4;
  }
}
</style>
