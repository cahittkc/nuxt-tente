// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer : {
    port : 8080
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
  ],
})