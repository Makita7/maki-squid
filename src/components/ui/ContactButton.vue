<script setup lang="ts">
import { IconMail } from '@tabler/icons-vue'
import { profile } from '@/data/profile'
</script>

<template>
  <a
    :href="`mailto:${profile.email}`"
    class="inline-flex items-center gap-2 rounded-md bg-crimson px-5 py-2.5 text-white transition-colors hover:bg-crimson-dark"
  >
    <IconMail :size="20" :stroke-width="1.75" aria-hidden="true" />
    Get in touch
  </a>
</template>
