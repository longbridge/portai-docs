import { defineConfig } from 'vitepress'
import {
  enConfig,
  enSearch,
  zhCNConfig,
  zhCNSearch,
  zhHKConfig,
  zhHKSearch,
} from './locales'

// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig(({ mode }) => {
  return {
    title: 'PortAI Docs',
    description: 'PortAI Documentation',
    ignoreDeadLinks: true,
    cleanUrls: true,
    appearance: true,
    lastUpdated: true,
    metaChunk: true,
    base: '/',

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://assets.lbkrs.com/uploads/f029efba-486b-4c32-8b05-1a87b0fb61f8/logo-without-title-lb.svg' }],
    ],

    // Multi-language support
    locales: {
      en: enConfig,
      'zh-CN': zhCNConfig,
      'zh-HK': zhHKConfig,
    },

    themeConfig: {
      logo: {
        src: 'https://assets.lbkrs.com/uploads/f029efba-486b-4c32-8b05-1a87b0fb61f8/logo-without-title-lb.svg',
        width: 48,
        height: 48,
      },
      
      footer: {
        message: 'Released under the MIT License',
        copyright: 'Copyright © 2025-present',
      },

      search: {
        provider: 'local',
        options: {
          locales: {
            ...enSearch,
            ...zhCNSearch,
            ...zhHKSearch,
          },
        },
      },
    },
  }
})
