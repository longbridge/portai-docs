# 部署

本指南将帮助您将文档站点部署到生产环境。

## 构建

在部署之前，首先需要构建静态文件：

```bash
bun run docs:build
```

构建完成后，静态文件将生成在 `docs/.vitepress/dist` 目录下。

## 预览构建

在部署前，您可以本地预览构建结果：

```bash
bun run docs:preview
```

## 部署到 Vercel

Vercel 是部署 VitePress 站点的最佳选择之一。

### 步骤

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入您的仓库
3. 配置构建设置：
   - **Framework Preset**: VitePress
   - **Build Command**: `bun run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Install Command**: `bun install`

4. 点击部署

## 部署到 Netlify

### 步骤

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入您的仓库
3. 配置构建设置：
   - **Build command**: `bun run docs:build`
   - **Publish directory**: `docs/.vitepress/dist`

4. 添加 `netlify.toml` 配置文件（可选）：

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

创建 `.github/workflows/deploy.yml`：

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

如果部署到 `https://username.github.io/repo-name/`，需要在配置中设置 `base`：

```typescript
export default defineConfig({
  base: '/repo-name/',
  // ...其他配置
})
```

## 部署到自定义服务器

1. 构建项目：

```bash
bun run docs:build
```

2. 将 `docs/.vitepress/dist` 目录上传到服务器

3. 配置 Web 服务器（如 Nginx）：

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

## 多语言站点部署

对于多语言站点，VitePress 会自动处理所有语言的路由。确保：

1. 所有语言的文档都已创建
2. 配置文件中正确设置了 `locales`
3. 构建时会自动包含所有语言版本

## 环境变量

如果需要使用环境变量，可以创建 `.env` 文件：

```bash
VITE_API_URL=https://api.example.com
```

在代码中使用：

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## 注意事项

- 确保 `.gitignore` 包含 `node_modules` 和 `docs/.vitepress/dist`
- 生产环境建议使用 CDN 加速静态资源
- 配置适当的缓存策略以提高性能
- 多语言站点确保所有语言版本都已更新

