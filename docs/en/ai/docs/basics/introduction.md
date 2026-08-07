---
sidebar_position: 1
title: "Platform Overview & Core Concepts"
---

## What Is LongbridgeAI Agent Platform

LongbridgeAI Agent Platform is Longbridge's AI Agent orchestration platform. On a **visual canvas**, you drag in nodes, connect them, and configure them to build AI applications that understand natural language, call tools, and execute business logic—no need to write code from scratch.

## The Longbridge AI Product Landscape

Longbridge's AI offering consists of two parts:

| Product | Positioning | Who It's For |
|------|------|--------|
| **LongbridgeAI Agent Platform** (this platform) | Agent orchestration platform: build, debug, and publish AI applications | Agent builders (you) |
| **Official Chatbot suite** | LongbridgeAI conversational products: the AI Q&A entry points inside the App/Web | End users |

How they relate:
- Agents you build on the Agent Platform reach end users through entry points such as the official Chatbot after publishing
- **Usage quota is shared**: the same user's usage quota **applies to both tools**—chatting in the Chatbot and running flows on the Agent Platform draw from the same quota (see [1.5 Workspace & Plans](plans))
- For capabilities on the official Chatbot side (conversation charts, voice input, long-term memory, etc.), see [1.7-11 Chat Experience](capabilities/chat-experience)

## Three Application Types: Agentic Chat, Chatflow, and Workflow

This is the platform's most important concept—it determines how you build, which nodes you can use, and how your application gets invoked:

| | Agentic Chat | Chatflow Agent | Workflow Agent |
|---|---|---|---|
| **Positioning** | A **simplified version** of conversational applications | Multi-turn **conversational** applications (canvas orchestration) | Automated **batch-processing** applications |
| **How you build** | No canvas needed—just configure directly | Orchestrate nodes on the canvas | Orchestrate nodes on the canvas |
| **Typical scenarios** | Quickly spin up a conversational assistant | Conversations that need branching/tool orchestration, such as customer support or market Q&A | Research report generation, batch translation, data analysis, scheduled tasks |
| **Entry point** | User sends a message in the chat window | User sends a message in the chat window | Triggered by APIs / triggers / upstream systems, with parameters passed in |
| **How it ends** | Direct conversational output | **Answer** node (outputs the answer to the chat window) | **End** node (returns results in structured formats such as JSON) |
| **Best for** | **Beginners** | Users who need precise control over conversation flow | Users who need task automation (**not yet available**) |

> Rule of thumb: **as a beginner, use Agentic Chat for a conversational assistant; when conversation logic is complex and you need to orchestrate branches and tools, use Chatflow; for one-in, one-out automated tasks, use Workflow.**

- **Agentic Chat is a simplified Chatflow**: under the hood it is a fixed three-node chain—**Start → Agent (invoke Agent) → Answer (direct reply)**. The platform hides the canvas; you only configure the role and capabilities and start chatting, making it the fastest way to get started. When you need multi-branch routing or multi-node data processing, migrate to Chatflow for free-form orchestration
- ⚠️ **Workflow is not yet available**: because Workflow demands more from users, it is currently not open to general users; availability will be announced in product updates. The Workflow-related content in this documentation (node scenarios, triggers, examples) can serve as advance learning material
- The node reference in this handbook (1.4) applies to canvas orchestration in Chatflow / Workflow; Agentic Chat does not involve canvas nodes

## Core Concepts

### Node
A single processing step in a flow. Each node does one thing: call a large language model, evaluate a condition, send an HTTP request, execute code, and so on. The platform currently provides 15 nodes; see the full list in the [1.4 Node Reference](capabilities/index).

UI elements common to every node:
- **Icon + name**: the default name is generated in the current language and can be edited
- **Comments**: annotate a node to help team collaboration
- **More button**: right-click menu actions such as copy and delete
- **Run button**: nodes that support test runs can be tested individually (see "Test Run" below)
- **Help documentation link**: jump directly to the relevant help doc from the node editing panel

