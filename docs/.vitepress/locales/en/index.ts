import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { nav } from './nav'
import { search } from './search'
// import { sidebar } from './sidebar'
export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  head: [
    ['meta', { property: 'og:url', content: 'https://longportapp.com/en/ai/docs/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Longbridge | PortAI Docs' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'PortAI is a smart AI workflow platform from Longbridge AI, helping developers quickly build, debug, and deploy AI applications through visual node orchestration and API integration.',
      },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://pub.pbkrs.com/files/202211/sJswdGqSX1xDqrES/lonport-seo-img.png' },
    ],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:site_name', content: 'Longbridge | PortAI Docs' }],
    ['link', { rel: 'canonical', href: 'https://longportapp.com/en/ai/docs//' }],
  ],
  title: 'PortAI Docs',
  description:
    'PortAI is a smart AI workflow platform from Longbridge AI, helping developers quickly build, debug, and deploy AI applications through visual node orchestration and API integration.',
  themeConfig: {
    logoLink: {
      link: '/en/ai/docs/',
      target: '_self',
    },
    nav: nav('en'),
    sidebar: [
      // {
      //   text: 'Getting Started',
      //   collapsed: true,
      //   items: [
      //     { text: 'Introduction', link: '/en/ai/docs/getting-started/introduction' },
      //     { text: 'Core Concepts', link: '/en/ai/docs/getting-started/core-concepts' },
      //   ],
      // },
      // {
      //   text: 'Nodes',
      //   collapsed: true,
      //   items: [
      //     { text: 'User Input', link: '/en/ai/docs/nodes/user-input' },
      //     { text: 'Large Language Model', link: '/en/ai/docs/nodes/llm' },
      //     { text: 'Answer', link: '/en/ai/docs/nodes/answer' },
      //     { text: 'Output', link: '/en/ai/docs/nodes/output' },
      //     { text: 'Agent', link: '/en/ai/docs/nodes/agent' },
      //     { text: 'Tools', link: '/en/ai/docs/nodes/tools' },
      //     { text: 'Question Classifier', link: '/en/ai/docs/nodes/question-classifier' },
      //     { text: 'If-Else', link: '/en/ai/docs/nodes/if-else' },
      //     { text: 'Iteration', link: '/en/ai/docs/nodes/iteration' },
      //     { text: 'Loop', link: '/en/ai/docs/nodes/loop' },
      //     { text: 'Code', link: '/en/ai/docs/nodes/code' },
      //     { text: 'Template', link: '/en/ai/docs/nodes/template' },
      //     { text: 'Variable Aggregator', link: '/en/ai/docs/nodes/variable-aggregator' },
      //     { text: 'Variable Assigner', link: '/en/ai/docs/nodes/variable-assigner' },
      //     { text: 'Parameter Extractor', link: '/en/ai/docs/nodes/parameter-extractor' },
      //     { text: 'HTTP Request', link: '/en/ai/docs/nodes/http-request' },
      //   ],
      // },
      // {
      //   text: 'Build',
      //   collapsed: true,
      //   items: [
      //     { text: 'Shortcuts', link: '/en/ai/docs/build/shortcuts' },
      //     { text: 'Flow Logic', link: '/en/ai/docs/build/flow-logic' },
      //     { text: 'Error Handling', link: '/en/ai/docs/build/error-handling' },
      //     { text: 'Using MCP Tools', link: '/en/ai/docs/build/mcp-tools' },
      //     { text: 'Version Control', link: '/en/ai/docs/build/version-control' },
      //   ],
      // },
      // {
      //   text: 'Debug',
      //   collapsed: true,
      //   items: [
      //     { text: 'Single Node', link: '/en/ai/docs/debug/single-node' },
      //     { text: 'Workflow', link: '/en/ai/docs/debug/workflow' },
      //     { text: 'Run History', link: '/en/ai/docs/debug/run-history' },
      //     { text: 'Error Types', link: '/en/ai/docs/debug/error-types' },
      //   ],
      // },
      // {
      //   text: 'Publish',
      //   collapsed: true,
      //   items: [
      //     { text: 'Share Your AI Application', link: '/en/ai/docs/publish/share' },
      //     { text: 'Web App', link: '/en/ai/docs/publish/web-app' },
      //   ],
      // },
      {
        text: 'API',
        collapsed: true,
        items: [{ text: 'Agent Run', link: '/en/ai/docs/api/agent-run' }],
      },
      // {
      //   text: 'Monitor',
      //   collapsed: true,
      //   items: [
      //     { text: 'Logs', link: '/en/ai/docs/monitor/logs' },
      //     { text: 'Statistics', link: '/en/ai/docs/monitor/statistics' },
      //   ],
      // },
      // {
      //   text: 'Knowledge Base',
      //   collapsed: true,
      //   items: [
      //     { text: 'Introduction', link: '/en/ai/docs/knowledge-base/introduction' },
      //     { text: 'Create Knowledge Base', link: '/en/ai/docs/knowledge-base/create' },
      //     { text: 'Manage Knowledge Base', link: '/en/ai/docs/knowledge-base/manage' },
      //     { text: 'Metadata', link: '/en/ai/docs/knowledge-base/metadata' },
      //     { text: 'Recall Test', link: '/en/ai/docs/knowledge-base/recall-test' },
      //   ],
      // },
      // {
      //   text: 'Workspace',
      //   collapsed: true,
      //   items: [
      //     { text: 'Manage Applications', link: '/en/ai/docs/workspace/manage-apps' },
      //     { text: 'Manage Members', link: '/en/ai/docs/workspace/manage-members' },
      //     { text: 'Personal Settings', link: '/en/ai/docs/workspace/personal-settings' },
      //   ],
      // },
      // {
      //   text: 'Tutorials',
      //   collapsed: true,
      //   items: [{ text: 'Simple Chatbot', link: '/en/ai/docs/tutorials/simple-chatbot' }],
      // },
    ],

    search: {
      provider: 'local',
      options: search,
    },
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },

    outline: {
      label: 'Page Navigation',
    },

    notFound: {
      title: 'Page Not Found',
      quote:
        "But if you don't change direction and continue to search, you may eventually reach the place you are going.",
      linkLabel: 'Go to Homepage',
      linkText: 'Take Me Back to Homepage',
    },

    langMenuLabel: 'Language',
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to Light Mode',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    skipToContentLabel: 'Skip to Content',
  },
}
