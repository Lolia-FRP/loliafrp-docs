// https://nuxt.com/docs/api/configuration/nuxt-config
// Docus already includes: @nuxt/ui, @nuxt/content, @nuxt/image, nuxt-og-image,
// nuxt-llms, @nuxtjs/mcp-toolkit, @nuxtjs/robots

import { fileURLToPath } from "node:url";
import footnoteI18n from "./markdown/footnote-i18n";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/css/comfortaa-fonts.css"],

  compatibilityDate: "2024-07-11",

  // 字体卡preview
  // 在 .env 里设 NUXT_FONTS_OFFLINE=true 可只在本地禁用它们，
  // 改由可达的 bunny / fontsource 等源解析 Public Sans，构建时字体照常下载并自托管。
  // 不设该变量时行为不变，生产仍走 Google。
  ...(process.env.NUXT_FONTS_OFFLINE === "true"
    ? {
        fonts: {
          providers: {
            google: false,
            googleicons: false,
          },
        },
      }
    : {}),

  // 脚注 `[^1]` 的标题与返回链接默认是英文，会以 "Footnotes" 出现在右侧目录里，
  // 由 markdown/footnote-i18n.ts 改成中文（注意不能改 mdc.rehype.options，
  // @nuxt/content 解析时会把那个对象整个替换掉）。
  content: {
    build: {
      markdown: {
        rehypePlugins: {
          "footnote-i18n": {
            instance: footnoteI18n,
            // @nuxtjs/mdc 会按 `src || 插件名` 生成运行时 import，
            // 不写 src 就会去找名为 "footnote-i18n" 的 npm 包。
            src: fileURLToPath(new URL("./markdown/footnote-i18n.ts", import.meta.url)),
            options: {
              label: "参考",
              backLabel: "返回正文",
            },
          },
        },
      },
    },
  },

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
