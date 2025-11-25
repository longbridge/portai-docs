# 快速開始

歡迎使用 PortAI Docs！本指南將幫助您快速上手。

## 前置要求

在開始之前，請確保您的系統已安裝：

- [Bun](https://bun.sh) >= 1.0.0
- Node.js >= 18.0.0（可選，Bun 可以替代）

## 安裝

首先，克隆項目並安裝依賴：

```bash
# 克隆項目
git clone <your-repo-url>
cd portai-docs

# 安裝依賴
bun install
```

## 本地開發

啟動本地開發服務器：

```bash
bun run docs:dev
```

VitePress 將在 `http://localhost:5173` 啟動一個熱重載的開發服務器。

## 項目結構

```
portai-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress 配置文件
│   ├── guide/              # 指南文檔
│   ├── api/                # API 文檔
│   ├── zh-CN/              # 簡體中文文檔
│   ├── zh-HK/              # 繁體中文文檔
│   └── index.md            # 首頁
├── package.json
└── README.md
```

## 編寫文檔

所有文檔文件都位於 `docs/` 目錄下。您可以使用 Markdown 語法編寫文檔。

### 創建新頁面

1. 在 `docs/` 目錄下創建一個新的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中添加導航或側邊欄配置
3. 開始編寫內容

### Markdown 擴展

VitePress 支持許多 Markdown 擴展功能：

::: info
這是一個信息提示框
:::

::: tip
這是一個提示框
:::

::: warning
這是一個警告框
:::

::: danger
這是一個危險警告框
:::

## 多語言支持

本文檔站點支持多語言：

- **English** (默認)
- **簡體中文** (zh-CN)
- **繁體中文** (zh-HK)

您可以通過右上角的語言切換器切換語言。

## 下一步

- 了解如何[配置](/zh-HK/guide/configuration)您的文檔站點
- 學習如何[部署](/zh-HK/guide/deployment)到生產環境
- 查看 [API 參考](/zh-HK/api/introduction)了解更多功能

