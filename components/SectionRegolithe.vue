<script setup>
const config = useRuntimeConfig()

// ✅ Fetch REST API WordPress (page ID 7)
const acf = ref(null)
try {
  const { data: page } = await useFetch(`${config.public.wpApi}/acf/v3/pages/7`)
  acf.value = page.value?.acf
  console.log('OK - Regolithe');
} catch (error) {
  console.error('Erreur lors de la récupération des données WordPress :', error)
}

const regolithes = computed(() =>
  Array.isArray(acf.value?.informations_regolithe)
    ? acf.value.informations_regolithe.slice(0) // enlève la première ligne "Mission / État / Année..."
    : []
) 

</script>

<template>
<section id="section" class="titre ressource">
        <div class="container" id="#section-ressourcetitre">
            <div class="col-left">
                <h2 class="bigtitle uppercase font-150 font-thunderbold fc-white" v-html="acf?.titre_ressource"></h2>
                <div class="fondoblique"></div>
                <div class="scrollbot" hash="#section-ressource">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.722" height="46.717" viewBox="0 0 36.722 46.717">
                        <g id="Groupe_41" data-name="Groupe 41" transform="translate(-1383.793 -831.042)">
                            <g id="Tracé_127" data-name="Tracé 127" transform="translate(1385.968 834.399)" fill="none">
                            <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
                            <path d="M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z" stroke="none" fill="#E4E4E4"/>
                            </g> 
                            <g id="Tracé_128" data-name="Tracé 128" transform="translate(1385.968 848.45)" fill="none">
                            <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
                            <path d="M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z" stroke="none" fill="#E4E4E4"/>
                            </g>
                            <g id="Tracé_129" data-name="Tracé 129" transform="translate(1385.968 862.502)" fill="none">
                            <path d="M16.186,15.257-2.175,3.357,2.175-3.357l14.01,9.08L30.2-3.357l4.351,6.713Z" stroke="none"/>
                            <path d="M 16.18560028076172 12.87336826324463 L 31.78061294555664 2.766073226928711 L 29.60512351989746 -0.5905908942222595 L 16.18560028076172 8.106740951538086 L 2.766077995300293 -0.5905908942222595 L 0.5905884504318237 2.766073226928711 L 16.18560028076172 12.87336826324463 M 16.18560028076172 15.25668048858643 L -2.175489664077759 3.356660842895508 L 2.175490379333496 -3.356669187545776 L 16.18560028076172 5.723430633544922 L 30.19571113586426 -3.356669187545776 L 34.54669189453125 3.356660842895508 L 16.18560028076172 15.25668048858643 Z" stroke="none" fill="#E4E4E4"/>
                            </g>
                        </g>
                    </svg>
                </div> 
                <div class="italic-lines white">
                    <div class="line" v-for="i in 80" :key="i"></div>
                </div>
            </div>
        </div>
    </section>   
     
    <section id="section-ressource">
        <h2 class="bigtitle uppercase font-150 font-thunderbold fc-red" v-html="acf?.titre_régolithe"></h2>
        <div class="container">
            <div class="col">
                <article class="col-top">
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[0]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[0]?.texte_info_regolithe"></p>
                </article>
                <article class="col-bot">
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[2]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[2]?.texte_info_regolithe"></p>
                </article>
            </div> 
            <div class="col mid"> 
                <img  :src="acf?.photo_regolithe" alt="régolithe lunaire" />
            </div> 
            <div class="col">
                <article class="col-top">
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[1]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[1]?.texte_info_regolithe"></p>
                </article>
                <article class="col-bot">
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[3]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[3]?.texte_info_regolithe"></p>
                </article>
            </div>
        </div>
    </section>
</template>

<style>

</style>