# API 介紹

歡迎查看 PortAI 的 API 文檔。

## 概述

本節提供了 PortAI 項目的 API 參考文檔，包括所有可用的接口、參數說明和使用示例。

## API 版本

當前 API 版本：**v1.0.0**

## 基礎 URL

```
https://api.portai.example.com/v1
```

## 認證

所有 API 請求都需要在請求頭中包含認證令牌：

```http
Authorization: Bearer YOUR_API_TOKEN
```

### 獲取 API 令牌

您可以在控制台中生成 API 令牌：

1. 登錄到您的賬戶
2. 進入「設置」>「API 密鑰」
3. 點擊「生成新密鑰」

::: warning 注意
請妥善保管您的 API 密鑰，不要在公開代碼中暴露。
:::

## 請求格式

API 接受 JSON 格式的請求體：

```http
POST /api/resource
Content-Type: application/json

{
  "key": "value"
}
```

## 響應格式

所有 API 響應都採用統一的 JSON 格式：

### 成功響應

```json
{
  "success": true,
  "data": {
    // 響應數據
  },
  "message": "操作成功"
}
```

### 錯誤響應

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "錯誤描述"
  }
}
```

## HTTP 狀態碼

| 狀態碼 | 說明 |
|--------|------|
| 200 | 請求成功 |
| 201 | 創建成功 |
| 400 | 請求參數錯誤 |
| 401 | 未授權 |
| 403 | 禁止訪問 |
| 404 | 資源不存在 |
| 429 | 請求過於頻繁 |
| 500 | 服務器錯誤 |

## 速率限制

API 請求受到速率限制：

- **免費用戶**: 100 請求/小時
- **專業用戶**: 1000 請求/小時
- **企業用戶**: 10000 請求/小時

超出限制後，您將收到 `429 Too Many Requests` 響應。

## 分頁

對於返回列表的接口，支持分頁參數：

```http
GET /api/resources?page=1&limit=20
```

響應包含分頁信息：

```json
{
  "success": true,
  "data": {
    "items": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "pages": 5
    }
  }
}
```

## 下一步

- 查看[核心 API](/zh-HK/api/core) 了解具體接口
- 閱讀[快速開始](/zh-HK/guide/getting-started)了解基礎使用

