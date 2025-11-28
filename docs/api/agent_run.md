---
title: API Reference
outline: deep
---

# Overview

This document explains how to run an Agent’s Workflow via the HTTP API and obtain results synchronously or asynchronously. Two response modes are supported: JSON and Server-Sent Events (SSE).

- Base URL
  - `https://api.lbkrs.com/v1/babbage`
- Authentication
  - Include `x-agent-key` in the request headers (available on the Agent detail page)
- Response formats
  - Synchronous: JSON (default)
  - Streaming: SSE (set `Accept: text/event-stream` in the request header)

> Tip: The request body fields must match the parameters of the Agent’s Start node. The examples below use a `query` field.

---

# Run an Agent

Run the published Workflow for a specified Agent.

- Method & path: `POST /api/agents/:uid/runs`
- Full URL: `{BaseURL}/api/agents/:uid/runs`
- Response modes:
  - Default: synchronous JSON
  - Choose SSE streaming via request headers

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | string | Yes | Agent unique identifier |

## Query parameters (Query)

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| mode | string | No | `async` for asynchronous mode; omit for synchronous |

- Synchronous mode: returns the final result directly
- Asynchronous mode (`mode=async`): returns `workflow_run_id` immediately; fetch the result later via the query API

## Headers

| Header | Required | Value |
| --- | --- | --- |
| x-agent-key | Yes | Your Agent Key |
| Content-Type | Yes | `application/json` |
| Accept (optional) | No | `text/event-stream` (to use SSE streaming) |

## Request body

Provide the inputs required by the Workflow Start node. Example:

```json
{
  "query": "Tesla price action today"
}
```
> Actual fields depend on how the Agent is configured on the platform.


## Synchronous response (JSON, default)

Returns only the final result (the last node’s output).

```json
{
  "elapsed_time": 7.120832292,
  "error": "",
  "outputs": {
    "output": {
      "text": "…final output text…"
    }
  },
  "status": "succeeded",
  "workflow_run_id": 496
}
```
  - Field reference
  - `elapsed_time`: execution duration in seconds
  - `error`: error message if failed
  - `outputs`: final output (shape depends on the Workflow configuration)
  - `status`: `succeeded` or `failed`
  - `workflow_run_id`: ID of this run


## Streaming response (SSE)

When the request header includes `Accept: text/event-stream`, the server streams progress via events.

### Event types (event)

- `workflow_started`: execution started
- `message`: incremental text from the LLM or a node
- `workflow_finished`: execution completed

### Event payload (data)

Unified JSON structure (fields vary by event):

```json
{
  "event": "workflow_started",
  "workflow_run_id": 842,
  "data": {
    "started_at": 1751553245,
    "workflow_id": 1,
    "inputs": {}
  }
}

{
  "event": "message",
  "workflow_run_id": 842,
  "data": {
    "text": "…streaming delta…",
    "started_at": 1751553249
  }
}

{
  "event": "workflow_finished",
  "workflow_run_id": 842,
  "data": {
    "started_at": 1751553245,
    "workflow_id": 1,
    "status": "succeeded",
    "error": "",
    "outputs": {
      "output": {
        "text": "…final output text…"
      }
    }
  }
}
```
  - Field reference
  - `workflow_run_id`: run ID
  - `event`: event name (see above)
  - `data.started_at`: Unix timestamp (seconds)
  - `data.workflow_id`: Workflow ID
  - `data.inputs`: inputs used for this run
  - `data.text`: incremental text (for `message` events)
  - `data.outputs`: final outputs (for `workflow_finished`)
  - `data.status`: `succeeded` or `failed`
  - `data.error`: error message when failed


## Request examples

### cURL (synchronous JSON)

```bash
curl -X POST "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs" \
  -H "x-agent-key: <YOUR_AGENT_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"query":"Tesla price action today"}'### cURL (SSE streaming)

curl -N -X POST "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs" \
  -H "x-agent-key: <YOUR_AGENT_KEY>" \
  -H "Content-Type: application/json" \
  -H "Accept: text/event-stream" \
  -d '{"query":"Tesla price action today"}'### Go (SSE streaming)  
```

### golang 

#### SSE 请求方式

