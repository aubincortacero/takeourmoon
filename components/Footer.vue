
<script setup>
const config = useRuntimeConfig()
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

 // état largeur fenêtre
const windowWidth = ref(0)
const updateWidth = () => (windowWidth.value = window.innerWidth)

// ✅ Fetch REST API WordPress (page ID 7)
const acf = ref(null)
try {
  const { data: page } = await useFetch(`${config.public.wpApi}/acf/v3/pages/7`)
  acf.value = page.value?.acf
  console.log('Page data SectionHeader :', acf.value?.grand_titre);
} catch (error) {
  console.error('Erreur lors de la récupération des données WordPress :', error)
}

onMounted( async () => {

      await nextTick()

    gsap.registerPlugin(ScrollTrigger) 

    updateWidth()
    window.addEventListener('resize', updateWidth)
    const isMobile = windowWidth.value < 780

      if(!isMobile){   
        //Animation, don't forget scroller : "Main -   #scroll-page-container    - locomotive smooth scroll"
        const tlheader = gsap.timeline({
                scrollTrigger: {
                trigger: "#section-header", 

                start: "center center",
                end: "bottom top", 
                scrub: true
            }
        });  
        tlheader.to("#section-header h1", {xPercent: 3, duration: 1});

        const tlmission = gsap.timeline({
                scrollTrigger: {
                trigger: "#section-mission", 
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
        tlmission.from("#section-mission h2", {xPercent: 5, duration: 1});

        const tltitreartmemis = gsap.timeline({
                scrollTrigger: {
                trigger: "#section.titre.artemis", 
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });   
        tltitreartmemis.to("#section.titre.artemis h2", {xPercent: 3, duration: 1});

        const tltitreressource = gsap.timeline({
                scrollTrigger: {
                trigger: "#section.titre.ressource", 
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });  
        tltitreressource.to("#section.titre.ressource h2", {xPercent: 3, duration: 1});
    
        const tlartemis = gsap.timeline({
                scrollTrigger: {
                trigger: "#section-artemis", 
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }); 
        tlartemis.from("#section-artemis h2", {xPercent: 5, duration: 1});

        const tlressource = gsap.timeline({
                scrollTrigger: {
                trigger: "#section-ressource", 
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }); 
        tlressource.from("#section-ressource h2", {xPercent: 5, duration: 1});


        const bigimage = gsap.timeline({
                scrollTrigger: {
                trigger: "#section-image", 
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });    
        bigimage.to("#section-image .container img", {scale: 1.21, duration: 1});
    } 
});

</script>
<template>

<section id="section" class="titre">
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

        </div>
    </div> 
    <div class="containermentions font-15 font-thundermediumitalic fc-black">
        ©2021TAKEOURMOON propulsé par <a style="color : black;" target="_blank" href="https://aubincortacero.fr">Aubin Cortacero </a>
    </div>  
</footer>
</template>

