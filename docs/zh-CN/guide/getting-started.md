# 快速开始

欢迎使用 PortAI Docs！本指南将帮助您快速上手。

## 前置要求

在开始之前，请确保您的系统已安装：

- [Bun](https://bun.sh) >= 1.0.0
- Node.js >= 18.0.0（可选，Bun 可以替代）

## 安装

首先，克隆项目并安装依赖：

```bash
# 克隆项目
git clone <your-repo-url>
cd portai-docs

# 安装依赖
bun install
```

## 本地开发

启动本地开发服务器：

```bash
bun run docs:dev
```

VitePress 将在 `http://localhost:5173` 启动一个热重载的开发服务器。

## 项目结构

```
portai-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress 配置文件
│   ├── guide/              # 指南文档
│   ├── api/                # API 文档
│   ├── zh-CN/              # 简体中文文档
│   ├── zh-HK/              # 繁体中文文档
│   └── index.md            # 首页
├── package.json
└── README.md
```

## 编写文档

所有文档文件都位于 `docs/` 目录下。您可以使用 Markdown 语法编写文档。

### 创建新页面

1. 在 `docs/` 目录下创建一个新的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加导航或侧边栏配置
3. 开始编写内容

### Markdown 扩展

VitePress 支持许多 Markdown 扩展功能：

::: info
这是一个信息提示框
:::

::: tip
这是一个提示框
:::

::: warning
这是一个警告框
:::

::: danger
这是一个危险警告框
:::

## 多语言支持

本文档站点支持多语言：

- **English** (默认)
- **简体中文** (zh-CN)
- **繁體中文** (zh-HK)

您可以通过右上角的语言切换器切换语言。

## 下一步

- 了解如何[配置](/zh-CN/guide/configuration)您的文档站点
- 学习如何[部署](/zh-CN/guide/deployment)到生产环境
- 查看 [API 参考](/zh-CN/api/introduction)了解更多功能

