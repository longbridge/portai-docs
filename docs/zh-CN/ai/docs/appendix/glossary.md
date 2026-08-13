---
sidebar_position: 2
title: "概念速查表"
---

> 帮助文档中出现的全部概念，按**字母顺序**排列 (中文术语按拼音首字母归位)。点击"详见"链接可跳转到对应文档。

## A

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Agent | 在平台上搭建的 AI 应用统称，分 Chatflow(对话类) 与 Workflow(批处理类) 两类 | [1.1 平台概述](../basics/introduction) |
| Agent 广场 | 浏览、使用与 Fork 他人发布的 Agent 的地方;广场内容**仅供学习交流**,不构成推荐 | [1.6 分地区服务说明](../basics/regions) |
| Agent 节点 | 画布中的自主执行节点:LLM 循环自主调用工具直到任务完成 (Function Calling 模式) | [1.4.5 Agent 节点](../basics/nodes/agent) |
| Agentic Chat | 轻量创建模式：配置提示词 + 挂工具即可运行，无需画布编排，相当于 Chatflow 的轻量版 | [2.5 技巧一](../tutorials/mode-model-selection) |
| Answer 节点 | Chatflow 中向用户输出回复内容的节点 | [1.4.2 Answer 节点](../basics/nodes/answer) |
| 安全审核 | 发布/上架广场前，平台对 Agent 名称、头像、描述与 Prompt 的审核 | [3.2 安全审核](../compliance/security-review) |

## B

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Branch Aggregator(分支聚合器) | 将多个分支的同类型变量汇聚为一个变量 (如 array[string]) 的节点 | [1.4.8 Branch Aggregator 节点](../basics/nodes/branch-aggregator) |
| 变量 | 节点之间传递数据的载体，含输入变量与输出变量 | [2.2 变量与数据流](../tutorials/variables-dataflow) |

## C

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Charged By(用量承担方) | 一次运行的用量记在哪个 Workspace 头上的归属规则 | [1.5 · §5.4](../basics/plans) |
| Chatflow | 画布编排的多轮对话类 Agent(如智能客服) | [1.1 平台概述](../basics/introduction) |
| Code 节点 (代码执行) | 在沙箱中运行 Python3 / JavaScript 代码的节点，代码需实现 `main` 函数并返回字典 | [1.4.11 Code 节点](../basics/nodes/code) |
| 长期记忆 / 短期记忆 | 跨会话 / 会话内的记忆能力，在 LLM 等节点中以开关配置 | [1.7.5 上下文与记忆管理](../basics/capabilities/context-memory) |

## D

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| DSL | 应用编排的导入/导出文件 (YAML);导入时自动校验模型可用性 | [1.7.7 运行调试与观测](../basics/capabilities/observability) |
| 对话端 (LongbridgeAI Chatbot) | 官方对话产品，与 Agent 平台**共享同一份用量额度** | [1.7.11 对话端体验](../basics/capabilities/chat-experience) |

## E

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Editor | Workspace 成员角色：可创建、编辑空间内资源;数量随套餐限制 | [1.5 · 成员角色](../basics/plans) |
| Embedding | 知识库文档向量化处理，计费单元之一 | [1.5 · §5.1](../basics/plans) |
| End 节点 | Workflow 的结束节点，定义最终输出 | [1.4.3 End 节点](../basics/nodes/end) |

## F

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Function Calling | Agent 节点的工具调用模式：模型通过函数调用使用工具，循环执行直到完成 | [1.4.5 Agent 节点](../basics/nodes/agent) |

## G

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Guardrail(安全护栏) | 输入/输出双向合规拦截:PII 打码、不良内容与金融违规屏蔽 | [1.7.4 Guardrail](../basics/capabilities/guardrail) |

## H

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Http Request 节点 | 调用外部 HTTP 接口取数的节点，支持导入 cURL | [1.4.15 Http Request 节点](../basics/nodes/http-request) |
| Human in the Loop(HITL) | 执行中在关键节点主动暂停、等待人工确认的模式 | [1.7.6 规划与执行能力](../basics/capabilities/planning-execution) |

## I

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| IF Else 节点 (条件分支) | IF / ELIF / ELSE 多重条件路由节点 | [1.4.7 IF Else 节点](../basics/nodes/if-else) |
| Iteration 节点 (迭代) | 对列表逐项处理的容器节点，支持并行模式与错误处理 | [1.4.9 Iteration 节点](../basics/nodes/iteration) |
| item 变量 | 迭代内节点引用"当前这一轮正在处理的元素"的变量 | [1.4.9 Iteration 节点](../basics/nodes/iteration) |

## J

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Jinja2 | 模版转换节点使用的模板语言 (变量、过滤器、控制结构) | [1.4.12 Variables Transformer 节点](../basics/nodes/variables-transformer) |
| 记忆窗口 | 多轮对话中保留的上下文轮数，开够用的最小值可控制用量 | [1.7.5 上下文与记忆管理](../basics/capabilities/context-memory) |
| 结构化输出 | 让 LLM 按定义的结构 (如 JSON) 稳定输出的能力 | [1.4.4 LLM 节点](../basics/nodes/llm) |

