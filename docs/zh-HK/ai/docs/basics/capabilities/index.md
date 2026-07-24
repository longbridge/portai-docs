---
sidebar_position: 0
title: "平臺能力總覽"
---

節點編排只是平臺的骨架。圍繞 Agent 的搭建、執行、安全與協作,平臺提供一整套配套能力,每項能力獨立成篇:

## 能力索引

### 核心能力(直接決定 Agent 的上限)

| # | 能力 | 一句話說明 |
|---|------|-----------|
| 01 | [知識庫](knowledge-base) | 上傳私有文件,讓 Agent 基於你的知識作答 |
| 02 | [Skill 體系](skill) | 按需載入的能力擴充套件包,動態管理上下文 |
| 03 | [Workflow 觸發器](workflow-triggers) | 定時 / Webhook 自動觸發,Workflow 無人值守執行 |
| 04 | [Guardrail 安全護欄](guardrail) | 輸入輸出雙向合規攔截:PII 打碼、不良內容與金融違規遮蔽 |
| 05 | [上下文與記憶管理](context-memory) | 短期記憶、上下文傳遞與自動壓縮,多輪對話不失憶 |
| 06 | [規劃與執行能力](planning-execution) | Todo 規劃、Human in the Loop、Agent 回答模式 |

### 支撐能力(讓搭建和運維更高效)

| # | 能力 | 一句話說明 |
|---|------|-----------|
| 07 | [執行除錯與觀測](observability) | 三種執行方式(節點/整體/正式)、GUI 批次執行、Logs 日誌、統計面板與 Langfuse 追蹤 |
| 08 | [安全校驗與本地化](security-i18n) | 交易密碼校驗、簡繁自動轉換 |
| 09 | [畫布與協作效率](canvas-collaboration) | 跨 Agent 複製節點、工作流上鎖、成員許可權切換等 |
| 10 | [模型與工具生態](model-tool-ecosystem) | SOTA 模型池、賬戶/社群/盈虧 MCP、行情工具時區最佳化 |
| 11 | [官方 Chatbot 體驗](chat-experience) | 會話圖表、語音輸入、長期記憶等官方 Chatbot(LongbridgeAI 對話端)能力,與平臺共享用量 |
| 12 | [容災能力](disaster-recovery) | 模型跨廠商呼叫、模型組合、失敗重試、異常處理 | — |

## 使用建議

- **搭建第一個 Agent 前**:不需要通讀,先完成 [1.3 快速上手](../quick-start)
- **Agent 要用到私有知識** → 01 知識庫;**要接專業能力包** → 02 Skill
- **Workflow 要自動化執行** → 03 觸發器;**Agent 面向客戶** → 04 Guardrail(必讀)
- **多輪對話記不住上文 / 上下文爆量** → 05 上下文與記憶
- **複雜任務失控、想要人工把關** → 06 規劃與執行

---

*操作入口與功能以產品當前版本為準。新能力釋出後,在本目錄新增或更新對應能力文件,並在上表登記。*
