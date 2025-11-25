# 核心 API

本頁面列出了 PortAI 的核心 API 接口。

## 用戶管理

### 獲取用戶信息

獲取當前認證用戶的信息。

```http
GET /api/users/me
```

**響應示例：**

```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "username": "john_doe",
    "email": "john@example.com",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

### 更新用戶信息

更新當前用戶的個人信息。

```http
PUT /api/users/me
```

**請求體：**

```json
{
  "username": "new_username",
  "email": "newemail@example.com"
}
```

**響應示例：**

```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "username": "new_username",
    "email": "newemail@example.com",
    "updatedAt": "2025-11-25T00:00:00Z"
  },
  "message": "用戶信息更新成功"
}
```

## 項目管理

### 獲取項目列表

獲取當前用戶的所有項目。

```http
GET /api/projects
```

**查詢參數：**

| 參數 | 類型 | 必需 | 說明 |
|------|------|------|------|
| page | number | 否 | 頁碼，默認 1 |
| limit | number | 否 | 每頁數量，默認 20 |
| status | string | 否 | 項目狀態過濾 |

**響應示例：**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "proj_123",
        "name": "My Project",
        "description": "項目描述",
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "pages": 3
    }
  }
}
```

### 創建項目

創建一個新項目。

```http
POST /api/projects
```

**請求體：**

```json
{
  "name": "New Project",
  "description": "項目描述",
  "settings": {
    "visibility": "private"
  }
}
```

**響應示例：**

```json
{
  "success": true,
  "data": {
    "id": "proj_456",
    "name": "New Project",
    "description": "項目描述",
    "status": "active",
    "createdAt": "2025-11-25T00:00:00Z"
  },
  "message": "項目創建成功"
}
```

### 獲取項目詳情

獲取指定項目的詳細信息。

```http
GET /api/projects/:id
```

**路徑參數：**

- `id`: 項目 ID

**響應示例：**

```json
{
  "success": true,
  "data": {
    "id": "proj_123",
    "name": "My Project",
    "description": "項目描述",
    "status": "active",
    "settings": {
      "visibility": "private"
    },
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-11-25T00:00:00Z"
  }
}
```

### 更新項目

更新項目信息。

```http
PUT /api/projects/:id
```

**請求體：**

```json
{
  "name": "Updated Project Name",
  "description": "更新的描述"
}
```

### 刪除項目

刪除指定項目。

```http
DELETE /api/projects/:id
```

**響應示例：**

```json
{
  "success": true,
  "message": "項目刪除成功"
}
```

## 數據管理

### 上傳數據

上傳數據到項目。

```http
POST /api/projects/:id/data
```

**請求體（multipart/form-data）：**

- `file`: 文件
- `metadata`: JSON 格式的元數據

**響應示例：**

```json
{
  "success": true,
  "data": {
    "id": "data_789",
    "filename": "data.csv",
    "size": 1024000,
    "uploadedAt": "2025-11-25T00:00:00Z"
  },
  "message": "數據上傳成功"
}
```

### 獲取數據列表

獲取項目的數據列表。

```http
GET /api/projects/:id/data
```

**響應示例：**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "data_789",
        "filename": "data.csv",
        "size": 1024000,
        "uploadedAt": "2025-11-25T00:00:00Z"
      }
    ]
  }
}
```

## 錯誤代碼

| 錯誤代碼 | 說明 |
|----------|------|
| `INVALID_REQUEST` | 請求參數無效 |
| `UNAUTHORIZED` | 未授權訪問 |
| `FORBIDDEN` | 禁止訪問 |
| `NOT_FOUND` | 資源不存在 |
| `RATE_LIMIT_EXCEEDED` | 超出速率限制 |
| `INTERNAL_ERROR` | 服務器內部錯誤 |

## SDK 示例

### JavaScript/TypeScript

```typescript
import { PortAI } from '@portai/sdk'

const client = new PortAI({
  apiKey: 'YOUR_API_TOKEN'
})

// 獲取用戶信息
const user = await client.users.me()

// 創建項目
const project = await client.projects.create({
  name: 'My Project',
  description: '項目描述'
})
```

### Python

```python
from portai import PortAI

client = PortAI(api_key='YOUR_API_TOKEN')

# 獲取用戶信息
user = client.users.me()

# 創建項目
project = client.projects.create(
    name='My Project',
    description='項目描述'
)
```

## 更多信息

如需更多幫助，請查看：

- [API 介紹](/zh-HK/api/introduction)
- [快速開始](/zh-HK/guide/getting-started)
- [配置說明](/zh-HK/guide/configuration)

