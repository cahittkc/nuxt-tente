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
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/sitemap'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      title: 'Legendary Tente',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180x180.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // Sitemap configuration
  sitemap: {
    // Basic sitemap configuration
    // The module will automatically generate sitemap for all pages
  } 
})