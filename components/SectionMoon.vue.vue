<script setup>
const config = useRuntimeConfig()
import moonPoster from '../assets/images/moonposterfull.webp'

 // ✅ Fetch REST API WordPress (page ID 7)
const acf = ref(null)
try {
  const { data: page } = await useFetch(`${config.public.wpApi}/acf/v3/pages/7`)
  acf.value = page.value?.acf
  console.log('OK - Moon');
} catch (error) {
  console.error('Erreur lors de la récupération des données WordPress :', error)
}

const tabs = computed(() =>
  Array.isArray(acf.value?.tableau_des_informations)
    ? acf.value.tableau_des_informations.slice(0) // enlève la première ligne "Mission / État / Année..."
    : []
) 

const articles = computed(() =>
  Array.isArray(acf.value?.minis_articles_artemis)
    ? acf.value.minis_articles_artemis.slice(0) // enlève la première ligne "Mission / État / Année..."
    : []
) 


</script>


<template>
    <section id="section" class="titre artemis">
        <div class="container" id="sectionartemis">
            <div class="col-left">
                <h2 class="bigtitle uppercase font-150 font-thunderbold fc-white" v-html="acf?.grand_titre_colonisation"></h2>
                <div class="fondoblique"></div>
                <div class="scrollbot" hash="#section-artemis">
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
                <div class="italic-lines ">
                    <div class="line" v-for="i in 80" :key="i"></div>
                </div>
            </div>
        </div>
    </section>   
    <section id="section-artemis">
        <div class="container">
            <div class="col-left">
                <h2 class="bigtitle uppercase font-150 font-thunderbold fc-black" v-html="acf?.titre_colonisation"></h2>
                <h3 class="font-50 font-thundermediumitalic fc-black" v-html="acf?.sous_titre_colonisation"></h3>
                <div class="informations-tab" v-for="(tab, index) in tabs" :key="index">      
                                    <div class="uneligne">
                                        <div class="col-left">
                                          <img  :src="tab.icone" :alt="tab.titre_de_linformation" />
                                        </div>
                                        <div class="col-right">
                                            <p class="fc-white font-35 font-thunderbold" v-html="tab.titre_de_linformation"></p>
                                            <p class="fc-white font-25 font-thundermedium" v-html="tab.sous_titre_de_linformation"></p>
                                        </div>
                                    </div>
                </div>
            </div> 
            <div class="col-right">
                <img  :src="moonPoster" alt="La lune" />
            </div>     
        </div> 
        <div class="containerbot" id="sectionartemisarticles">
            <h2 class="bigtitle uppercase font-150 font-thunderbold fc-black" v-html="acf?.le_programme_artemis"></h2>
            <div class="liste-articles">
                <article class="article" v-for="(article, index) in articles" :key="index">
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="article.titre_article_artemis"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="article.texte_article_artemis"></p>
                </article>     
            </div>
        </div>
        <div class="fondoblique"></div> 
    </section>
    <section id="section-image">
        <div class="italic-lines">
          <div class="line" v-for="i in 80" :key="i"></div>
        </div>
        <div class="container">
            <img  src="../assets/images/soustraction-1.webp" alt="cratère lunaire" />
        </div>  
    </section>
</template>


<style>

</style>