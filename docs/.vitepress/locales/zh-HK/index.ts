import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { nav } from './nav'
import { search } from './search'
// import { sidebar } from './sidebar'
export const zhHKConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  head: [
    ['meta', { property: 'og:url', content: 'https://longportapp.com/zh-HK/ai/docs/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Longbridge | PortAI 文檔' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'PortAI 是 Longbridge AI 推出的智能 AI 工作流平台，通過可視化節點編排和 API 集成，幫助開發者快速構建、調試和部署 AI 應用。',
      },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://pub.pbkrs.com/files/202211/sJswdGqSX1xDqrES/lonport-seo-img.png' },
    ],
    ['meta', { property: 'og:locale', content: 'zh-HK' }],
    ['meta', { property: 'og:site_name', content: 'Longbridge | PortAI 文檔' }],
    ['link', { rel: 'canonical', href: 'https://longportapp.com/zh-HK/ai/docs/' }],
  ],
  title: 'PortAI 文檔',
  description:
    'PortAI 是 Longbridge AI 推出的智能 AI 工作流平台，通過可視化節點編排和 API 集成，幫助開發者快速構建、調試和部署 AI 應用。',

  themeConfig: {
    logoLink: {
      link: '/zh-HK/ai/docs/',
      target: '_self',
    },
    // sidebar: sidebar,
    nav: nav('zh-HK'),
    sidebar: [
      {
        text: '入門',
        collapsed: true,
        items: [
          { text: '介紹', link: '/zh-HK/ai/docs/getting-started/introduction' },
          { text: '核心概念', link: '/zh-HK/ai/docs/getting-started/core-concepts' },
        ],
      },
      {
        text: '節點',
        collapsed: true,
        items: [
          { text: '開始', link: '/zh-HK/ai/docs/nodes/start' },
          { text: '大語言模型', link: '/zh-HK/ai/docs/nodes/llm' },
          { text: '答案', link: '/zh-HK/ai/docs/nodes/answer' },
          { text: '結束', link: '/zh-HK/ai/docs/nodes/output' },
          { text: '智能代理', link: '/zh-HK/ai/docs/nodes/agent' },
          { text: '工具', link: '/zh-HK/ai/docs/nodes/tools' },
          { text: '問題分類器', link: '/zh-HK/ai/docs/nodes/question-classifier' },
          { text: 'If-Else', link: '/zh-HK/ai/docs/nodes/if-else' },
          { text: '迭代', link: '/zh-HK/ai/docs/nodes/iteration' },
          { text: '循環', link: '/zh-HK/ai/docs/nodes/loop' },
          { text: '代碼', link: '/zh-HK/ai/docs/nodes/code' },
          { text: '模板', link: '/zh-HK/ai/docs/nodes/template' },
          { text: '分支聚合器', link: '/zh-HK/ai/docs/nodes/branch-aggregator' },
          { text: '變量賦值器', link: '/zh-HK/ai/docs/nodes/variable-assigner' },
          { text: '參數提取器', link: '/zh-HK/ai/docs/nodes/parameter-extractor' },
          { text: 'HTTP 請求', link: '/zh-HK/ai/docs/nodes/http-request' },
        ],
      },
      {
        text: '構建',
        collapsed: true,
        items: [
          { text: '快捷鍵', link: '/zh-HK/ai/docs/build/shortcuts' },
          { text: '流程邏輯', link: '/zh-HK/ai/docs/build/flow-logic' },
          { text: '錯誤處理', link: '/zh-HK/ai/docs/build/error-handling' },
          { text: '使用 MCP 工具', link: '/zh-HK/ai/docs/build/mcp-tools' },
          { text: '版本控制', link: '/zh-HK/ai/docs/build/version-control' },
        ],
      },
      {
        text: '調試',
        collapsed: true,
        items: [
          { text: '單節點', link: '/zh-HK/ai/docs/debug/single-node' },
          { text: '工作流', link: '/zh-HK/ai/docs/debug/workflow' },
          { text: '運行歷史', link: '/zh-HK/ai/docs/debug/run-history' },
        ],
      },
      {
        text: '發布',
        collapsed: true,
        items: [
          { text: '分享你的 AI 應用', link: '/zh-HK/ai/docs/publish/share' },
          { text: 'Web App', link: '/zh-HK/ai/docs/publish/web-app' },
        ],
      },
      {
        text: 'API',
        collapsed: true,
        items: [{ text: 'Agent 運行', link: '/zh-HK/ai/docs/api/agent-run' }],
      },
      {
        text: '知識庫',
        collapsed: true,
        items: [
          { text: '功能簡介', link: '/zh-HK/ai/docs/knowledge-base/introduction' },
          { text: '創建知識庫', link: '/zh-HK/ai/docs/knowledge-base/create' },
          { text: '管理知識庫', link: '/zh-HK/ai/docs/knowledge-base/manage' },
          { text: '召回測試', link: '/zh-HK/ai/docs/knowledge-base/recall-test' },
        ],
      },
      {
        text: '工作區',
        collapsed: true,
        items: [
          { text: '管理應用', link: '/zh-HK/ai/docs/workspace/manage-apps' },
          { text: '管理成員', link: '/zh-HK/ai/docs/workspace/manage-members' },
          { text: '個人設置', link: '/zh-HK/ai/docs/workspace/personal-settings' },
        ],
      },
      {
        text: '教程',
        collapsed: true,
        items: [{ text: '簡單聊天機器人', link: '/zh-HK/ai/docs/tutorials/simple-chatbot' }],
      },
    ],

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
