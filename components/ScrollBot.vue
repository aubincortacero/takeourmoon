<script setup>
// Flèche "défiler vers le bas". Les <g> imbriqués sont ciblés par le CSS (.scrollbot svg g g).
defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
  color: { type: String, default: '#000000' }
})

const chevron = 'M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z'
const offsets = [834.399, 848.45, 862.502]
</script>

<template>
  <a class="scrollbot" :href="href" :aria-label="label">
    <svg xmlns="http://www.w3.org/2000/svg" width="36.722" height="46.717" viewBox="0 0 36.722 46.717" aria-hidden="true" focusable="false">
      <g transform="translate(-1383.793 -831.042)">
        <g v-for="y in offsets" :key="y" :transform="`translate(1385.968 ${y})`" fill="none">
          <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
          <path :d="chevron" stroke="none" :fill="color"/>
        </g>
      </g>
    </svg>
  </a>
</template>
