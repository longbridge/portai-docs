---
sidebar_position: 2
title: "Glossary"
---

> All concepts that appear in the help documentation, arranged in **alphabetical order**. Click a "See" link to jump to the corresponding document.

## A

| Term | One-Sentence Description | See |
|------|-----------|------|
| Agent | The umbrella term for AI applications built on the platform, divided into Chatflow (conversational) and Workflow (batch-processing) types | [1.1 Platform Overview](../basics/introduction) |
| Agent Marketplace | Where you browse, use, and fork Agents published by others; marketplace content is **for learning and exchange only** and does not constitute a recommendation | [1.6 Region-Specific Service Notes](../basics/regions) |
| Agent node | An autonomous execution node on the canvas: the LLM loops through tool calls on its own until the task is complete (Function Calling mode) | [1.4.5 Agent Node](../basics/nodes/agent) |
| Agentic Chat | Lightweight creation mode: configure a prompt and attach tools to run, no canvas orchestration needed — a lightweight version of Chatflow | [2.5 Tip 1](../tutorials/mode-model-selection) |
| Answer node | The node in a Chatflow that outputs the reply to the user | [1.4.2 Answer Node](../basics/nodes/answer) |

## B

| Term | One-Sentence Description | See |
|------|-----------|------|
| Benefit Card | A time-limited higher-tier experience card: it does not change your subscription, and during its validity it upgrades feature entitlements and stacks extra usage | [1.8 HKSG Benefit Card](../basics/hksg-benefits) |
| Branch Aggregator | A node that merges same-type variables from multiple branches into a single variable (e.g. array[string]) | [1.4.8 Branch Aggregator Node](../basics/nodes/branch-aggregator) |

## C

| Term | One-Sentence Description | See |
|------|-----------|------|
| Charged By | The attribution rule that determines which Workspace a run's usage is billed to | [1.5 · §5.4](../basics/plans) |
| Chatflow | Canvas-orchestrated multi-turn conversational Agents (e.g. intelligent customer service) | [1.1 Platform Overview](../basics/introduction) |
| Code node (Code Execution) | A node that runs Python3 / JavaScript code in a sandbox; the code must implement a `main` function and return a dictionary | [1.4.11 Code Node](../basics/nodes/code) |
| Context compression | Automatic compression of history in long conversations to avoid exceeding the context limit | [1.7.5 Context and Memory Management](../basics/capabilities/context-memory) |

## D

| Term | One-Sentence Description | See |
|------|-----------|------|
| DSL | The import/export file (YAML) for application orchestration; model availability is validated automatically on import | [1.7.7 Debugging and Observability](../basics/capabilities/observability) |

## E

| Term | One-Sentence Description | See |
|------|-----------|------|
| Editor | A Workspace member role: can create and edit resources within the space; the number is limited by plan | [1.5 · Member Roles](../basics/plans) |
| Embedding | Vectorization of knowledge base documents; one of the billing units | [1.5 · §5.1](../basics/plans) |
| End node | The end node of a Workflow, defining the final output | [1.4.3 End Node](../basics/nodes/end) |
| Error handling / retry on failure | Node-level fault-tolerance configuration: automatic retry on failure, handling exceptions by policy | [1.4.14 Tool Node](../basics/nodes/tools) |

## F

| Term | One-Sentence Description | See |
|------|-----------|------|
| Function Calling | The Agent node's tool-calling mode: the model uses tools via function calls, looping until the task is complete | [1.4.5 Agent Node](../basics/nodes/agent) |

## G

| Term | One-Sentence Description | See |
|------|-----------|------|
| Guardrail | Two-way compliance interception on input/output: PII masking, blocking of harmful content and financial violations | [1.7.4 Guardrail](../basics/capabilities/guardrail) |

## H

