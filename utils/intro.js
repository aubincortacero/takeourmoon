import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

// Séquence d'ouverture : rideaux, puis le hero se construit (titre, Lune, citation, hachures).
export const playIntro = ({ reduceMotion = false, onDone = () => {} } = {}) => {
  gsap.registerPlugin(SplitText)

  const isMobile = window.innerWidth < 780
  const curtainOffset = isMobile ? '-230vw' : '-130vw'

  if (reduceMotion) {
    gsap.set('.rideaugauche', { left: curtainOffset })
    gsap.set('.rideaudroite', { right: curtainOffset })
    gsap.set(['.loading', '.logocenter'], { autoAlpha: 0 })
    onDone()
    return
  }

  const title = SplitText.create('#section-header h1', { type: 'lines', mask: 'lines', linesClass: 'splitline', reduceWhiteSpace: false })
  const quote = SplitText.create('#section-header .col-bot p', { type: 'lines', mask: 'lines', linesClass: 'splitline', reduceWhiteSpace: false })
  const hatches = document.querySelector('#section-header .italic-lines')

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: onDone })

  tl.to(['.loading', '.logocenter'], { autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, 0)
    .to('.rideaugauche', { left: curtainOffset, duration: 2, ease: 'power4.inOut' }, 0)
    .to('.rideaudroite', { right: curtainOffset, duration: 2, ease: 'power4.inOut' }, 0)
    .from('#section-header .container .col-left', { scale: 0.6, autoAlpha: 0, rotation: -12, duration: 2 }, 0.7)
    .from(title.lines, { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.9)
    .fromTo('#section-header .col-bot .fondoblique',
      { scaleX: 0, skewX: -20, transformOrigin: 'left center' },
      { scaleX: 1, skewX: -20, duration: 1.4, ease: 'expo.inOut' }, 1)
    .from(quote.lines, { yPercent: 110, duration: 1.2, stagger: 0.1 }, 1.6)
    .from('#section-header > .scrollbot', { autoAlpha: 0, y: -20, duration: 1 }, 1.9)

  if (hatches) {
    tl.from(hatches, { clipPath: `inset(0px ${hatches.offsetWidth}px 0px 0px)`, duration: 1.6, ease: 'expo.inOut' }, 1.1)
  }

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) heroParallax()
}

// La Lune et le titre suivent légèrement la souris, en sens opposés.
const heroParallax = () => {
  const moonX = gsap.quickTo('#section-header model-viewer', 'x', { duration: 1.2, ease: 'power3.out' })
  const moonY = gsap.quickTo('#section-header model-viewer', 'y', { duration: 1.2, ease: 'power3.out' })
  const titleX = gsap.quickTo('#section-header .col-top', 'x', { duration: 1.6, ease: 'power3.out' })
  const titleY = gsap.quickTo('#section-header .col-top', 'y', { duration: 1.6, ease: 'power3.out' })

  window.addEventListener('mousemove', (e) => {
    const nx = e.clientX / window.innerWidth - 0.5
    const ny = e.clientY / window.innerHeight - 0.5
    moonX(nx * 40)
    moonY(ny * 40)
    titleX(nx * -20)
    titleY(ny * -12)
  }, { passive: true })
}
