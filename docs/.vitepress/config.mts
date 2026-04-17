import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import Unocss from 'unocss/vite'
import { markdownConfig } from './config/markdown'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { localesConfig } from './config/locales'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { rewriteMarkdownPath } from './utils'
import llmstxt from 'vitepress-plugin-llms'

export default defineConfig(
  withMermaid({
    title: 'LongbridgeAI Docs',
    appearance: true,
    cleanUrls: true,
    metaChunk: true,
    ignoreDeadLinks: true,
    base: '/',

    srcExclude: ['README.md'],
    rewrites: rewriteMarkdownPath,
    markdown: markdownConfig,
    sitemap: {
      hostname: 'https://open.longportapp.com',
      transformItems(items) {
        return items.filter((item) => !item.url.includes('migration'))
      },
    },

    /* prettier-ignore */
    head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://assets.lbkrs.com/uploads/f029efba-486b-4c32-8b05-1a87b0fb61f8/logo-without-title-lb.svg' }],
      ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://assets.lbkrs.com/uploads/f029efba-486b-4c32-8b05-1a87b0fb61f8/logo-without-title-lb.svg' }],
      ['link', { rel: 'apple-touch-icon', href: 'https://assets.wbrks.com/assets/manifest-icons/icon-72x72.png', sizes: '76x76' }],
      ['link', { rel: 'apple-touch-icon', href: 'https://assets.wbrks.com/assets/manifest-icons/icon-128x128.png', sizes: '120x120' }],
      ['link', { rel: 'apple-touch-icon', href: 'https://assets.wbrks.com/assets/manifest-icons/icon-152x152.png', sizes: '152x152' }],
      ['meta', { name: 'author', content: 'Longbridge' }],
      ['meta', { name: 'application-name', content: 'LongbridgeAI' }],
      ['meta', { name: 'theme-color', content: '#33cdcd' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:site', content: 'https://longbridge.com' }],
      ['meta', { name: 'apple-itunes-app', content: 'app-id=1470042146' }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { name: 'robots', content: 'index,follow' }],
      ['meta', { name: 'googlebot', content: 'index,follow' }],
      ['link', { rel: 'dns-prefetch', href: 'https://assets.lbctrl.com' }],
      ['link', { rel: 'dns-prefetch', href: 'https://assets.wbrks.com' }],
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JNRX7GS04Y' }],
      ['script', {}, `window.dataLayer = window.dataLayer||[];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-JNRX7GS04Y');`],
      ['script', { defer: '', src: 'https://assets.lbkrs.com/pkg/sensorsdata/1.21.13.min.js' }],
      ['script', { async: '', src: 'https://at.alicdn.com/t/c/font_2621450_y740y72ffjq.js' }],
    ],
    themeConfig: {
      logo: {
        src: 'https://assets.wbrks.com/assets/logo/logo1.png',
        width: 24,
        height: 24,
      },
      search: {
        provider: 'local',
      },
    },

    locales: localesConfig,

    vite: {
      server: {
        port: 8000,
      },
      ssr: {
        noExternal: ['vue-i18n'],
      },
      optimizeDeps: {
        // Exclude vuetify since it has an issue with vite dev - TypeError: makeVExpansionPanelTextProps is not a function - the makeVExpansionPanelTextProps is used before it is defined
        exclude: ['vuetify'],
      },
      build: {
        chunkSizeWarningLimit: 1000,
      },
      resolve: {
        alias: [
          {
            find: '@',
            replacement: dirname(fileURLToPath(new URL('./theme', import.meta.url))),
          },
          {
            find: '~',
            replacement: dirname(fileURLToPath(new URL('../', import.meta.url))),
          },
        ],
      },
      plugins: [
        ...llmstxt({
          domain: 'https://longbridge.com',
          workDir: 'en/ai/docs',
        }),
        groupIconVitePlugin(),
        Unocss({
          configFile: '../unocss.config.ts',
        }),
      ],
    },
  })
)
