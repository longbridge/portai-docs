---
sidebar_position: 4
title: "Guardrail"
---

> **Strongly recommended** for customer-facing Agents, and included in the [Pre-launch Compliance Checklist](../../compliance/index).

## What It Is

The platform's built-in **mechanism-level compliance interception** capability, which automatically identifies and handles risky content on both the input and output sides. Together with the compliance red lines in the System Prompt (model-level constraints), it forms double insurance: prompt constraints tell the model "how to speak," while Guardrail ensures out-of-bounds content "can't get out."

## The Four Guardrails

### Input Side (Chatflow Input Node)

| Guardrail | Behavior When Enabled |
|------|-------------|
| **PII Masking** | Automatically identifies personally identifiable information (PII) in user input and replaces it with asterisks (*); the hidden information is no longer shown in subsequent conversation |
| **Block Harmful Content** | Identifies content involving hate, harassment, self-harm, violence, sexual content, minors, illegal activity, and other high-risk content; upon detection, the response is **blocked** and no further processing or results are returned |
| **Block Harmful Financial Content** | Based on laws, regulations, regulatory requirements, and platform compliance rules, identifies inputs seeking illegal trading advice — including money laundering (concealing fund sources, layering, structuring transactions), tax evasion, securities fraud, insider trading, market manipulation, terrorist financing or sanctions evasion, trading with stolen/forged identity accounts, and other financial crimes — **blocking the response and terminating further processing** |

### Output Side (LLM / Agent Output Nodes)

| Guardrail | Behavior When Enabled |
|------|-------------|
| **Output Legality & Compliance Check** | Validates output **in real time**; when illegal content or content violating financial compliance requirements is detected, output **stops immediately and generated content is cleared** |

## How to Use

- Input side: turn on the corresponding switches in the Chatflow input node configuration
- Output side: turn on "Output Legality & Compliance Check" in the output configuration of the LLM / Agent node

## Division of Labor with Prompt Guardrails

| | System Prompt Red Lines | Guardrail |
|---|---|---|
| Layer | Model level (guides the model not to say it) | Mechanism level (intercepts it even if said) |
| Coverage | Tone, phrasing, business rules | PII, high-risk content, financial crime, output compliance |
| Failure scenarios | Prompt gets bypassed, model goes off track | Unaffected by prompts |

**Conclusion: it is not either/or — customer-facing Agents should enable both.** For writing prompt red lines, see Section 3 of [2.1 Prompt Writing Tips](../../tutorials/prompt-writing).

## Notes

1. Guardrail intercepts **clearly high-risk content**; business-level compliance such as "do not provide investment advice" still relies on prompts and flow design (e.g. fixed refusal scripts) — see [03 Compliance Requirements](../../compliance/index)
2. When testing before launch, run a pass of boundary-crossing cases (attempts to induce violations, inputs containing PII) to confirm interception works — see the [Pre-launch Checklist](../../compliance/index)
