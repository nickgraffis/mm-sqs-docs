<script setup lang="ts">
import { reactive } from 'vue'
import { decode, isBlurhashValid } from 'blurhash'
import { useRouter } from 'vue-router'
import { nickPng } from '../assets/images/blurhash-map.json'
import { isDark, toggleDark } from '../logics'
import { useSearching } from './state'
const image = ref<HTMLImageElement | null>(null)
const isLoaded = ref<boolean>(false)
const isVisible = ref<boolean>(true)
const src = import.meta.env.MODE === 'development' ? '/src' + '/assets/images/nick.png' : '/assets/images/nick.png'
const canvas = ref<HTMLCanvasElement | null>(null)
const dropAbout = ref(false)
const router = useRouter()
const searching = useSearching()
</script>
<template>
  <nav
    class="px-4 m-auto py-6 text-sm z-50 flex items-center justify-between w-full font-semibold text-nosferatu dark:text-cullen border-b border-muted"
  >
    <router-link to="/" class="flex items-center space-x-3 font-bold text-xl h-full flex-shrink-0">
      <div class="relative">
        <svg class="w-12 h-7" viewBox="0 0 99 66"><defs><linearGradient
          id="a"
          x1=".5"
          y1="33"
          x2="65.75"
          y2="33"
          gradientUnits="userSpaceOnUse"
        ><stop offset="0" stop-color="#3b3b3d" /><stop offset="1" stop-color="#cfd0d2" /></linearGradient><linearGradient
          id="b"
          x1="33.25"
          y1="33"
          x2="98.5"
          y2="33"
          gradientUnits="userSpaceOnUse"
        ><stop offset="0" stop-color="#396eb5" /><stop offset="1" stop-color="#20386c" /></linearGradient></defs><path d="M65.75 36A32.76 32.76 0 0 1 .5 36h7.77a25.24 25.24 0 0 0 24.86 22.51A25.26 25.26 0 0 0 58 36zM58 30A25.26 25.26 0 0 0 33.13 7.49 25.24 25.24 0 0 0 8.27 30H.5a32.76 32.76 0 0 1 65.25 0z" style="fill:url(#a)" /><path d="M41 36a25 25 0 0 0 49.72 0h7.78a32.76 32.76 0 0 1-65.25 0zm-7.76-6a32.76 32.76 0 0 1 65.26 0h-7.77A25 25 0 0 0 41 30z" style="fill:url(#b)" /></svg>
      </div>
      <div>
        <p>Model Match Message API</p>
        <p class="text-xs font-semibold">
          Documentation for internal use of AWS SQS, DynamoDB, and S3
        </p>
      </div>
    </router-link>
    <div class="flex space-x-6 items-center text-lg">
      <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html" class="cursor-pointer lg:text-xl !text-base hover:text-blade transition-colors duration-150">
        <p>AWS Documentation</p>
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="searching.setSearching(true)"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <a class="cursor-pointer lg:text-xl !text-base hover:text-blade transition-colors duration-150" @click="toggleDark">
        <il:moon v-if="isDark" />
        <icon-park-outline:sun-one v-else />
      </a>
    </div>
  </nav>
</template>
