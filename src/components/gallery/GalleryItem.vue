<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Artwork, Focus, TileSize } from '@/types'
import { workImage } from '@/utils/assets'

const props = defineProps<{ artwork: Artwork }>()

/*
  Tailwind only keeps class names it can read in full,
  so every option is written out here instead of being built from strings.
  "@lg:" means "when the gallery is wide enough for a grid".
*/
const spans: Record<TileSize, string> = {
  small: '@lg:row-span-2',
  normal: '@lg:row-span-3',
  tall: '@lg:row-span-4',
  wide: '@lg:col-span-2 @lg:row-span-4',
  feature: '@lg:col-span-2 @lg:row-span-6',
}
const focuses: Record<Focus, string> = {
  center: '@lg:object-center',
  top: '@lg:object-top',
  bottom: '@lg:object-bottom',
  left: '@lg:object-left',
  right: '@lg:object-right',
}

const spanClass = computed(() => spans[props.artwork.size ?? 'tall'])
const fitClass = computed(() =>
  props.artwork.fit === 'contain'
    ? '@lg:object-contain @lg:object-center'
    : `@lg:object-cover ${focuses[props.artwork.focus ?? 'center']}`,
)
</script>

<template>
  <li :class="spanClass">
    <RouterLink
      :to="{ name: 'project', params: { slug: artwork.slug } }"
      :aria-label="`${artwork.title}, ${artwork.year}`"
      class="group relative block overflow-hidden rounded-lg @lg:h-full"
      :style="artwork.tileColor ? { backgroundColor: artwork.tileColor } : undefined"
    >
      <img
        :src="workImage(artwork.image)"
        :alt="artwork.alt"
        loading="lazy"
        decoding="async"
        class="block h-auto w-full @lg:h-full"
        :class="fitClass"
      />
      <span
        aria-hidden="true"
        class="absolute bottom-3 left-3 rounded bg-crimson px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {{ artwork.title }}
      </span>
    </RouterLink>
  </li>
</template>
