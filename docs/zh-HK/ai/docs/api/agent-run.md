---
title: Agent 運行 API - PortAI API 參考
description: 透過 HTTP API 執行 AI Agent 工作流。支援同步 JSON 和串流 SSE 回應。包含 cURL 和 Go 代碼示例的完整指南。
head:
  - - meta
    - name: keywords
      content: PortAI, Agent API, 工作流，SSE, 串流回應，AI Agent, HTTP API, REST
outline: deep
---

# 概覽

本文檔介紹如何透過 HTTP API 執行 Agent 的 Workflow，並獲取同步／非同步執行結果。支援 JSON 與伺服器推送（SSE）兩種回應方式。

- 基礎網域（Base URL）
  - `https://api.lbkrs.com/v1/babbage`
- 認證方式
  - 需在請求標頭攜帶 `x-agent-key`（可在 Agent 詳情頁取得）
- 回應格式
  - 同步：JSON（預設）
  - 串流：SSE（請求 header 需要設定 `Accept: text/event-stream`）

> 提示：請求體欄位需與該 Agent 的「Start 節點」參數保持一致，以下示例以 `query` 欄位示範。

---

# 執行 Agent

執行指定 Agent 已發佈的 Workflow。

- 方法與路徑：`POST /api/agents/:uid/runs`
- 完整 URL：`{BaseURL}/api/agents/:uid/runs`
- 回應模式：
  - 預設同步 JSON
  - 可透過請求標頭選擇 SSE 串流輸出

## 路徑參數

| 參數 | 類型   | 必填 | 說明             |
| ---- | ------ | ---- | ---------------- |
| uid  | string | 是   | Agent 的唯一識別 |

## 查詢參數（Query）

| 參數 | 類型   | 必填 | 說明                                   |
| ---- | ------ | ---- | -------------------------------------- |
| mode | string | 否   | `async` 為非同步模式；省略時為同步執行 |

- 同步模式：直接返回最終結果
- 非同步模式（`mode=async`）：立即返回 `workflow_run_id`，後續透過查詢介面取得結果

## 請求標頭（Headers）

| Header         | 必填 | 值                                   |
| -------------- | ---- | ------------------------------------ |
| x-agent-key    | 是   | 你的 Agent Key                       |
| Content-Type   | 是   | `application/json`                   |
| Accept（可選） | 否   | `text/event-stream`（使用 SSE 串流） |

## 請求體（Body）

請求體為 Workflow Start 節點所需參數。示例：

```json
{
  "query": "特斯拉今日走勢"
}
```

> 實際欄位以該 Agent 在平台上的配置為準。

## 同步回應（JSON，預設）

只返回最終結果（最後一個節點的輸出）。

```json
{
  "elapsed_time": 7.120832292,
  "error": "",
  "outputs": {
    "output": {
      "text": "……最終結果文本……"
    }
  },
  "status": "succeeded",
  "workflow_run_id": 496
}
```

- 欄位說明
  - `elapsed_time`：執行耗時（秒）
  - `error`：若失敗，為錯誤資訊
  - `outputs`：最終輸出（結構取決於 Workflow 配置）
  - `status`：`succeeded` 或 `failed`
  - `workflow_run_id`：本次執行 ID

## 串流回應（SSE）

當請求標頭包含 `Accept: text/event-stream` 時，使用 SSE 以事件方式推送執行過程。

### 事件類型（event）

- `workflow_started`：執行開始
- `message`：大型模型或節點輸出的增量文本
- `workflow_finished`：執行完成

### 事件資料（data）

統一 JSON 結構（依事件不同所含欄位亦不同）：

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
    "text": "……增量輸出……",
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
        "text": "……最終結果文本……"
      }
    }
  }
}
```

- 欄位說明
  - `workflow_run_id`：執行 ID
  - `event`：事件名稱（見上）
  - `data.started_at`：Unix 時間戳（秒）
  - `data.workflow_id`：Workflow ID
  - `data.inputs`：本次執行輸入
  - `data.text`：增量文本（`message` 事件）
  - `data.outputs`：最終輸出（`workflow_finished` 事件）
  - `data.status`：`succeeded` 或 `failed`
  - `data.error`：錯誤資訊（失敗時存在）

## 請求示例

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

#### SSE 請求方式

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
    Timeout: 0, // SSE 建議不設總超時，由上層 ctx 控制
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

  fmt.Println("開始流式請求...")
  err := streamSSE(ctx, "POST", url, headers, body, func(line string) error {
    fmt.Printf("SSE: %s\n", line)
    return nil
  })
  if err != nil {
    fmt.Printf("流式請求失敗: %v\n", err)
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
    fmt.Printf("請求失敗: %v\n", err)
    return
  }
  fmt.Println(string(b))
}
```

## 查詢 WorkflowRun 結果

- 方法與路徑：`GET /api/agents/:uid/runs/:workflow_run_id`
- 完整 URL：`{BaseURL}/api/agents/:uid/runs/:workflow_run_id`

## 路徑參數

| 參數            | 類型   | 必填 | 說明                                  |
| --------------- | ------ | ---- | ------------------------------------- |
| uid             | string | 是   | Agent 的唯一識別                      |
| workflow_run_id | int64  | 是   | 執行 ID（來自 `mode=async` 或回應體） |

## 回應（JSON）

```json
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

- 欄位說明
- `status`：`succeeded`、`failed`、`running`

---

# 錯誤處理

所有接口在失敗時將返回非 200 狀態碼，並在回應體中包含錯誤資訊：

```json
{
  "error": "invalid agent key",
  "status": "failed"
}
```

常見錯誤：

| HTTP 狀態碼 | 錯誤場景                       |
| ----------- | ------------------------------ |
| 400         | 參數不合法或缺失               |
| 401         | 認證失敗（`x-agent-key` 無效） |
| 404         | 資源不存在（Agent／執行 ID）   |
| 429         | 頻率限制                       |
| 500         | 伺服器內部錯誤                 |