```go
package main

import (
  "bufio"
  "bytes"
  "context"
  "fmt"
  "net/http"
  "time"
)

func streamSSE(ctx context.Context, method, urlStr string, headers map[string]string, body *bytes.Buffer, onLine func(string) error) error {
  req, err := http.NewRequestWithContext(ctx, method, urlStr, body)
  if err != nil {
    return fmt.Errorf("create request failed: %w", err)
  }
  for k, v := range headers {
    req.Header.Set(k, v)
  }

  client := &http.Client{
    Timeout: 0, // For SSE, prefer no overall timeout; let ctx control it
  }

  resp, err := client.Do(req)
  if err != nil {
    return fmt.Errorf("send request failed: %w", err)
  }
  defer resp.Body.Close()

  if resp.StatusCode != http.StatusOK {
    return fmt.Errorf("bad status: %d", resp.StatusCode)
  }

  scanner := bufio.NewScanner(resp.Body)
  for scanner.Scan() {
    select {
    case <-ctx.Done():
      return ctx.Err()
    default:
      line := scanner.Text()
      if err := onLine(line); err != nil {
        return fmt.Errorf("handle line failed: %w", err)
      }
    }
  }
  if err := scanner.Err(); err != nil {
    return fmt.Errorf("read stream failed: %w", err)
  }
  return nil
}

func main() {
  ctx, cancel := context.WithTimeout(context.Background(), 120*time.Second)
  defer cancel()

  headers := map[string]string{
    "Accept":        "text/event-stream",
    "Cache-Control": "no-cache",
    "Content-Type":  "application/json",
    "x-agent-key":   "<YOUR_AGENT_KEY>",
  }

  body := bytes.NewBufferString(`{"query":"Hello"}`)
  url := "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs"

  fmt.Println("Starting streaming request...")
  err := streamSSE(ctx, "POST", url, headers, body, func(line string) error {
    fmt.Printf("SSE: %s\n", line)
    return nil
  })
  if err != nil {
    fmt.Printf("Streaming request failed: %v\n", err)
  }
}
```

#### 直接返回 JSON

```go
package main

import (
  "bytes"
  "context"
  "fmt"
  "io"
  "net/http"
  "time"
)

func httpJSON(ctx context.Context, method, urlStr string, headers map[string]string, body *bytes.Buffer) ([]byte, error) {
  req, err := http.NewRequestWithContext(ctx, method, urlStr, body)
  if err != nil {
    return nil, fmt.Errorf("create request failed: %w", err)
  }
  for k, v := range headers {
    req.Header.Set(k, v)
  }

  client := &http.Client{Timeout: 120 * time.Second}
  resp, err := client.Do(req)
  if err != nil {
    return nil, fmt.Errorf("send request failed: %w", err)
  }
  defer resp.Body.Close()

  if resp.StatusCode != http.StatusOK {
    return nil, fmt.Errorf("bad status: %d", resp.StatusCode)
  }
  return io.ReadAll(resp.Body)
}

func main() {
  ctx, cancel := context.WithTimeout(context.Background(), 120*time.Second)
  defer cancel()

  headers := map[string]string{
    "Cache-Control": "no-cache",
    "Content-Type":  "application/json",
    "x-agent-key":   "<YOUR_AGENT_KEY>",
  }

  body := bytes.NewBufferString(`{"query":"Tesla price action today"}`)
  url := "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs"

  b, err := httpJSON(ctx, "POST", url, headers, body)
  if err != nil {
    fmt.Printf("request failed: %v\n", err)
    return
  }
  fmt.Println(string(b))
}## Retrieve a WorkflowRun result

- Method & path: `GET /api/agents/:uid/runs/:workflow_run_id`
- Full URL: `{BaseURL}/api/agents/:uid/runs/:workflow_run_id`

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| uid | string | Yes | Agent unique identifier |
| workflow_run_id | int64 | Yes | Run ID (from `mode=async` or response body) |

## Response (JSON)

{
  "created_at": 1760630949,
  "elapsed_time": 98,
  "error": "",
  "inputs": {},
  "outputs": {},
  "status": "succeeded",
  "workflow_run_id": 59480850550554625
}
```
- Field reference
- `status`: `succeeded`, `failed`, or `running`

---

# Error Handling

All endpoints return a non‑200 status code on failure and include an error message in the response body:

```json
{
  "error": "invalid agent key",
  "status": "failed"
}
```

Common errors:

| HTTP Status | Scenario |
| --- | --- |
| 400 | Invalid or missing parameters |
| 401 | Authentication failed (`x-agent-key` invalid) |
| 404 | Resource not found (Agent/run ID) |
| 429 | Rate limited |
| 500 | Internal server error |
---