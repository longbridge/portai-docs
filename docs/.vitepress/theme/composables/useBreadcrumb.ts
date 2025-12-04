import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import { useI18n } from 'vue-i18n'
import { localePath } from '../utils/i18n'
import type { DefaultTheme } from 'vitepress'

export interface BreadcrumbItem {
  text: string
  link?: string
}

export function useBreadcrumb() {
  const route = useRoute()
  const { sidebar } = useSidebar()
  const { t } = useI18n()

  // 获取主页链接
  const getHomeItem = (): BreadcrumbItem => {
    return {
      text: t('breadcrumb.home'),
      link: localePath('/ai/docs/'),
    }
  }

  // 递归查找匹配的面包屑路径
  const findBreadcrumbPath = (
    items: DefaultTheme.SidebarItem[],
    targetPath: string,
    currentPath: BreadcrumbItem[] = []
  ): BreadcrumbItem[] | null => {
    for (const item of items) {
      // 确保 text 存在，如果不存在则跳过
      if (!item.text) continue

      const newPath = [...currentPath, { text: item.text, link: item.link }]

      // 如果当前项目的链接匹配目标路径
      if (item.link && normalizePath(item.link) === normalizePath(targetPath)) {
        return newPath
      }

      // 如果有子项目，递归查找
      if (item.items && item.items.length > 0) {
        const childResult = findBreadcrumbPath(item.items, targetPath, newPath)
        if (childResult) {
          return childResult
        }
      }
    }

    return null
  }

  // 标准化路径，处理不同的路径格式
  const normalizePath = (path: string): string => {
    if (!path) return ''

    // 移除开头的 /
    let normalized = path.replace(/^\/+/, '')

    // 移除结尾的 .md
    normalized = normalized.replace(/\.md$/, '')

    // 移除结尾的 /
    normalized = normalized.replace(/\/+$/, '')

    return normalized
  }

  // 计算面包屑导航
  const breadcrumbItems = computed(() => {
    // 首先获取主页项
    const homeItem = getHomeItem()

    // 如果当前就是主页，只显示主页
    const currentPath = route.path
    const normalizedCurrentPath = normalizePath(currentPath)
    const normalizedHomePath = normalizePath(homeItem.link || '/')

    if (normalizedCurrentPath === normalizedHomePath || currentPath === homeItem.link) {
      return [homeItem]
    }

    // useSidebar() returns sidebar as ComputedRef<SidebarItem[]> already resolved for current route
    const sidebarItems = sidebar.value

    if (!sidebarItems || sidebarItems.length === 0 || !route.path) {
      return [homeItem]
    }

    const breadcrumbPath = findBreadcrumbPath(sidebarItems, currentPath)

    // 始终在面包屑路径前添加主页链接
    if (breadcrumbPath && breadcrumbPath.length > 0) {
      return [homeItem, ...breadcrumbPath]
    }

    return [homeItem]
  })

  return {
    breadcrumbItems,
  }
}
