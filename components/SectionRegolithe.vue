<script setup>
const acf = usePageContent()

const regolithes = computed(() =>
  Array.isArray(acf.value?.informations_regolithe) ? acf.value.informations_regolithe : []
)

</script>

<template>
<section class="titre ressource">
        <div class="container" id="section-ressourcetitre">
            <div class="col-left">
                <h2 class="bigtitle uppercase font-150 font-thunderbold fc-white" v-html="acf?.titre_ressource"></h2>
                <div class="fondoblique"></div>
                <ScrollBot href="#section-ressource" label="Défiler vers le régolite lunaire" color="#E4E4E4" />
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
                <article class="col-top" data-reveal>
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[0]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[0]?.texte_info_regolithe"></p>
                </article>
                <article class="col-bot" data-reveal>
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[2]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[2]?.texte_info_regolithe"></p>
                </article>
            </div> 
            <div class="col mid"> 
                <img :src="acf?.photo_regolithe" alt="régolithe lunaire" loading="lazy" decoding="async" />
            </div> 
            <div class="col">
                <article class="col-top" data-reveal>
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[1]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[1]?.texte_info_regolithe"></p>
                </article>
                <article class="col-bot" data-reveal>
                    <h3 class="font-50 font-thundermediumitalic fc-black" v-html="regolithes[3]?.titre_info_regolithe"></h3>
                    <p class="font-20 font-thunder fc-black" v-html="regolithes[3]?.texte_info_regolithe"></p>
                </article>
            </div>
        </div>
    </section>
</template>
