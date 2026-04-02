import { DefaultTheme } from 'vitepress'
import { genMarkdowDocs } from '../../theme/utils/gen'

const lang = 'zh-CN'

const DIR_ORDER = ['getting-started', 'nodes', 'build', 'debug', 'publish', 'api', 'knowledge-base', 'workspace', 'tutorials']

const docsSidebar = genMarkdowDocs(lang, 'ai/docs', { dirOrder: DIR_ORDER })

export const sidebar: DefaultTheme.Sidebar = {
  [`/${lang}`]: { base: `/${lang}`, items: docsSidebar() },
}
