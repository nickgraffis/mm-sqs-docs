<script setup lang="ts">
defineProps<{ page: any }>()

</script>

<template>
  <router-link :to="page.path">
    {{ page.name }}
  </router-link>
</template>
