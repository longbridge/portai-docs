---
sidebar_position: 2
title: "概念速查表"
---

> 幫助文件中出現的全部概念，按**字母順序**排列 (中文術語按拼音首字母歸位)。點選"詳見"連結可跳轉到對應文件。

## A

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Agent | 在平臺上搭建的 AI 應用統稱，分 Chatflow(對話類) 與 Workflow(批處理類) 兩類 | [平臺概述](../basics/introduction) |
| Agent 廣場 | 瀏覽、使用與 Fork 他人釋出的 Agent 的地方;廣場內容**僅供學習交流**,不構成推薦 | [分地區服務說明](../basics/regions) |
| Agent 節點 | 畫布中的自主執行節點:LLM 迴圈自主呼叫工具直到任務完成 (Function Calling 模式) | [Agent 節點](../basics/nodes/agent) |
| Agentic Chat | 輕量建立模式：配置提示詞 + 掛工具即可執行，無需畫布編排，相當於 Chatflow 的輕量版 | [技巧一](../tutorials/mode-model-selection) |
| Answer 節點 | Chatflow 中向用戶輸出回覆內容的節點 | [Answer 節點](../basics/nodes/answer) |
| 安全稽核 | 釋出/上架廣場前，平臺對 Agent 名稱、頭像、描述與 Prompt 的稽核 | [安全稽核](../compliance/security-review) |

## B

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Branch Aggregator(分支聚合器) | 將多個分支的同類型變數匯聚為一個變數 (如 array[string]) 的節點 | [Branch Aggregator 節點](../basics/nodes/branch-aggregator) |
| 變數 | 節點之間傳遞資料的載體，含輸入變數與輸出變數 | [變數與資料流](../tutorials/variables-dataflow) |

## C

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Charged By(用量承擔方) | 一次執行的用量記在哪個 Workspace 頭上的歸屬規則 | [誰來承擔用量](../basics/plans) |
| Chatflow | 畫布編排的多輪對話類 Agent(如智慧客服) | [平臺概述](../basics/introduction) |
| Code 節點 (程式碼執行) | 在沙箱中執行 Python3 / JavaScript 程式碼的節點，程式碼需實現 `main` 函式並返回字典 | [Code 節點](../basics/nodes/code) |
| 長期記憶 / 短期記憶 | 跨會話 / 會話內的記憶能力，在 LLM 等節點中以開關配置 | [上下文與記憶管理](../basics/capabilities/context-memory) |

## D

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| DSL | 應用編排的匯入/匯出檔案 (YAML);匯入時自動校驗模型可用性 | [執行除錯與觀測](../basics/capabilities/observability) |
| 對話端 (LongbridgeAI Chatbot) | 官方對話產品，與 Agent 平臺**共享同一份用量額度** | [對話端體驗](../basics/capabilities/chat-experience) |

## E

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Editor | Workspace 成員角色：可建立、編輯空間內資源;數量隨套餐限制 | [成員角色](../basics/plans) |
| Embedding | 知識庫文件向量化處理，計費單元之一 | [什麼行為消耗用量](../basics/plans) |
| End 節點 | Workflow 的結束節點，定義最終輸出 | [End 節點](../basics/nodes/end) |

## F

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Function Calling | Agent 節點的工具呼叫模式：模型通過函式呼叫使用工具，迴圈執行直到完成 | [Agent 節點](../basics/nodes/agent) |

## G

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Guardrail(安全護欄) | 輸入/輸出雙向合規攔截:PII 打碼、不良內容與金融違規遮蔽 | [Guardrail](../basics/capabilities/guardrail) |

## H

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Http Request 節點 | 呼叫外部 HTTP 介面取數的節點，支援匯入 cURL | [Http Request 節點](../basics/nodes/http-request) |
| Human in the Loop(HITL) | 執行中在關鍵節點主動暫停、等待人工確認的模式 | [規劃與執行能力](../basics/capabilities/planning-execution) |

## I

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| IF Else 節點 (條件分支) | IF / ELIF / ELSE 多重條件路由節點 | [IF Else 節點](../basics/nodes/if-else) |
| Iteration 節點 (迭代) | 對列表逐項處理的容器節點，支援並行模式與錯誤處理 | [Iteration 節點](../basics/nodes/iteration) |
| item 變數 | 迭代內節點引用"當前這一輪正在處理的元素"的變數 | [Iteration 節點](../basics/nodes/iteration) |

## J

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Jinja2 | 模版轉換節點使用的模板語言 (變數、過濾器、控制結構) | [Variables Transformer 節點](../basics/nodes/variables-transformer) |
| 記憶視窗 | 多輪對話中保留的上下文輪數，開夠用的最小值可控制用量 | [上下文與記憶管理](../basics/capabilities/context-memory) |
| 結構化輸出 | 讓 LLM 按定義的結構 (如 JSON) 穩定輸出的能力 | [LLM 節點](../basics/nodes/llm) |

## L

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Langfuse | 「追蹤應用效能」支援的第三方跟蹤平臺，用於除錯與效能分析 | [執行除錯與觀測](../basics/capabilities/observability) |
| LLM 節點 | 呼叫大語言模型的核心節點 (提示詞、模型、記憶、結構化輸出) | [LLM 節點](../basics/nodes/llm) |
| Logs(執行日誌) | 檢視每次執行的輸入輸出、執行路徑與失敗原因 | [執行除錯與觀測](../basics/capabilities/observability) |
| Loop 節點 (迴圈) | 按中止條件或最大次數反覆執行同一段邏輯的容器節點 | [Loop 節點](../basics/nodes/loop) |

