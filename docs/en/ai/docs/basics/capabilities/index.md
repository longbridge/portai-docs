---
sidebar_position: 0
title: "Platform Capabilities Overview"
---

Node orchestration is only the skeleton of the platform. Around building, running, securing, and collaborating on Agents, the platform provides a full set of supporting capabilities, each covered in its own article:

## Capability Index

### Core Capabilities (directly determine an Agent's ceiling)

| # | Capability | One-line Summary |
|---|------|-----------|
| 01 | [Knowledge Base](knowledge-base) | Upload private documents so the Agent answers based on your knowledge |
| 02 | [Skill System](skill) | On-demand capability extension packages with dynamic context management |
| 03 | [Workflow Triggers](workflow-triggers) | Scheduled / Webhook auto-triggering for unattended Workflow runs |
| 04 | [Guardrail](guardrail) | Two-way compliance interception on input and output: PII masking, blocking of harmful content and financial violations |
| 05 | [Context & Memory Management](context-memory) | Short-term memory, context passing, and auto-compression, so multi-turn conversations never lose track |
| 06 | [Planning & Execution](planning-execution) | Todo planning, Human in the Loop, Agent answer mode |

### Supporting Capabilities (make building and operations more efficient)

| # | Capability | One-line Summary |
|---|------|-----------|
| 07 | [Running, Debugging & Observability](observability) | Three run modes (node/full/production), GUI batch runs, Logs, statistics dashboard, and Langfuse tracing |
| 08 | [Security Verification & Localization](security-i18n) | Trading password verification, automatic Simplified/Traditional Chinese conversion |
| 09 | [Canvas & Collaboration Efficiency](canvas-collaboration) | Copying nodes across Agents, workflow locking, member permission switching, and more |
| 10 | [Model & Tool Ecosystem](model-tool-ecosystem) | SOTA model pool, account/community/P&L MCP tools, time zone optimization for market data tools |
| 11 | [Official Chatbot Experience](chat-experience) | Conversation charts, voice input, long-term memory, and other official Chatbot (LongbridgeAI chat client) capabilities, sharing usage quota with the platform |
| 12 | [Disaster Recovery](disaster-recovery) | Cross-vendor model calls, model combinations, failure retries, exception handling | — |

## Recommendations

- **Before building your first Agent**: no need to read everything — start with [Quick Start](../quick-start)
- **Agent needs private knowledge** → 01 Knowledge Base; **needs professional capability packages** → 02 Skill
- **Workflow should run automatically** → 03 Triggers; **Agent is customer-facing** → 04 Guardrail (must-read)
- **Multi-turn conversations forget earlier context / context grows too large** → 05 Context & Memory
- **Complex tasks running out of control, need human oversight** → 06 Planning & Execution

---

*Entry points and features are subject to the current product version. When new capabilities are released, add or update the corresponding document in this directory and register it in the table above.*
