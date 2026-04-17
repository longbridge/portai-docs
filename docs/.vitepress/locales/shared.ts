import type { HeadConfig } from 'vitepress'

export const SITE_URL = 'https://longportapp.com'
export const DOCS_PATH = '/ai/docs/'
export const OG_IMAGE =
  'https://assets.lbctrl.com/uploads/704969a1-f4c7-4518-bc33-9e6d79e4009f/longbridge-ai-brand.png'
export const LOGO_URL = 'https://assets.wbrks.com/assets/logo/logo1.png'
export const PUBLISHER_NAME = 'Longbridge'

export const LOCALE_URLS = {
  en: `${SITE_URL}/en${DOCS_PATH}`,
  'zh-CN': `${SITE_URL}/zh-CN${DOCS_PATH}`,
  'zh-HK': `${SITE_URL}/zh-HK${DOCS_PATH}`,
} as const

export const HREFLANG_LINKS: HeadConfig[] = [
  ['link', { rel: 'alternate', hreflang: 'en', href: LOCALE_URLS.en }],
  ['link', { rel: 'alternate', hreflang: 'zh-Hans', href: LOCALE_URLS['zh-CN'] }],
  ['link', { rel: 'alternate', hreflang: 'zh-Hant', href: LOCALE_URLS['zh-HK'] }],
]

export function createLocaleHead(opts: {
  locale: keyof typeof LOCALE_URLS
  ogLocale: string
  title: string
  description: string
  keywords: string
}): HeadConfig[] {
  const url = LOCALE_URLS[opts.locale]
  return [
    ['meta', { name: 'keywords', content: opts.keywords }],
    ['meta', { 'http-equiv': 'content-language', content: opts.locale }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: opts.title }],
    ['meta', { property: 'og:description', content: opts.description }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:locale', content: opts.ogLocale }],
    ['meta', { property: 'og:site_name', content: opts.title }],
    ['meta', { name: 'twitter:title', content: opts.title }],
    ['meta', { name: 'twitter:description', content: opts.description }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['link', { rel: 'canonical', href: url }],
    ...HREFLANG_LINKS,
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: opts.title,
        description: opts.description,
        url,
        publisher: {
          '@type': 'Organization',
          name: PUBLISHER_NAME,
          logo: { '@type': 'ImageObject', url: LOGO_URL },
        },
      }),
    ],
  ]
}