## L

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Langfuse | 「追踪应用性能」支持的第三方跟踪平台，用于调试与性能分析 | [1.7.7 运行调试与观测](../basics/capabilities/observability) |
| LLM 节点 | 调用大语言模型的核心节点 (提示词、模型、记忆、结构化输出) | [1.4.4 LLM 节点](../basics/nodes/llm) |
| Logs(运行日志) | 查看每次运行的输入输出、执行路径与失败原因 | [1.7.7 运行调试与观测](../basics/capabilities/observability) |
| Loop 节点 (循环) | 按中止条件或最大次数反复执行同一段逻辑的容器节点 | [1.4.10 Loop 节点](../basics/nodes/loop) |

## M

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| MCP(第三方 MCP Server) | 外部工具接入协议，Premium 套餐可用 | [1.5 · §4.2](../basics/plans) |
| 模型分级 (主流 / SOTA) | 模型按消耗分两级，SOTA 单位消耗更高;支持节点级模型配置 | [1.5 · §6](../basics/plans) |

## O

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| OpenAPI 工具 | 用户自行配置的外部 API 工具，调用不计费 | [1.4.14 Tool 节点](../basics/nodes/tools) |
| Owner | Workspace 唯一的最高权限成员，唯一可执行订阅购买/升级等商业操作 | [1.5 · 成员角色](../basics/plans) |

## P

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Parameter Extractor(参数提取器) | 用大模型从自然语言中提取结构化参数的节点，常用于对接工具入参 | [1.4.13 Parameter Extractor 节点](../basics/nodes/parameter-extractor) |
| Pro / Premium | 付费套餐档位 (连续包月订阅) | [1.5 · §4](../basics/plans) |

## Q

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Question Classifier(问题分类器) | 对用户问题做意图分类、按分类走不同分支的路由节点 | [1.4.6 Question Classifier 节点](../basics/nodes/question-classifier) |
| 权益卡 | 限时高档位体验卡：不改变订阅关系，有效期内提升功能权益并叠加用量 | [1.8 HKSG 权益卡](../basics/hksg-benefits) |

## R

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| RAG(检索增强生成) | 先检索知识库/搜索，再基于检索结果作答的问答范式 | [2.4 RAG 检索范式技巧](../tutorials/rag-patterns) |
| Rerank | 对检索结果重排序，计费单元之一 | [1.5 · §5.1](../basics/plans) |

## S

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Skill | 按需加载的能力/方法包，可挂载到 Agent;数量上限随套餐 | [1.7.2 Skill 体系](../basics/capabilities/skill) |
| Start 节点 | 流程的入口节点，定义输入字段 | [1.4.1 Start 节点](../basics/nodes/start) |
| Starter | 免费套餐，注册自动激活 | [1.5 · §4](../basics/plans) |
| System Prompt | 提示词中稳定不变的部分：角色设定、行为准则、输出格式、合规红线 | [2.1 提示词编写技巧](../tutorials/prompt-writing) |
| 上下文压缩 | 长对话自动压缩历史内容，避免上下文超限 | [1.7.5 上下文与记忆管理](../basics/capabilities/context-memory) |
| 试运行 (测试运行) | 不发布应用，直接运行单个节点或整条流程验证效果 | [1.7.7 运行调试与观测](../basics/capabilities/observability) |

## T

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Tool 节点 (工具) | 调用平台内置工具或 OpenAPI 工具取数/执行的节点 | [1.4.14 Tool 节点](../basics/nodes/tools) |
| 套餐 (Plan) | 决定 Workspace 功能范围与用量额度的商业对象 | [1.5 · §4](../basics/plans) |
| 提示词 (Prompt) | 指挥模型行为的指令文本，分 System / User 两层 | [2.1 提示词编写技巧](../tutorials/prompt-writing) |
| 统计 | Agent 数据统计面板：会话数、活跃用户、耗时、满意度等趋势 | [1.7.7 运行调试与观测](../basics/capabilities/observability) |

## V

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Variables Transformer(模版转换) | 用 Jinja2 模板对变量做格式化/转换的节点 | [1.4.12 Variables Transformer 节点](../basics/nodes/variables-transformer) |
| Viewer | Workspace 成员角色：只读查看与使用资源;数量随套餐限制 | [1.5 · 成员角色](../basics/plans) |

## W

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| Workflow | 自动化批处理类 Agent(一次进一次出，如研报生成) | [1.1 平台概述](../basics/introduction) |
| Workflow 触发器 | 定时 / Webhook 自动触发 Workflow，无人值守运行 | [1.7.3 Workflow 触发器](../basics/capabilities/workflow-triggers) |
| Workspace(工作空间) | 承载 Agent、知识库与用量的基本单元，套餐生效的边界 | [1.5 Workspace 与套餐体系](../basics/plans) |

## Y

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| 异常处理 / 失败重试 | 节点级容错配置：失败自动重试、按策略处理异常 | [1.4.14 Tool 节点](../basics/nodes/tools) |
| 用量 (Usage) | AI 消耗的计量体系:LLM 调用、Embedding、沙箱运行等统一换算为 USD | [1.5 · §5](../basics/plans) |

## Z

| 术语 | 一句话说明 | 详见 |
|------|-----------|------|
| 知识库 | 上传私有文档供 Agent 检索作答，容量随套餐 | [1.7.1 知识库](../basics/capabilities/knowledge-base) |
| 周滚动释放 | 月度额度按每 7 天滚动释放，每周可用 ≈ 月度总额 ÷ 4 | [1.5 · §5.2](../basics/plans) |
| 追踪应用性能 | 将应用执行上下文发送到第三方跟踪平台 (Langfuse) 做调试分析 | [1.7.7 运行调试与观测](../basics/capabilities/observability) |
