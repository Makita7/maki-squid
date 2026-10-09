<script setup lang="ts">
import { IconBrandInstagram, IconBrandX, IconMail } from '@tabler/icons-vue'
import { profile } from '@/data/profile'

withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })

const icons = { email: IconMail, instagram: IconBrandInstagram, x: IconBrandX }
</script>

<template>
  <ul class="flex items-center justify-center gap-6" :class="tone === 'light' ? 'text-white' : 'text-crimson'">
    <li v-for="link in profile.social" :key="link.kind">
      <a
        :href="link.url"
        :aria-label="link.label"
        :target="link.kind === 'email' ? undefined : '_blank'"
        rel="noopener noreferrer"
        class="block rounded p-1 transition-opacity hover:opacity-70"
      >
        <component :is="icons[link.kind]" :size="26" :stroke-width="1.5" aria-hidden="true" />
      </a>
    </li>
  </ul>
</template>
