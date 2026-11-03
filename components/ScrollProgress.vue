<script setup>
import gsap from 'gsap'
import { scrollState } from '~/utils/scrollState'

// Fine barre en haut de l'écran qui suit la progression dans la page.
const bar = ref()
const tick = () => { bar.value.style.transform = `scaleX(${scrollState.progress})` }

onMounted(() => gsap.ticker.add(tick))
onBeforeUnmount(() => gsap.ticker.remove(tick))
</script>

<template>
  <div ref="bar" class="scroll-progress" aria-hidden="true"></div>
</template>
