---
title: Agent 运行 API - PortAI API 参考
description: 通过 HTTP API 运行 AI Agent 工作流。支持同步 JSON 和流式 SSE 响应。包含 cURL 和 Go 代码示例的完整指南。
head:
  - - meta
    - name: keywords
      content: PortAI, Agent API, 工作流，SSE, 流式响应，AI Agent, HTTP API, REST
outline: deep
---

# 概览

本文档介绍如何通过 HTTP API 运行 Agent 的 Workflow，并获取同步/异步执行结果。支持 JSON 与服务端推送（SSE）两种响应方式。

- 基础域名（Base URL）
  - `https://api.lbkrs.com/v1/babbage`
- 认证方式
  - 需在请求头携带 `x-agent-key`（可在 Agent 详情获取）
- 返回格式
  - 同步：JSON（默认）
  - 流式：SSE（请求 header 需要设置 `Accept: text/event-stream`）

> 提示：请求体字段需与该 Agent 的「Start 节点」参数保持一致，以下示例以 `query` 字段演示。

---

# 运行 Agent

运行指定 Agent 已发布的 Workflow。

- 方法与路径：`POST /api/agents/:uid/runs`
- 完整 URL：`{BaseURL}/api/agents/:uid/runs`
- 响应模式：
  - 默认同步 JSON
  - 通过请求头选择 SSE 流式输出

## 路径参数

| 参数 | 类型   | 必填 | 说明             |
| ---- | ------ | ---- | ---------------- |
| uid  | string | 是   | Agent 的唯一标识 |

## 查询参数（Query）

| 参数 | 类型   | 必填 | 说明                                 |
| ---- | ------ | ---- | ------------------------------------ |
| mode | string | 否   | `async` 为异步模式；省略时为同步执行 |

- 同步模式：直接返回最终结果
- 异步模式（`mode=async`）：立即返回 `workflow_run_id`，后续通过查询接口获取结果

## 请求头（Headers）

| Header         | 必填 | 值                                   |
| -------------- | ---- | ------------------------------------ |
| x-agent-key    | 是   | 你的 Agent Key                       |
| Content-Type   | 是   | `application/json`                   |
| Accept（可选） | 否   | `text/event-stream`（使用 SSE 流式） |

## 请求体（Body）

请求体为 Workflow Start 节点所需参数。示例：

```json
{
  "query": "特斯拉今日走势"
}
```

> 实际字段以该 Agent 在平台上的配置为准。

## 同步响应（JSON，默认）

只返回最终结果（最后一个节点的输出）。

```json
{
  "elapsed_time": 7.120832292,
  "error": "",
  "outputs": {
    "output": {
      "text": "……最终结果文本……"
    }
  },
  "status": "succeeded",
  "workflow_run_id": "496"
}
```

- 字段说明
  - `elapsed_time`：执行耗时（秒）
  - `error`：若失败，为错误信息
  - `outputs`：最终输出（结构取决于 Workflow 配置）
  - `status`：`succeeded` 或 `failed`
  - `workflow_run_id`：本次执行 ID

## 流式响应（SSE）

当请求头包含 `Accept: text/event-stream` 时，使用 SSE 按事件推送执行过程。

### 事件类型（event）

- `workflow_started`：执行开始
- `message`：大模型或节点输出的增量文本
- `workflow_finished`：执行完成

### 事件数据（data）

统一 JSON 结构（按事件不同包含的字段不同）：

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
    "text": "……增量输出……",
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
        "text": "……最终结果文本……"
      }
    }
  }
}
```

- 字段说明
  - `workflow_run_id`：执行 ID
  - `event`：事件名称（见上）
  - `data.started_at`：Unix 时间戳（秒）
  - `data.workflow_id`：Workflow ID
  - `data.inputs`：本次执行输入
  - `data.text`：增量文本（`message` 事件）
  - `data.outputs`：最终输出（`workflow_finished` 事件）
  - `data.status`：`succeeded` 或 `failed`
  - `data.error`：错误信息（失败时存在）

## 请求示例

### cURL（同步 JSON）

```bash
curl -X POST "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs" \
  -H "x-agent-key: <YOUR_AGENT_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"query":"特斯拉今日走势"}'### cURL（SSE 流式）

curl -N -X POST "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs" \
  -H "x-agent-key: <YOUR_AGENT_KEY>" \
  -H "Content-Type: application/json" \
  -H "Accept: text/event-stream" \
  -d '{"query":"特斯拉今日走势"}'### Go（SSE 流式）
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
    Timeout: 0, // SSE 建议不设总超时，由上层 ctx 控制
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

  body := bytes.NewBufferString(`{"query":"你好"}`)
  url := "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs"

  fmt.Println("开始流式请求...")
  err := streamSSE(ctx, "POST", url, headers, body, func(line string) error {
    fmt.Printf("SSE: %s\n", line)
    return nil
  })
  if err != nil {
    fmt.Printf("流式请求失败: %v\n", err)
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

  body := bytes.NewBufferString(`{"query":"特斯拉今日走势"}`)
  url := "https://api.longbridge.xyz/v1/babbage/api/agents/<UID>/runs"

  b, err := httpJSON(ctx, "POST", url, headers, body)
  if err != nil {
    fmt.Printf("请求失败: %v\n", err)
    return
  }
  fmt.Println(string(b))
}
```

## 查询 WorkflowRun 结果

- 方法与路径：`GET /api/agents/:uid/runs/:workflow_run_id`
- 完整 URL：`{BaseURL}/api/agents/:uid/runs/:workflow_run_id`

## 路径参数

| 参数            | 类型   | 必填 | 说明                                  |
| --------------- | ------ | ---- | ------------------------------------- |
| uid             | string | 是   | Agent 的唯一标识                      |
| workflow_run_id | string  | 是   | 运行 ID（来自 `mode=async` 或响应体） |

## 响应（JSON）

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

- 字段说明
- `status`：`succeeded`、`failed`、`running`

---

# 错误处理

所有接口在失败时将返回非 200 状态码，并在响应体中包含错误信息：

```json
{
  "error": "invalid agent key",
  "status": "failed"
}
```

常见错误：

| HTTP 状态码 | 错误场景                       |
| ----------- | ------------------------------ |
| 400         | 参数不合法或缺失               |
| 401         | 认证失败（`x-agent-key` 无效） |
| 404         | 资源不存在（Agent/运行 ID）    |
| 429         | 频率限制                       |
| 500         | 服务器内部错误                 |