| Term | One-Sentence Description | See |
|------|-----------|------|
| Http Request node | A node that calls external HTTP APIs to fetch data; supports importing cURL | [1.4.15 Http Request Node](../basics/nodes/http-request) |
| Human in the Loop (HITL) | A mode that proactively pauses at key nodes during execution and waits for human confirmation | [1.7.6 Planning and Execution](../basics/capabilities/planning-execution) |

## I

| Term | One-Sentence Description | See |
|------|-----------|------|
| IF Else node (Conditional Branch) | A routing node with IF / ELIF / ELSE multi-condition branching | [1.4.7 IF Else Node](../basics/nodes/if-else) |
| item variable | The variable that nodes inside an iteration use to reference "the element being processed in the current round" | [1.4.9 Iteration Node](../basics/nodes/iteration) |
| Iteration node | A container node that processes a list item by item, with parallel mode and error handling support | [1.4.9 Iteration Node](../basics/nodes/iteration) |

## J

| Term | One-Sentence Description | See |
|------|-----------|------|
| Jinja2 | The template language used by the Variables Transformer node (variables, filters, control structures) | [1.4.12 Variables Transformer Node](../basics/nodes/variables-transformer) |

## K

| Term | One-Sentence Description | See |
|------|-----------|------|
| Knowledge Base | Upload private documents for the Agent to retrieve and answer from; capacity depends on plan | [1.7.1 Knowledge Base](../basics/capabilities/knowledge-base) |

## L

| Term | One-Sentence Description | See |
|------|-----------|------|
| Langfuse | The third-party tracing platform supported by **Trace App Performance**, used for debugging and performance analysis | [1.7.7 Debugging and Observability](../basics/capabilities/observability) |
| LLM node | The core node that calls a large language model (prompt, model, memory, structured output) | [1.4.4 LLM Node](../basics/nodes/llm) |
| Logs (Run Logs) | View each run's inputs and outputs, execution path, and failure reasons | [1.7.7 Debugging and Observability](../basics/capabilities/observability) |
| LongbridgeAI Chatbot (chat client) | The official conversational product, which **shares the same usage quota** as the Agent platform | [1.7.11 Chat Experience](../basics/capabilities/chat-experience) |
| Long-term / Short-term memory | Cross-session / in-session memory capabilities, configured via switches in nodes such as LLM | [1.7.5 Context and Memory Management](../basics/capabilities/context-memory) |
| Loop node | A container node that repeatedly executes the same logic until an exit condition or maximum count is reached | [1.4.10 Loop Node](../basics/nodes/loop) |

## M

| Term | One-Sentence Description | See |
|------|-----------|------|
| MCP (third-party MCP Server) | An external tool integration protocol, available on the Premium plan | [1.5 · §4.2](../basics/plans) |
| Memory window | The number of context turns retained in a multi-turn conversation; setting the smallest sufficient value helps control usage | [1.7.5 Context and Memory Management](../basics/capabilities/context-memory) |
| Model tiers (Mainstream / SOTA) | Models are divided into two consumption tiers, with SOTA consuming more per unit; node-level model configuration is supported | [1.5 · §6](../basics/plans) |

## O

| Term | One-Sentence Description | See |
|------|-----------|------|
| OpenAPI tools | External API tools configured by users themselves; calls are not billed | [1.4.14 Tool Node](../basics/nodes/tools) |
| Owner | The single highest-privilege member of a Workspace, the only one who can perform commercial operations such as subscription purchases/upgrades | [1.5 · Member Roles](../basics/plans) |

## P

| Term | One-Sentence Description | See |
|------|-----------|------|
| Parameter Extractor | A node that uses an LLM to extract structured parameters from natural language, commonly used to feed tool inputs | [1.4.13 Parameter Extractor Node](../basics/nodes/parameter-extractor) |
| Plan | The commercial object that determines a Workspace's feature scope and usage quota | [1.5 · §4](../basics/plans) |
| Pro / Premium | Paid plan tiers (auto-renewing monthly subscription) | [1.5 · §4](../basics/plans) |
| Prompt | The instruction text that directs model behavior, split into System / User layers | [2.1 Prompt Writing Tips](../tutorials/prompt-writing) |

