---
sidebar_position: 10
title: "Chatflow & Agentic Chat Settings"
---

> Beyond the canvas/prompt itself, every Agent application also has a set of **application-level settings** that shape its public identity, conversational behavior, and safety boundaries. This article covers the settings for the three modes—Chatflow, Agentic Chat, and Workflow—separately. Exact entry points and options follow the current product version.

## 1. Settings Overview for the Two Modes

| Setting Category | Chatflow | Agentic Chat |
|---------|----------|--------------|
| Basic info (name/icon/description) | ✓ | ✓ |
| Opening message & suggested questions | ✓ | ✓ |
| Prompt (System Prompt) | Configured inside LLM/Agent nodes on the canvas | ✓ Application-level |
| Model selection | Node-level (each node can differ) | ✓ Application-level |
| Tool / Skill / knowledge base attachment | Attached inside the relevant nodes | ✓ Application-level |
| Memory settings | Node-level (memory window) | Application-level |
| Guardrail | ✓ | ✓ |
| Publishing settings | ✓ | ✓ |

> The core difference: **Chatflow's capability configuration is distributed across nodes** (which node uses which model and which tools, each independently); **Agentic Chat's capability configuration is centralized in the application settings** (one prompt + one set of tools, with the model scheduling them autonomously).

## 2. Chatflow Settings

Entry: the settings icon in the top right of the canvas opens the "Settings" sidebar:

![Chatflow settings panel: Agent permissions, preset questions (multilingual), caching, chat-side switches, session variables and environment variables](./images/1.10-1-Chatflow%E8%AE%BE%E7%BD%AE.png)

| Setting | Description |
|--------|------|
| Basic info | Application name, icon, description—the identity users see in the chat client and the Marketplace |
| Agent permissions | **Edit permission** (e.g. Workspace users) and **usage permission** (e.g. Workspace users only), with copy-link sharing supported (see [1.11 Agent Permission Management](permissions)) |
| Agent preset questions | Guiding questions shown to users, configurable **separately in EN / Simplified / Traditional Chinese**, lowering the barrier for the first question |
| Opening message | The welcome message at the start of a conversation; recommended to state the Agent's capability boundaries |
| Input variables | Custom fields defined by the Start node (see the [Start node](nodes/start)) |
| Memory window | How many turns of context to retain in multi-turn conversations, configured inside LLM/Agent nodes—use the smallest value that suffices to control usage |
| Enable cache / cache period | When enabled, cached results are reused for identical inputs, reducing repeated consumption; the cache period controls expiry |
| Simplified/Traditional Chinese conversion | When enabled, output is automatically converted between Simplified and Traditional per the user's language preference |
| Chat history search | When enabled, users can search their past conversations with this Agent |
| Input-box file upload | When enabled, the chat input box supports file uploads |
| Session variables | Session-level variables that persist state across turns for the flow to read and write |
| Environment variables | Application-level constants (e.g. API Key configuration) referenced by canvas nodes |
| Guardrail | The two-way input/output compliance interception switch; **must be enabled** for customer-facing Agents (see [Guardrail](capabilities/guardrail)) |
| Publish | Publish as a usable version; publishing to the Marketplace requires a security scan (Pro plan or above) |

## 3. Agentic Chat Settings

![Agentic Chat settings: human-in-the-loop, to-do list, spawning Subagents, Agent permissions, Simplified/Traditional conversion, Allow Fork](./images/1.10-2-AgenticChat%E8%AE%BE%E7%BD%AE.png)

| Setting | Description |
|--------|------|
| Basic info | Application name, icon, description |
| System Prompt | The application-level prompt: role definition, rules of behavior, output format, compliance red lines (for writing tips, see [2.1 Prompt Writing](../tutorials/prompt-writing)) |
| Model selection | One application-level model; Mainstream / SOTA tiers, with SOTA costing more per unit |
| Tools | Attach built-in tools, third-party MCP (requires Premium), and OpenAPI tools; the model decides when to call them |
| Skill | Attach custom / official Skills as on-demand capability packs |
| Knowledge base | Attach knowledge bases so answers are grounded in your private documents |
| Human-in-the-loop | Allows the model to ask the user questions mid-execution and wait for answers |
| Enable to-do list | When enabled, the AI automatically identifies tasks in the conversation and breaks them down for execution (see [Planning & Execution](capabilities/planning-execution)) |
| Spawn Subagent (Beta) | Allows the Agent to spawn independent Subagents via `spawn_subagent` to handle subtasks—suited to decomposable/parallelizable work; Subagents run in isolated contexts and return a summary when done |
| Agent permissions | Usage permission (e.g. anyone with the link) + copy link; can **publish to the Agent Marketplace** (see [1.11 Agent Permission Management](permissions)) |
| Simplified/Traditional Chinese conversion | When enabled, output is automatically converted between Simplified and Traditional per the user's language preference |
| Allow Fork | When enabled, other users can copy this Agent's configuration and adapt it for their own use |
| Guardrail | Same as Chatflow; Agentic Chat is more autonomous, so guardrails matter even more |
| Opening message & suggested questions | Same as Chatflow |

## 4. Workflow Settings

Workflow has no chat client, so its settings are the most minimal:

![Workflow settings panel: edit permission, caching, Simplified/Traditional conversion, and environment variables](./images/1.10-3-Workflow%E8%AE%BE%E7%BD%AE.png)

| Setting | Description |
|--------|------|
| Agent permissions | **Edit permission** only (e.g. Workspace users)—Workflow has no chat client and no concept of usage permission; it is invoked by API/triggers |
| Enable cache / cache period | Same as Chatflow |
| Simplified/Traditional Chinese conversion | Same as Chatflow |
| Environment variables | Same as Chatflow; no session variables (Workflow is single-execution, with no session concept) |

## 5. How Settings Relate to Plans

The available range of some settings is determined by the current Workspace's plan; options you can't select during configuration are usually not included in your plan:

- **Third-party MCP tools**: require Premium or above
- **Official built-in Skills**: require Pro or above; custom Skill counts vary by plan (3 / 20 / 100)
- **Some models**: models restricted by plan or region are not shown in the selector
- For the complete rules, see [1.5 · Configuration Time vs. Runtime](plans)

## Related Reading

- [2.5 Tip 1: Choosing Between Agentic Chat and Chatflow](../tutorials/mode-model-selection)
- [1.7 Debugging & Observability](capabilities/observability) — how to test after your settings are in place
- [1.7.4 Guardrail](capabilities/guardrail) — a must-enable for customer-facing Agents
