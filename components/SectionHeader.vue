
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
 <div class="scrollbot" > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.722" height="46.717" viewBox="0 0 36.722 46.717">
                        <g id="Groupe_41" data-name="Groupe 41" transform="translate(-1383.793 -831.042)">
                            <g id="Tracé_127" data-name="Tracé 127" transform="translate(1385.968 834.399)" fill="none">
                            <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
                            <path d="M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z" stroke="none" fill="#000000"/>
                            </g> 
                            <g id="Tracé_128" data-name="Tracé 128" transform="translate(1385.968 848.45)" fill="none">
                            <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
                            <path d="M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z" stroke="none" fill="#000000"/>
                            </g>
                            <g id="Tracé_129" data-name="Tracé 129" transform="translate(1385.968 862.502)" fill="none">
                            <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
                            <path d="M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z" stroke="none" fill="#000000"/>
                            </g>
                        </g>
                    </svg>
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
