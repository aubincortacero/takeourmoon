<!-- app.vue (ou pages/missions.vue si ton routing est OK) -->
<script setup>
const { public: { wpApi } } = useRuntimeConfig()
const PAGE_ID = 7
 
// Pas de ref ici : page est un objet JSON pur
const page = await $fetch(`${wpApi}/acf/v3/pages/${PAGE_ID}`)

// Le repeater commence par une ligne d'en-tête -> on la retire
const missions = Array.isArray(page?.acf?.tableau_des_missions) ? page.acf.tableau_des_missions.slice(1) : []
</script>

<template>
  <main class="p-8">
    <h1 class="text-2xl font-bold mb-4">Missions lunaires</h1>

    <ul v-if="missions.length" class="grid gap-4 md:grid-cols-2">
      <li v-for="(m, i) in missions" :key="i" class="border rounded p-4">
        <h2 class="font-semibold">{{ m.mission }}</h2>
        <div class="text-sm text-gray-700">
          {{ m.etat }} • {{ m.annee }} • {{ m.type_de_mission }} • {{ m.resultat_de_la_mission }}
        </div>
      </li>
    </ul>

    <p v-else class="text-gray-600">Aucune mission (vérifie l’ID/ACF).</p>

    <details class="mt-6">
      <summary>Debug</summary>
      <pre class="text-xs">{{ page }}</pre>
    </details>
  </main>
</template>