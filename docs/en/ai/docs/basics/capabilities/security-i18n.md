---
sidebar_position: 8
title: "Security Verification & Localization"
---

## Trading Password Verification

**What it is**: when a flow contains tools that **access user asset data** (account information, positions, P&L, etc.), running the Workflow or chatting with such a Chatflow automatically pops up a **trading password verification dialog**; asset data is returned only after verification passes.

**What it means for builders**:

- Authentication is handled uniformly by the platform — **no extra development required**, and both Web and App are already adapted
- Tools requiring user authentication in Chatflow are **available on all plans**; authentication is independent of plan tier, and users simply complete authorization on demand at runtime
- Workflow is an automated-run scenario and cannot complete interactive authentication at runtime, so the Workflow editor **does not show tools that require user authentication**

**Compliance significance**: asset data is sensitive data, and trading password verification guarantees that "data is only given to the identity-verified owner" — it is also the prerequisite for using the account/positions/P&L MCP tools (see [1.7.10 Model & Tool Ecosystem](model-tool-ecosystem)).

## Automatic Simplified/Traditional Conversion for Answer Output

**What it is**: with **Chinese Simplified/Traditional conversion** enabled in the Chatflow canvas backend, the content output by the Answer node is automatically converted between Simplified and Traditional Chinese based on **the user's system language**.

**Why it matters**: the platform serves users across Hong Kong, Singapore, and other regions (see [1.6 Regional Service Notes](../regions)); once enabled, there is no need to maintain two sets of prompts or two Agents for Simplified and Traditional — one flow adapts automatically.

**Recommendation**: enable it by default for Chatflows targeting HK users; after enabling, test the output once under each of the Simplified and Traditional system languages.

## Related Reading

- [Answer Node Documentation](../nodes/answer)
- [Data Usage & Privacy Restrictions](../../compliance/index) — boundaries for using asset data
