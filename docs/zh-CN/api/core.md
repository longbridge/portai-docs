# 核心 API

本页面列出了 PortAI 的核心 API 接口。

## 用户管理

### 获取用户信息

获取当前认证用户的信息。

```http
GET /api/users/me
```

**响应示例：**

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

### 更新用户信息

更新当前用户的个人信息。

```http
PUT /api/users/me
```

**请求体：**

```json
{
  "username": "new_username",
  "email": "newemail@example.com"
}
```

**响应示例：**

```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "username": "new_username",
    "email": "newemail@example.com",
    "updatedAt": "2025-11-25T00:00:00Z"
  },
  "message": "用户信息更新成功"
}
```

## 项目管理

### 获取项目列表

获取当前用户的所有项目。

```http
GET /api/projects
```

**查询参数：**

| 参数 | 类型 | 必需 | 说明 |
|------|------|------|------|
| page | number | 否 | 页码，默认 1 |
| limit | number | 否 | 每页数量，默认 20 |
| status | string | 否 | 项目状态过滤 |

**响应示例：**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "proj_123",
        "name": "My Project",
        "description": "项目描述",
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

### 创建项目

创建一个新项目。

```http
POST /api/projects
```

**请求体：**

```json
{
  "name": "New Project",
  "description": "项目描述",
  "settings": {
    "visibility": "private"
  }
}
```

**响应示例：**

```json
{
  "success": true,
  "data": {
    "id": "proj_456",
    "name": "New Project",
    "description": "项目描述",
    "status": "active",
    "createdAt": "2025-11-25T00:00:00Z"
  },
  "message": "项目创建成功"
}
```

### 获取项目详情

获取指定项目的详细信息。

```http
GET /api/projects/:id
```

**路径参数：**

- `id`: 项目 ID

**响应示例：**

```json
{
  "success": true,
  "data": {
    "id": "proj_123",
    "name": "My Project",
    "description": "项目描述",
    "status": "active",
    "settings": {
      "visibility": "private"
    },
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-11-25T00:00:00Z"
  }
}
```

### 更新项目

更新项目信息。

```http
PUT /api/projects/:id
```

**请求体：**

```json
{
  "name": "Updated Project Name",
  "description": "更新的描述"
}
```

### 删除项目

删除指定项目。

```http
DELETE /api/projects/:id
```

**响应示例：**

```json
{
  "success": true,
  "message": "项目删除成功"
}
```

## 数据管理

### 上传数据

上传数据到项目。

```http
POST /api/projects/:id/data
```

**请求体（multipart/form-data）：**

- `file`: 文件
- `metadata`: JSON 格式的元数据

**响应示例：**

```json
{
  "success": true,
  "data": {
    "id": "data_789",
    "filename": "data.csv",
    "size": 1024000,
    "uploadedAt": "2025-11-25T00:00:00Z"
  },
  "message": "数据上传成功"
}
```

### 获取数据列表

获取项目的数据列表。

```http
GET /api/projects/:id/data
```

**响应示例：**

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

## 错误代码

| 错误代码 | 说明 |
|----------|------|
| `INVALID_REQUEST` | 请求参数无效 |
| `UNAUTHORIZED` | 未授权访问 |
| `FORBIDDEN` | 禁止访问 |
| `NOT_FOUND` | 资源不存在 |
| `RATE_LIMIT_EXCEEDED` | 超出速率限制 |
| `INTERNAL_ERROR` | 服务器内部错误 |

## SDK 示例

### JavaScript/TypeScript

```typescript
import { PortAI } from '@portai/sdk'

const client = new PortAI({
  apiKey: 'YOUR_API_TOKEN'
})

// 获取用户信息
const user = await client.users.me()

// 创建项目
const project = await client.projects.create({
  name: 'My Project',
  description: '项目描述'
})
```

### Python

```python
from portai import PortAI

client = PortAI(api_key='YOUR_API_TOKEN')

# 获取用户信息
user = client.users.me()

# 创建项目
project = client.projects.create(
    name='My Project',
    description='项目描述'
)
```

## 更多信息

如需更多帮助，请查看：

- [API 介绍](/zh-CN/api/introduction)
- [快速开始](/zh-CN/guide/getting-started)
- [配置说明](/zh-CN/guide/configuration)

