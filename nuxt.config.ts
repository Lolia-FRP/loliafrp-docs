// https://nuxt.com/docs/api/configuration/nuxt-config
// Docus already includes: @nuxt/ui, @nuxt/content, @nuxt/image, nuxt-og-image,
// nuxt-llms, @nuxtjs/mcp-toolkit, @nuxtjs/robots
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '~/assets/css/comfortaa-fonts.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  }
})
