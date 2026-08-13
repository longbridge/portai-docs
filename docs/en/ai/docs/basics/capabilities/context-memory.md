---
sidebar_position: 5
title: "Context & Memory Management"
---

## What It Is

A set of mechanisms that keep information flowing correctly between nodes and between turns in multi-turn conversations. It solves two problems: **the Agent forgetting earlier context** (needs memory) and **context growing ever larger** (needs compression).

## Using Context

- **Agent node**: with the **short-term memory switch** turned on, it can use the context of past conversation turns via short-term memory
- **LLM node**: usable after **selecting variables as context** in the context menu; it can also read context from short-term memory

## Generating Context

- Once an Agent node uses context, it **automatically compresses tool return content into the context** — data fetched by tools is not lost in the next turn
- After an LLM node selects context content, it supports **context output**; the output context can be referenced by downstream nodes

## Saving Context

- When a Chatflow produces output, it supports selecting context variables to **save to short-term memory**
- Each conversation turn saves its own context information

## Context Compression

- The Agent node enables **context compression** via a switch
- When the context exceeds a certain size, it is compressed automatically: after compression, the current turn's context contains the context information of all previous turns, while **the raw context of historical turns is automatically cleared** — information retained, size under control

## Caching

- Enabling caching shows a **confirmation dialog** informing you of the risk (the cache may return stale results)
- Cache configuration is **disabled** in Agentic Chat mode

## Recommendations

1. **Set the memory window to the smallest sufficient value**: an oversized window wastes tokens and lets history derail the model; see [Prompt Writing Tips](../../tutorials/prompt-writing)
2. Context compression itself consumes usage (borne by the same party as the conversation run); factor it into cost estimates for long-conversation scenarios, see [Workspace & Plans](../plans)
3. If an LLM node has context configured but the corresponding variable is not inserted in the prompt, you get the error "Please fill in the context variable in the prompt"; see [Variables & Data Flow](../../tutorials/variables-dataflow)

## Related Reading

- [LLM Node Documentation](../nodes/llm) — memory feature and memory window configuration
- [Agent Node Documentation](../nodes/agent)
