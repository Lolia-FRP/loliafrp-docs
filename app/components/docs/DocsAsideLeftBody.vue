<script setup lang="ts">
const route = useRoute()
const { sidebarNavigation } = useSubNavigation()

const contentNavVariants = useUIConfig('contentNavigation')

const navigation = computed(() => withAutoCollapse(sidebarNavigation.value ?? [], normalizeNavigationPath(route.path)))

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
