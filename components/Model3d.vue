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
import modelUrl from '~/assets/3d/moonpluspetite.glb?url'
import posterUrl from '~/assets/3d/moonposter.png'
</script>
