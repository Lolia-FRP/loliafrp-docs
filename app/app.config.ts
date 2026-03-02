export default defineAppConfig({
  ui: {
    colors: {
      primary: "pink",
      neutral: "slate",
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted",
      },
    },
  },
  docus: {
    locale: "zh-CN",
  },
  seo: {
    title: "LoliaFRP Docs",
    description: "LoliaFRP 的官方文档",
  },
  header: {
    title: "LoliaFRP Docs",
    logo: {
      light: "/icons/logo-text.svg",
      dark: "/logo/logo-light.svg",
      alt: "LoliaFRP Logo",
      favicon: "/favicon.ico",
    },
  },
});
