<script setup>
const acf = usePageContent()

const tabs = computed(() =>
  Array.isArray(acf.value?.tableau_des_informations) ? acf.value.tableau_des_informations : []
)

const articles = computed(() =>
  Array.isArray(acf.value?.minis_articles_artemis) ? acf.value.minis_articles_artemis : []
)

</script>


<template>
    <section class="titre artemis">
        <div class="container" id="sectionartemis">
            <div class="col-left">
                <h2 class="bigtitle uppercase font-150 font-thunderbold fc-white" v-html="acf?.grand_titre_colonisation"></h2>
                <div class="fondoblique"></div>
                <ScrollBot href="#section-artemis" label="Défiler vers la section Artemis" color="#E4E4E4" />
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
                <h3 class="font-50 font-thundermediumitalic fc-black" v-html="acf?.sous_titre_colonisation" data-reveal></h3>
                <div class="informations-tab" v-for="(tab, index) in tabs" :key="index">      
                                    <div class="uneligne" data-reveal>
                                        <div class="col-left">
                                          <img :src="tab.icone" alt="" loading="lazy" decoding="async" />
                                        </div>
                                        <div class="col-right">
                                            <p class="fc-white font-35 font-thunderbold" v-html="tab.titre_de_linformation"></p>
                                            <p class="fc-white font-25 font-thundermedium" v-html="tab.sous_titre_de_linformation" data-count></p>
                                        </div>
                                    </div>
                </div>
            </div> 
            <div class="col-right">
                <img src="/images/moonposterfull.webp" alt="La lune" loading="lazy" decoding="async" />
            </div>     
        </div> 
        <div class="containerbot" id="sectionartemisarticles">
            <h2 class="bigtitle uppercase font-150 font-thunderbold fc-black" v-html="acf?.le_programme_artemis"></h2>
            <div class="liste-articles">
                <article class="article" v-for="(article, index) in articles" :key="index" data-reveal>
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
            <img src="/images/Soustraction.webp" alt="cratère lunaire" decoding="async" />
        </div>  
    </section>
</template>
