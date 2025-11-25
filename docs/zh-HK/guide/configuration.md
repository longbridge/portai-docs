# 配置說明

本頁面介紹如何配置您的 VitePress 文檔站點。

## 配置文件

主要配置文件位於 `docs/.vitepress/config.mts`。

## 站點元數據

```typescript
export default defineConfig({
  title: "PortAI Docs",
  description: "PortAI 項目文檔",
  lang: 'zh-HK',
})
```

### 選項說明

- **title**: 站點標題，顯示在瀏覽器標籤和頁面標題中
- **description**: 站點描述，用於 SEO
- **lang**: 站點語言，影響 HTML `lang` 屬性

## 主題配置

### 導航欄

配置頂部導航欄：

```typescript
themeConfig: {
  nav: [
    { text: '首頁', link: '/' },
    { text: '指南', link: '/guide/getting-started' },
    { text: 'API', link: '/api/introduction' }
  ]
}
```

### 側邊欄

配置側邊欄菜單：

```typescript
themeConfig: {
  sidebar: [
    {
      text: '指南',
      items: [
        { text: '快速開始', link: '/guide/getting-started' },
        { text: '配置說明', link: '/guide/configuration' }
      ]
    }
  ]
}
```

### 社交鏈接

添加社交媒體鏈接：

```typescript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/yourusername/portai-docs' }
  ]
}
```

支持的圖標：`github`、`twitter`、`discord`、`linkedin` 等。

## 搜索功能

VitePress 內置了本地搜索功能：

```typescript
themeConfig: {
  search: {
    provider: 'local'
  }
}
```

## 編輯鏈接

允許用戶在 GitHub 上編輯頁面：

```typescript
themeConfig: {
  editLink: {
    pattern: 'https://github.com/yourusername/portai-docs/edit/main/docs/:path',
    text: '在 GitHub 上編輯此頁'
  }
}
```

## 最後更新時間

顯示頁面最後更新時間：

```typescript
themeConfig: {
  lastUpdated: {
    text: '最後更新於',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  }
}
```

## 多語言配置

VitePress 支持多語言文檔：

```typescript
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    'zh-CN': {
      label: '簡體中文',
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

每個語言可以有獨立的配置：

```typescript
locales: {
  'zh-HK': {
    label: '繁體中文',
    lang: 'zh-HK',
    themeConfig: {
      nav: [...],
      sidebar: [...]
    }
  }
}
```

## 更多配置

查看 [VitePress 官方文檔](https://vitepress.dev/reference/site-config) 了解更多配置選項。

