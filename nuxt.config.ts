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
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app :{
    head : {
      title : 'Legendary Tente',
      meta : [
        { charset : 'utf-8' },
        { name : 'viewport', content : 'width=device-width, initial-scale=1' },
        { name : 'format-detection', content : 'telephone=no' }
      ],
      link : [
        { rel : 'icon', type : 'image/x-icon', href : '/favicon.ico' }
      ]
    }
  } 
})