import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { nav } from './nav'
import { search } from './search'
import { sidebar } from './sidebar'
export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  head: [
    ['meta', { property: 'og:url', content: 'https://longportapp.com/en/ai/docs/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Longbridge | LongbridgeAI Docs' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'LongbridgeAI is a smart AI workflow platform from Longbridge AI, helping developers quickly build, debug, and deploy AI applications through visual node orchestration and API integration.',
      },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://pub.pbkrs.com/files/202211/sJswdGqSX1xDqrES/lonport-seo-img.png' },
    ],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:site_name', content: 'Longbridge | LongbridgeAI Docs' }],
    ['link', { rel: 'canonical', href: 'https://longportapp.com/en/ai/docs//' }],
  ],
  title: 'LongbridgeAI Docs',
  description:
    'LongbridgeAI is a smart AI workflow platform from Longbridge AI, helping developers quickly build, debug, and deploy AI applications through visual node orchestration and API integration.',
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
