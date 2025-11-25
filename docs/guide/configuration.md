# Configuration

This page explains how to configure your VitePress documentation site.

## Configuration File

The main configuration file is located at `docs/.vitepress/config.mts`.

## Site Metadata

```typescript
export default defineConfig({
  title: "PortAI Docs",
  description: "PortAI Documentation",
  lang: 'en',
})
```

### Options

- **title**: Site title, displayed in browser tab and page title
- **description**: Site description, used for SEO
- **lang**: Site language, affects HTML `lang` attribute

## Theme Configuration

### Navigation Bar

Configure the top navigation bar:

```typescript
themeConfig: {
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/getting-started' },
    { text: 'API', link: '/api/introduction' }
  ]
}
```

### Sidebar

Configure the sidebar menu:

```typescript
themeConfig: {
  sidebar: [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' }
      ]
    }
  ]
}
```

### Social Links

Add social media links:

```typescript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/yourusername/portai-docs' }
  ]
}
```

Supported icons: `github`, `twitter`, `discord`, `linkedin`, etc.

## Search Functionality

VitePress has built-in local search:

```typescript
themeConfig: {
  search: {
    provider: 'local'
  }
}
```

## Edit Link

Allow users to edit pages on GitHub:

```typescript
themeConfig: {
  editLink: {
    pattern: 'https://github.com/yourusername/portai-docs/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  }
}
```

## Last Updated

Display page last updated time:

```typescript
themeConfig: {
  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  }
}
```

## Internationalization

VitePress supports multi-language documentation:

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
    }
  }
})
```

## More Configuration

Check the [VitePress official documentation](https://vitepress.dev/reference/site-config) for more configuration options.
