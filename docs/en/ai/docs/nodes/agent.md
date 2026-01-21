# Agent Node

## What is it?

The Agent node is an **intelligent execution node with autonomous decision-making capabilities**.
It can not only call large models to generate content but also **automatically decide whether to use tools, how to use them, and whether multi-step reasoning is required** based on the current task goal.

If we say:

* LLM Node = "One-time thinking"
* Tool Node = "Executing a specific action"

Then:

> **Agent Node = An agent that can plan, judge, and act**

## What can you do with it?

#### 1. Execute Complex, Multi-step Tasks

The Agent node is suitable for handling **tasks that cannot be completed in a single step**, such as:

* Analyzing the problem first
* Then deciding whether to call a tool
* Continuing to think based on the tool's results
* Finally producing the output

The entire process is completed automatically by the Agent.

---

#### 2. Automatically Decide Whether to Call Tools

You don't need to explicitly write "if calling tool A, then do this."

The Agent will:

* Understand the current task goal
* Judge whether tool support is needed
* Automatically select the appropriate tool
* Use the results returned by the tool to continue execution

---

#### 3. Autonomous Decision-making in Uncertain Scenarios

The Agent is particularly suitable for:

* Unstable user inputs
* Non-fixed task paths
* Results depending on intermediate judgments

It can dynamically adjust strategies during execution rather than strictly following a preset path.

## How an Agent Works (For Understanding)

When running, the Agent node will:

1. Understand the goals and rules you set
2. Think based on the current context
3. Decide on the next action (continue thinking / call a tool / output result)
4. Repeat the above process until the task is complete

You only need to focus on **goals and boundaries**, not every step.

## What Do You Need to Configure?

#### 1. Task Goal (Most Important)

Clearly tell the Agent:

* What it needs to accomplish
* What the success criteria are

Example:

> "Help the user find the most appropriate solution and provide a clear explanation."

---

#### 2. Available Tools

You need to specify:

* Which tools the Agent can use
* What each tool can do

The Agent **can only use tools you have authorized** and will not exceed that scope.

---

#### 3. Behavioral Constraints (Optional but Strongly Recommended)

You can limit the Agent:

* Whether it must return structured results
* Whether it can call tools multiple times
* Whether it needs to provide an explanation upon failure

These constraints can significantly improve stability.

## Output Results

* The Agent node will output:

  * The final execution result
  * Or summarized response content
* The output can be directly connected to:

  * Answer node (ChatFlow)
  * End node (Workflow)

## Usage Rules

* The Agent node usually serves as the **core execution node** in a workflow
* A workflow can have multiple Agent nodes, but too many are not recommended
* An Agent node can replace:

  * Multiple LLM nodes
  * Multiple combinations of conditions + tools

## Usage Recommendations (Very Important)

* **The more complex the task, the clearer the goal should be written**
* Do not let an Agent take on too many responsibilities at once
* In critical business workflows, it is recommended to:

  * Limit the number of tools
  * Limit the maximum number of execution steps
* For predictable tasks, prioritize using standard nodes and save the Agent for "complex problems"

## Typical Scenarios

* Intelligent assistants (requiring reasoning + tools)
* Automated problem-solving workflows
* Multi-step information query and organization
* Complex business processing with uncertain paths

## When Should You Not Use an Agent?

* Tasks that are very simple and certain
* Fixed workflow paths
* Extremely high requirements for execution stability

Such scenarios are more suitable for:

* LLM node + Tool node
* Explicitly controlled flows using conditional judgment nodes

## Agent Node Summary

> **An Agent node is not a "stronger LLM node,"
> but a "freer, yet more constraint-requiring intelligent execution unit."**

---
Below is a **comparison guide for users**, specifically addressing a core question:
**When to use an Agent node vs. just an LLM node**

The tone is a **usage guide + decision reference**, not a PRD, and can be placed directly in the documentation.


## When to Choose an Agent Node vs. an LLM Node?

Both Agent nodes and LLM nodes rely on large model capabilities, but the scenarios they are suitable for are **completely different**.
Choosing the right node can significantly improve the stability, controllability, and execution efficiency of your workflow.

## Difference in a Nutshell

* **LLM Node**:
  *"I already know what I want the model to do; I just need it to generate or analyze a result once."*

* **Agent Node**:
  *"I only know the goal, but I don't know which steps to take in between; I need it to decide for itself."*

## Capability Comparison at a Glance

| Comparison Dimension | LLM Node | Agent Node |
| :--- | :--- | :--- |
| Execution Method | Single call | Multi-step autonomous execution |
| Autonomous Decision-making | No | Yes |
| Automatic Tool Calling | Yes | Yes |
| Execution Path Planning | No | Yes |
| Predictability of Execution | High | Relatively lower |
| Configuration Complexity | Low | High |
| Suitable Workflow Type | Deterministic workflow | Non-deterministic workflow |

## When to Choose an LLM Node?

When your task meets the following characteristics, **prioritize choosing an LLM node**:

#### Suitable Scenarios

* Clear task steps and fixed paths
* Only requires the model to perform reasoning or generation once
* No need for the model to decide whether to call tools
* High requirements for output stability

#### Common Uses

* Q&A response generation
* Text summarization, rewriting
* Classification, information extraction
* Generating content in a fixed format

#### Example

> "Based on the user's input, summarize three key points and return them."

This scenario does not require autonomous planning; an LLM node is sufficient.

## When to Choose an Agent Node?

When your task has the following characteristics, **you should choose an Agent node**:

#### Suitable Scenarios

* Non-fixed task steps
* Decision to call a tool needs to be made temporarily
* Requires multiple rounds of thinking and trying
* Execution path depends on intermediate results

#### Common Uses

* Complex problem solving
* Intelligent assistants
* Multi-step information query and integration
* Tasks requiring "thinking while doing"

#### Example

> "Based on the user's question, judge whether data needs to be queried, call a tool if necessary, and then provide a final conclusion."

In this case, hardcoding the workflow in advance is difficult; an Agent is more appropriate.

## Selection Recommendations (Very Important)

#### Recommended Priority

1. **If it can be solved with an LLM node, do not use an Agent**
2. **Only introduce an Agent when the workflow is unpredictable**

The reasons are:

* LLM is more stable
* Agent is more flexible but also less controllable

## Common Misconceptions

**Misconception 1: Agent is stronger than LLM and should be used more**
In fact, Agent is "freer," not "simpler."

**Misconception 2: Complex workflows must use an Agent**
Many complex workflows are actually more controllable using multiple LLMs + conditions + tools.

**Misconception 3: Agent can replace all nodes**
Agent is more suitable for "decision-making tasks" rather than "rule-based tasks."

## Quick Reference (Just remember this)

* **For stability, controllability, and certain results** → Use **LLM Node**
* **For flexibility, autonomous judgment, and multi-step execution** → Use **Agent Node**
