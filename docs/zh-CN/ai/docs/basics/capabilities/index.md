---
sidebar_position: 0
title: "平台能力总览"
---

节点编排只是平台的骨架。围绕 Agent 的搭建、运行、安全与协作，平台提供一整套配套能力，每项能力独立成篇：

## 能力索引

### 核心能力 (直接决定 Agent 的上限)

| # | 能力 | 一句话说明 |
|---|------|-----------|
| 01 | [知识库](knowledge-base) | 上传私有文档，让 Agent 基于你的知识作答 |
| 02 | [Skill 体系](skill) | 按需加载的能力扩展包，动态管理上下文 |
| 03 | [Workflow 触发器](workflow-triggers) | 定时 / Webhook 自动触发，Workflow 无人值守运行 |
| 04 | [Guardrail 安全护栏](guardrail) | 输入输出双向合规拦截:PII 打码、不良内容与金融违规屏蔽 |
| 05 | [上下文与记忆管理](context-memory) | 短期记忆、上下文传递与自动压缩，多轮对话不失忆 |
| 06 | [规划与执行能力](planning-execution) | Todo 规划、Human in the Loop、Agent 回答模式 |

### 支撑能力 (让搭建和运维更高效)

| # | 能力 | 一句话说明 |
|---|------|-----------|
| 07 | [运行调试与观测](observability) | 三种运行方式 (节点/整体/正式)、GUI 批量运行、Logs 日志、统计面板与 Langfuse 追踪 |
| 08 | [安全校验与本地化](security-i18n) | 交易密码校验、简繁自动转换 |
| 09 | [画布与协作效率](canvas-collaboration) | 跨 Agent 复制节点、工作流上锁、成员权限切换等 |
| 10 | [模型与工具生态](model-tool-ecosystem) | SOTA 模型池、账户/社区/盈亏 MCP、行情工具时区优化 |
| 11 | [官方 Chatbot 体验](chat-experience) | 会话图表、语音输入、长期记忆等官方 Chatbot(LongbridgeAI 对话端) 能力，与平台共享用量 |
| 12 | [容灾能力](disaster-recovery) | 模型跨厂商调用、模型组合、失败重试、异常处理 | — |

## 使用建议

- **搭建第一个 Agent 前**:不需要通读，先完成 [快速上手](../quick-start)
- **Agent 要用到私有知识** → 01 知识库;**要接专业能力包** → 02 Skill
- **Workflow 要自动化运行** → 03 触发器;**Agent 面向客户** → 04 Guardrail(必读)
- **多轮对话记不住上文 / 上下文爆量** → 05 上下文与记忆
- **复杂任务失控、想要人工把关** → 06 规划与执行

---

*操作入口与功能以产品当前版本为准。新能力发布后，在本目录新增或更新对应能力文档，并在上表登记。*
