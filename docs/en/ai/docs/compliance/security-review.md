---
sidebar_position: 1
title: "Security Review"
---

> Before an Agent is published (especially before being listed on the marketplace), it goes through the platform's **security review**. Agents that fail the review cannot be published or listed; Agents found in violation after listing will be delisted by the platform. This page explains what is reviewed and what will not pass.

## What Is Reviewed

An Agent's **outward-facing presentation and behavior definitions** are all within scope:

| Review Target | Review Focus |
|---------|-----------|
| **Name** | Whether it contains violating, misleading, or impersonating content (e.g. "Stock-Picking Master", "Sure-Profit Treasure") |
| **Avatar** | Whether it contains violating imagery, or impersonates the platform, regulators, or other brands |
| **Description / Opening message** | Whether the publicly claimed capabilities are non-compliant (e.g. promising returns, providing investment advice) |
| **Prompt (System Prompt)** | Whether the behavior defined by the prompt is non-compliant, or attempts to bypass the platform's compliance guardrails |

- The review takes place at the **publish / marketplace listing** stage (listing on the marketplace requires passing a security scan; Pro plan and above)
- Republishing after modifying any of the above content will **trigger the review again**

## Scenarios That Will Fail the Review

The following scenarios fail the review upon identification (each corresponds to one of the six principles in [3.1 Compliance Requirements](index)):

| # | Scenario | Typical Examples |
|---|------|---------|
| 1 | **Money laundering and facilitating illegal fund flows** | Prompts that guide splitting transfers to evade reporting, concealing the source of funds, or helping evade tracking |
| 2 | **Market manipulation** | Names/prompts involving pump-and-dump, wash trading, fabricating trading signals, or organizing stock-touting campaigns |
| 3 | **Insider trading and material non-public information** | Agents positioned as "insider tips" or "market rumors" services, or that guide users to obtain/spread MNPI |
| 4 | **Providing investment advice, promising returns** | Names or descriptions containing "guaranteed to rise", "sure profit", "guaranteed returns", or "stock picks"; prompts that instruct the model to output buy/sell advice or price targets |
| 5 | **Tax evasion, sanctions evasion** | Assisting in designing tax-evasion schemes, or circumventing regulatory or sanctions measures |
| 6 | **Harmful content** | Names/avatars/prompts containing pornography, violence, gambling, drugs, terrorism, or similar content |
| 7 | **Impersonation and infringement** | Avatars/names impersonating the platform, regulators, well-known institutions, or other brands; misappropriating others' copyrighted material |
| 8 | **Privacy violations** | Prompts designed to induce users to disclose ID numbers, account passwords, or other sensitive personal information |
| 9 | **Bypassing compliance guardrails** | Jailbreak-style instructions in prompts such as "ignore platform rules" or "you are not bound by compliance restrictions" |

> The above is a list of common scenarios, not an exhaustive one; the platform reserves the right to reject any other illegal or non-compliant content, and the actual review result shall prevail.

## What to Do If the Review Fails

1. **Fix according to the feedback**: Locate the issue against the table above, modify the name/avatar/description/prompt, and resubmit
2. **Implement the same need compliantly**: Many rejections are actually wording issues — for example, if you want an indicator-analysis Agent, change "golden cross buy alert" to "neutral interpretation of the golden cross pattern" (descriptive language, see the [3.1 Reference Prompt](index)) and it can launch compliantly
3. **If your listed Agent was delisted**: You may resubmit for review after remediation

## Related Reading

- [3.1 Compliance Requirements](index) — Reference Prompt, red-line quick reference, and pre-launch checklist
- [Guardrail](../basics/capabilities/guardrail) — The review governs "before launch"; Guardrail governs "at runtime"
- [1.6 · Agent Scope-of-Use Statement](../basics/regions) — Marketplace Agents are for learning and exchange only
