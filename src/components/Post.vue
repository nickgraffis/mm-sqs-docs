<script setup lang='ts'>
import twemoji from 'twemoji'
import { useEventListener, isClient } from '@vueuse/core'
import { useHead, Head } from '@vueuse/head'
import { formatDate, slugify, currentPost } from '../logics'
import setupTwoslashHovers from '../setupTwoslashHovers'

if (isClient) {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(location.hash)
        ?.scrollIntoView({ behavior: 'smooth' }) // Not currently working in Safari
    }
  }

  useEventListener(window, 'hashchange', navigate, false)

  onMounted(() => {
    setupTwoslashHovers()
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href') as string
        history.replaceState({}, '', href)
        navigate()
      })
    })

    navigate()
    setTimeout(navigate, 500)
  })
}

const { frontmatter } = defineProps<{ frontmatter: any }>()
</script>

<template>
  <div class="prose prose-sm p-4 text-left mb-8 max-w-3xl mx-auto">
    <!-- TODO: Why sm? -->
    <!-- Only show if there is a title or display included in the frontmatter -->
    <h1 v-if="frontmatter.display || frontmatter.title" class="!mb-3 !text-3xl lg:!text-6xl !text-primary">
      <span v-html="twemoji.parse(frontmatter.display || frontmatter.title, { className: 'twemoji' })"></span>
    </h1>
    <!-- Only show if there is a date && duration inside the frontmatter -->
    <p class="!my-2 !font-semibold">
      <span v-if="frontmatter.lastUpdated && formatDate(frontmatter.lastUpdated) !== formatDate(frontmatter.date)">Updated: {{ formatDate(frontmatter.lastUpdated) }}</span>
      <span v-if="frontmatter.duration"> · {{ frontmatter.duration }}</span>
    </p>
    <slot />
  </div>
</template>
