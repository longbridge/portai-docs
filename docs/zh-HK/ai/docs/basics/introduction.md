---
sidebar_position: 1
title: "平臺概述與核心概念"
---

## LongbridgeAI Agent Platform 是什麼

LongbridgeAI Agent Platform 是長橋的 AI Agent 編排平臺。你在一塊**視覺化畫布**上拖入節點、連線、配置,即可搭建出能理解自然語言、呼叫工具、執行業務邏輯的 AI 應用,無需從零寫程式碼。

> **命名說明**:PortAI 是 LongbridgeAI 的前身名稱,舊文件、DSL 檔案(如 `PortAI-IM-ChatFlow.yaml`)中出現的 PortAI 即指本平臺。

## 長橋 AI 產品全景

長橋的 AI 產品由兩部分構成:

| 產品 | 定位 | 面向誰 |
|------|------|--------|
| **LongbridgeAI Agent Platform**(本平臺) | Agent 編排平臺:搭建、除錯、釋出 AI 應用 | Agent 搭建者(你) |
| **官方 Chatbot 體系** | LongbridgeAI 對話產品:App/Web 內的 AI 問答入口 | 終端使用者 |

兩者的關係:
- 你在 Agent Platform 上搭建的 Agent,釋出後通過官方 Chatbot 等入口觸達終端使用者
- **用量額度是打通的**:同一使用者的用量額度**同時適用於這兩個工具** —— 在 Chatbot 裡問答和在 Agent Platform 裡執行流程,消耗的是同一份額度(見 [1.5 Workspace 與套餐體系](plans))
- 官方 Chatbot 側的能力(會話圖表、語音輸入、長期記憶等)見 [1.7-11 對話端體驗](capabilities/chat-experience)

## 三種應用型別:Agentic Chat、Chatflow 與 Workflow

這是平臺最重要的一個概念,決定了你怎麼搭建、能用哪些節點、應用如何被呼叫:

| | Agentic Chat | Chatflow Agent | Workflow Agent |
|---|---|---|---|
| **定位** | 對話類應用的**簡化版** | 多輪**對話**類應用(畫布編排) | 自動化**批處理**類應用 |
| **搭建方式** | 無需畫布,直接配置即可 | 畫布上編排節點 | 畫布上編排節點 |
| **典型場景** | 快速搭一個對話助手 | 智慧客服、行情問答等需要分支/工具編排的對話 | 研報生成、批次翻譯、資料分析、定時任務 |
| **入口** | 使用者在聊天視窗發訊息 | 使用者在聊天視窗發訊息 | 由 API / 觸發器 / 上游系統觸發,傳入引數 |
| **終結方式** | 直接對話輸出 | **Answer** 節點(輸出答案給聊天視窗) | **End** 節點(以 JSON 等結構化格式返回結果) |
| **適合誰** | **入門使用者** | 需要精確控制對話流程的使用者 | 需要自動化任務的使用者(**暫未開放**) |

> 選型口訣:**入門做對話助手用 Agentic Chat;對話邏輯複雜、要編排分支和工具的用 Chatflow;一次進一次出的自動化任務用 Workflow。**

- **Agentic Chat 是 Chatflow 的簡化版**:底層就是一條固定的三節點鏈路 —— **Start(開始)→ Agent(呼叫 Agent)→ Answer(直接回復)**,平臺把畫布隱藏起來,你只需配置角色和能力即可對話,是最快上手的方式;當你需要多分支路由、多節點資料加工時,再遷移到 Chatflow 自由編排
- ⚠️ **Workflow 暫未開放**:考慮到 Workflow 的使用對使用者要求較高,當前暫不對普通使用者開放,開放時間以產品公告為準。文件中的 Workflow 相關內容(節點場景、觸發器、案例)可作為提前學習材料
- 本手冊的節點參考(1.4)適用於 Chatflow / Workflow 的畫布編排;Agentic Chat 不涉及畫布節點

## 核心概念

### 節點(Node)
流程中的一個處理步驟。每個節點做一件事:呼叫大模型、判斷條件、發 HTTP 請求、執行程式碼等。平臺當前提供 15 個節點,完整列表見 [1.4 節點參考手冊](capabilities/index)。

每個節點通用的介面元素:
- **圖示 + 名稱**:名稱按當前語言生成預設值,支援修改
- **註釋**:給節點寫說明,方便團隊協作
- **更多按鈕**:複製、刪除等右鍵選單操作
- **執行按鈕**:支援試執行的節點可單獨測試(見下文「試執行」)
- **幫助文件入口**:節點編輯面板內可直接跳轉到對應幫助文件

### 變數(Variable)
節點之間傳遞資料的載體。上游節點的輸出變數,可以在下游節點中被引用(如在 LLM 的提示詞裡插入 `Start` 節點收集的使用者輸入)。

- 每個變數有**變數名**和**資料型別**(String、Number、Object、Array 等)
- LLM 節點預設輸出 `text`(String);開啟結構化輸出後額外輸出 `structured_output`(Object)
- 變數的轉換、提取、聚合分別由 Variables Transformer、Parameter Extractor、Branch Aggregator 三個節點負責

