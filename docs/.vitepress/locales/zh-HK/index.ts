import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { nav } from './nav'
import { search } from './search'
import { sidebar } from './sidebar'
export const zhHKConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  head: [
    ['meta', { property: 'og:url', content: 'https://longportapp.com/zh-HK/ai/docs/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Longbridge | LongbridgeAI 文檔' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'LongbridgeAI 是 Longbridge AI 推出的智能 AI 工作流平台，通過可視化節點編排和 API 集成，幫助開發者快速構建、調試和部署 AI 應用。',
      },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://pub.pbkrs.com/files/202211/sJswdGqSX1xDqrES/lonport-seo-img.png' },
    ],
    ['meta', { property: 'og:locale', content: 'zh-HK' }],
    ['meta', { property: 'og:site_name', content: 'Longbridge | LongbridgeAI 文檔' }],
    ['link', { rel: 'canonical', href: 'https://longportapp.com/zh-HK/ai/docs/' }],
  ],
  title: 'LongbridgeAI 文檔',
  description:
    'LongbridgeAI 是 Longbridge AI 推出的智能 AI 工作流平台，通過可視化節點編排和 API 集成，幫助開發者快速構建、調試和部署 AI 應用。',

  themeConfig: {
    logoLink: {
      link: '/zh-HK/ai/docs/',
      target: '_self',
    },
    nav: nav('zh-HK'),
    sidebar: sidebar,

    search: {
      provider: 'local',
      options: search,
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },

    outline: {
      label: '頁面導航',
    },

    notFound: {
      title: '頁面未找到',
      quote: '但如果你不改變方向，並且繼續尋找，你可能最終會到達你所前往的地方。',
      linkLabel: '前往首頁',
      linkText: '帶我回首頁',
    },

    langMenuLabel: '多語言',
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '菜單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    skipToContentLabel: '跳轉到內容',
  },
}
