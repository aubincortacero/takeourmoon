// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.ts
import nodeCrypto from 'node:crypto'
import tsconfigPaths from 'vite-tsconfig-paths'

// Patch si besoin : ajoute createHash au crypto web
// @ts-ignore
if (typeof globalThis.crypto.createHash !== 'function') {
  // @ts-ignore
  globalThis.crypto.createHash = nodeCrypto.createHash
}
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    './assets/css/main.css', 
    './assets/css/fonts.css'
  ],
  runtimeConfig: {
    public: {
      wpApi: process.env.NUXT_PUBLIC_WP_API
    }
  },
  modules: ['@nuxt/image', 'lenis/nuxt'],
  image: {
    domains: ['takeourmoon.com'],
    format: ['webp', 'avif'],
    quality: 80
  },

  vite: {
    plugins: [
      tsconfigPaths()
    ]
  },
  app: {
    head: {
      script: [
        {
          src: "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",
          type: "module"
        }
      ]
    }
  }
})