## Q

| Term | One-Sentence Description | See |
|------|-----------|------|
| Question Classifier | A routing node that classifies user questions by intent and routes them to different branches accordingly | [1.4.6 Question Classifier Node](../basics/nodes/question-classifier) |

## R

| Term | One-Sentence Description | See |
|------|-----------|------|
| RAG (Retrieval-Augmented Generation) | A Q&A paradigm that first retrieves from a knowledge base / search, then answers based on the retrieved results | [2.4 RAG Retrieval Patterns](../tutorials/rag-patterns) |
| Rerank | Reordering of retrieval results; one of the billing units | [1.5 · §5.1](../basics/plans) |

## S

| Term | One-Sentence Description | See |
|------|-----------|------|
| Security review | The platform's review of an Agent's name, avatar, description, and Prompt before publishing / marketplace listing | [3.2 Security Review](../compliance/security-review) |
| Skill | An on-demand capability/methodology package that can be attached to an Agent; the maximum number depends on plan | [1.7.2 Skill System](../basics/capabilities/skill) |
| Start node | The entry node of a flow, defining the input fields | [1.4.1 Start Node](../basics/nodes/start) |
| Starter | The free plan, activated automatically upon registration | [1.5 · §4](../basics/plans) |
| Statistics | The Agent analytics dashboard: trends in conversation count, active users, latency, satisfaction, etc. | [1.7.7 Debugging and Observability](../basics/capabilities/observability) |
| Structured output | The ability to make an LLM output reliably in a defined structure (e.g. JSON) | [1.4.4 LLM Node](../basics/nodes/llm) |
| System Prompt | The stable part of a prompt: role definition, behavioral rules, output format, compliance red lines | [2.1 Prompt Writing Tips](../tutorials/prompt-writing) |

## T

| Term | One-Sentence Description | See |
|------|-----------|------|
| Test run (trial run) | Run a single node or the entire flow to validate results without publishing the application | [1.7.7 Debugging and Observability](../basics/capabilities/observability) |
| Tool node | A node that calls the platform's built-in tools or OpenAPI tools to fetch data or perform actions | [1.4.14 Tool Node](../basics/nodes/tools) |
| Trace App Performance | Sends the application's execution context to a third-party tracing platform (Langfuse) for debugging and analysis | [1.7.7 Debugging and Observability](../basics/capabilities/observability) |

## U

| Term | One-Sentence Description | See |
|------|-----------|------|
| Usage | The metering system for AI consumption: LLM calls, Embedding, sandbox runs, etc. are all converted into USD | [1.5 · §5](../basics/plans) |

## V

| Term | One-Sentence Description | See |
|------|-----------|------|
| Variable | The carrier for passing data between nodes, including input and output variables | [2.2 Variables and Data Flow](../tutorials/variables-dataflow) |
| Variables Transformer | A node that formats/transforms variables using Jinja2 templates | [1.4.12 Variables Transformer Node](../basics/nodes/variables-transformer) |
| Viewer | A Workspace member role: read-only viewing and use of resources; the number is limited by plan | [1.5 · Member Roles](../basics/plans) |

## W

| Term | One-Sentence Description | See |
|------|-----------|------|
| Weekly rolling release | The monthly quota is released on a rolling 7-day basis; weekly availability ≈ monthly total ÷ 4 | [1.5 · §5.2](../basics/plans) |
| Workflow | Automated batch-processing Agents (one input, one output — e.g. research report generation) | [1.1 Platform Overview](../basics/introduction) |
| Workflow triggers | Scheduled / Webhook triggers that run Workflows automatically, unattended | [1.7.3 Workflow Triggers](../basics/capabilities/workflow-triggers) |
| Workspace | The basic unit that hosts Agents, knowledge bases, and usage — the boundary within which a plan takes effect | [1.5 Workspace and Plans](../basics/plans) |
