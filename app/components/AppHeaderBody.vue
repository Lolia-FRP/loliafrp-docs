<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const appNavigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const { subNavigationMode } = useSubNavigation()

const contentNavVariants = useUIConfig('contentNavigation')

// 子导航模式（appConfig.navigation.sub）下只展示一级栏目、点击跳到栏目首页，没有可折叠的分组；
// 其他情况与左侧栏保持一致：自动展开当前页所在分支，二级及更深的分组默认收起。
const navigation = computed<ContentNavigationItem[]>(() => {
  const nav = appNavigation?.value || []
  if (subNavigationMode.value) {
    return nav.map(({ children, ...item }) => ({
      ...item,
      path: children?.length ? getFirstPagePath({ ...item, children }) : item.path,
    }))
  }
  return withAutoCollapse(nav, normalizeNavigationPath(route.path))
})

// 与 DocsAsideLeftBody 同理：手风琴是非受控的，路由变化后需要重建才能重算展开状态。
const navigationKey = computed(() => `${route.path}:${navigation.value.length}`)
</script>

<template>
  <UContentNavigation
    :key="navigationKey"
    :collapsible="!subNavigationMode"
    :highlight="contentNavVariants.highlight ?? true"
    :highlight-color="contentNavVariants.highlightColor"
    :variant="contentNavVariants.variant ?? 'link'"
    :color="contentNavVariants.color"
    :navigation="navigation"
  />
</template>
