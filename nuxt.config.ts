// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    './assets/css/main.css', 
    './assets/css/fonts.css'
  ],
  runtimeConfig: {
    public: {
      // surchargé par NUXT_PUBLIC_WP_API (voir .env.example)
      wpApi: ''
    }
  },
  modules: ['@nuxt/image', 'lenis/nuxt'],
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
      script: [
        {
          src: "https://unpkg.com/@google/model-viewer@4.0.0/dist/model-viewer.min.js",
          type: "module"
        }
      ]
    }
  }
})
