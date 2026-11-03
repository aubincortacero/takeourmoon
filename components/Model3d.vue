<template>
  <model-viewer
    disable-zoom
    camera-controls
    auto-rotate
    poster="/3d/moonposter.png"
    alt="La lune"
    src="/3d/moonpluspetite.glb"
  />

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
