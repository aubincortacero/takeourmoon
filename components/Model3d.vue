<template>
  <model-viewer
    disable-zoom
    camera-controls
    auto-rotate
    :poster="posterUrl"
    alt="La lune"
    :src="modelUrl"
  />
</template>

<script setup lang="ts">
// Import correct des assets Nuxt
const modelUrl = new URL('~/assets/3d/moonpluspetite.glb', import.meta.url).href
const posterUrl = new URL('~/assets/3d/moonposter.png', import.meta.url).href
</script>