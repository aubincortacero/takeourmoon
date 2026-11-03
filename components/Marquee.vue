<script setup>
import gsap from 'gsap'
import { scrollState } from '~/utils/scrollState'

// Bandeau de texte qui défile à l'infini. Il accélère avec la vitesse du scroll
// et change de sens quand on remonte la page.
const props = defineProps({
  text: { type: String, required: true },
  repeat: { type: Number, default: 6 },
  speed: { type: Number, default: 1 },
  reverse: { type: Boolean, default: false }
})

const track = ref()
let tick
let removeResize = () => {}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // La piste contient deux fois le texte : on boucle sur la moitié de sa largeur
  let half = 1
  const measure = () => { half = track.value.scrollWidth / 2 || 1 }
  measure()
  document.fonts.ready.then(measure)
  window.addEventListener('resize', measure, { passive: true })
  removeResize = () => window.removeEventListener('resize', measure)

  const wrap = (x) => gsap.utils.wrap(-half, 0, x)
  const baseDir = props.reverse ? -1 : 1
  let x = 0

  tick = (_, deltaTime) => {
    const boost = Math.min(Math.abs(scrollState.velocity) * 0.25, 12)
    const step = (props.speed + boost) * scrollState.direction * baseDir * (deltaTime / 16.67)
    x = wrap(x - step)
    gsap.set(track.value, { x, skewX: gsap.utils.clamp(-10, 10, scrollState.velocity * -0.3) })
  }
  gsap.ticker.add(tick)
})

onBeforeUnmount(() => {
  if (tick) gsap.ticker.remove(tick)
  removeResize()
})
</script>

<template>
  <div class="marquee">
    <span class="visually-hidden">{{ text }}</span>
    <div ref="track" class="marquee__track" aria-hidden="true">
      <span v-for="i in repeat * 2" :key="i" class="marquee__item">{{ text }}<span class="marquee__sep">✦</span></span>
    </div>
  </div>
</template>
