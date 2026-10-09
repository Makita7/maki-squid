<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ title: string; body: string; linkText: string; linkTo: string }>()
</script>

<template>
  <div class="mx-auto max-w-md py-24 text-center">
    <h1 class="font-display text-3xl text-crimson">{{ title }}</h1>
    <p class="mt-4 text-lg text-ink-soft">{{ body }}</p>
    <RouterLink :to="linkTo" class="mt-8 inline-block text-crimson underline underline-offset-4 hover:text-crimson-dark">
      {{ linkText }}
    </RouterLink>
  </div>
</template>