### 連線與分支
節點之間通過連線定義執行順序。IF Else、Question Classifier 這類節點會產生**多個出口分支**,不同條件走不同路徑;多個分支的結果可以用 Branch Aggregator 匯聚回一條主線。

### 試執行(Test Run)
不釋出應用,直接在畫布上單獨執行某個節點或整條流程,檢視輸入輸出是否符合預期。除 IF Else、Branch Aggregator 等純路由/聚合節點外,處理類節點(LLM、Agent、Tool、Code、Iteration、Loop、Parameter Extractor 等)均支援試執行,以節點上是否出現執行按鈕為準。**養成"配一個節點就試執行一次"的習慣,是最有效的除錯方式。**

### 模型
LLM 相關節點的模型從**服務設定**中選擇,由長橋內部統一初始化並提供測試賬號。**支援調整部分輸入引數**(可調引數以節點配置面板實際展示為準);模型管理暫未開放。模型分「主流」和「SOTA」兩級,SOTA 消耗更多用量。

### Workspace(工作空間)
你在平臺上的一切行為都發生在某個 Workspace 內:Agent、Workflow、知識庫、用量消耗都以 Workspace 為邊界。每個 Workspace 繫結一個**套餐**,套餐決定這個空間裡能用什麼功能、能用多少額度。同一個人在不同 Workspace 中看到的功能可能不同。詳細拆解見 [1.5 Workspace 與套餐體系](plans)。

### 套餐(Plan)與用量(Usage)
平臺提供 Starter(免費)/ Pro / Premium 三個套餐,差異體現在**月度用量額度**(LLM 呼叫等消耗按 USD 計量)和**細分功能開關**(工具範圍、Skill 數量、知識庫容量、釋出許可權等)。註冊即自動啟用 Starter。額度按月分配、按 7 天滾動釋放,超額時執行會被攔截。詳見 [1.5 Workspace 與套餐體系](plans)。

### 分地區服務
平臺在香港、新加坡、美國(籌備中)由獨立法律實體運營,定價幣種、監管要求和可用能力按地區有所差異,使用者不可跨地區切換服務主體。詳見 [1.6 分地區服務說明](regions)。

## 節點之外:平臺能力全景

節點編排是骨架,平臺還提供一整套圍繞 Agent 的能力,每項都有獨立文件(索引見 [1.7 平臺能力](capabilities/index)):

| 能力 | 解決什麼問題 | 文件 |
|------|-------------|------|
| **知識庫** | Agent 只會通用知識,不懂你的私有文件 | [1.7.1 知識庫](capabilities/knowledge-base) |
| **Skill 體系** | 專業能力想複用,又不想撐爆 System Prompt | [1.7.2 Skill 體系](capabilities/skill) |
| **Workflow 觸發器** | 任務要定時跑、要被外部系統觸發 | [1.7.3 Workflow 觸發器](capabilities/workflow-triggers) |
| **Guardrail 安全護欄** | 輸入輸出的合規風險需要機制層攔截 | [1.7.4 Guardrail 安全護欄](capabilities/guardrail) |
| **上下文與記憶管理** | 多輪對話失憶、上下文越積越大 | [1.7.5 上下文與記憶管理](capabilities/context-memory) |
| **規劃與執行** | 複雜任務沒條理、全自動不可控 | [1.7.6 規劃與執行能力](capabilities/planning-execution) |
| **執行除錯與觀測** | 批次驗證效果、上線後跟蹤執行質量 | [1.7.7 執行除錯與觀測](capabilities/observability) |
| **安全校驗與本地化** | 資產資料鑑權、簡繁體適配 | [1.7.8 安全校驗與本地化](capabilities/security-i18n) |
| **畫布與協作效率** | 多人協作防誤改、節點複用 | [1.7.9 畫布與協作效率](capabilities/canvas-collaboration) |
| **模型與工具生態** | SOTA 模型選擇、賬戶/行情類工具接入 | [1.7.10 模型與工具生態](capabilities/model-tool-ecosystem) |
| **對話端體驗** | 瞭解你的 Agent 釋出後用戶側的呈現能力 | [1.7.11 對話端體驗](capabilities/chat-experience) |
| **容災能力** | 廠商故障、呼叫失敗時 Agent 仍穩定可用 | [1.7.12 容災能力](capabilities/disaster-recovery) |

## 15 個節點全景圖

```
基礎節點     Start(開始) · Answer(輸出答案,Chatflow專用) · End(結束,Workflow專用)
AI 節點      LLM(大語言模型) · Agent(呼叫Agent) · Question Classifier(問題分類器)
邏輯編排     IF Else(條件判斷) · Branch Aggregator(分支聚合) · Iteration(迭代) · Loop(迴圈)
資料處理     Code(程式碼執行) · Variables Transformer(模版轉換) · Parameter Extractor(引數提取器)
外部擴充套件     Tool(工具呼叫) · Http Request(HTTP請求)
```

## 一個最簡單的 Chatflow 長什麼樣

```
Start ──▶ LLM ──▶ Answer
(接收使用者訊息)  (呼叫大模型生成回答)  (把回答輸出到聊天視窗)
```

下一步:跟著 [1.3 快速上手](quick-start) 把它親手搭出來。
