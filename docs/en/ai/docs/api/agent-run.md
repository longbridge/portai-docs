---
sidebar_position: 1
title: Agent Run API - LongbridgeAI API Reference
description: Run AI Agent workflows via HTTP API. Supports synchronous JSON and streaming SSE responses. A complete guide with cURL and Go code examples.
head:
  - - meta
    - name: keywords
      content: LongbridgeAI, Agent API, Workflow, SSE, streaming response, AI Agent, HTTP API, REST
outline: deep
---

# Overview

This document describes how to run an Agent's Workflow via HTTP API and retrieve synchronous/asynchronous execution results. Both JSON and Server-Sent Events (SSE) response modes are supported.

- Authentication
  - The request header must carry `x-agent-key` (available on the Agent details page)
- Response formats
  - Synchronous: JSON (default)
  - Streaming: SSE (set the request header `Accept: text/event-stream`)

> Tip: The request body fields must match the parameters of the Agent's **Start node**. The examples below use the `query` field for demonstration.

## Run an Agent

Runs the published Workflow of the specified Agent.

- Method and path: `POST /api/agents/:uid/runs`
- Full URL: `{BaseURL}/api/agents/:uid/runs`
- Response modes:
  - Synchronous JSON by default
  - Select SSE streaming output via the request header

## Path Parameters

| Parameter | Type   | Required | Description             |
| ---- | ------ | ---- | ---------------- |
| uid  | string | Yes  | The Agent's unique identifier |

## Query Parameters

| Parameter | Type   | Required | Description                                 |
| ---- | ------ | ---- | ------------------------------------ |
| mode | string | No   | `async` for asynchronous mode; omit for synchronous execution |

- Synchronous mode: returns the final result directly
- Asynchronous mode (`mode=async`): returns `workflow_run_id` immediately; retrieve the result later via the query endpoint

## Request Headers

| Header         | Required | Value                                   |
| -------------- | ---- | ------------------------------------ |
| x-agent-key    | Yes  | Your Agent Key                       |
| Content-Type   | Yes  | `application/json`                   |
| Accept (optional) | No   | `text/event-stream` (for SSE streaming) |

## Request Body

The request body contains the parameters required by the Workflow's Start node. Example:

```json
{
  "query": "Tesla's price movement today"
}
```

> The actual fields depend on the Agent's configuration on the platform.

## Synchronous Response (JSON, Default)

Only the final result (the output of the last node) is returned.

```json
{
  "elapsed_time": 7.120832292,
  "error": "",
  "outputs": {
    "output": {
      "text": "...final result text..."
    }
  },
  "status": "succeeded",
  "workflow_run_id": "496"
}
```

- Field descriptions
  - `elapsed_time`: execution time (seconds)
  - `error`: error message on failure
  - `outputs`: final output (structure depends on the Workflow configuration)
  - `status`: `succeeded` or `failed`
  - `workflow_run_id`: ID of this run

## Streaming Response (SSE)

When the request header contains `Accept: text/event-stream`, the execution process is pushed as SSE events.

### Event Types (event)

- `workflow_started`: execution started
- `message`: incremental text output from the LLM or a node
- `workflow_finished`: execution finished

### Event Data (data)

A unified JSON structure (fields vary by event type):

```json
{
  "event": "workflow_started",
  "workflow_run_id": "842",
  "data": {
    "started_at": 1751553245,
    "workflow_id": 1,
    "inputs": {}
  }
}

{
  "event": "message",
  "workflow_run_id": "842",
  "data": {
    "text": "...incremental output...",
    "started_at": 1751553249
  }
}

{
  "event": "workflow_finished",
  "workflow_run_id": "842",
  "data": {
    "started_at": 1751553245,
    "workflow_id": 1,
    "status": "succeeded",
    "error": "",
    "outputs": {
      "output": {
        "text": "...final result text..."
      }
    }
  }
}
```

- Field descriptions
  - `workflow_run_id`: run ID
  - `event`: event name (see above)
  - `data.started_at`: Unix timestamp (seconds)
  - `data.workflow_id`: Workflow ID
  - `data.inputs`: inputs of this run
  - `data.text`: incremental text (`message` event)
  - `data.outputs`: final output (`workflow_finished` event)
  - `data.status`: `succeeded` or `failed`
  - `data.error`: error message (present on failure)

## Request Examples

### cURL (Synchronous JSON)

```bash
curl -X POST "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs" \
  -H "x-agent-key: <YOUR_AGENT_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"query":"Tesla price movement today"}'### cURL (SSE streaming)

curl -N -X POST "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs" \
  -H "x-agent-key: <YOUR_AGENT_KEY>" \
  -H "Content-Type: application/json" \
  -H "Accept: text/event-stream" \
  -d '{"query":"Tesla price movement today"}'### Go (SSE streaming)
```

### golang

#### SSE Request

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
    Timeout: 0, // For SSE, avoid setting an overall timeout; let the caller's ctx control it
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

#### Direct JSON Response

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

  body := bytes.NewBufferString(`{"query":"Tesla price movement today"}`)
  url := "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs"

  b, err := httpJSON(ctx, "POST", url, headers, body)
  if err != nil {
    fmt.Printf("Request failed: %v\n", err)
    return
  }
  fmt.Println(string(b))
}
```

## Query a WorkflowRun Result

- Method and path: `GET /api/agents/:uid/runs/:workflow_run_id`
- Full URL: `{BaseURL}/api/agents/:uid/runs/:workflow_run_id`

## Path Parameters

| Parameter            | Type   | Required | Description                                  |
| --------------- | ------ | ---- | ------------------------------------- |
| uid             | string | Yes  | The Agent's unique identifier                      |
| workflow_run_id | string | Yes  | Run ID (from `mode=async` or the response body) |

## Response (JSON)

```json
{
  "created_at": 1760630949,
  "elapsed_time": 98,
  "error": "",
  "inputs": {},
  "outputs": {},
  "status": "succeeded",
  "workflow_run_id": "59480850550554625"
}
```

- Field descriptions
- `status`: `succeeded`, `failed`, `running`

---

# Error Handling

All endpoints return a non-200 status code on failure, with error details in the response body:

```json
{
  "error": "invalid agent key",
  "status": "failed"
}
```

Common errors:

| HTTP Status Code | Error Scenario                       |
| ----------- | ------------------------------ |
| 400         | Invalid or missing parameters               |
| 401         | Authentication failed (invalid `x-agent-key`) |
| 404         | Resource not found (Agent / run ID)    |
| 429         | Rate limited                       |
| 500         | Internal server error                 |
