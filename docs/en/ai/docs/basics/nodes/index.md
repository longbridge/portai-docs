---
sidebar_position: 0
title: "Node Reference Manual"
---

The platform currently provides **15 nodes**. This manual devotes one document to each node, numbered in the recommended learning order. We suggest mastering the **basic nodes + LLM** first to get a minimal flow running, then learning the remaining nodes as needed.

> Nodes are used for canvas orchestration in **Chatflow / Workflow**; **Agentic Chat** (a simplified version of Chatflow) is powered under the hood by a fixed **Start → Agent → Answer** three-node chain, with the canvas hidden and no manual orchestration required—see [1.1 Application Types](../introduction). Once you have learned the Start, Agent, and Answer nodes, you will also understand how Agentic Chat works.

## Node Index

### Basic Nodes (Flow Entry and Exit)

| # | Node | Name | One-line Description | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.1 | [Start](start) | Start | Flow entry point; initializes context and custom variables | ✓ | ✓ |
| 1.4.2 | [Answer](answer) | Answer | Outputs the final answer to the chat window; the terminal node of a Chatflow | ✓ | ✗ |
| 1.4.3 | [End](end) | End | Outputs the final result in JSON or other formats; the terminal node of a Workflow | ✗ | ✓ |

### AI Nodes (LLM Capabilities)

| # | Node | Name | One-line Description | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.4 | [LLM](llm) | LLM | Core node: text generation, multimodality, memory, structured output | ✓ | ✓ |
| 1.4.5 | [Agent](agent) | Agent | Reasons autonomously and calls tools (Function Calling mode, looping until the task is complete) | ✓ | ✓ |
| 1.4.6 | [Question Classifier](question-classifier) | Question Classifier | Classifies user question intent; classification results drive downstream branches | ✓ | ✓ |

### Logic Orchestration Nodes (Branching and Loops)

| # | Node | Name | One-line Description | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.7 | [IF Else](if-else) | IF/ELSE | Routes the flow to different branches based on conditions (operators such as contains / is / is empty) | ✓ | ✓ |
| 1.4.8 | [Branch Aggregator](branch-aggregator) | Branch Aggregator | Aggregates output variables from multiple branches into a single result | ✓ | ✓ |
| 1.4.9 | [Iteration](iteration) | Iteration | Executes the same sub-flow for each item in a list (or in parallel), with error handling support | ✓ | ✓ |
| 1.4.10 | [Loop](loop) | Loop | Executes repeatedly by count or by condition; contains a special **Exit Loop** node | ✓ | ✓ |

### Data Processing Nodes (Variables and Code)

| # | Node | Name | One-line Description | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.11 | [Code](code) | Code | Runs custom Python / JavaScript to implement business logic | ✓ | ✓ |
| 1.4.12 | [Variables Transformer](variables-transformer) | Variables Transformer | Uses Jinja2 templates to format, type-convert, merge, and split variables | ✓ | ✓ |
| 1.4.13 | [Parameter Extractor](parameter-extractor) | Parameter Extractor | Uses an LLM to extract structured parameters from text (parameter definitions can be imported from tools) | ✓ | ✓ |

### External Extension Nodes (Connecting to the Outside World)

| # | Node | Name | One-line Description | Chatflow | Workflow |
|---|------|--------|-----------|:---:|:---:|
| 1.4.14 | [Tool](tools) | Tools | Calls tools inside and outside Longbridge; requires authorization before use | ✓ | ✓ |
| 1.4.15 | [Http Request](http-request) | HTTP Request | Sends GET/POST/PUT/DELETE/PATCH requests to access external APIs | ✓ | ✓ |

## Common Needs → Node Selection Quick Reference

| I want to... | Use this node |
|-------|-----------|
| Have the AI generate a response | LLM |
| Have the AI output well-formed JSON for downstream use | LLM (with structured output enabled) |
| Route the flow by user intent | Question Classifier (semantic classification) or IF Else (rule-based) |
| Let the AI decide on its own which tools to call | Agent |
| Query market data or call internal services | Tool (integrated tools) or Http Request (any API) |
| Process a list item by item | Iteration (with a definite list) or Loop (repeat by condition) |
| Concatenate / convert variable formats | Variables Transformer; use Code for complex logic |
| Merge results from multiple branches | Branch Aggregator |

## How to Read the Node Documentation

Every node document follows the same structure: **Node Overview** (supported scenarios / test run support) → **Feature Description** → **Node Display Content** → **Node Edit Panel** (item-by-item configuration notes) → usage examples and considerations. When you run into a question while configuring a node, just look up the corresponding section—there is no need to read the whole document.
