---
sidebar_position: 10
title: "Chatflow 與 Agentic Chat 設定項"
---

> 除了畫布/提示詞本體,每個 Agent 應用還有一組**應用級設定項**,決定它的對外形象、對話行為與安全邊界。本篇分別說明 Chatflow、Agentic Chat、Workflow 三種模式的設定項。具體入口與選項以產品當前版本為準。

## 一、兩種模式的設定項概覽

| 設定類別 | Chatflow | Agentic Chat |
|---------|----------|--------------|
| 基本資訊(名稱/圖示/描述) | ✓ | ✓ |
| 開場白與推薦問題 | ✓ | ✓ |
| 提示詞(System Prompt) | 在畫布 LLM/Agent 節點內配置 | ✓ 應用級配置 |
| 模型選擇 | 節點級配置(每個節點可不同) | ✓ 應用級配置 |
| 工具 / Skill / 知識庫掛載 | 在對應節點內掛載 | ✓ 應用級掛載 |
| 記憶設定 | 節點級(記憶視窗) | 應用級 |
| Guardrail 安全護欄 | ✓ | ✓ |
| 釋出設定 | ✓ | ✓ |

> 核心區別:**Chatflow 的能力配置分散在節點裡**(哪個節點用什麼模型、掛什麼工具,各自獨立);**Agentic Chat 的能力配置集中在應用設定裡**(一份提示詞 + 一組工具,模型自主排程)。

## 二、Chatflow 設定項

入口:畫布右上角設定圖示,開啟「設定」側欄:

![Chatflow設定面板:Agent許可權、預設問題(多語言)、快取、對話端開關、會話變數與環境變數](./images/1.10-1-Chatflow%E8%AE%BE%E7%BD%AE.png)

| 設定項 | 說明 |
|--------|------|
| 基本資訊 | 應用名稱、圖示、描述 —— 使用者在對話端和廣場看到的形象 |
| Agent 許可權 | **編輯許可權**(如:空間使用者)與**使用許可權**(如:僅工作空間使用者可用),支援複製連結分享(詳見 [1.11 Agent 許可權管理](permissions)) |
| Agent 預設問題 | 展示給使用者的引導問題,支援 **EN / 簡 / 繁 三種語言分別配置**,降低首輪提問門檻 |
| 開場白 | 對話開始時的歡迎語,建議說明 Agent 的能力邊界 |
| 輸入變數 | 由 Start 節點定義的自定義欄位(見 [Start 節點](nodes/start)) |
| 記憶視窗 | 多輪對話保留的上下文輪數,在 LLM/Agent 節點內配置 —— 開夠用的最小值,控制用量 |
| 開啟快取 / 快取週期 | 開啟後對相同輸入複用快取結果,減少重複消耗;快取週期控制失效時間 |
| 中文簡/繁體轉換 | 開啟後按使用者語言偏好自動轉換簡繁體輸出 |
| 聊天曆史搜尋 | 開啟後用戶可搜尋與該 Agent 的歷史會話 |
| 輸入框檔案上傳 | 開啟後對話輸入框支援上傳檔案 |
| 會話變數 | 會話級變數,跨輪次儲存狀態供流程讀寫 |
| 環境變數 | 應用級常量(如 API Key 等配置),供畫布節點引用 |
| Guardrail | 輸入/輸出雙向合規攔截開關,面向客戶的 Agent **必須開啟**(見 [Guardrail](capabilities/guardrail)) |
| 釋出 | 釋出為可用版本;釋出到廣場需通過安全掃描(Pro 及以上套餐) |

## 三、Agentic Chat 設定項

![AgenticChat設定項:人機互動、待辦事項、派生Subagent與Agent許可權、簡繁轉換、允許Fork](./images/1.10-2-AgenticChat%E8%AE%BE%E7%BD%AE.png)

| 設定項 | 說明 |
|--------|------|
| 基本資訊 | 應用名稱、圖示、描述 |
| System Prompt | 應用級提示詞:角色設定、行為準則、輸出格式、合規紅線(寫法見 [2.1 提示詞技巧](../tutorials/prompt-writing)) |
| 模型選擇 | 應用級統一模型;主流 / SOTA 分級,SOTA 單位消耗更高 |
| 工具 | 掛載內建工具、第三方 MCP(需 Premium)、OpenAPI 工具,由模型自主決定呼叫 |
| Skill | 掛載自定義 / 官方 Skill,按需載入能力包 |
| 知識庫 | 掛載知識庫,讓回答基於你的私有文件 |
| 人機互動 | 允許模型在執行過程中向用戶提問並等待回答 |
| 開啟待辦事項 | 開啟後 AI 自動識別對話中的任務並拆解執行(見 [規劃與執行](capabilities/planning-execution)) |
| 派生 Subagent (Beta) | 允許 Agent 通過 `spawn_subagent` 派生獨立 Subagent 處理子任務,適合可分解/可並行的工作;Subagent 執行在隔離上下文,完成後返回摘要 |
| Agent 許可權 | 使用許可權(如:任何獲得連結的使用者可用)+ 複製連結;可**釋出到 Agent 廣場**(詳見 [1.11 Agent 許可權管理](permissions)) |
| 中文簡/繁體轉換 | 開啟後按使用者語言偏好自動轉換簡繁體輸出 |
| 允許 Fork | 開啟後其他使用者可複製該 Agent 的配置自行修改使用 |
| Guardrail | 同 Chatflow;Agentic Chat 自主性更強,更要配合護欄 |
| 開場白與推薦問題 | 同 Chatflow |

## 四、Workflow 設定項

Workflow 沒有對話端,設定項最精簡:

![Workflow設定面板:編輯許可權、快取、簡繁轉換與環境變數](./images/1.10-3-Workflow%E8%AE%BE%E7%BD%AE.png)

| 設定項 | 說明 |
|--------|------|
| Agent 許可權 | 僅**編輯許可權**(如:空間使用者)——Workflow 無對話端,沒有使用許可權概念,由 API/觸發器呼叫 |
| 開啟快取 / 快取週期 | 同 Chatflow |
| 中文簡/繁體轉換 | 同 Chatflow |
| 環境變數 | 同 Chatflow;無會話變數(Workflow 單次執行,無會話概念) |

## 五、設定項與套餐的關係

部分設定項的可選範圍由當前 Workspace 的套餐決定,配置時選不到的選項通常是套餐不含:

- **第三方 MCP 工具**:需 Premium 及以上
- **官方內建 Skill**:需 Pro 及以上;自定義 Skill 數量隨套餐(3 / 20 / 100)
- **部分模型**:受套餐或地區限制的模型不在選擇器中展示
- 完整規則見 [1.5 · 配置時 vs 執行時](plans)

## 關聯閱讀

- [2.5 技巧一:Agentic Chat 與 Chatflow 怎麼選](../tutorials/mode-model-selection)
- [1.7 執行除錯與觀測](capabilities/observability) — 配好設定後怎麼測試執行
- [1.7.4 Guardrail 安全護欄](capabilities/guardrail) — 面向客戶必開
