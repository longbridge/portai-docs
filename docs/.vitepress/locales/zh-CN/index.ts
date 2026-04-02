import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { nav } from './nav'
import { search } from './search'
import { sidebar } from './sidebar'
export const zhCNConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  head: [
    ['meta', { property: 'og:url', content: 'https://longportapp.com/zh-CN/ai/docs/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Longbridge | LongbridgeAI 文档' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'LongbridgeAI 是 Longbridge AI 推出的智能 AI 工作流平台，通过可视化节点编排和 API 集成，帮助开发者快速构建、调试和部署 AI 应用。',
      },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://pub.pbkrs.com/files/202211/sJswdGqSX1xDqrES/lonport-seo-img.png' },
    ],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:site_name', content: 'Longbridge | LongbridgeAI 文档' }],
    ['link', { rel: 'canonical', href: 'https://longportapp.com/zh-CN/ai/docs/' }],
  ],
  title: 'LongbridgeAI 文档',
  description:
    'LongbridgeAI 是 Longbridge AI 推出的智能 AI 工作流平台，通过可视化节点编排和 API 集成，帮助开发者快速构建、调试和部署 AI 应用。',
  themeConfig: {
    logoLink: {
      link: '/zh-CN/ai/docs/',
      target: '_self',
    },
    nav: nav('zh-CN'),
    sidebar: sidebar,

    search: {
      provider: 'local',
      options: search,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
}
