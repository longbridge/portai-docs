---
sidebar_position: 10
title: "Chatflow 与 Agentic Chat 设置项"
---

> 除了画布/提示词本体，每个 Agent 应用还有一组**应用级设置项**,决定它的对外形象、对话行为与安全边界。本篇分别说明 Chatflow、Agentic Chat、Workflow 三种模式的设置项。具体入口与选项以产品当前版本为准。

## 两种模式的设置项概览

| 设置类别 | Chatflow | Agentic Chat |
|---------|----------|--------------|
| 基本信息 (名称/图标/描述) | ✓ | ✓ |
| 开场白与推荐问题 | ✓ | ✓ |
| 提示词 (System Prompt) | 在画布 LLM/Agent 节点内配置 | ✓ 应用级配置 |
| 模型选择 | 节点级配置 (每个节点可不同) | ✓ 应用级配置 |
| 工具 / Skill / 知识库挂载 | 在对应节点内挂载 | ✓ 应用级挂载 |
| 记忆设置 | 节点级 (记忆窗口) | 应用级 |
| Guardrail 安全护栏 | ✓ | ✓ |
| 发布设置 | ✓ | ✓ |

> 核心区别：**Chatflow 的能力配置分散在节点里**(哪个节点用什么模型、挂什么工具，各自独立);**Agentic Chat 的能力配置集中在应用设置里**(一份提示词 + 一组工具，模型自主调度)。

## Chatflow 设置项

入口：画布右上角设置图标，打开「设置」侧栏：

![Chatflow 设置面板:Agent 权限、预设问题 (多语言)、缓存、对话端开关、会话变量与环境变量](./images/1.10-1-Chatflow%E8%AE%BE%E7%BD%AE.png)

| 设置项 | 说明 |
|--------|------|
| 基本信息 | 应用名称、图标、描述 —— 用户在对话端和广场看到的形象 |
| Agent 权限 | **编辑权限**(如：空间用户) 与**使用权限**(如：仅工作空间用户可用),支持复制链接分享 (详见 [Agent 权限管理](permissions)) |
| Agent 预设问题 | 展示给用户的引导问题，支持 **EN / 简 / 繁 三种语言分别配置**,降低首轮提问门槛 |
| 开场白 | 对话开始时的欢迎语，建议说明 Agent 的能力边界 |
| 输入变量 | 由 Start 节点定义的自定义字段 (见 [Start 节点](nodes/start)) |
| 记忆窗口 | 多轮对话保留的上下文轮数，在 LLM/Agent 节点内配置 —— 开够用的最小值，控制用量 |
| 开启缓存 / 缓存周期 | 开启后对相同输入复用缓存结果，减少重复消耗;缓存周期控制失效时间 |
| 中文简/繁体转换 | 开启后按用户语言偏好自动转换简繁体输出 |
| 聊天历史搜索 | 开启后用户可搜索与该 Agent 的历史会话 |
| 输入框文件上传 | 开启后对话输入框支持上传文件 |
| 会话变量 | 会话级变量，跨轮次保存状态供流程读写 |
| 环境变量 | 应用级常量 (如 API Key 等配置),供画布节点引用 |
| Guardrail | 输入/输出双向合规拦截开关，面向客户的 Agent **必须开启**(见 [Guardrail](capabilities/guardrail)) |
| 发布 | 发布为可用版本;发布到广场需通过安全扫描 (Pro 及以上套餐) |

## Agentic Chat 设置项

![AgenticChat 设置项：人机交互、待办事项、派生 Subagent 与 Agent 权限、简繁转换、允许 Fork](./images/1.10-2-AgenticChat%E8%AE%BE%E7%BD%AE.png)

| 设置项 | 说明 |
|--------|------|
| 基本信息 | 应用名称、图标、描述 |
| System Prompt | 应用级提示词：角色设定、行为准则、输出格式、合规红线 (写法见 [提示词技巧](../tutorials/prompt-writing)) |
| 模型选择 | 应用级统一模型;主流 / SOTA 分级，SOTA 单位消耗更高 |
| 工具 | 挂载内置工具、第三方 MCP(需 Premium)、OpenAPI 工具，由模型自主决定调用 |
| Skill | 挂载自定义 / 官方 Skill，按需加载能力包 |
| 知识库 | 挂载知识库，让回答基于你的私有文档 |
| 人机交互 | 允许模型在执行过程中向用户提问并等待回答 |
| 开启待办事项 | 开启后 AI 自动识别对话中的任务并拆解执行 (见 [规划与执行](capabilities/planning-execution)) |
| 派生 Subagent (Beta) | 允许 Agent 通过 `spawn_subagent` 派生独立 Subagent 处理子任务，适合可分解/可并行的工作;Subagent 运行在隔离上下文，完成后返回摘要 |
| Agent 权限 | 使用权限 (如：任何获得链接的用户可用)+ 复制链接;可**发布到 Agent 广场**(详见 [Agent 权限管理](permissions)) |
| 中文简/繁体转换 | 开启后按用户语言偏好自动转换简繁体输出 |
| 允许 Fork | 开启后其他用户可复制该 Agent 的配置自行修改使用 |
| Guardrail | 同 Chatflow;Agentic Chat 自主性更强，更要配合护栏 |
| 开场白与推荐问题 | 同 Chatflow |

## Workflow 设置项

Workflow 没有对话端，设置项最精简：

![Workflow 设置面板：编辑权限、缓存、简繁转换与环境变量](./images/1.10-3-Workflow%E8%AE%BE%E7%BD%AE.png)

| 设置项 | 说明 |
|--------|------|
| Agent 权限 | 仅**编辑权限**(如：空间用户)——Workflow 无对话端，没有使用权限概念，由 API/触发器调用 |
| 开启缓存 / 缓存周期 | 同 Chatflow |
| 中文简/繁体转换 | 同 Chatflow |
| 环境变量 | 同 Chatflow;无会话变量 (Workflow 单次执行，无会话概念) |

## 设置项与套餐的关系

部分设置项的可选范围由当前 Workspace 的套餐决定，配置时选不到的选项通常是套餐不含：

- **第三方 MCP 工具**:需 Premium 及以上
- **官方内置 Skill**:需 Pro 及以上;自定义 Skill 数量随套餐 (3 / 20 / 100)
- **部分模型**:受套餐或地区限制的模型不在选择器中展示
- 完整规则见 [配置时 vs 运行时](plans)

## 关联阅读

- [技巧一:Agentic Chat 与 Chatflow 怎么选](../tutorials/mode-model-selection)
- [运行调试与观测](capabilities/observability) — 配好设置后怎么测试运行
- [Guardrail 安全护栏](capabilities/guardrail) — 面向客户必开
