import type { ContentNavigationItem } from '@nuxt/content'

export type AutoCollapseItem = ContentNavigationItem & { defaultOpen?: boolean }

export function normalizeNavigationPath(value: string): string {
  return value.replace(/\/+$/, '').toLowerCase()
}

export function navigationContainsRoute(item: AutoCollapseItem, path: string): boolean {
  if (item.path && normalizeNavigationPath(item.path) === path) return true
  return item.children?.some(child => navigationContainsRoute(child as AutoCollapseItem, path)) ?? false
}

/**
 * 展开优先级：当前页所在分支 > .navigation.yml 手动值 > 层级规则（二级及更深收起）。
 *
 * `UContentNavigation` 的内部手风琴是非受控的，只在挂载时读一次 `defaultOpen`，
 * 所以路由变化时需要配合 `:key` 重建组件（见调用方）。
 */
export function withAutoCollapse(items: AutoCollapseItem[], path: string, depth = 1): AutoCollapseItem[] {
  return items.map((item) => {
    const children = item.children?.length
      ? withAutoCollapse(item.children as AutoCollapseItem[], path, depth + 1)
      : item.children

    let defaultOpen: boolean | undefined
    if (children?.length && navigationContainsRoute(item, path)) {
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
