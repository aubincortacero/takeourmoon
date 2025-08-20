
<script setup>
const config = useRuntimeConfig()
import Model3D from '../components/Model3d.vue'
 
// ✅ Fetch REST API WordPress (page ID 7)
const acf = ref(null)
try {
  const { data: page } = await useFetch(`${config.public.wpApi}/acf/v3/pages/7`)
  acf.value = page.value?.acf
  console.log('OK - Header');
} catch (error) {
  console.error('Erreur lors de la récupération des données WordPress :', error)
}

</script>

<template>
  <section id="section-header" >
    <!-- Icône scrollbot -->
    <div class="scrollbot" hash="#section-mission">
      <slot name="icon"></slot>
    </div>

    <div class="container">
      <!-- Colonne gauche : modèle 3D -->
      <div class="col-left">
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
