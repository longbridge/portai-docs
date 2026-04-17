import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { createLocaleHead } from '../shared'
import { nav } from './nav'
import { search } from './search'
import { sidebar } from './sidebar'

const title = 'Longbridge | LongbridgeAI Docs'
const description =
  'LongbridgeAI is a smart AI workflow platform from Longbridge AI, helping developers quickly build, debug, and deploy AI applications through visual node orchestration and API integration.'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  head: createLocaleHead({
    locale: 'en',
    ogLocale: 'en_US',
    title,
    description,
    keywords: 'LongbridgeAI,AI Agent,Workflow,Agent Builder,Longbridge',
  }),
  title: 'LongbridgeAI Docs',
  description,
  themeConfig: {
    logoLink: {
      link: '/en/ai/docs/',
      target: '_self',
    },
    nav: nav('en'),
    sidebar: sidebar,

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
