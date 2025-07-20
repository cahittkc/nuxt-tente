// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devServer : {
    port : 8080
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./assests/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['vue3-carousel-nuxt'],
})