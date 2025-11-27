# API Introduction

Welcome to the PortAI API documentation.

## Overview

This section provides API reference documentation for the PortAI project, including all available interfaces, parameter descriptions, and usage examples.

## API Version

Current API version: **v1.0.0**

## Base URL

```
https://api.portai.example.com/v1
```

## Authentication

All API requests require an authentication token in the request header:

```http
Authorization: Bearer YOUR_API_TOKEN
```

### Getting an API Token

You can generate an API token in the console:

1. Log in to your account
2. Go to "Settings" > "API Keys"
3. Click "Generate New Key"

::: warning Note
Please keep your API key safe and do not expose it in public code.
:::

## Request Format

The API accepts JSON-formatted request bodies:

```http
POST /api/resource
Content-Type: application/json

{
  "key": "value"
}
```

## Response Format

All API responses use a unified JSON format:

### Success Response

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation successful"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Request successful |
| 201 | Created successfully |
| 400 | Bad request parameters |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource not found |
| 429 | Too many requests |
| 500 | Server error |

## Rate Limiting

API requests are subject to rate limits:

- **Free users**: 100 requests/hour
- **Pro users**: 1000 requests/hour
- **Enterprise users**: 10000 requests/hour

After exceeding the limit, you will receive a `429 Too Many Requests` response.

## Pagination

For endpoints that return lists, pagination parameters are supported:

```http
GET /api/resources?page=1&limit=20
```

Response includes pagination information:

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

## Next Steps

- Check out the [Core API](/api/core) for specific endpoints
- Read the [Getting Started](/guide/getting-started) guide for basic usage
