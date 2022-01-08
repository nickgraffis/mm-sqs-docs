<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
useHead({
  title: '\'Nick Graffis\'',
  meta: [
    { name: 'description', content: 'Nick Graffis\'s Personal Website' },
  ],
})
</script>

<template>
  <router-view />
</template>
