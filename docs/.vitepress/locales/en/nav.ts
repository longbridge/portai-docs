import type { DefaultTheme } from 'vitepress'

export const nav = (lang: string): DefaultTheme.NavItem[] => {
  return [
    { text: 'Home', link: `/${lang}/ai/docs/`, activeMatch: `^/${lang}/ai/docs/$` },
    {
      text: 'Introduction',
      link: `/${lang}/ai/docs/getting-started/introduction`,
      activeMatch: `^/${lang}/ai/docs/getting-started/introduction`,
    },
    { text: 'API', link: `/${lang}/ai/docs/api/agent-run`, activeMatch: `^/${lang}/ai/docs/api/agent-run` },
  ]
}
