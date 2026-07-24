---
sidebar_position: 1
title: "平台概述与核心概念"
---

## LongbridgeAI Agent Platform 是什么

LongbridgeAI Agent Platform 是长桥的 AI Agent 编排平台。你在一块**可视化画布**上拖入节点、连线、配置,即可搭建出能理解自然语言、调用工具、执行业务逻辑的 AI 应用,无需从零写代码。

> **命名说明**:PortAI 是 LongbridgeAI 的前身名称,旧文档、DSL 文件(如 `PortAI-IM-ChatFlow.yaml`)中出现的 PortAI 即指本平台。

## 长桥 AI 产品全景

长桥的 AI 产品由两部分构成:

| 产品 | 定位 | 面向谁 |
|------|------|--------|
| **LongbridgeAI Agent Platform**(本平台) | Agent 编排平台:搭建、调试、发布 AI 应用 | Agent 搭建者(你) |
| **官方 Chatbot 体系** | LongbridgeAI 对话产品:App/Web 内的 AI 问答入口 | 终端用户 |

两者的关系:
- 你在 Agent Platform 上搭建的 Agent,发布后通过官方 Chatbot 等入口触达终端用户
- **用量额度是打通的**:同一用户的用量额度**同时适用于这两个工具** —— 在 Chatbot 里问答和在 Agent Platform 里运行流程,消耗的是同一份额度(见 [1.5 Workspace 与套餐体系](plans))
- 官方 Chatbot 侧的能力(会话图表、语音输入、长期记忆等)见 [1.7-11 对话端体验](capabilities/chat-experience)

## 三种应用类型:Agentic Chat、Chatflow 与 Workflow

这是平台最重要的一个概念,决定了你怎么搭建、能用哪些节点、应用如何被调用:

| | Agentic Chat | Chatflow Agent | Workflow Agent |
|---|---|---|---|
| **定位** | 对话类应用的**简化版** | 多轮**对话**类应用(画布编排) | 自动化**批处理**类应用 |
| **搭建方式** | 无需画布,直接配置即可 | 画布上编排节点 | 画布上编排节点 |
| **典型场景** | 快速搭一个对话助手 | 智能客服、行情问答等需要分支/工具编排的对话 | 研报生成、批量翻译、数据分析、定时任务 |
| **入口** | 用户在聊天窗口发消息 | 用户在聊天窗口发消息 | 由 API / 触发器 / 上游系统触发,传入参数 |
| **终结方式** | 直接对话输出 | **Answer** 节点(输出答案给聊天窗口) | **End** 节点(以 JSON 等结构化格式返回结果) |
| **适合谁** | **入门用户** | 需要精确控制对话流程的用户 | 需要自动化任务的用户(**暂未开放**) |

> 选型口诀:**入门做对话助手用 Agentic Chat;对话逻辑复杂、要编排分支和工具的用 Chatflow;一次进一次出的自动化任务用 Workflow。**

- **Agentic Chat 是 Chatflow 的简化版**:底层就是一条固定的三节点链路 —— **Start(开始)→ Agent(调用 Agent)→ Answer(直接回复)**,平台把画布隐藏起来,你只需配置角色和能力即可对话,是最快上手的方式;当你需要多分支路由、多节点数据加工时,再迁移到 Chatflow 自由编排
- ⚠️ **Workflow 暂未开放**:考虑到 Workflow 的使用对用户要求较高,当前暂不对普通用户开放,开放时间以产品公告为准。文档中的 Workflow 相关内容(节点场景、触发器、案例)可作为提前学习材料
- 本手册的节点参考(1.4)适用于 Chatflow / Workflow 的画布编排;Agentic Chat 不涉及画布节点

## 核心概念

### 节点(Node)
流程中的一个处理步骤。每个节点做一件事:调用大模型、判断条件、发 HTTP 请求、执行代码等。平台当前提供 15 个节点,完整列表见 [1.4 节点参考手册](capabilities/index)。

每个节点通用的界面元素:
- **图标 + 名称**:名称按当前语言生成默认值,支持修改
- **注释**:给节点写说明,方便团队协作
- **更多按钮**:复制、删除等右键菜单操作
- **运行按钮**:支持试运行的节点可单独测试(见下文「试运行」)
- **帮助文档入口**:节点编辑面板内可直接跳转到对应帮助文档

### 变量(Variable)
节点之间传递数据的载体。上游节点的输出变量,可以在下游节点中被引用(如在 LLM 的提示词里插入 `Start` 节点收集的用户输入)。

- 每个变量有**变量名**和**数据类型**(String、Number、Object、Array 等)
- LLM 节点默认输出 `text`(String);开启结构化输出后额外输出 `structured_output`(Object)
- 变量的转换、提取、聚合分别由 Variables Transformer、Parameter Extractor、Branch Aggregator 三个节点负责

