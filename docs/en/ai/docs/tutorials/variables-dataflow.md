---
sidebar_position: 2
title: "Variables and Data Flow Design Techniques"
---

> The nodes are connected, but the variables don't flow — this is where beginners most often get stuck. This guide explains how data moves and transforms through a flow.

## Sketch the Data Flow First, Then Place the Nodes

Before building, answer three questions:

1. **What comes in?** Which fields does the Start node collect (user message, custom variables)
2. **What goes out?** Which data does the Answer node's reply template / the End node's output variables need
3. **How does it transform in between?** From entry to exit, what processing does the data go through

Write this chain out as a single line, then place nodes against it:

```
User message → Classification result → (Market branch) Ticker → Market data JSON → Formatted text → Reply
```

## Structured Output: Making LLM Results Usable Downstream

By default the LLM outputs free-form text `text` (String), from which downstream nodes can hardly extract values precisely. When downstream nodes need to make decisions or pick out fields, **turn on the LLM node's structured output switch**:

- The output variable becomes `structured_output` (Object), generated according to the JSON Schema you configure
- When configuring, define each field one by one: parameter name, parameter type, whether it is required
- Typical usage: have the LLM extract `{"ticker": "NVDA", "intent": "get quote"}`, so downstream IF Else / Http Request nodes can reference the fields directly

> Principle: **use `text` for humans, use `structured_output` for machines.**

## Division of Labor Among the Three Variable Nodes

| Node | What it does | When to use |
|------|--------------|-------------|
| **Variables Transformer** | Formatting, type conversion, merging/splitting with Jinja2 templates | Concatenating copy, converting an Object into display text, simple transformations |
| **Parameter Extractor** | Uses an LLM to extract structured parameters from text | When natural language needs to be converted into tool-call input parameters |
| **Code** | Custom Python / JavaScript logic | Complex computation, cleaning, or validation that a Transformer cannot express |

**Order of preference**: use a Transformer instead of Code whenever possible (templates are easier to maintain than code); Code is the fallback.

## Merging Branch Data: Branch Aggregator

When the multiple branches split off by IF Else / Question Classifier each produce different output variables, and a downstream node (such as Answer) only wants to reference "one" result, use the **Branch Aggregator**:

- **Ungrouped mode**: aggregates variables from multiple branches into a single output; the type is determined by the first variable selected — so **the output types of all branches must be consistent** (all String or all Object)
- **Grouped mode**: use when you need to aggregate multiple groups of variables with different meanings

**Anti-pattern**: attaching a separate Answer node to each branch and duplicating the same reply template. Instead, use branches → aggregator → a single Answer, so the template is maintained in one place.

## Passing Data in Loops

- **Iteration**: takes a list as input, runs the internal sub-flow once for each element, and produces a list of results. Supports **parallel mode** for speedup and configurable **error handling** (a single failed element does not affect the whole). Suitable for batch tasks like "generate a summary for every news article"
- **Loop**: executes repeatedly by count or condition, **updating variables each round and passing them to the next**; a special "End Loop" node inside controls the exit. Suitable for tasks like "keep refining until a condition is met"
- Neither can contain Start / End nodes inside; the sub-flow begins from the internal Home node

## Troubleshooting Common Data Flow Issues

| Symptom | Common cause | Fix |
|---------|--------------|-----|
| Downstream node can't select the desired variable | Upstream node not connected, or the variable is inside a branch | Check the connections; route branch variables through a Branch Aggregator first |
| LLM prompt reports "Please fill in the context variable in the prompt" | Context is configured but the variable is not inserted into the prompt | Insert the variable into the prompt, or remove the context configuration |
| Output JSON fails to parse downstream | Format enforced via prompt only; the model occasionally drifts | Switch to structured output (strict JSON Schema constraints) |
| Wrong type after aggregation | Branch Aggregator branches have inconsistent types | Unify output types across branches; convert with a Transformer first if needed |
| Results inside the loop are not carried out | Variables in the loop body are not written back to the iteration output | Check the Iteration output variable configuration |
