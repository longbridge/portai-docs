---
sidebar_position: 1
---

# Skill Overview

A Skill is a reusable capability unit. You can encapsulate a complete task-handling logic — including role definition, execution steps, required tools, and reference materials — into a Skill, then invoke it across one or more Agents.

Compared to writing all instructions directly in the Agent's prompt, the advantage of Skills lies in reusability: the same logic only needs to be defined once, can be used across Agents, and is easier to maintain and iterate independently.

## Typical Use Cases

Here are some common Skill use cases:

**Financial Analysis**: Encapsulate a framework for interpreting financial reports — including comparing actual results against analyst expectations, breaking down revenue structure, and assessing earnings quality. Any Agent that needs to analyze financials can mount this Skill directly, without rewriting the analysis logic.

**Technical Analysis**: Define a standardized technical indicator workflow covering moving average trends, support/resistance levels, and MACD/RSI logic, giving Agents consistent technical analysis capabilities.

**Data Visualization**: Encapsulate chart generation logic and formatting standards, so Agents automatically invoke the correct visualization tools and output formats when users request charts.

## Skill Components

A complete Skill consists of the following parts:

| Component                 | Required | Description                                                                                                       |
| ------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| SKILL.md                  | Required | Core definition file containing the Skill's name, description, and execution logic                                |
| Name (name)               | Required | Unique identifier for the Skill; only lowercase letters, numbers, and hyphens; max 64 characters                  |
| Description (description) | Required | Describes the Skill's function and applicable scenarios, used by the model to determine when to invoke it         |
| Tools (tools)             | Optional | Modules that give the Skill the ability to call external capabilities, including built-in tools and OpenAPI tools |
| References (references)   | Optional | Background materials, rule documents, or configuration files accessible during Skill execution                    |

## The Role of SKILL.md

SKILL.md is the core of a Skill. It uses Markdown to define the model's behavioral guidelines when executing the Skill: who the role is, what workflow to follow, and how to respond in different situations.

The SKILL.md file must begin with a YAML frontmatter block declaring the Skill's name and description:

```
---
name: your-skill-name
description: Describe the Skill's function and applicable scenarios
---

# Skill Title

## Role Definition
...

## Execution Workflow
...
```

## Using Skills in Agents

Skills are mounted through the Skills section of an Agent node. In the Agent configuration panel, click the "+" on the right side of the Skills section and select the Skill to mount.

Agents support two mounting modes:

**Fixed Skill**

Specifies a particular Skill that is always invoked whenever the Agent runs. Suitable for Agents with a single responsibility and fixed task type.

**Dynamic Skill**

Dynamically specifies a Skill via a variable value, with the Skill selection determined by runtime context. Suitable for scenarios that require switching between different Skills based on user input or workflow state — for example, invoking different strategy Skills based on the user's selected analysis style.
