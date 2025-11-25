# 多语言文档结构说明

本文档站点支持多语言，采用 VitePress 的 i18n 功能实现。

## 支持的语言

- **English** (en) - 默认语言，位于 `docs/` 根目录
- **简体中文** (zh-CN) - 位于 `docs/zh-CN/`
- **繁體中文** (zh-HK) - 位于 `docs/zh-HK/`

## 目录结构

```
docs/
├── .vitepress/
│   └── config.mts          # 多语言配置
├── index.md                # 英文首页
├── guide/                  # 英文指南
├── api/                    # 英文 API 文档
├── zh-CN/                  # 简体中文
│   ├── index.md
│   ├── guide/
│   └── api/
└── zh-HK/                  # 繁体中文
    ├── index.md
    ├── guide/
    └── api/
```

## URL 结构

- 英文（默认）: `https://your-domain.com/`
- 简体中文: `https://your-domain.com/zh-CN/`
- 繁体中文: `https://your-domain.com/zh-HK/`

## 配置说明

在 `config.mts` 中，每个语言都有独立的配置：

```typescript
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [...],      // 英文导航
        sidebar: [...]   // 英文侧边栏
      }
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [...],      // 中文导航
        sidebar: [...]   // 中文侧边栏
      }
    }
  }
})
```

## 添加新语言

1. **创建语言目录**
   ```bash
   mkdir -p docs/ja
   ```

2. **复制文档结构**
   ```bash
   cp -r docs/guide docs/ja/
   cp -r docs/api docs/ja/
   cp docs/index.md docs/ja/
   ```

3. **翻译内容**
   - 翻译所有 `.md` 文件内容
   - 保持文件名和目录结构一致

4. **更新配置**
   在 `config.mts` 中添加：
   ```typescript
   'ja': {
     label: '日本語',
     lang: 'ja',
     title: 'PortAI ドキュメント',
     description: 'PortAI プロジェクトドキュメント',
     themeConfig: {
       nav: [
         { text: 'ホーム', link: '/ja/' },
         { text: 'ガイド', link: '/ja/guide/getting-started' }
       ],
       sidebar: [...]
     }
   }
   ```

5. **更新搜索配置**
   ```typescript
   search: {
     provider: 'local',
     options: {
       locales: {
         'ja': {
           translations: {
             button: {
               buttonText: '検索',
               buttonAriaLabel: '検索'
             }
           }
         }
       }
     }
   }
   ```

## 维护建议

1. **保持结构一致**
   - 所有语言版本应保持相同的文件结构
   - 文件名保持一致，只翻译内容

2. **链接处理**
   - 内部链接使用相对路径
   - 跨语言链接使用绝对路径（如 `/zh-CN/guide/...`）

3. **更新流程**
   - 更新英文文档后，同步更新其他语言版本
   - 使用 Git 标签标记已翻译的版本

4. **翻译工具**
   - 可以使用 i18n 工具辅助翻译
   - 保持术语一致性

## 注意事项

- 每个语言的导航和侧边栏配置是独立的
- 搜索功能需要为每个语言单独配置
- 构建时会自动包含所有语言版本
- 语言切换器会自动出现在导航栏右上角

