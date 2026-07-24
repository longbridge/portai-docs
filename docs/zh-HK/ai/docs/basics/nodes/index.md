---
sidebar_position: 0
title: "節點參考手冊"
---

平臺當前提供 **15 個節點**,本手冊每個節點一篇文件,按推薦學習順序編號。建議先掌握「基礎節點 + LLM」跑通最小流程,再按需學習其餘節點。

> 節點用於 **Chatflow / Workflow** 的畫布編排;**Agentic Chat**(Chatflow 簡化版)底層是固定的 **Start → Agent → Answer** 三節點鏈路,畫布被隱藏、無需自行編排,見 [1.1 應用型別](../introduction)。學完 Start、Agent、Answer 三個節點,你也就理解了 Agentic Chat 的工作原理。

## 節點索引

### 基礎節點(流程的入口與出口)

| # | 節點 | 中文名 | 一句話說明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.1 | [Start](start) | 開始 | 流程入口,初始化上下文和自定義變數 | ✓ | ✓ |
| 1.4.2 | [Answer](answer) | 輸出答案 | 把最終回答輸出給聊天視窗,Chatflow 的終結節點 | ✓ | ✗ |
| 1.4.3 | [End](end) | 結束 | 以 JSON 等格式輸出最終結果,Workflow 的終結節點 | ✗ | ✓ |

### AI 節點(大模型能力)

| # | 節點 | 中文名 | 一句話說明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.4 | [LLM](llm) | 大語言模型 | 核心節點:文本生成、多模態、記憶、結構化輸出 | ✓ | ✓ |
| 1.4.5 | [Agent](agent) | 呼叫 Agent | 自主推理並呼叫工具(Function Calling 模式,迴圈執行直到任務完成) | ✓ | ✓ |
| 1.4.6 | [Question Classifier](question-classifier) | 問題分類器 | 對使用者問題做意圖分類,分類結果驅動後續分支 | ✓ | ✓ |

### 邏輯編排節點(分支與迴圈)

| # | 節點 | 中文名 | 一句話說明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.7 | [IF Else](if-else) | 條件判斷 | 按條件(包含/是/為空等運算子)把流程導向不同分支 | ✓ | ✓ |
| 1.4.8 | [Branch Aggregator](branch-aggregator) | 分支聚合器 | 把多個分支的輸出變數匯聚成一個結果 | ✓ | ✓ |
| 1.4.9 | [Iteration](iteration) | 迭代 | 對列表逐項(或並行)執行同一段子流程,支援錯誤處理 | ✓ | ✓ |
| 1.4.10 | [Loop](loop) | 迴圈 | 按次數或條件反覆執行,內含「結束迴圈」特殊節點 | ✓ | ✓ |

### 資料處理節點(變數與程式碼)

| # | 節點 | 中文名 | 一句話說明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.11 | [Code](code) | 程式碼執行 | 執行自定義 Python / JavaScript 實現業務邏輯 | ✓ | ✓ |
| 1.4.12 | [Variables Transformer](variables-transformer) | 模版轉換 | 用 Jinja2 模板對變數做格式化、型別轉換、合併拆分 | ✓ | ✓ |
| 1.4.13 | [Parameter Extractor](parameter-extractor) | 引數提取器 | 用大模型從文本中提取結構化引數(可從工具匯入入參定義) | ✓ | ✓ |

### 外部擴充套件節點(連線外部世界)

| # | 節點 | 中文名 | 一句話說明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.14 | [Tool](tools) | 工具呼叫 | 呼叫長橋內外的工具,需授權後使用 | ✓ | ✓ |
| 1.4.15 | [Http Request](http-request) | HTTP 請求 | 發起 GET/POST/PUT/DELETE/PATCH 請求訪問外部 API | ✓ | ✓ |

## 常見需求 → 節點選型速查

| 我想… | 用這個節點 |
|-------|-----------|
| 讓 AI 生成一段回答 | LLM |
| 讓 AI 輸出規範 JSON 給下游用 | LLM(開結構化輸出) |
| 按使用者意圖走不同流程 | Question Classifier(語義分類)或 IF Else(規則判斷) |
| 讓 AI 自己決定呼叫哪些工具 | Agent |
| 查行情、調內部服務 | Tool(已接入的工具)或 Http Request(任意 API) |
| 對一個列表逐項處理 | Iteration(有明確列表)或 Loop(按條件反覆) |
| 拼接/轉換變數格式 | Variables Transformer;複雜邏輯用 Code |
| 把多個分支的結果合併 | Branch Aggregator |

## 閱讀節點文件的方法

每篇節點文件的結構一致:**節點概述**(支援場景/試執行支援)→ **功能說明** → **節點展示內容** → **節點編輯區域**(逐項配置說明)→ 使用示例與注意事項。配置某個節點遇到疑問時,直接查對應章節即可,不必通讀全文。
