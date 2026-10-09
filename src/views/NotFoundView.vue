<script setup lang="ts">
import EmptyState from '@/components/ui/EmptyState.vue'
import { usePageTitle } from '@/composables/usePageTitle'

usePageTitle('Page not found')
</script>

<template>
  <EmptyState
    title="That page doesn’t exist"
    body="The link may be old, or the page may have moved."
    link-text="Back to illustrations"
    link-to="/"
  />
</template>
