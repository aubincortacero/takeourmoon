<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const acf = usePageContent()

const missions = computed(() =>
  Array.isArray(acf.value?.tableau_des_missions) ? acf.value.tableau_des_missions : []
)

const title = computed(() => acf.value?.titre_du_bloc_mission || '')
const subtitle = computed(() => acf.value?.sous_titre_bloc_mission || '')

const isSuccess = (m) => m.resultat_de_la_mission.startsWith('Succès')
const isFailure = (m) => m.resultat_de_la_mission.startsWith('Echec')

// Filtres
const results = [
  { value: 'all', label: 'Toutes' },
  { value: 'success', label: 'Succès' },
  { value: 'failure', label: 'Échecs' }
]
const result = ref('all')
const country = ref('all')

const countries = computed(() => {
  const counts = {}
  missions.value.forEach((m) => { counts[m.etat] = (counts[m.etat] || 0) + 1 })
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count }))
})

const filtered = computed(() => missions.value.filter((m) =>
  (country.value === 'all' || m.etat === country.value) &&
  (result.value === 'all' || (result.value === 'success' ? isSuccess(m) : isFailure(m)))
))

// Compteurs animés
const stats = reactive({ total: 0, success: 0, failure: 0 })
const animateStats = () => {
  const list = missions.value.filter((m) => country.value === 'all' || m.etat === country.value)
  gsap.to(stats, {
    total: list.length,
    success: list.filter(isSuccess).length,
    failure: list.filter(isFailure).length,
    duration: 1.2,
    ease: 'expo.out',
    snap: { total: 1, success: 1, failure: 1 }
  })
}

const table = ref()
let batch = []

// Les lignes montent en fondu, par paquets, à leur entrée dans l'écran
const revealRows = () => {
  batch.forEach((t) => t.kill())
  const rows = table.value.querySelectorAll('.uneligne-row')
  gsap.set(rows, { autoAlpha: 0, y: 30 })
  batch = ScrollTrigger.batch(rows, {
    start: 'top 95%',
    once: true,
    onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.05 })
  })
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

watch([result, country], async () => {
  animateStats()
  await nextTick()
  if (!reduceMotion()) {
    batch.forEach((t) => t.kill())
    const rows = table.value.querySelectorAll('.uneligne-row')
    gsap.fromTo(rows, { autoAlpha: 0, x: -30 }, { autoAlpha: 1, x: 0, duration: 0.6, ease: 'expo.out', stagger: 0.02, overwrite: true })
  }
  ScrollTrigger.refresh()
})

onMounted(async () => {
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)

  if (reduceMotion()) {
    Object.assign(stats, { total: missions.value.length, success: missions.value.filter(isSuccess).length, failure: missions.value.filter(isFailure).length })
    return
  }

  revealRows()
  ScrollTrigger.create({ trigger: '.missions-stats', start: 'top 90%', once: true, onEnter: animateStats })
})
</script>

<template>
  <section id="section-mission">
    <!-- Titre principal -->
    <h2 class="bigtitle uppercase font-150 font-thunderbold fc-black" v-html="title"></h2>

    <div class="container">
      <!-- Sous-titre -->
      <h3 class="font-50 font-thundermediumitalic fc-black" v-html="subtitle" data-reveal></h3>

      <!-- Chiffres clés et filtres -->
      <div class="missions-intro" data-reveal>
        <dl class="missions-stats">
          <div class="missions-stat">
            <dt class="font-25 font-thundermediumitalic">Missions</dt>
            <dd class="font-thunderbold">{{ Math.round(stats.total) }}</dd>
          </div>
          <div class="missions-stat">
            <dt class="font-25 font-thundermediumitalic">Succès</dt>
            <dd class="font-thunderbold">{{ Math.round(stats.success) }}</dd>
          </div>
          <div class="missions-stat">
            <dt class="font-25 font-thundermediumitalic">Échecs</dt>
            <dd class="font-thunderbold">{{ Math.round(stats.failure) }}</dd>
          </div>
        </dl>

        <div class="missions-filters">
          <div class="chips" role="group" aria-label="Filtrer par résultat">
            <button
              v-for="r in results"
              :key="r.value"
              type="button"
              class="chip font-20 font-thundermedium"
              :class="{ 'is-active': result === r.value }"
              :aria-pressed="result === r.value"
              @click="result = r.value"
            ><span>{{ r.label }}</span></button>
          </div>
          <div class="chips" role="group" aria-label="Filtrer par pays">
            <button
              type="button"
              class="chip font-20 font-thundermedium"
              :class="{ 'is-active': country === 'all' }"
              :aria-pressed="country === 'all'"
              @click="country = 'all'"
            ><span>Tous les pays</span></button>
            <button
              v-for="c in countries"
              :key="c.name"
              type="button"
              class="chip font-20 font-thundermedium"
              :class="{ 'is-active': country === c.name }"
              :aria-pressed="country === c.name"
              @click="country = c.name"
            ><span>{{ c.name }} <sup>{{ c.count }}</sup></span></button>
          </div>
        </div>
      </div>

      <!-- Tableau des missions -->
      <div ref="table" class="tableau-missions">
        <div class="uneligne uneligne-head">
          <div class="unevaleur"><p class="font-20">Mission</p></div>
          <div class="unevaleur"><p class="font-20">État</p></div>
          <div class="unevaleur"><p class="font-20">Année</p></div>
          <div class="unevaleur"><p class="font-20">Type de Mission</p></div>
          <div class="unevaleur"><p class="font-20">Résultat de la Mission</p></div>
        </div>
        <div class="line"></div>

        <template v-if="filtered.length">
          <div
            v-for="mission in filtered"
            :key="mission.mission"
            class="uneligne uneligne-row"
            :class="{ 'is-success': isSuccess(mission), 'is-failure': isFailure(mission) }"
          >
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
        </template>

        <!-- Fallback si aucun résultat -->
        <p v-else class="missions-empty font-25 font-thundermediumitalic">Aucune mission pour ce filtre.</p>
      </div>
    </div>

    <!-- Texte de fin, qui continue... à l'infini -->
    <Marquee class="histories font-50 font-thundermediumitalic fc-black" text="Les missions continuent" :repeat="5" />

    <div class="fondoblique"></div>
  </section>
</template>
