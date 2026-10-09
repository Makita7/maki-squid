<script setup lang="ts">
defineProps<{ clients: string[] }>()
</script>

<template>
  <ul class="flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg">
    <li v-for="(client, i) in clients" :key="`${client}-${i}`">{{ client }}</li>
  </ul>
</template>
