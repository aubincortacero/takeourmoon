<script setup>
import gsap from 'gsap'

// Curseur personnalisé (souris uniquement) : un point qui suit exactement,
// un anneau qui suit avec du retard, grossit sur les liens et affiche data-cursor.
const root = ref()
const dot = ref()
const ring = ref()
const label = ref('')
const state = reactive({ enabled: false, hover: false, down: false, hidden: true })

let cleanup = () => {}

onMounted(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!fine || reduce) return

  state.enabled = true
  document.documentElement.classList.add('has-cursor')

  const dotX = gsap.quickTo(dot.value, 'x', { duration: 0.1, ease: 'power3.out' })
  const dotY = gsap.quickTo(dot.value, 'y', { duration: 0.1, ease: 'power3.out' })
  const ringX = gsap.quickTo(ring.value, 'x', { duration: 0.5, ease: 'power3.out' })
  const ringY = gsap.quickTo(ring.value, 'y', { duration: 0.5, ease: 'power3.out' })

  const onMove = (e) => {
    state.hidden = false
    dotX(e.clientX); dotY(e.clientY)
    ringX(e.clientX); ringY(e.clientY)
  }
  const onOver = (e) => {
    const target = e.target.closest?.('a, button, [data-cursor]')
    state.hover = !!target
    label.value = target?.dataset.cursor || ''
  }
  const onDown = () => { state.down = true }
  const onUp = () => { state.down = false }
  const onLeave = () => { state.hidden = true }

  window.addEventListener('mousemove', onMove, { passive: true })
  document.addEventListener('mouseover', onOver)
  window.addEventListener('mousedown', onDown)
  window.addEventListener('mouseup', onUp)
  document.documentElement.addEventListener('mouseleave', onLeave)

  cleanup = () => {
    document.documentElement.classList.remove('has-cursor')
    window.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onOver)
    window.removeEventListener('mousedown', onDown)
    window.removeEventListener('mouseup', onUp)
    document.documentElement.removeEventListener('mouseleave', onLeave)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <div
    v-show="state.enabled"
    ref="root"
    class="cursor"
    :class="{ 'is-hover': state.hover && !label, 'has-label': !!label, 'is-down': state.down, 'is-hidden': state.hidden }"
    aria-hidden="true"
  >
    <div ref="ring" class="cursor__ring">
      <div class="cursor__ring-shape">
        <span class="cursor__label">{{ label }}</span>
      </div>
    </div>
    <div ref="dot" class="cursor__dot"></div>
  </div>
</template>
