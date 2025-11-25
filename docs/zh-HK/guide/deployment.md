# 部署

本指南將幫助您將文檔站點部署到生產環境。

## 構建

在部署之前，首先需要構建靜態文件：

```bash
bun run docs:build
```

構建完成後，靜態文件將生成在 `docs/.vitepress/dist` 目錄下。

## 預覽構建

在部署前，您可以本地預覽構建結果：

```bash
bun run docs:preview
```

## 部署到 Vercel

Vercel 是部署 VitePress 站點的最佳選擇之一。

### 步驟

1. 將代碼推送到 GitHub
2. 在 [Vercel](https://vercel.com) 導入您的倉庫
3. 配置構建設置：
   - **Framework Preset**: VitePress
   - **Build Command**: `bun run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Install Command**: `bun install`

4. 點擊部署

## 部署到 Netlify

### 步驟

1. 將代碼推送到 GitHub
2. 在 [Netlify](https://netlify.com) 導入您的倉庫
3. 配置構建設置：
   - **Build command**: `bun run docs:build`
   - **Publish directory**: `docs/.vitepress/dist`

4. 添加 `netlify.toml` 配置文件（可選）：

```toml
[build]
  command = "bun run docs:build"
  publish = "docs/.vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 部署到 GitHub Pages

### 使用 GitHub Actions

創建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      
      - name: Install dependencies
        run: bun install
      
      - name: Build
        run: bun run docs:build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 配置 base

如果部署到 `https://username.github.io/repo-name/`，需要在配置中設置 `base`：

```typescript
export default defineConfig({
  base: '/repo-name/',
  // ...其他配置
})
```

## 部署到自定義服務器

1. 構建項目：

```bash
bun run docs:build
```

2. 將 `docs/.vitepress/dist` 目錄上傳到服務器

3. 配置 Web 服務器（如 Nginx）：

```nginx
server {
  listen 80;
  server_name your-domain.com;
  
  root /path/to/docs/.vitepress/dist;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## 多語言站點部署

對於多語言站點，VitePress 會自動處理所有語言的路由。確保：

1. 所有語言的文檔都已創建
2. 配置文件中正確設置了 `locales`
3. 構建時會自動包含所有語言版本

## 環境變量

如果需要使用環境變量，可以創建 `.env` 文件：

```bash
VITE_API_URL=https://api.example.com
```

在代碼中使用：

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## 注意事項

- 確保 `.gitignore` 包含 `node_modules` 和 `docs/.vitepress/dist`
- 生產環境建議使用 CDN 加速靜態資源
- 配置適當的緩存策略以提高性能
- 多語言站點確保所有語言版本都已更新

