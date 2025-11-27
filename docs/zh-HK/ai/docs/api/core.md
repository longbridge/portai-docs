# Core API

This page lists the core API endpoints of PortAI.

## User Management

### Get User Info

Get information about the currently authenticated user.

```http
GET /api/users/me
```

**Response Example:**

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

### Update User Info

Update the current user's personal information.

```http
PUT /api/users/me
```

**Request Body:**

```json
{
  "username": "new_username",
  "email": "newemail@example.com"
}
```

**Response Example:**

```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "username": "new_username",
    "email": "newemail@example.com",
    "updatedAt": "2025-11-25T00:00:00Z"
  },
  "message": "User information updated successfully"
}
```

## Project Management

### Get Project List

Get all projects for the current user.

```http
GET /api/projects
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number, default 1 |
| limit | number | No | Items per page, default 20 |
| status | string | No | Project status filter |

**Response Example:**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "proj_123",
        "name": "My Project",
        "description": "Project description",
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

### Create Project

Create a new project.

```http
POST /api/projects
```

**Request Body:**

```json
{
  "name": "New Project",
  "description": "Project description",
  "settings": {
    "visibility": "private"
  }
}
```

**Response Example:**

```json
{
  "success": true,
  "data": {
    "id": "proj_456",
    "name": "New Project",
    "description": "Project description",
    "status": "active",
    "createdAt": "2025-11-25T00:00:00Z"
  },
  "message": "Project created successfully"
}
```

### Get Project Details

Get detailed information about a specific project.

```http
GET /api/projects/:id
```

**Path Parameters:**

- `id`: Project ID

**Response Example:**

```json
{
  "success": true,
  "data": {
    "id": "proj_123",
    "name": "My Project",
    "description": "Project description",
    "status": "active",
    "settings": {
      "visibility": "private"
    },
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-11-25T00:00:00Z"
  }
}
```

### Update Project

Update project information.

```http
PUT /api/projects/:id
```

**Request Body:**

```json
{
  "name": "Updated Project Name",
  "description": "Updated description"
}
```

### Delete Project

Delete a specific project.

```http
DELETE /api/projects/:id
```

**Response Example:**

```json
{
  "success": true,
  "message": "Project deleted successfully"
}
```

## Data Management

### Upload Data

Upload data to a project.

```http
POST /api/projects/:id/data
```

**Request Body (multipart/form-data):**

- `file`: File
- `metadata`: JSON-formatted metadata

**Response Example:**

```json
{
  "success": true,
  "data": {
    "id": "data_789",
    "filename": "data.csv",
    "size": 1024000,
    "uploadedAt": "2025-11-25T00:00:00Z"
  },
  "message": "Data uploaded successfully"
}
```

### Get Data List

Get the data list for a project.

```http
GET /api/projects/:id/data
```

**Response Example:**

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

## Error Codes

| Error Code | Description |
|------------|-------------|
| `INVALID_REQUEST` | Invalid request parameters |
| `UNAUTHORIZED` | Unauthorized access |
| `FORBIDDEN` | Forbidden access |
| `NOT_FOUND` | Resource not found |
| `RATE_LIMIT_EXCEEDED` | Rate limit exceeded |
| `INTERNAL_ERROR` | Internal server error |

## SDK Examples

### JavaScript/TypeScript

```typescript
import { PortAI } from '@portai/sdk'

const client = new PortAI({
  apiKey: 'YOUR_API_TOKEN'
})

// Get user info
const user = await client.users.me()

// Create project
const project = await client.projects.create({
  name: 'My Project',
  description: 'Project description'
})
```

### Python

```python
from portai import PortAI

client = PortAI(api_key='YOUR_API_TOKEN')

# Get user info
user = client.users.me()

# Create project
project = client.projects.create(
    name='My Project',
    description='Project description'
)
```

## More Information

For more help, check out:

- [API Introduction](/api/introduction)
- [Getting Started](/guide/getting-started)
- [Configuration](/guide/configuration)
