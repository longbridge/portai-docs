---
sidebar_position: 5
title: "Mode and Model Selection Techniques"
---

> Selection techniques drawn from real-world practice: when to use Agentic Chat, when to switch to a larger model, and when to take computation out of the model's hands. Choose right and you get twice the result for half the effort; choose wrong, and no amount of prompt tuning will save you. This guide is continuously updated. (RAG retrieval patterns now have their own guide, see [RAG Retrieval Pattern Techniques](rag-patterns); extending capabilities via Skill search also has its own guide, see [Quickly Extending Agent Capabilities with Skills](skill-extension))

## Technique 1: For Effortless Agent Building, Choose Agentic Chat First

**Scenario**: you want to quickly build a working Agent without learning the canvas or wiring up nodes.

Agentic Chat is essentially a **lightweight version of Chatflow**: no orchestration canvas needed — configure the prompt, attach tools, and run. The model autonomously decides which tool to call and how to compose the answer.

| | Agentic Chat | Chatflow |
|---|---|---|
| How it's built | Configuration-based (prompt + tools) | Canvas orchestration (nodes + connections) |
| Learning curve | Minutes | Requires understanding nodes, variables, connections |
| Flow control | The model decides autonomously | Every step is deterministic and controllable |
| Best for | Quickly validating ideas, general Q&A + tool calling | Multi-branch routing, precise data flow, production-grade scenarios |

**Rule of thumb**: get your requirement working with Agentic Chat first; when you find you need **fixed branching logic** or **precise control over every step**, migrate to Chatflow.

## Technique 2: Choosing Between Small and Large Models

Small models are cheap and fast but have a performance ceiling; large models are more accurate but more expensive and slower. Two signals from real financial practice tell you when a large model is a must:

**Signal 1: inaccurate financial entity recognition.** Real case: identifying which market a ticker belongs to (US / HK / A-share) — small models frequently get it wrong, while large models are noticeably more reliable. For any step involving financial entity recognition (tickers, markets, currencies), go straight to a large model.

**Signal 2: complex Agent loops fail to complete.** When an Agent needs multi-step, looped tool calls and you see "incomplete output" or "the task stalls midway", it's usually not a prompt problem but insufficient model capability — switching to the strongest large model available often makes the problem disappear outright.

**Cost strategy**: use models in tiers — small models for simple steps like classification and formatting to save cost; large models for entity recognition, multi-step reasoning, and the workhorse nodes of Agent loops to preserve quality.

## Technique 3: For Heavy Data Computation, Let Code Compute — Not the Model

**Scenario**: computing technical indicators like MACD, which requires numerical calculations over large volumes of candlestick data.

LLMs are inherently poor at heavy-volume computation — although their math keeps improving as models advance, having one process hundreds or thousands of candlesticks item by item remains slow and error-prone. Key insight:

- Having the LLM **generate a MACD calculation script**: fast
- Having the LLM **generate/move candlestick data item by item**: very slow, because all the data has to pass through the model's context

**Recommended approach**: skip Agentic mode and orchestrate with Chatflow instead, so the data bypasses the model:

```
Start ─▶ Tool (fetch candlestick data) ─▶ Code (Python computes MACD) ─▶ LLM (interpret results) ─▶ Answer
```

The candlestick data flows directly from the Tool node to the Code node without passing through the model's context; the LLM is only responsible for interpreting the final computed results. Computation efficiency improves dramatically, and the numbers are precise and reproducible.

> Generalization: any **fetch → compute → interpret** requirement (technical indicators, return statistics, portfolio attribution) fits this division of labor — **the LLM supplies the logic (scripts / interpretation), the code supplies the numbers**.

## Related Reading

- [Planning and Execution Capabilities](../basics/capabilities/planning-execution) — where Agentic Chat fits capability-wise
- [Code Node Documentation](../basics/nodes/code) — Python/JavaScript code execution
- [Tool Node Documentation](../basics/nodes/tools) — fetching data with tools
- [Flow Orchestration Patterns and Debugging Techniques](orchestration-debug) — Pattern 3 "Tool Augmentation", Pattern 4 "Autonomous Agent"
- [Finding Skills Online](skill-extension) — quickly equipping your Agent with specialized capabilities (formerly Technique 4)
