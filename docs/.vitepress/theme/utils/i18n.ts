export const isServer = () => typeof window === 'undefined'

export function getBasenameLocale() {
  if (isServer()) return 'en'
  const invalidLocaleRegexResult = window.location.pathname.match(/^\/(zh-CN|en|zh-HK)\/?/)
  return invalidLocaleRegexResult?.[1] || 'en'
}

export const localePath = (path: string) => {
  const locale = getBasenameLocale()
  return `/${locale}${path}`
}

// 从路径中取得当前语言

const supportedLanguages = ['en', 'zh-CN', 'zh-HK']

export function getCurrentLanguage() {
  const lang = getBasenameLocale() || 'en'
  if (supportedLanguages.includes(lang)) {
    return lang
  }
  return 'en'
}
