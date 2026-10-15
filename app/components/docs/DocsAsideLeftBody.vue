<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

type NavItem = ContentNavigationItem & { defaultOpen?: boolean }

const route = useRoute()
const { sidebarNavigation } = useSubNavigation()

const contentNavVariants = useUIConfig('contentNavigation')

function normalize(value: string): string {
  return value.replace(/\/+$/, '').toLowerCase()
}

function containsRoute(item: NavItem, path: string): boolean {
  if (item.path && normalize(item.path) === path) return true
  return item.children?.some(child => containsRoute(child as NavItem, path)) ?? false
}

// 展开优先级：当前页所在分支 > .navigation.yml 手动值 > 层级规则（二级及更深收起）
function collapseDeep(items: NavItem[], path: string, depth = 1): NavItem[] {
  return items.map((item) => {
    const children = item.children?.length
      ? collapseDeep(item.children as NavItem[], path, depth + 1)
      : item.children

    let defaultOpen: boolean | undefined
    if (children?.length && containsRoute(item, path)) {
      defaultOpen = true
    }
    else if (typeof item.defaultOpen === 'boolean') {
      defaultOpen = item.defaultOpen
    }
    else if (depth >= 2 && children?.length) {
      defaultOpen = false
    }

    return {
      ...item,
      ...(typeof defaultOpen === 'boolean' ? { defaultOpen } : {}),
      ...(children ? { children } : {}),
    }
  })
}

const navigation = computed(() => collapseDeep(sidebarNavigation.value ?? [], normalize(route.path)))

// UContentNavigation 内部是非受控手风琴，展开状态只在挂载时读一次，
// 所以路由变化（含上一页/下一页、重定向）或导航数据后到时必须重建它。
const navigationKey = computed(() => `${route.path}:${sidebarNavigation.value?.length ?? 0}`)
</script>

<template>
  <UContentNavigation
    :key="navigationKey"
    collapsible
    :highlight="contentNavVariants.highlight ?? true"
    :highlight-color="contentNavVariants.highlightColor"
    :variant="contentNavVariants.variant ?? 'link'"
    :color="contentNavVariants.color"
    :navigation="navigation"
  />
</template>
