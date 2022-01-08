<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useMagicKeys } from '@vueuse/core'
import { useSearching } from './state'

const keys = useMagicKeys()
const metaK = keys['Ctrl+K']
const downK = keys.ArrowDown
const router = useRouter()
const routes = router.getRoutes()
const query = ref('')
const results = computed(() => {
  if (!query.value) {
    return []
  }
  else {
    return routes.filter((i: any) => {
      return !i.path.endsWith('.html') && i.name && !i.name.includes('all') && i.meta.frontmatter?.content
    }).filter((i: any) => {
      return i.meta.frontmatter.content.toLowerCase().includes(query.value.toLowerCase())
    }).map((route) => {
      // get the 10 chars before and after the match
      const start = route.meta.frontmatter.content.toLowerCase().indexOf(query.value.toLowerCase())
      const end = start + query.value.length
      // get the 10 chars before and after the match
      const before = route.meta.frontmatter.content.substring(start - 25, start)
      const after = route.meta.frontmatter.content.substring(end, end + 25)
      return {
        match: query.value,
        before,
        after,
        path: route.path,
        title: route.meta.frontmatter.title,
      }
    })
  }
})

const searching = useSearching()

const go = (path) => {
  router.push(path)
  searching.setSearching(false)
}

watch(metaK, (v) => {
  if (v)
    searching.isSearching() ? searching.setSearching(false) : searching.setSearching(true)
})
</script>

<template>
  <div v-if="searching.isSearching()" style="z-index: 100;" class="w-screen h-screen fixed bg-vonCount bg-opacity-50 flex items-center justify-center">
    <div class="w-1/3 bg-nosferatu rounded-xl">
      <div class="relative bg-nosferatu p-6 rounded-xl">
        <input v-model="query" type="text" placeholder="Search the docs" class="focus:outline-none placeholder:muted focus:border-opacity-100 border-opacity-75 pl-10 apperance-none border-2 rounded-md border-blade p-2 bg-nosferatu w-full" />
        <div class="absolute top-8.5 left-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div class="px-6 h-96 overflow-scroll">
        <div v-for="(result, index) in results" :key="index" class="my-2">
          <div class="p-3 bg-aro rounded-md border-2 border-aro hover:border-blade" @click="go(result.path)">
            <p class="font-bold">
              {{ result.title }}
            </p>
            <p class="p-2 text-sm">
              ...{{ result.before }} <span class="bg-blade rounded-md">{{ result.match }}</span>{{ result.after }}...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
