<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

defineProps<{ siteMap: any }>()
const route = useRoute()
const router = useRouter()

const capitolize = (str: string) => {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
</script>

<template>
  <div>
    <div v-for="(page, index) in siteMap" :key="index" class="w-full">
      <div v-if="!page.children.length" :class="route.path === page.path ? 'border-l-4' : ''" class="p-4 border-blade hover:bg-vanHelsing dark:hover:bg-muted font-bold" @click="router.push(page.path)">
        {{ capitolize(page.name) || 'Home' }}
      </div>
      <div v-else>
        <Dropdown :page="page" />
      </div>
    </div>
  </div>
</template>
