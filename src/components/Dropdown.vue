<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

defineProps<{ page: any }>()
const router = useRouter()
const route = useRoute()
const open = ref(false)

const capitolize = (str: string) => {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

</script>
<template>
  <div class="font-bold p-4 hover:bg-vanHelsing dark:hover:bg-muted flex justify-between" @click="open = !open">
    <p>{{ capitolize(page.name) }}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="open ? 'rotate-0' : '-rotate-90'"
      class="h-6 w-6 transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  <div :class="open ? 'h-auto' : 'h-0'" class="overflow-hidden">
    <div v-for="(page, index) in page.children" :key="index + page.name" class="w-full hover:text-blade">
      <div v-if="!page.children.length" :class="route.path === page.path ? 'border-l-4' : ''" class="pl-8 py-4 border-blade" @click="router.push(page.path)">
        {{ capitolize(page.name) }}
      </div>
    </div>
  </div>
</template>
