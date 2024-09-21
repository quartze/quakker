// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  "imports": {
    dirs: ['types']
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pl'
      },
      charset: 'utf-8',
      meta: [
       { name: 'description', content: "Join Quakker, the platform that lets you share your thoughts, moments, and connect with people worldwide."}
    ]
    },
  },

  modules: ['@pinia/nuxt'],
  
})