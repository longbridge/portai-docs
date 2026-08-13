---
sidebar_position: 0
title: "节点参考手册"
---

平台当前提供 **15 个节点**,本手册每个节点一篇文档，按推荐学习顺序编号。建议先掌握「基础节点 + LLM」跑通最小流程，再按需学习其余节点。

> 节点用于 **Chatflow / Workflow** 的画布编排;**Agentic Chat**(Chatflow 简化版) 底层是固定的 **Start → Agent → Answer** 三节点链路，画布被隐藏、无需自行编排，见 [应用类型](../introduction)。学完 Start、Agent、Answer 三个节点，你也就理解了 Agentic Chat 的工作原理。

## 节点索引

### 基础节点 (流程的入口与出口)

| # | 节点 | 中文名 | 一句话说明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.1 | [Start](start) | 开始 | 流程入口，初始化上下文和自定义变量 | ✓ | ✓ |
| 1.4.2 | [Answer](answer) | 输出答案 | 把最终回答输出给聊天窗口，Chatflow 的终结节点 | ✓ | ✗ |
| 1.4.3 | [End](end) | 结束 | 以 JSON 等格式输出最终结果，Workflow 的终结节点 | ✗ | ✓ |

### AI 节点 (大模型能力)

| # | 节点 | 中文名 | 一句话说明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.4 | [LLM](llm) | 大语言模型 | 核心节点：文本生成、多模态、记忆、结构化输出 | ✓ | ✓ |
| 1.4.5 | [Agent](agent) | 调用 Agent | 自主推理并调用工具 (Function Calling 模式，循环执行直到任务完成) | ✓ | ✓ |
| 1.4.6 | [Question Classifier](question-classifier) | 问题分类器 | 对用户问题做意图分类，分类结果驱动后续分支 | ✓ | ✓ |

### 逻辑编排节点 (分支与循环)

| # | 节点 | 中文名 | 一句话说明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.7 | [IF Else](if-else) | 条件判断 | 按条件 (包含/是/为空等运算符) 把流程导向不同分支 | ✓ | ✓ |
| 1.4.8 | [Branch Aggregator](branch-aggregator) | 分支聚合器 | 把多个分支的输出变量汇聚成一个结果 | ✓ | ✓ |
| 1.4.9 | [Iteration](iteration) | 迭代 | 对列表逐项 (或并行) 执行同一段子流程，支持错误处理 | ✓ | ✓ |
| 1.4.10 | [Loop](loop) | 循环 | 按次数或条件反复执行，内含「结束循环」特殊节点 | ✓ | ✓ |

### 数据处理节点 (变量与代码)

| # | 节点 | 中文名 | 一句话说明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.11 | [Code](code) | 代码执行 | 运行自定义 Python / JavaScript 实现业务逻辑 | ✓ | ✓ |
| 1.4.12 | [Variables Transformer](variables-transformer) | 模版转换 | 用 Jinja2 模板对变量做格式化、类型转换、合并拆分 | ✓ | ✓ |
| 1.4.13 | [Parameter Extractor](parameter-extractor) | 参数提取器 | 用大模型从文本中提取结构化参数 (可从工具导入入参定义) | ✓ | ✓ |

### 外部扩展节点 (连接外部世界)

| # | 节点 | 中文名 | 一句话说明 | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.14 | [Tool](tools) | 工具调用 | 调用长桥内外的工具，需授权后使用 | ✓ | ✓ |
| 1.4.15 | [Http Request](http-request) | HTTP 请求 | 发起 GET/POST/PUT/DELETE/PATCH 请求访问外部 API | ✓ | ✓ |

## 常见需求 → 节点选型速查

| 我想… | 用这个节点 |
|-------|-----------|
| 让 AI 生成一段回答 | LLM |
| 让 AI 输出规范 JSON 给下游用 | LLM(开结构化输出) |
| 按用户意图走不同流程 | Question Classifier(语义分类) 或 IF Else(规则判断) |
| 让 AI 自己决定调用哪些工具 | Agent |
| 查行情、调内部服务 | Tool(已接入的工具) 或 Http Request(任意 API) |
| 对一个列表逐项处理 | Iteration(有明确列表) 或 Loop(按条件反复) |
| 拼接/转换变量格式 | Variables Transformer;复杂逻辑用 Code |
| 把多个分支的结果合并 | Branch Aggregator |

## 阅读节点文档的方法

每篇节点文档的结构一致：**节点概述**(支持场景/试运行支持)→ **功能说明** → **节点展示内容** → **节点编辑区域**(逐项配置说明)→ 使用示例与注意事项。配置某个节点遇到疑问时，直接查对应章节即可，不必通读全文。
