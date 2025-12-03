import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhHKConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  label: '繁體中文',
  lang: 'zh-HK',
  title: 'PortAI 文檔',
  description: 'PortAI 項目文檔',
  themeConfig: {
    logoLink: '/zh-HK/ai/docs/',
    nav: [
      { text: '首頁', link: '/zh-HK/ai/docs/' },
      { text: '介紹', link: '/zh-HK/ai/docs/getting-started/introduction' },
      { text: 'API', link: '/zh-HK/ai/docs/api/agent-run' },
    ],

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
          { text: '用戶輸入', link: '/zh-HK/ai/docs/nodes/user-input' },
          { text: '大語言模型', link: '/zh-HK/ai/docs/nodes/llm' },
          { text: '答案', link: '/zh-HK/ai/docs/nodes/answer' },
          { text: '輸出', link: '/zh-HK/ai/docs/nodes/output' },
          { text: '智能代理', link: '/zh-HK/ai/docs/nodes/agent' },
          { text: '工具', link: '/zh-HK/ai/docs/nodes/tools' },
          { text: '問題分類器', link: '/zh-HK/ai/docs/nodes/question-classifier' },
          { text: 'If-Else', link: '/zh-HK/ai/docs/nodes/if-else' },
          { text: '迭代', link: '/zh-HK/ai/docs/nodes/iteration' },
          { text: '循環', link: '/zh-HK/ai/docs/nodes/loop' },
          { text: '代碼', link: '/zh-HK/ai/docs/nodes/code' },
          { text: '模板', link: '/zh-HK/ai/docs/nodes/template' },
          { text: '變量聚合器', link: '/zh-HK/ai/docs/nodes/variable-aggregator' },
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
          { text: '處理錯誤', link: '/zh-HK/ai/docs/build/error-handling' },
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
          { text: '錯誤類型', link: '/zh-HK/ai/docs/debug/error-types' },
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
        items: [
          { text: 'Agent 運行', link: '/zh-HK/ai/docs/api/agent-run' },
        ],
      },
      {
        text: '監控',
        collapsed: true,
        items: [
          { text: '日誌', link: '/zh-HK/ai/docs/monitor/logs' },
          { text: '統計', link: '/zh-HK/ai/docs/monitor/statistics' },
        ],
      },
      {
        text: '知識庫',
        collapsed: true,
        items: [
          { text: '功能簡介', link: '/zh-HK/ai/docs/knowledge-base/introduction' },
          { text: '創建知識庫', link: '/zh-HK/ai/docs/knowledge-base/create' },
          { text: '管理知識庫', link: '/zh-HK/ai/docs/knowledge-base/manage' },
          { text: '元數據', link: '/zh-HK/ai/docs/knowledge-base/metadata' },
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
        items: [
          { text: '簡單聊天機器人', link: '/zh-HK/ai/docs/tutorials/simple-chatbot' },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/yourusername/portai-docs/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁',
    },

    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },

    outline: {
      label: '頁面導航',
    },

    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
  },
}

export const zhHKSearch: DefaultTheme.LocalSearchOptions['locales'] = {
  'zh-HK': {
    translations: {
      button: {
        buttonText: '搜尋文檔',
        buttonAriaLabel: '搜尋文檔',
      },
      modal: {
        noResultsText: '無法找到相關結果',
        resetButtonTitle: '清除查詢條件',
        footer: {
          selectText: '選擇',
          navigateText: '切換',
        },
      },
    },
  },
}
