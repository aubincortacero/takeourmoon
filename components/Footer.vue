<script setup>
const acf = usePageContent()
</script>
<template>

<section class="titre">
    <div class="container">
        <div class="col-left">
            <div class="fondoblique"></div>
            <div class="italic-lines">
                <div class="line" v-for="i in 80" :key="i"></div>
            </div>
        </div>
    </div>
</section>    

<footer> 
    <Marquee class="footer-marquee uppercase font-150 font-thunderbold" text="Take our moon" :repeat="4" :speed="0.6" reverse />
    <div class="container">
        <div class="col">
            <h2 class="bigtitle uppercase font-150 font-thunderbold fc-black" v-html="acf?.grand_titre"></h2>
        </div>  
        <div class="col"> 
            <a class="font-20 font-thunderbolditalic fc-black" href="#section-header">Take Our Moon</a>
            <a class="font-20 font-thundermediumitalic fc-black secondary" href="#section-mission">Les missions lunaires</a>
            <a class="font-20 font-thunderbolditalic fc-black" href="#sectionartemis">Coloniser la lune</a>
            <a class="font-20 font-thundermediumitalic fc-black secondary" href="#section-artemis">Le doigt, heu… la lune</a>
            <a class="font-20 font-thundermediumitalic fc-black secondary" href="#sectionartemisarticles">Le programme Artemis</a>
            <a class="font-20 font-thunderbolditalic fc-black" href="#section-ressourcetitre">Une ressource incroyable</a>
            <a class="font-20 font-thundermediumitalic fc-black secondary" href="#section-ressource">Le régolite lunaire</a>
        </div> 
        <div class="col"> 
            <!-- <a class="font-20 font-thunderbolditalic fc-black" href="/mentions-legales/">Mentions légales</a> -->
        </div> 
        <div class="col">
            <a class="back-to-top font-20 font-thunderbolditalic fc-black" href="#section-header">Retour en orbite ↑</a>
        </div>
    </div> 
    <div class="containermentions font-15 font-thundermediumitalic fc-black">
        ©2021TAKEOURMOON propulsé par <a style="color : black;" target="_blank" rel="noopener" href="https://aubincortacero.fr">Aubin Cortacero </a>
    </div>  
</footer>
</template>

