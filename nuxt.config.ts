// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      wpApi: process.env.NUXT_PUBLIC_WP_API
    }
  },
  modules: ['@nuxt/image'],
  css: ['@/assets/css/main.css', '@/assets/css/fonts.css'],
  image: {
    domains: ['takeourmoon.com'],
    format: ['webp', 'avif'],
    quality: 80
  },
})