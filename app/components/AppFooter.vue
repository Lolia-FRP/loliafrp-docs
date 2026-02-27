<script setup lang="ts">
const columns = [
  {
    label: '产品',
    children: [
      {
        label: '首页',
        to: 'https://lolia.link'
      },
      {
        label: '文档',
        to: '/'
      },
      {
        label: '控制台',
        to: 'https://dash.lolia.link'
      }
    ]
  },
  {
    label: '社区',
    children: [
      {
        label: 'GitHub',
        to: 'https://github.com/Lolia-FRP',
        target: '_blank'
      },
      {
        label: 'QQ 交流群',
        to: 'https://qm.qq.com/q/rjjo1VYLNm',
        target: '_blank'
      }
    ]
  },
  {
    label: '关于',
    children: [
      {
        label: '服务条款',
        to: 'https://terms.lolia.link/terms'
      },
      {
        label: '隐私政策',
        to: 'https://terms.lolia.link/privacy'
      }
    ]
  }
]
</script>

<template>
  <USeparator
    icon="i-custom-logo"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns" />
      </UContainer>
    </template>

    <template #left>
      <div class="flex flex-col gap-1">
        <p class="text-muted text-sm">
          © {{ new Date().getFullYear() }} Lolia FRP • "新一代" 内网穿透提供商
        </p>
        <p class="text-muted text-xs">
          Lolia Team & 安锐普世（北京）科技有限公司 & LOLINYA TECHNOLOGY LTD
        </p>
        <div class="flex gap-3 items-center text-xs text-muted">
          <a
            href="https://www.内网穿透.中国"
            target="_blank"
            rel="noopener"
          >China Frp Union 识别码: BM49XD0O</a>
        </div>
        <div class="flex gap-3 items-center text-xs text-muted">
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener"
          >京ICP备2026004972号-2</a>
        </div>
      </div>
    </template>

    <template #right>
      <UButton
        to="https://github.com/Lolia-FRP"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="在 GitHub 查看 Lolia FRP"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
