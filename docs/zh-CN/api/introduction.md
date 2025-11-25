# API 介绍

欢迎查看 PortAI 的 API 文档。

## 概述

本节提供了 PortAI 项目的 API 参考文档，包括所有可用的接口、参数说明和使用示例。

## API 版本

当前 API 版本：**v1.0.0**

## 基础 URL

```
https://api.portai.example.com/v1
```

## 认证

所有 API 请求都需要在请求头中包含认证令牌：

```http
Authorization: Bearer YOUR_API_TOKEN
```

### 获取 API 令牌

您可以在控制台中生成 API 令牌：

1. 登录到您的账户
2. 进入"设置" > "API 密钥"
3. 点击"生成新密钥"

::: warning 注意
请妥善保管您的 API 密钥，不要在公开代码中暴露。
:::

## 请求格式

API 接受 JSON 格式的请求体：

```http
POST /api/resource
Content-Type: application/json

{
  "key": "value"
}
```

## 响应格式

所有 API 响应都采用统一的 JSON 格式：

### 成功响应

```json
{
  "success": true,
  "data": {
    // 响应数据
  },
  "message": "操作成功"
}
```

### 错误响应

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述"
  }
}
```

## HTTP 状态码

| 状态码 | 说明 |
|--------|------|
| 200 | 请求成功 |
| 201 | 创建成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 429 | 请求过于频繁 |
| 500 | 服务器错误 |

## 速率限制

API 请求受到速率限制：

- **免费用户**: 100 请求/小时
- **专业用户**: 1000 请求/小时
- **企业用户**: 10000 请求/小时

超出限制后，您将收到 `429 Too Many Requests` 响应。

## 分页

对于返回列表的接口，支持分页参数：

```http
GET /api/resources?page=1&limit=20
```

响应包含分页信息：

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

- 查看[核心 API](/zh-CN/api/core) 了解具体接口
- 阅读[快速开始](/zh-CN/guide/getting-started)了解基础使用

