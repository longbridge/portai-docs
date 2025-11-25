# 配置说明

本页面介绍如何配置您的 VitePress 文档站点。

## 配置文件

主要配置文件位于 `docs/.vitepress/config.mts`。

## 站点元数据

```typescript
export default defineConfig({
  title: "PortAI Docs",
  description: "PortAI 项目文档",
  lang: 'zh-CN',
})
```

### 选项说明

- **title**: 站点标题，显示在浏览器标签和页面标题中
- **description**: 站点描述，用于 SEO
- **lang**: 站点语言，影响 HTML `lang` 属性

## 主题配置

### 导航栏

配置顶部导航栏：

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/getting-started' },
    { text: 'API', link: '/api/introduction' }
  ]
}
```

### 侧边栏

配置侧边栏菜单：

```typescript
themeConfig: {
  sidebar: [
    {
      text: '指南',
      items: [
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '配置说明', link: '/guide/configuration' }
      ]
    }
  ]
}
```

### 社交链接

添加社交媒体链接：

```typescript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/yourusername/portai-docs' }
  ]
}
```

支持的图标：`github`、`twitter`、`discord`、`linkedin` 等。

## 搜索功能

VitePress 内置了本地搜索功能：

```typescript
themeConfig: {
  search: {
    provider: 'local'
  }
}
```

## 编辑链接

允许用户在 GitHub 上编辑页面：

```typescript
themeConfig: {
  editLink: {
    pattern: 'https://github.com/yourusername/portai-docs/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  }
}
```

## 最后更新时间

显示页面最后更新时间：

```typescript
themeConfig: {
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  }
}
```

## 多语言配置

VitePress 支持多语言文档：

```typescript
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/'
    },
    'zh-HK': {
      label: '繁體中文',
      lang: 'zh-HK',
      link: '/zh-HK/'
    }
  }
})
```

每个语言可以有独立的配置：

```typescript
locales: {
  'zh-CN': {
    label: '简体中文',
    lang: 'zh-CN',
    themeConfig: {
      nav: [...],
      sidebar: [...]
    }
  }
}
```

## 更多配置

查看 [VitePress 官方文档](https://vitepress.dev/reference/site-config) 了解更多配置选项。

