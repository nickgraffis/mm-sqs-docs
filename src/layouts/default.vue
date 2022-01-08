<script setup lang="ts">
</script>

<template>
  <Search />
  <div class="h-screen flex flex-col">
    <Header />
    <div class="grid grid-cols-12 overflow-hidden flex-grow">
      <div class="col-span-3 overflow-y-scroll border-r border-muted">
        <Sidebar />
      </div>
      <div class="col-span-9 overflow-y-scroll h-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
