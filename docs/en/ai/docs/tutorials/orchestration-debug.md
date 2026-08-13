---
sidebar_position: 3
title: "Flow Orchestration Patterns and Debugging Techniques"
---

> Six reusable orchestration patterns + a standard debugging process. When building a new Agent, first check which pattern your requirement matches — don't start from a blank canvas.

## Six Common Orchestration Patterns

### Pattern 1: Direct Q&A (Minimal Chatflow)
```
Start ─▶ LLM ─▶ Answer
```
Suitable for: single-purpose Q&A assistants. Every Chatflow should first get this skeleton working before adding complexity.

### Pattern 2: Intent Routing (Standard for Customer Service)
```
Start ─▶ Question Classifier ─┬▶ Branch A (LLM knowledge Q&A) ─┐
                              ├▶ Branch B (Tool data lookup)   ─┼▶ Branch Aggregator ─▶ Answer
                              └▶ Branch C (fallback response)  ─┘
```
Suitable for: scenarios with diverse user question types. Use Question Classifier for semantic-level routing, and IF Else for field-level checks (e.g. "amount > 0").

### Pattern 3: Tool Augmentation (Fetch First, Then Answer)
```
Start ─▶ Tool / Http Request ─▶ LLM (answer based on the data) ─▶ Answer
```
Suitable for: answers requiring real-time data (quotes, announcements). Key point: **make the LLM answer only based on the data returned by the tool** — state explicitly in the prompt that "the data must come from the tool's response; do not fabricate."

### Pattern 4: Autonomous Agent (Let the Model Decide What to Call)
```
Start ─▶ Agent (with multiple tools attached) ─▶ Answer
```
Suitable for: scenarios with non-fixed task paths requiring multi-step reasoning. The Agent node uses the **Function Calling** paradigm: the model uses tools autonomously via function calls, looping until the task is complete. Note: the more autonomy, the more you need trial runs covering all kinds of inputs, paired with compliance guardrails.

### Pattern 5: Pipeline Processing (Standard for Workflow)
```
Start ─▶ Http Request (fetch data) ─▶ LLM (structured output) ─▶ Variables Transformer (formatting) ─▶ End
```
Suitable for: one-in-one-out tasks such as research report generation and content processing.

### Pattern 6: Batch Processing
```
Start ─▶ Iteration (parallel) [ sub-flow: LLM / Code ] ─▶ LLM (summarize) ─▶ End
```
Suitable for: processing a list item by item and then summarizing. For large volumes, enable Iteration's parallel mode and configure error handling so a single failed item doesn't drag down the whole run.

## Orchestration Principles

1. **Get the minimal chain working first, then add nodes section by section** — trial-run after each node you add, so problems are always located in the most recently added segment
2. **One node, one responsibility** — a single LLM node that classifies, generates, and formats is worse than splitting into classifier + generator + Transformer, each independently testable
3. **Every branch needs a fallback** — give the Question Classifier an "Other" category, make good use of the IF Else's Else branch, and never let any input hit a dead end
4. **Write comments on nodes** — in complex flows, each node's comment should state "what comes in, what it does, what goes out"; your teammates, and your future self three months from now, will thank you
5. **Control cost** — LLM/Agent nodes are the main cost source: use IF Else/Code instead of an LLM for decisions whenever possible; set the memory window to the minimum that suffices; estimate call counts for batch tasks

## Standard Debugging Process

### 1. Single-Node Trial Runs
Apart from pure routing/aggregation nodes such as IF Else and Branch Aggregator, processing nodes (LLM, Agent, Tool, Code, Iteration, Loop, Parameter Extractor, etc.) can be tested individually by clicking the run button on the node (whether the run button appears on the node is the definitive indicator). Trial-run each node right after configuring it — don't save it all up for the end.

### 2. Test Case Design for Full-Flow Testing
Prepare at least three types of test cases for every Agent:

| Case type | Example | What it verifies |
|-----------|---------|------------------|
| Normal input | "What is the P/E ratio?" | The main flow works correctly |
| Edge-case input | Empty message, extremely long text, mixed Chinese/English, emoji | The flow doesn't error out and has fallbacks |
| Out-of-bounds input | "Recommend me a stock that's guaranteed to rise" | Compliance guardrails take effect |

### 3. Common Fault Localization Table

| Symptom | What to check first |
|---------|---------------------|
| Flow didn't take the expected branch | Trial-run the classifier/condition node to see the classification result or condition value; check whether the category descriptions are distinguishable |
| LLM output is unstable | Does the prompt have explicit format constraints? If you need precise fields, switch to structured output |
| Http Request fails | Trial-run inside the node first to check the status code; check the URL, headers, authentication, and parameters |
| Some Iteration elements fail | Check the error handling configuration; trial-run the sub-flow separately with the failed element's data |
| The answer includes content it shouldn't | Add the bad case as a ❌ example in the System Prompt; add rule-based validation downstream if necessary |

### 4. Pre-Release Regression
Whenever the prompt or the flow changes, run all three types of test cases in full before publishing, to avoid "fixing one thing and breaking another."
