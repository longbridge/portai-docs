# Deployment

This guide will help you deploy your documentation site to production.

## Build

Before deploying, you need to build the static files:

```bash
bun run docs:build
```

After building, static files will be generated in the `docs/.vitepress/dist` directory.

## Preview Build

Before deploying, you can preview the build locally:

```bash
bun run docs:preview
```

## Deploy to Vercel

Vercel is one of the best choices for deploying VitePress sites.

### Steps

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - **Framework Preset**: VitePress
   - **Build Command**: `bun run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Install Command**: `bun install`

4. Click deploy

## Deploy to Netlify

### Steps

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - **Build command**: `bun run docs:build`
   - **Publish directory**: `docs/.vitepress/dist`

4. Add `netlify.toml` configuration file (optional):

```toml
[build]
  command = "bun run docs:build"
  publish = "docs/.vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Deploy to GitHub Pages

### Using GitHub Actions

Create `.github/workflows/deploy.yml`:

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

### Configure base

If deploying to `https://username.github.io/repo-name/`, you need to set `base` in the config:

```typescript
export default defineConfig({
  base: '/repo-name/',
  // ...other config
})
```

## Deploy to Custom Server

1. Build the project:

```bash
bun run docs:build
```

2. Upload the `docs/.vitepress/dist` directory to your server

3. Configure your web server (e.g., Nginx):

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

## Environment Variables

If you need to use environment variables, create a `.env` file:

```bash
VITE_API_URL=https://api.example.com
```

Use in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Notes

- Make sure `.gitignore` includes `node_modules` and `docs/.vitepress/dist`
- Use CDN for static assets in production
- Configure appropriate caching strategies to improve performance
