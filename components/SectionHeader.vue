<script setup>
import Model3D from '~/components/Model3d.vue'

const acf = usePageContent()

</script>

<template>
  <section id="section-header" >
    <!-- Icône scrollbot -->
    <ScrollBot href="#section-mission" label="Défiler vers les missions lunaires" /> 

    <div class="container">
      <!-- Colonne gauche : modèle 3D -->
      <div class="col-left" data-cursor="Tourner">
        <Model3D />
      </div>

      <!-- Colonne droite : contenu WP -->
      <div class="col-right">
        <div class="col-top">
          <h1 class="bigtitle uppercase font-150 font-thunderbold fc-white" v-html="acf?.grand_titre"></h1>
        </div>

        <div class="col-bot">
          <div class="fondoblique">
            <p class="font-50 font-thundermedium fc-black" v-html="acf?.phrase_dintroduction"></p>
          </div>
      
          <div class="italic-lines first">
            <div class="line" v-for="i in 80" :key="i"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
