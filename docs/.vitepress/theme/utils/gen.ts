import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import matter from 'gray-matter'
import { type DefaultTheme } from 'vitepress'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface CategoryConfig {
  position?: number
  label?: string
  collapsible?: boolean
  collapsed?: boolean
  link?: string | null | { title: string; slug: string }
  childFileSort?: {
    sortByType: 'ext' | 'dir'
    ext?: string
    sortByName?: string[]
  }[]
}

type MSidebar = DefaultTheme.SidebarItem & { position?: number }
/**
 * Generate navigation items by reading markdown files from a directory
 * @param lang Language code (e.g., 'en', 'zh-CN')
 * @param basePath Base path to read files from (e.g., 'docs')
 * @returns Function that returns an array of navigation items
 */
const OVERVIEW_LABEL: Record<string, string> = {
  'zh-CN': '概览',
  'zh-HK': '概覽',
  en: 'Overview',
}

export function genMarkdowDocs(lang: string, basePath: string, options?: { dirOrder?: string[] }, debug = false) {
  return function (): DefaultTheme.SidebarItem[] {
    const rootDir = path.resolve(__dirname, '../../../', lang, basePath)
    const overview = OVERVIEW_LABEL[lang] || OVERVIEW_LABEL['en']
    const fc = generateSidebarItems(rootDir, `/${basePath}`, `/${basePath}`, options?.dirOrder, overview)
    if (debug) {
      fs.writeFileSync(path.resolve(__dirname, `./${lang}_sidebar.json`), JSON.stringify(fc, null, 2))
    }
    return fc
  }
}
/**
 * Read _category_.json configuration file from a directory
 * @param dirPath Directory path
 * @returns CategoryConfig object or null if not found
 */
function readCategoryConfig(dirPath: string): CategoryConfig | null {
  const categoryPath = path.join(dirPath, '_category_.json')
  try {
    if (fs.existsSync(categoryPath)) {
      const content = fs.readFileSync(categoryPath, 'utf8')
      return JSON.parse(content) as CategoryConfig
    }
  } catch (error) {
    console.warn(`Error reading category config at ${categoryPath}:`, error)
  }
  return null
}

/**
 * Sort items based on position property
 * @param items Array of items with position property
 * @returns Sorted array
 */
function sortByPosition<T extends { position?: number }>(items: T[]): T[] {
  return items.sort((a, b) => {
    const posA = a.position ?? Infinity
    const posB = b.position ?? Infinity
    return posA - posB
  })
}

/**
 * Recursively generate navigation items from a directory
 * @param dirPath Directory path to read
 * @param relativePath Relative path for links
 * @returns Array of navigation items
 */
function generateSidebarItems(
  dirPath: string,
  relativePath: string,
  rootPath: string,
  dirOrder?: string[],
  overviewLabel = 'Overview'
): DefaultTheme.SidebarItem[] {
  const items: DefaultTheme.SidebarItem[] = []

  try {
    const files = fs.readdirSync(dirPath)

    // Process markdown files
    const mdFiles = files.filter((file) => file.endsWith('.md') && file !== '_category_.json' && file !== 'index.md')
    const fileItems: MSidebar[] = []

    // 若目录内有 index.md 且未 hidden、非 layout: home（hero 首页不该进 sidebar），
    // 把它加入 sidebar 作为该分类的首个可点击项
    // link 指向目录 URL（如 /ai/docs/compliance），position 用 index.md 的 sidebar_position（默认 0）
    // 若 index 的 title 与该目录的 _category_.json label 相同，展示为 "概览" 避免重复
    if (files.includes('index.md')) {
      const indexPath = path.join(dirPath, 'index.md')
      const indexRaw = fs.readFileSync(indexPath, 'utf8')
      const { data, content } = matter(indexRaw)
      if (data['hidden'] !== true && data['layout'] !== 'home') {
        const rawTitle =
          data['sidebar_label'] || data['title'] || extractFirstH1(content) || getDefaultTitle('index.md')
        const dirCategoryConfig = readCategoryConfig(dirPath)
        const title = dirCategoryConfig?.label && dirCategoryConfig.label === rawTitle ? overviewLabel : rawTitle
        fileItems.push({
          text: title,
          link: relativePath,
          position: data['sidebar_position'] ?? 0,
        })
      }
    }

    for (const file of mdFiles) {
      const filePath = path.join(dirPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      // 跳过 hidden: true 的文档（如 URL 重定向占位页）
      if (data['hidden'] === true || data['sidebar'] === false) continue
      const title = data['sidebar_label'] || data['title'] || extractFirstH1(content) || getDefaultTitle(file)
      const slug = data['slug']

      const normalizeLink =
        file === 'index.md' ? `${relativePath}.md` : path.join(relativePath, file.replace('.md', ''))
      const link = slug
        ? path.isAbsolute(slug)
          ? path.join(rootPath, slug)
          : path.join(relativePath, slug)
        : normalizeLink
      const position = data['sidebar_position']

      fileItems.push({
        text: title,
        link,
        position,
      })
    }

    items.push(...fileItems)

    // Process directories
    const directories = files.filter((file) => {
      const stats = fs.statSync(path.join(dirPath, file))
      return stats.isDirectory()
    })

    const dirItems: MSidebar[] = []

    for (const dir of directories) {
      const subDirPath = path.join(dirPath, dir)
      const subRelativePath = path.join(relativePath, dir)
      const subCategoryConfig = readCategoryConfig(subDirPath)
      const subItems = generateSidebarItems(subDirPath, subRelativePath, rootPath, dirOrder, overviewLabel)

      if (subItems.length > 0) {
        const dirTitle = subCategoryConfig?.label || formatDirName(dir)
        const orderIndex = dirOrder ? dirOrder.indexOf(dir) : -1
        const position = subCategoryConfig?.position ?? (orderIndex >= 0 ? orderIndex : undefined)

        const sidebarItem: MSidebar = {
          text: dirTitle,
          items: subItems,
          position,
        }

        dirItems.push(sidebarItem)
      }
    }

    items.push(...dirItems)
    return sortByPosition(items as MSidebar[])
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error)
    return []
  }
}

/**
 * Format directory name to a more readable format
 * @param dirName Directory name
 * @returns Formatted directory name
 */
function formatDirName(dirName: string): string {
  // Convert kebab-case to Title Case
  return dirName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

/**
 * Get default title from file name
 * @param fileName File name
 * @returns Formatted title
 */
function getDefaultTitle(fileName: string): string {
  // Remove extension and convert to Title Case
  return fileName
    .replace('.md', '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

/**
 * Extract the first H1 heading from markdown content (after frontmatter)
 * @param content Markdown content without frontmatter
 * @returns H1 heading text or undefined
 */
function extractFirstH1(content: string): string | undefined {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : undefined
}
