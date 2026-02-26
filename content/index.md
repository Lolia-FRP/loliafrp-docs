---
seo:
  title: LoliaFRP 文档
  description: 在这里你可以找到关于 LoliaFRP 的文档
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
LoliaFRP [Documentation]{.text-primary}

#description
在这里你可以找到关于 LoliaFRP 的文档，包括客户端，使用教程，注意事项等等

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  开始阅读
  :::

  :::u-button
  ---
  trailing-icon: i-lucide-arrow-right
  color: neutral
  variant: outline
  size: xl
  to: https://lolia.link
  target: _blank
  ---
  访问官网
  :::

#default
  :::prose-pre
  ---
  code: |
    lolia-cli -t 114:abcdefgjhijklmnopqrstuvwxyz123456
        __          ___       __________  ____        ________    ____
       / /   ____  / (_)___ _/ ____/ __ \/ __ \      / ____/ /   /  _/
      / /   / __ \/ / / __ `/ /_  / /_/ / /_/ /_____/ /   / /    / /  
     / /___/ /_/ / / / /_/ / __/ / _, _/ ____/_____/ /___/ /____/ /   
    /_____/\____/_/_/\__,_/_/   /_/ |_/_/          \____/_____/___/   
                                                                      
    2:25AM INFO <banner/banner.go:17> LoliaFRP-CLI: Nya! LoliaFRP-CLI 0.67.0 启动中
    2:25AM INFO <sub/root.go:213> LoliaFRP-CLI: 已获取到配置文件 隧道名称=MC 联机 使用节点=阿里云杭州-1
    2:25AM INFO <client/service.go:335> LoliaFRP-CLI: 尝试连接到服务器...
    2:25AM INFO <client/service.go:327> LoliaFRP-CLI: [1145141919810] 登录服务器成功, 获取 run id [1145141919810]
    2:25AM INFO <proxy/proxy_manager.go:180> LoliaFRP-CLI: [1145141919810] 添加隧道: [1.abcdefgjhijklmnopqrstuvwxyz123456]
    2:25AM INFO <client/control.go:174> LoliaFRP-CLI: [1145141919810] [1.abcdefgjhijklmnopqrstuvwxyz123456] 成功启动隧道
    2:25AM INFO <client/control.go:205> LoliaFRP-CLI: [1145141919810] [1.abcdefgjhijklmnopqrstuvwxyz123456] 您可通过 114514.com:1145 访问您的服务
  filename: terminal
  ---

  ```bash [terminal]
  lolia-cli -t 114:abcdefgjhijklmnopqrstuvwxyz123456
      __          ___       __________  ____        ________    ____
     / /   ____  / (_)___ _/ ____/ __ \/ __ \      / ____/ /   /  _/
    / /   / __ \/ / / __ `/ /_  / /_/ / /_/ /_____/ /   / /    / /  
   / /___/ /_/ / / / /_/ / __/ / _, _/ ____/_____/ /___/ /____/ /   
  /_____/\____/_/_/\__,_/_/   /_/ |_/_/          \____/_____/___/   
                                                                    
  2:25AM INFO <banner/banner.go:17> LoliaFRP-CLI: Nya! LoliaFRP-CLI 0.67.0 启动中
  2:25AM INFO <sub/root.go:213> LoliaFRP-CLI: 已获取到配置文件 隧道名称=MC 联机 使用节点=阿里云杭州-1
  2:25AM INFO <client/service.go:335> LoliaFRP-CLI: 尝试连接到服务器...
  2:25AM INFO <client/service.go:327> LoliaFRP-CLI: [1145141919810] 登录服务器成功, 获取 run id [1145141919810]
  2:25AM INFO <proxy/proxy_manager.go:180> LoliaFRP-CLI: [1145141919810] 添加隧道: [1.abcdefgjhijklmnopqrstuvwxyz123456]
  2:25AM INFO <client/control.go:174> LoliaFRP-CLI: [1145141919810] [1.abcdefgjhijklmnopqrstuvwxyz123456] 成功启动隧道
  2:25AM INFO <client/control.go:205> LoliaFRP-CLI: [1145141919810] [1.abcdefgjhijklmnopqrstuvwxyz123456] 您可通过 114514.com:1145 访问您的服务
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
为什么选择 LoliaFRP

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: https://lolia.link
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  访问官网
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-server
  ---
  #title
  多节点覆盖

  #description
  由社区贡献者捐赠的国内外多个节点可选，根据您的需求选择最佳服务器位置
  :::

  :::u-page-feature
  ---
  icon: i-lucide-rocket
  ---
  #title
  快速部署

  #description
  下载客户端，填入配置，即可在几分钟内完成内网穿透部署
  :::

  :::u-page-feature
  ---
  icon: i-lucide-users
  ---
  #title
  社区支持

  #description
  活跃的用户社区，遇到问题可以快速获得帮助和解决方案
  :::

  :::u-page-feature
  ---
  icon: i-lucide-headphones
  ---
  #title
  技术支持

  #description
  提供在线客服和文档支持，帮助您解决使用中遇到的各种问题
  :::

  :::u-page-feature
  ---
  icon: i-lucide-smartphone
  ---
  #title
  多平台客户端

  #description
  支持 Windows、Linux、macOS 等多个平台，随时随地进行穿透
  :::

  :::u-page-feature
  ---
  icon: i-lucide-refresh-cw
  ---
  #title
  持续更新

  #description
  由 Lolia Team 持续更新上游 FRPC 版本，不断优化性能和添加独特新功能
  :::
::
