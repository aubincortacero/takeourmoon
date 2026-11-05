// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    './assets/css/main.css', 
    './assets/css/fonts.css',
    './assets/css/modern.css',
    './assets/css/mobile.css'
  ],
  modules: ['@nuxt/image', 'lenis/nuxt'],
  // Contenu 100 % statique : la page est générée au build et servie telle quelle par le CDN
  routeRules: {
    '/': { prerender: true }
  },
  image: {
    domains: ['takeourmoon.com'],
    format: ['webp', 'avif'],
    quality: 80
  },
  vue: {
    compilerOptions: {
      // <model-viewer> est un web component chargé par script
      isCustomElement: (tag) => tag === 'model-viewer'
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://unpkg.com', crossorigin: '' }
      ],
      script: [
        {
          src: "https://unpkg.com/@google/model-viewer@4.0.0/dist/model-viewer.min.js",
          type: "module"
        }
      ]
    }
  }
})
