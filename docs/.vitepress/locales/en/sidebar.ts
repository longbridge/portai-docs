import { DefaultTheme } from 'vitepress'
import { genMarkdowDocs } from '../../theme/utils/gen'

const lang = 'en'
const docsSidebar = genMarkdowDocs(lang, 'ai/docs')

export const sidebar: DefaultTheme.Sidebar = {
  [`/${lang}`]: { base: `/${lang}`, items: docsSidebar() },
}
