<script setup>
import gsap from 'gsap'
import { scrollState } from '~/utils/scrollState'

// La Lune se lance comme une toupie : on l'attrape, on la fait tourner, elle garde son élan
// puis retombe à sa rotation de croisière. Le scroll la relance, un clic sans glisser la frappe.
const viewer = ref()
const impact = ref()

const CRUISE = 0.15 // degrés par image à 60 fps
const MAX_SPIN = 30
const MAX_TILT = 35

let cleanup = () => {}

onMounted(() => {
  const mv = viewer.value
  const zone = mv.parentElement
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const cruise = reduce ? 0 : CRUISE

  let theta = 0
  let tilt = 0
  let spin = cruise
  let drag = null
  let visible = true

  const tick = (time, deltaTime) => {
    if (!visible) return
    const f = Math.min(deltaTime / 16.67, 3)
    if (!drag) {
      // l'élan retombe doucement, l'inclinaison revient à l'horizontale
      spin += (cruise - spin) * (1 - Math.pow(0.975, f))
      tilt += -tilt * (1 - Math.pow(0.94, f))
      theta += (spin + (reduce ? 0 : scrollState.velocity * 0.12)) * f
    }
    mv.cameraOrbit = `${theta}deg ${90 + tilt}deg auto`
    mv.jumpCameraToGoal()
  }

  const onDown = (e) => {
    drag = { x: e.clientX, y: e.clientY, startX: e.clientX, startY: e.clientY, t: performance.now() }
    try { zone.setPointerCapture(e.pointerId) } catch {}
  }

  const onMove = (e) => {
    if (!drag) return
    const now = performance.now()
    const dx = e.clientX - drag.x
    const dy = e.clientY - drag.y
    const f = Math.max((now - drag.t) / 16.67, 0.5)
    theta -= dx * 0.4
    tilt = gsap.utils.clamp(-MAX_TILT, MAX_TILT, tilt - dy * 0.25)
    // vitesse lissée du geste : c'est elle que la Lune garde en la lâchant
    spin = gsap.utils.clamp(-MAX_SPIN, MAX_SPIN, spin * 0.5 + (-dx * 0.4 / f) * 0.5)
    Object.assign(drag, { x: e.clientX, y: e.clientY, t: now })
  }

  const onUp = (e) => {
    if (!drag) return
    const travel = Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY)
    if (performance.now() - drag.t > 80) spin = cruise // relâchée à l'arrêt : pas d'élan
    drag = null
    if (travel < 6) hit(e)
  }

  // Impact : onde de choc au point touché, la Lune encaisse et part dans l'autre sens
  const hit = (e) => {
    const rect = zone.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const side = x < rect.width / 2 ? 1 : -1
    spin = gsap.utils.clamp(-MAX_SPIN, MAX_SPIN, spin + side * 14)
    tilt = gsap.utils.clamp(-MAX_TILT, MAX_TILT, tilt + (y < rect.height / 2 ? 12 : -12))
    if (reduce) return

    gsap.fromTo(mv, { scale: 0.92 }, { scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.3)', overwrite: 'auto' })
    gsap.set(impact.value, { x, y })
    gsap.fromTo(impact.value.children,
      { scale: 0, autoAlpha: 1 },
      { scale: (i) => 1 + i * 0.6, autoAlpha: 0, duration: 1, stagger: 0.08, ease: 'expo.out' })
  }

  const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
  io.observe(zone)

  zone.addEventListener('pointerdown', onDown)
  zone.addEventListener('pointermove', onMove)
  zone.addEventListener('pointerup', onUp)
  zone.addEventListener('pointercancel', onUp)
  gsap.ticker.add(tick)

  cleanup = () => {
    io.disconnect()
    zone.removeEventListener('pointerdown', onDown)
    zone.removeEventListener('pointermove', onMove)
    zone.removeEventListener('pointerup', onUp)
    zone.removeEventListener('pointercancel', onUp)
    gsap.ticker.remove(tick)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <model-viewer
    ref="viewer"
    disable-zoom
    interpolation-decay="0"
    poster="/3d/moonposter.png"
    alt="La lune, à lancer d'un geste"
    src="/3d/moonpluspetite.glb"
  />

  <div ref="impact" class="moon-impact" aria-hidden="true">
    <span></span><span></span><span></span>
  </div>

  <!--
    Teinte rouge de la Lune : un "screen" avec #FF4053, calculé pixel par pixel
    (resultat = rouge + pixel × (1 − rouge)). Appliqué en CSS via filter: url(#moon-tint),
    il ne touche que les pixels de la Lune et la suit dans tous ses mouvements.
  -->
  <svg class="moon-tint-filter" aria-hidden="true" focusable="false">
    <filter id="moon-tint" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0 0     0      0 1
                0 0.749 0      0 0.251
                0 0     0.6745 0 0.3255
                0 0     0      1 0"
      />
    </filter>
  </svg>
</template>
