
<script setup>
const config = useRuntimeConfig()
import { onMounted, nextTick} from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, computed } from 'vue'


// ✅ Fetch REST API WordPress (page ID 7)
const acf = ref(null)

try {
  const { data: page } = await useFetch(`${config.public.wpApi}/acf/v3/pages/7`)
  acf.value = page.value?.acf
  console.log('OK - Missions');
} catch (error) {
  console.error("Impossible de charger la page WP :", error)
}

const missions = computed(() =>
  Array.isArray(acf.value?.tableau_des_missions)
    ? acf.value.tableau_des_missions.slice(0) // enlève la première ligne "Mission / État / Année..."
    : []
) 

const title = acf.value?.titre_du_bloc_mission || ''
const subtitle = acf.value?.sous_titre_bloc_mission || ''


onMounted(async () => {
  // Log the fetched data for debugging

    await nextTick()
    
    gsap.registerPlugin(ScrollTrigger) 

    missions.value.forEach((row, index) => {
    const content = "#section-mission .container > .tableau-missions .uneligne" + index;
    const line = "#section-mission .container > .tableau-missions .line" + index;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: 'top bottom-=18vh',
        end: 'bottom center+=10vh',
        scrub: 1
      }
    })

    tl.from(content, {
      opacity: 0,
      duration: 0.8,
      width: '10%',
      ease: 'power4.out'
    })
    tl.from(line, {
      opacity: 0,
      width: '0',
      duration: 1.5,
      ease: 'power4.out'
    }, '-=0.8')
  })
});
</script>

<template>
  <section id="section-mission">
    <!-- Titre principal -->
    <h2 class="bigtitle uppercase font-150 font-thunderbold fc-black" v-html="title">
    </h2>

    <div class="container">
      <!-- Sous-titre -->
      <h3 class="font-50 font-thundermediumitalic fc-black" v-html="subtitle">
      </h3>

      <!-- Tableau des missions -->
      <div class="tableau-missions">
        <template v-if="missions && missions.length"  v-for="(mission, index) in missions"
            :key="index">
            <div :class="['uneligne', `uneligne${index}`]">
              <div class="unevaleur">
                <p class="font-20">{{ mission.mission }}</p>
              </div>

              <div class="unevaleur">
                <p class="font-20">{{ mission.etat }}</p>
              </div>

              <div class="unevaleur">
                <p class="font-20">{{ mission.annee }}</p>
              </div>

              <div class="unevaleur">
                <p class="font-20">{{ mission.type_de_mission }}</p>
              </div>

              <div class="unevaleur">
                <p class="font-20">{{ mission.resultat_de_la_mission }}</p>
              </div>
            </div>

            <!-- Ligne séparatrice -->
            <div :class="['line', `line${index}`]"></div>
        </template>

        <!-- Fallback si pas de missions -->
        <template v-else>
          <p class="font-20 italic">Aucune mission trouvée</p>
        </template>
      </div>
    </div>

    <!-- Texte de fin -->
    <p class="histories font-50 font-thundermediumitalic fc-black">
      Les missions continuent
    </p>

    <div class="fondoblique"></div>
  </section>
</template>
