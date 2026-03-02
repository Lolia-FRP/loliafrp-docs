// https://nuxt.com/docs/api/configuration/nuxt-config
// Docus already includes: @nuxt/ui, @nuxt/content, @nuxt/image, nuxt-og-image,
// nuxt-llms, @nuxtjs/mcp-toolkit, @nuxtjs/robots
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/css/comfortaa-fonts.css"],

  compatibilityDate: "2024-07-11",

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  site: {
    url: "https://docs.lolia.link",
    name: "LoliaFRP 文档",
  },

  llms: {
    domain: "https://docs.lolia.link",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  }
});
