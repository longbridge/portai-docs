import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PortAI Docs",
  description: "PortAI Documentation",
  lang: "en",

  // Multi-language support
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "PortAI Docs",
      description: "PortAI Documentation",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/getting-started" },
          { text: "API", link: "/api/introduction" },
        ],

        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "Getting Started", link: "/guide/getting-started" },
              { text: "Configuration", link: "/guide/configuration" },
              { text: "Deployment", link: "/guide/deployment" },
            ],
          },
          {
            text: "API Reference",
            items: [
              { text: "Introduction", link: "/api/introduction" },
              { text: "Agent run API", link: "/api/agent_run" },
            ],
          },
        ],

        editLink: {
          pattern:
            "https://github.com/yourusername/portai-docs/edit/main/docs/:path",
          text: "Edit this page on GitHub",
        },

        lastUpdated: {
          text: "Last updated",
          formatOptions: {
            dateStyle: "short",
            timeStyle: "medium",
          },
        },
      },
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      title: "PortAI 文档",
      description: "PortAI 项目文档",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh-CN/" },
          { text: "指南", link: "/zh-CN/guide/getting-started" },
          { text: "API", link: "/zh-CN/api/introduction" },
        ],

        sidebar: [
          {
            text: "指南",
            items: [
              { text: "快速开始", link: "/zh-CN/guide/getting-started" },
              { text: "配置说明", link: "/zh-CN/guide/configuration" },
              { text: "部署", link: "/zh-CN/guide/deployment" },
            ],
          },
          {
            text: "API 参考",
            items: [
              { text: "介绍", link: "/zh-CN/api/introduction" },
              { text: "运行 Agent API", link: "/zh-CN/api/agent_run" },
            ],
          },
        ],

        editLink: {
          pattern:
            "https://github.com/yourusername/portai-docs/edit/main/docs/:path",
          text: "在 GitHub 上编辑此页",
        },

        lastUpdated: {
          text: "最后更新于",
          formatOptions: {
            dateStyle: "short",
            timeStyle: "medium",
          },
        },

        docFooter: {
          prev: "上一页",
          next: "下一页",
        },

        outline: {
          label: "页面导航",
        },

        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
      },
    },
    "zh-HK": {
      label: "繁體中文",
      lang: "zh-HK",
      title: "PortAI 文檔",
      description: "PortAI 項目文檔",
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-HK/" },
          { text: "指南", link: "/zh-HK/guide/getting-started" },
          { text: "API", link: "/zh-HK/api/introduction" },
        ],

        sidebar: [
          {
            text: "指南",
            items: [
              { text: "快速開始", link: "/zh-HK/guide/getting-started" },
              { text: "配置說明", link: "/zh-HK/guide/configuration" },
              { text: "部署", link: "/zh-HK/guide/deployment" },
            ],
          },
          {
            text: "API 參考",
            items: [
              { text: "介紹", link: "/zh-HK/api/introduction" },
              { text: "運行 Agent API", link: "/zh-HK/api/agent_run" },
            ],
          },
        ],

        editLink: {
          pattern:
            "https://github.com/yourusername/portai-docs/edit/main/docs/:path",
          text: "在 GitHub 上編輯此頁",
        },

        lastUpdated: {
          text: "最後更新於",
          formatOptions: {
            dateStyle: "short",
            timeStyle: "medium",
          },
        },

        docFooter: {
          prev: "上一頁",
          next: "下一頁",
        },

        outline: {
          label: "頁面導航",
        },

        returnToTopLabel: "回到頂部",
        sidebarMenuLabel: "選單",
        darkModeSwitchLabel: "主題",
        lightModeSwitchTitle: "切換到淺色模式",
        darkModeSwitchTitle: "切換到深色模式",
      },
    },
  },

  themeConfig: {
    // Global theme config
    socialLinks: [
      { icon: "github", link: "https://github.com/yourusername/portai-docs" },
    ],

    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2025-present",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          "zh-CN": {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          "zh-HK": {
            translations: {
              button: {
                buttonText: "搜尋文檔",
                buttonAriaLabel: "搜尋文檔",
              },
              modal: {
                noResultsText: "無法找到相關結果",
                resetButtonTitle: "清除查詢條件",
                footer: {
                  selectText: "選擇",
                  navigateText: "切換",
                },
              },
            },
          },
        },
      },
    },
  },
});
