export default defineAppConfig({
  ui: {
    colors: {
      primary: 'pink',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'LoliaFRP 文档'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Lolia-FRP',
      'target': '_blank',
      'aria-label': 'GitHub 仓库'
    }]
  },
  footer: {
    credits: `基于 Nuxt UI 构建 • © ${new Date().getFullYear()} Lolia Team`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Lolia-FRP',
      'target': '_blank',
      'aria-label': '在 GitHub 查看 Lolia FRP'
    }]
  }
})
