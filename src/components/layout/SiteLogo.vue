<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { brandImage } from '@/utils/assets'

withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })
</script>

<template>
  <RouterLink to="/" class="block" aria-label="Maki Squid, home">
    <img
      :src="brandImage(tone === 'light' ? 'logo-light.png' : 'logo.png')"
      alt=""
      class="mx-auto h-auto w-full"
      width="130"
      height="186"
    />
  </RouterLink>
</template>
