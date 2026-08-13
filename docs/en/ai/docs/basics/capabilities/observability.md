---
sidebar_position: 7
title: "Running, Debugging & Observability"
---

From "run once" to "run in batch" to "see how it performs," the platform provides a complete running and observability chain.

## Three Ways to Run

An Agent can be run in three ways, serving the three stages of "tune one node, test the whole flow, serve real users":

| | Node Test Run | Agent Test Run | Agent Production Run |
|---|---|---|---|
| **Scope** | A single node | The entire flow | The published Agent |
| **Requires publishing** | No | No | Yes |
| **Entry** | Run button on the node | Full trial run inside the editor | Chat client / Marketplace |
| **Usage borne by** | The developer | The developer | Per attribution rules (see [Charged By](../plans)) |
| **Typical use** | Configure a node and try it once | Full-flow regression before launch | Real usage |

### 1. Node Test Run

- Supported by **processing nodes** (LLM, Agent, Tool, Code, Iteration, Loop, Parameter Extractor, etc.) — everything except pure routing/aggregation nodes such as IF Else and Branch Aggregator; whether a run button appears on the node is the source of truth
- **Trial-run immediately** after configuring each node instead of saving it all for the end — the problem is always in the segment you configured most recently
- Input parameter formats are parsed automatically, and single-node debugging supports complex array and object types (see "Trial Run Enhancements" below)

### 2. Agent Test Run (Full Trial Run)

- Run the entire flow inside the editor without publishing the app, verifying node chaining, branch routing, and fallback logic
- Before launch, prepare **normal / boundary / out-of-bounds** test cases per [Debugging Tips](../../tutorials/orchestration-debug) for a full regression
- After any prompt or flow change, do a full trial run first, then republish

### 3. Agent Production Run

- After publishing, the Agent is used for real in the chat client / Marketplace, passing through Guardrail and other compliance chains
- Usage is billed per attribution rules: when the user is a member of the Agent's Workspace, the developer pays; otherwise the user pays
- Every run is recorded in **Logs** and aggregated into the **Statistics** dashboard (see below)

> Usage accounting across the three modes: both test-run modes consume **the developer's own Workspace** quota ("you debug, you pay"); only production runs follow the charged-by attribution rules.

## Workflow GUI Runs & Batch Runs

- Workflows can be run directly in the **GUI**, without relying on API calls
- **Batch runs via CSV upload** are supported: one column per input variable, one row per run — ideal for batch evaluation and data processing

> Example: prepare a CSV of 50 test questions and run them in one batch to quickly assess the overall effect of a prompt change — far more efficient than trial-running one by one.

## Trial Run Enhancements

- **Automatic input parameter parsing**: input parameter formats are parsed automatically during trial runs, eliminating manual construction of test data structures and significantly speeding up debugging
- **Single-node debugging supports array and object**: complex-typed data can also be debugged at the single-node level, pairing well with the "configure a node, try it once" workflow in [Debugging Tips](../../tutorials/orchestration-debug)

## Logs

- View each Agent run's **inputs/outputs, execution path, and failure causes** — the first place to look when diagnosing production issues
- Routine practice after launch: periodically review real conversations in Logs and add bad cases as ❌ examples in your prompt (see Section 6 of [Prompt Writing Techniques](../../tutorials/prompt-writing))
- For customer-facing Agents, log retention is also a compliance requirement (see [Compliance Requirements](../../compliance/index))

## Statistics

![Statistics page: trend charts for six metrics (total conversations / active users / average interactions per conversation / average time to first token / token output speed / user satisfaction), time-range filter at top left, "Trace App Performance" entry at top right](./images/1.7.7-1-%E7%BB%9F%E8%AE%A1.png)

**Statistics** is the Agent's **data dashboard**, answering "how is my Agent doing?" It supports time-range filtering (e.g. "past quarter") and provides trend charts for six metrics:

| Metric | Question It Answers |
|--------|-------------|
| Total conversations | Is usage rising or falling? Which days peaked? |
| Active users | How many people are using it? |
| Average interactions per conversation | How many turns do users chat on average? How sticky is it? |
| Average time to first token | Is it responsive? Is the experience degrading? |
| Token output speed | Is generation speed stable? |
| User satisfaction | The trend of thumbs-up/thumbs-down feedback |

**How to make the most of the Statistics page**:

1. **Check daily during the first week after launch**: confirm real user usage matches expectations and catch anomalies early
2. **Compare before and after changes**: after a major prompt/flow change, watch the trends in conversation count, satisfaction, and latency to validate the change
3. **Statistics for trends, Logs for individual cases**: spot a metric anomaly on the Statistics page → go to Logs and find the failed records in the corresponding time window to locate the cause

## Trace App Performance (Third-Party Tracing)

> ⚠️ **Internal feature**: "Trace App Performance" is currently for internal use only and not yet available to external users.

The "**Trace App Performance**" entry at the top right of the Statistics page can send the **full execution context** of the app (LLM calls, context, prompts, HTTP requests, etc.) to a third-party tracing platform for more professional debugging and performance analysis:

![Opening the "Tracing" panel from the top right of the Statistics page: disabled by default, with the configurable provider list below](./images/1.7.7-2-%E8%BF%BD%E8%B8%AA%E5%85%A5%E5%8F%A3.png)

- **Disabled by default**: the tracing switch is off by default and can only be enabled after configuring a provider
- **Provider**: currently supports **Langfuse** (tracing, evaluation, prompt management, and metrics, for debugging and improving LLM applications)

![Tracing panel: disable switch, feature description, and the Langfuse provider configuration entry](./images/1.7.7-3-%E8%BF%BD%E8%B8%AA%E9%9D%A2%E6%9D%BF.png)

Click "Configure" for Langfuse and fill in the three required fields to complete the integration:

![Configure Langfuse dialog: Secret Key, Public Key, Host (default https://cloud.langfuse.com)](./images/1.7.7-4-Langfuse%E9%85%8D%E7%BD%AE.png)

| Field | Description |
|--------|------|
| Secret Key | The Langfuse project's Secret Key |
| Public Key | The Langfuse project's Public Key |
| Host | The Langfuse service address (e.g. `https://cloud.langfuse.com`, or a self-hosted address) |

> Note: tracing sends the app's execution context to a **third-party platform**; for production Agents involving customer data, assess data compliance before enabling (see [Compliance Requirements](../../compliance/index)).

## DSL Import Validation

When importing a DSL file into the canvas, the platform automatically **validates LLM availability** — if a DSL exported from another environment/account references a model unavailable in the current Workspace, you are warned at import time instead of hitting an error at runtime.

## Related Reading

- [Orchestration Patterns & Debugging Tips](../../tutorials/orchestration-debug) — standard debugging process and test case design
- [Workspace & Plans](../plans) — who bears the usage of trial runs and batch runs
- [Chatflow & Agentic Chat Settings](../chatflow-agenticchat-settings) — app-level configuration before publishing
