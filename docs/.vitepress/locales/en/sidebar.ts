import { DefaultTheme } from 'vitepress'
import { genMarkdowDocs } from '../../theme/utils/gen'

const lang = 'en'

const DIR_ORDER = ['basics', 'tutorials', 'compliance', 'api', 'appendix']

const docsSidebar = genMarkdowDocs(lang, 'ai/docs', { dirOrder: DIR_ORDER })

export const sidebar: DefaultTheme.Sidebar = {
  [`/${lang}`]: { base: `/${lang}`, items: docsSidebar() },
}