### Variable
The vehicle for passing data between nodes. Output variables from upstream nodes can be referenced in downstream nodes (for example, inserting the user input collected by the `Start` node into an LLM's prompt).

- Each variable has a **variable name** and a **data type** (String, Number, Object, Array, etc.)
- The LLM node outputs `text` (String) by default; with structured output enabled, it additionally outputs `structured_output` (Object)
- Variable transformation, extraction, and aggregation are handled by three dedicated nodes: Variables Transformer, Parameter Extractor, and Branch Aggregator

### Connections and Branches
Connections between nodes define the execution order. Nodes like IF Else and Question Classifier produce **multiple outgoing branches**, with different conditions taking different paths; results from multiple branches can be merged back into a single main line with Branch Aggregator.

### Test Run
Run a single node or the entire flow directly on the canvas without publishing, and check whether the inputs and outputs match your expectations. Apart from pure routing/aggregation nodes such as IF Else and Branch Aggregator, processing nodes (LLM, Agent, Tool, Code, Iteration, Loop, Parameter Extractor, etc.) all support test runs—the presence of a run button on the node is the authoritative indicator. **Making "configure one node, test-run it once" a habit is the most effective way to debug.**

### Models
Models for LLM-related nodes are selected from **service settings**, centrally initialized by Longbridge with test accounts provided. **Some input parameters can be adjusted** (the adjustable parameters are whatever the node configuration panel actually shows); model management is not yet available. Models come in two tiers, **Mainstream** and **SOTA**; SOTA consumes more usage.

### Workspace
Everything you do on the platform happens inside a Workspace: Agents, Workflows, knowledge bases, and usage consumption are all scoped to a Workspace. Each Workspace is bound to a **plan**, which determines what features are available in that space and how much quota you get. The same person may see different features in different Workspaces. See the detailed breakdown in [1.5 Workspace & Plans](plans).

### Plan and Usage
The platform offers three plans: Starter (free) / Pro / Premium. They differ in **monthly usage quota** (LLM calls and other consumption are metered in USD) and **fine-grained feature switches** (tool scope, Skill count, knowledge base capacity, publishing permissions, etc.). Starter is activated automatically upon registration. Quota is allocated monthly and released on a rolling 7-day basis; runs are blocked once you exceed your quota. See [1.5 Workspace & Plans](plans) for details.

### Regional Services
The platform is operated by independent legal entities in Hong Kong, Singapore, and the United States (in preparation). Pricing currency, regulatory requirements, and available capabilities vary by region, and users cannot switch service entities across regions. See [1.6 Regional Services](regions) for details.

## Beyond Nodes: The Full Capability Landscape

Node orchestration is the skeleton; the platform also provides a full suite of capabilities around Agents, each with its own documentation (index at [1.7 Platform Capabilities](capabilities/index)):

| Capability | Problem It Solves | Docs |
|------|-------------|------|
| **Knowledge Base** | Agents only know general knowledge, not your private documents | [1.7.1 Knowledge Base](capabilities/knowledge-base) |
| **Skill System** | Reuse specialized capabilities without bloating the System Prompt | [1.7.2 Skill System](capabilities/skill) |
| **Workflow Triggers** | Tasks need to run on a schedule or be triggered by external systems | [1.7.3 Workflow Triggers](capabilities/workflow-triggers) |
| **Guardrail** | Compliance risks in inputs/outputs need mechanism-level interception | [1.7.4 Guardrail](capabilities/guardrail) |
| **Context & Memory Management** | Multi-turn conversations lose memory; context keeps growing | [1.7.5 Context & Memory Management](capabilities/context-memory) |
| **Planning & Execution** | Complex tasks lack structure; full automation is uncontrollable | [1.7.6 Planning & Execution](capabilities/planning-execution) |
| **Debugging & Observability** | Validate results in batches; track run quality after launch | [1.7.7 Debugging & Observability](capabilities/observability) |
| **Security Verification & Localization** | Asset data authentication; Simplified/Traditional Chinese adaptation | [1.7.8 Security Verification & Localization](capabilities/security-i18n) |
| **Canvas & Collaboration** | Prevent accidental edits in team collaboration; reuse nodes | [1.7.9 Canvas & Collaboration](capabilities/canvas-collaboration) |
| **Model & Tool Ecosystem** | SOTA model selection; account/market-data tool integration | [1.7.10 Model & Tool Ecosystem](capabilities/model-tool-ecosystem) |
| **Chat Experience** | Understand how your Agent is presented to users after publishing | [1.7.11 Chat Experience](capabilities/chat-experience) |
| **Disaster Recovery** | Keep Agents stable when vendors fail or calls error out | [1.7.12 Disaster Recovery](capabilities/disaster-recovery) |

## The 15 Nodes at a Glance

```
Basic nodes        Start · Answer (outputs the answer, Chatflow only) · End (Workflow only)
AI nodes           LLM (large language model) · Agent (invoke an Agent) · Question Classifier
Logic & routing    IF Else (conditional) · Branch Aggregator · Iteration · Loop
Data processing    Code (code execution) · Variables Transformer (template transform) · Parameter Extractor
External access    Tool (tool call) · Http Request
```

## What the Simplest Chatflow Looks Like

```
Start ──▶ LLM ──▶ Answer
(receive user message)  (call the LLM to generate a reply)  (output the reply to the chat window)
```

Next step: follow [1.3 Quick Start](quick-start) and build it yourself.
