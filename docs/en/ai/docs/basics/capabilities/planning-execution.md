---
sidebar_position: 6
title: "Planning & Execution"
---

Complex tasks have three big pain points — no structure, no control, and results that aren't directly usable — and the platform solves each with a dedicated capability.

## Agent Todo Planning

**Solves: complex tasks lacking structure.**

- **Planning node**: upgraded from the tool selector node; with "Plan To-dos" enabled, it generates a task plan
- **Agent node**: with planning enabled, it automatically produces a **To-do list** and executes item by item according to the plan; at runtime you can watch the Agent progress through the plan
- Suited to multi-step, complex problems that need decomposition, making execution organized and trackable

## Human in the Loop

**Solves: fully automatic execution being uncontrollable.**

Previously, an Agent in fully automatic mode ran straight to the end — mid-run deviations were only discovered after completion, making correction costly. Human in the Loop mode lets the AI **proactively pause and confirm with the user** during execution:

- **Human confirmation at key steps**: pause and wait for explicit authorization before high-risk operations — such as confirming investment risk level, modifying critical data, or tool calls involving privacy permissions — avoiding irreversible mistakes
- **Controllable process**: you can step in and adjust direction at any time during execution instead of only seeing the final result
- **Higher trust**: confirmation steps are embedded in the execution flow, closing the loop between human and machine judgment, and delivering more trustworthy results the first time in sensitive business scenarios

> Recommendation for financial scenarios: for any flow involving write operations on account data or sending content externally, prefer HITL mode — consistent with the principle of [Staying Within the Execution-Only Positioning](../../compliance/index) that "AI does not make decisions for the customer."

## Agent Answer Mode

**Solves: answers that are merely "thought through" but not directly usable.**

Agent answer mode **organizes the answer around the goal and decomposes the task**, rather than only outputting a linear chain of reasoning:

- **Output form**: task-oriented structures such as steps / plans / checklists, delivering directly actionable results with less rework
- **Proactive completion**: proactively fills in context and key tasks, so complex questions are resolved in one shot without multiple rounds of follow-up

> Note: the "Deep Thinking mode" that previously coexisted with it **has been retired**; everything is now unified under Agent answer mode.

## How the Three Relate

```
Agent answer mode  → determines "what the output looks like" (task-oriented structure)
Todo planning      → determines "how the process runs" (execute per checklist)
Human in the Loop  → determines "which steps need human sign-off" (pause at key points)
```

For complex and sensitive tasks, all three can be stacked: planned decomposition + confirmation at key steps + structured output.

## Related Reading

- [Agent Node Documentation](../nodes/agent) — where the to-do and human-interaction switches are configured
