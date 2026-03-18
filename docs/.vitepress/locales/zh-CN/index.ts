import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { nav } from './nav'
import { search } from './search'
// import { sidebar } from './sidebar'
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
    sidebar: [
      {
        text: '入门',
        collapsed: true,
        items: [
          { text: '介绍', link: '/zh-CN/ai/docs/getting-started/introduction' },
          { text: '核心概念', link: '/zh-CN/ai/docs/getting-started/core-concepts' },
        ],
      },
      {
        text: '节点',
        collapsed: true,
        items: [
          { text: '开始', link: '/zh-CN/ai/docs/nodes/start' },
          { text: '大语言模型', link: '/zh-CN/ai/docs/nodes/llm' },
          { text: '答案', link: '/zh-CN/ai/docs/nodes/answer' },
          { text: '结束', link: '/zh-CN/ai/docs/nodes/output' },
          { text: '智能代理', link: '/zh-CN/ai/docs/nodes/agent' },
          { text: '工具', link: '/zh-CN/ai/docs/nodes/tools' },
          { text: '问题分类器', link: '/zh-CN/ai/docs/nodes/question-classifier' },
          { text: 'If-Else', link: '/zh-CN/ai/docs/nodes/if-else' },
          { text: '迭代', link: '/zh-CN/ai/docs/nodes/iteration' },
          { text: '循环', link: '/zh-CN/ai/docs/nodes/loop' },
          { text: '代码', link: '/zh-CN/ai/docs/nodes/code' },
          { text: '模板转换', link: '/zh-CN/ai/docs/nodes/template' },
          { text: '分支聚合器', link: '/zh-CN/ai/docs/nodes/branch-aggregator' },
          { text: '变量赋值器', link: '/zh-CN/ai/docs/nodes/variable-assigner' },
          { text: '参数提取器', link: '/zh-CN/ai/docs/nodes/parameter-extractor' },
          { text: 'HTTP 请求', link: '/zh-CN/ai/docs/nodes/http-request' },
        ],
      },
      {
        text: '构建',
        collapsed: true,
        items: [
          { text: '快捷键', link: '/zh-CN/ai/docs/build/shortcuts' },
          { text: '流程逻辑', link: '/zh-CN/ai/docs/build/flow-logic' },
          { text: '错误处理', link: '/zh-CN/ai/docs/build/error-handling' },
          { text: '使用 MCP 工具', link: '/zh-CN/ai/docs/build/mcp-tools' },
          { text: '版本控制', link: '/zh-CN/ai/docs/build/version-control' },
        ],
      },
      {
        text: '调试',
        collapsed: true,
        items: [
          { text: '单节点', link: '/zh-CN/ai/docs/debug/single-node' },
          { text: '工作流', link: '/zh-CN/ai/docs/debug/workflow' },
          { text: '运行历史', link: '/zh-CN/ai/docs/debug/run-history' },
        ],
      },
      {
        text: '发布',
        collapsed: true,
        items: [
          { text: '分享你的 AI 应用', link: '/zh-CN/ai/docs/publish/share' },
          { text: 'Web App', link: '/zh-CN/ai/docs/publish/web-app' },
        ],
      },
      {
        text: 'API',
        collapsed: true,
        items: [{ text: 'Agent 运行', link: '/zh-CN/ai/docs/api/agent-run' }],
      },
      {
        text: '知识库',
        collapsed: true,
        items: [
          { text: '功能简介', link: '/zh-CN/ai/docs/knowledge-base/introduction' },
          { text: '创建知识库', link: '/zh-CN/ai/docs/knowledge-base/create' },
          { text: '管理知识库', link: '/zh-CN/ai/docs/knowledge-base/manage' },
          { text: '召回测试', link: '/zh-CN/ai/docs/knowledge-base/recall-test' },
        ],
      },
      {
        text: '工作区',
        collapsed: true,
        items: [
          { text: '管理应用', link: '/zh-CN/ai/docs/workspace/manage-apps' },
          { text: '管理成员', link: '/zh-CN/ai/docs/workspace/manage-members' },
          { text: '个人设置', link: '/zh-CN/ai/docs/workspace/personal-settings' },
        ],
      },
      {
        text: '教程',
        collapsed: true,
        items: [{ text: '简单聊天机器人', link: '/zh-CN/ai/docs/tutorials/simple-chatbot' }],
      },
    ],

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
