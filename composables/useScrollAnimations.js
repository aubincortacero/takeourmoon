import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Animations au scroll de toute la page.
// À appeler dans un onMounted, une fois toutes les sections rendues et les polices chargées.
export const useScrollAnimations = ({ reduceMotion = false } = {}) => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  // Les images en lazy-loading changent la hauteur de la page après coup :
  // on recalcule les positions des ScrollTrigger à chaque image chargée.
  let refreshTimer
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    if (img.complete) return
    img.addEventListener('load', () => {
      clearTimeout(refreshTimer)
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150)
    }, { once: true })
  })

  if (reduceMotion) return

  revealTitles()
  revealBlocks()
  revealHatches()
  countUp()
  sectionDetails()

  const isMobile = window.innerWidth < 780
  if (!isMobile) titleDrift()
}

// Grands titres (hors hero, géré par l'intro) : les lettres montent depuis un masque.
const revealTitles = () => {
  document.querySelectorAll('.bigtitle:not(h1)').forEach((title) => {
    SplitText.create(title, {
      type: 'lines, words, chars',
      mask: 'lines',
      linesClass: 'splitline',
      wordsClass: 'splitword',
      reduceWhiteSpace: false,
      autoSplit: true,
      onSplit: (self) => gsap.from(self.chars, {
        yPercent: 110,
        rotate: 6,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.025,
        scrollTrigger: { trigger: title, start: 'top 85%', once: true }
      })
    })
  })
}

// Blocs de texte et images marqués data-reveal : montée + fondu, par groupes.
const revealBlocks = () => {
  const blocks = gsap.utils.toArray('[data-reveal]')
  gsap.set(blocks, { autoAlpha: 0, y: 50 })
  ScrollTrigger.batch(blocks, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.12 })
  })
}

// Les hachures se dessinent de gauche à droite à leur entrée à l'écran.
const revealHatches = () => {
  document.querySelectorAll('.italic-lines').forEach((hatches) => {
    if (hatches.closest('#section-header')) return // gérées par l'intro
    gsap.from(hatches, {
      clipPath: `inset(0px ${hatches.offsetWidth}px 0px 0px)`,
      duration: 1.6,
      ease: 'expo.inOut',
      scrollTrigger: { trigger: hatches, start: 'top 90%', once: true }
    })
  })
}

// Les valeurs [data-count] défilent jusqu'à leur nombre (ex. "384 400 km").
const countUp = () => {
  document.querySelectorAll('[data-count]').forEach((el) => {
    // le nombre (espaces de milliers compris), puis l'unité avec son espace : "384 400" + " km"
    const match = el.textContent.match(/^(\d[\d\s  ]*?(?:,\d+)?)(\s*(?!,\d)[^\d\s].*)$/s)
    if (!match) return
    const target = parseFloat(match[1].replace(/[\s ]/g, '').replace(',', '.'))
    const decimals = (match[1].split(',')[1] || '').length
    const suffix = match[2]
    const format = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    const counter = { value: 0 }
    el.textContent = format.format(0) + suffix
    gsap.to(counter, {
      value: target,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = format.format(counter.value) + suffix }
    })
  })
}

// Détails propres à chaque section.
const sectionDetails = () => {
  // La photo de la Lune tourne doucement au fil du scroll
  gsap.to('#section-artemis .container > .col-right img', {
    rotation: 25,
    ease: 'none',
    scrollTrigger: { trigger: '#section-artemis', start: 'top bottom', end: 'bottom top', scrub: true }
  })

  // Le régolithe flotte en apesanteur
  gsap.to('#section-ressource .col.mid img', {
    y: -30,
    rotation: 4,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  })
}

// Dérive horizontale des titres et zoom de la grande image (desktop).
const titleDrift = () => {
  const tlheader = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-header',
      start: 'center center',
      end: 'bottom -20%',
      scrub: true
    }
  })
  tlheader.to('#section-header h1', { xPercent: 3, duration: 1 })
  tlheader.to('#section-header .container .col-left', { yPercent: -15, duration: 1 }, '-=1')

  const tlmission = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-mission',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
  tlmission.from('#section-mission h2', { xPercent: 5, duration: 1 })

  const tltitreartmemis = gsap.timeline({
    scrollTrigger: {
      trigger: 'section.titre.artemis',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
  tltitreartmemis.to('section.titre.artemis h2', { xPercent: 3, duration: 1 })

  const tltitreressource = gsap.timeline({
    scrollTrigger: {
      trigger: 'section.titre.ressource',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
  tltitreressource.to('section.titre.ressource h2', { xPercent: 3, duration: 1 })

  const tlartemis = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-artemis',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
  tlartemis.from('#section-artemis h2', { xPercent: 5, duration: 1 })

  const tlressource = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-ressource',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
  tlressource.from('#section-ressource h2', { xPercent: 5, duration: 1 })

  const bigimage = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-image',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
  bigimage.to('#section-image .container img', { scale: 1.21, duration: 1 })
}