## M

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| MCP(第三方 MCP Server) | 外部工具接入協議，Premium 套餐可用 | [套餐權益差異速查](../basics/plans) |
| 模型分級 (主流 / SOTA) | 模型按消耗分兩級，SOTA 單位消耗更高;支援節點級模型配置 | [模型分級與用量的關係](../basics/plans) |

## O

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| OpenAPI 工具 | 使用者自行配置的外部 API 工具，呼叫不計費 | [Tool 節點](../basics/nodes/tools) |
| Owner | Workspace 唯一的最高許可權成員，唯一可執行訂閱購買/升級等商業操作 | [成員角色](../basics/plans) |

## P

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Parameter Extractor(引數提取器) | 用大模型從自然語言中提取結構化引數的節點，常用於對接工具入參 | [Parameter Extractor 節點](../basics/nodes/parameter-extractor) |
| Pro / Premium | 付費套餐檔位 (連續包月訂閱) | [套餐](../basics/plans) |

## Q

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Question Classifier(問題分類器) | 對使用者問題做意圖分類、按分類走不同分支的路由節點 | [Question Classifier 節點](../basics/nodes/question-classifier) |
| 權益卡 | 限時高檔位體驗卡：不改變訂閱關係，有效期內提升功能權益併疊加用量 | [HKSG 權益卡](../basics/hksg-benefits) |

## R

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| RAG(檢索增強生成) | 先檢索知識庫/搜尋，再基於檢索結果作答的問答範式 | [RAG 檢索範式技巧](../tutorials/rag-patterns) |
| Rerank | 對檢索結果重排序，計費單元之一 | [什麼行為消耗用量](../basics/plans) |

## S

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Skill | 按需載入的能力/方法包，可掛載到 Agent;數量上限隨套餐 | [Skill 體系](../basics/capabilities/skill) |
| Start 節點 | 流程的入口節點，定義輸入欄位 | [Start 節點](../basics/nodes/start) |
| Starter | 免費套餐，註冊自動啟用 | [套餐](../basics/plans) |
| System Prompt | 提示詞中穩定不變的部分：角色設定、行為準則、輸出格式、合規紅線 | [提示詞編寫技巧](../tutorials/prompt-writing) |
| 上下文壓縮 | 長對話自動壓縮歷史內容，避免上下文超限 | [上下文與記憶管理](../basics/capabilities/context-memory) |
| 試執行 (測試執行) | 不釋出應用，直接執行單個節點或整條流程驗證效果 | [執行除錯與觀測](../basics/capabilities/observability) |

## T

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Tool 節點 (工具) | 呼叫平臺內建工具或 OpenAPI 工具取數/執行的節點 | [Tool 節點](../basics/nodes/tools) |
| 套餐 (Plan) | 決定 Workspace 功能範圍與用量額度的商業物件 | [套餐](../basics/plans) |
| 提示詞 (Prompt) | 指揮模型行為的指令文本，分 System / User 兩層 | [提示詞編寫技巧](../tutorials/prompt-writing) |
| 統計 | Agent 資料統計面板：會話數、活躍使用者、耗時、滿意度等趨勢 | [執行除錯與觀測](../basics/capabilities/observability) |

## V

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Variables Transformer(模版轉換) | 用 Jinja2 模板對變數做格式化/轉換的節點 | [Variables Transformer 節點](../basics/nodes/variables-transformer) |
| Viewer | Workspace 成員角色：只讀檢視與使用資源;數量隨套餐限制 | [成員角色](../basics/plans) |

## W

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| Workflow | 自動化批處理類 Agent(一次進一次出，如研報生成) | [平臺概述](../basics/introduction) |
| Workflow 觸發器 | 定時 / Webhook 自動觸發 Workflow，無人值守執行 | [Workflow 觸發器](../basics/capabilities/workflow-triggers) |
| Workspace(工作空間) | 承載 Agent、知識庫與用量的基本單元，套餐生效的邊界 | [Workspace 與套餐體系](../basics/plans) |

## Y

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| 異常處理 / 失敗重試 | 節點級容錯配置：失敗自動重試、按策略處理異常 | [Tool 節點](../basics/nodes/tools) |
| 用量 (Usage) | AI 消耗的計量體系:LLM 呼叫、Embedding、沙箱執行等統一換算為 USD | [用量](../basics/plans) |

## Z

| 術語 | 一句話說明 | 詳見 |
|------|-----------|------|
| 知識庫 | 上傳私有文件供 Agent 檢索作答，容量隨套餐 | [知識庫](../basics/capabilities/knowledge-base) |
| 周滾動釋放 | 月度額度按每 7 天滾動釋放，每週可用 ≈ 月度總額 ÷ 4 | [額度的發放節奏](../basics/plans) |
| 追蹤應用效能 | 將應用執行上下文傳送到第三方跟蹤平臺 (Langfuse) 做除錯分析 | [執行除錯與觀測](../basics/capabilities/observability) |
