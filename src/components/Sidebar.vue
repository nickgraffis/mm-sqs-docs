<script setup lang="ts">
import { useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'
import SidebarLinks from './SidebarLinks.vue'

const router = useRouter()
const routes = router.getRoutes()
const pages = computed(() =>
  routes.filter((i: any) => {
    return !i.path.endsWith('.html') && i.name && !i.name.includes('all')
  })
    .sort((a: any, b: any) => {
      return (a?.meta?.frontmatter?.order || 1000) - (b?.meta?.frontmatter?.order || 1000)
    }),
)

const buildRoutes = (paths, parentPath = '') => {
  return paths.reduce((routes, path) => {
    const { path: routePath } = path
    const fullPath = parentPath ? `${parentPath}/${routePath}` : routePath
    const route = {
      ...path,
      path: fullPath,
      name: fullPath.split('/').pop(),
    }
    const routeParts = fullPath.split('/')
    const isNested = routeParts.length > 2
    if (isNested) {
      const parentRoute = routeParts.slice(0, -1).join('/')
      if (!routes[parentRoute]) {
        routes[parentRoute] = {
          ...path,
          children: [],
          path: parentRoute,
          name: parentRoute.substring(1).replace(/\//g, ' '),
        }
      }

      routes[parentRoute].children.push(route)
    }
    else {
      routes[fullPath] = route
    }
    return routes
  }, {})
}

const siteMap = computed(() => {
  const routes = buildRoutes(pages.value)
  return Object.values(routes)
})

console.log(siteMap.value)
</script>

<template>
  <SidebarLinks :site-map="siteMap" />
</template>