### 连线与分支
节点之间通过连线定义执行顺序。IF Else、Question Classifier 这类节点会产生**多个出口分支**,不同条件走不同路径;多个分支的结果可以用 Branch Aggregator 汇聚回一条主线。

### 试运行(Test Run)
不发布应用,直接在画布上单独运行某个节点或整条流程,查看输入输出是否符合预期。除 IF Else、Branch Aggregator 等纯路由/聚合节点外,处理类节点(LLM、Agent、Tool、Code、Iteration、Loop、Parameter Extractor 等)均支持试运行,以节点上是否出现运行按钮为准。**养成"配一个节点就试运行一次"的习惯,是最有效的调试方式。**

### 模型
LLM 相关节点的模型从**服务设置**中选择,由长桥内部统一初始化并提供测试账号。**支持调整部分输入参数**(可调参数以节点配置面板实际展示为准);模型管理暂未开放。模型分「主流」和「SOTA」两级,SOTA 消耗更多用量。

### Workspace(工作空间)
你在平台上的一切行为都发生在某个 Workspace 内:Agent、Workflow、知识库、用量消耗都以 Workspace 为边界。每个 Workspace 绑定一个**套餐**,套餐决定这个空间里能用什么功能、能用多少额度。同一个人在不同 Workspace 中看到的功能可能不同。详细拆解见 [1.5 Workspace 与套餐体系](plans)。

### 套餐(Plan)与用量(Usage)
平台提供 Starter(免费)/ Pro / Premium 三个套餐,差异体现在**月度用量额度**(LLM 调用等消耗按 USD 计量)和**细分功能开关**(工具范围、Skill 数量、知识库容量、发布权限等)。注册即自动激活 Starter。额度按月分配、按 7 天滚动释放,超额时运行会被拦截。详见 [1.5 Workspace 与套餐体系](plans)。

### 分地区服务
平台在香港、新加坡、美国(筹备中)由独立法律实体运营,定价币种、监管要求和可用能力按地区有所差异,用户不可跨地区切换服务主体。详见 [1.6 分地区服务说明](regions)。

## 节点之外:平台能力全景

节点编排是骨架,平台还提供一整套围绕 Agent 的能力,每项都有独立文档(索引见 [1.7 平台能力](capabilities/index)):

| 能力 | 解决什么问题 | 文档 |
|------|-------------|------|
| **知识库** | Agent 只会通用知识,不懂你的私有文档 | [1.7.1 知识库](capabilities/knowledge-base) |
| **Skill 体系** | 专业能力想复用,又不想撑爆 System Prompt | [1.7.2 Skill 体系](capabilities/skill) |
| **Workflow 触发器** | 任务要定时跑、要被外部系统触发 | [1.7.3 Workflow 触发器](capabilities/workflow-triggers) |
| **Guardrail 安全护栏** | 输入输出的合规风险需要机制层拦截 | [1.7.4 Guardrail 安全护栏](capabilities/guardrail) |
| **上下文与记忆管理** | 多轮对话失忆、上下文越积越大 | [1.7.5 上下文与记忆管理](capabilities/context-memory) |
| **规划与执行** | 复杂任务没条理、全自动不可控 | [1.7.6 规划与执行能力](capabilities/planning-execution) |
| **运行调试与观测** | 批量验证效果、上线后跟踪运行质量 | [1.7.7 运行调试与观测](capabilities/observability) |
| **安全校验与本地化** | 资产数据鉴权、简繁体适配 | [1.7.8 安全校验与本地化](capabilities/security-i18n) |
| **画布与协作效率** | 多人协作防误改、节点复用 | [1.7.9 画布与协作效率](capabilities/canvas-collaboration) |
| **模型与工具生态** | SOTA 模型选择、账户/行情类工具接入 | [1.7.10 模型与工具生态](capabilities/model-tool-ecosystem) |
| **对话端体验** | 了解你的 Agent 发布后用户侧的呈现能力 | [1.7.11 对话端体验](capabilities/chat-experience) |
| **容灾能力** | 厂商故障、调用失败时 Agent 仍稳定可用 | [1.7.12 容灾能力](capabilities/disaster-recovery) |

## 15 个节点全景图

```
基础节点     Start(开始) · Answer(输出答案,Chatflow专用) · End(结束,Workflow专用)
AI 节点      LLM(大语言模型) · Agent(调用Agent) · Question Classifier(问题分类器)
逻辑编排     IF Else(条件判断) · Branch Aggregator(分支聚合) · Iteration(迭代) · Loop(循环)
数据处理     Code(代码执行) · Variables Transformer(模版转换) · Parameter Extractor(参数提取器)
外部扩展     Tool(工具调用) · Http Request(HTTP请求)
```

## 一个最简单的 Chatflow 长什么样

```
Start ──▶ LLM ──▶ Answer
(接收用户消息)  (调用大模型生成回答)  (把回答输出到聊天窗口)
```

下一步:跟着 [1.3 快速上手](quick-start) 把它亲手搭出来。
