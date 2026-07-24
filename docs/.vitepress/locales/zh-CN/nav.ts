import type { DefaultTheme } from 'vitepress'

export const nav = (lang: string): DefaultTheme.NavItem[] => {
  return [
    // { text: '首页', link: `/${lang}/ai/docs/`, activeMatch: `^/${lang}/ai/docs/$` },
    {
      text: '文档',
      link: `/${lang}/ai/docs/basics/introduction`,
      activeMatch: `^/${lang}/ai/docs/basics/introduction`,
    },
    { text: 'API', link: `/${lang}/ai/docs/api/agent-run`, activeMatch: `^/${lang}/ai/docs/api/agent-run` },
  ]
}
