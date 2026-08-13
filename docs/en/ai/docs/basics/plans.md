---
sidebar_position: 5
title: "Workspace & Plans"
---

> This article answers three questions: **where do my things live (Workspace), what can I use and how much (plan), and who pays for the usage (Charged By)**. Once you understand this system, every "why can't I see / use this feature, or why was I blocked" question on the platform becomes self-explanatory.

## The Big Picture: One-Sentence Version

```
Workspace (the container) ── bound to → Plan (feature scope + usage quota)
```

- **Workspace = where everything happens**: your Agents, knowledge bases, and usage are all scoped to it
- **Plan = what you can use + how much**: determines the feature scope and usage quota of the current Workspace

Let's break it down layer by layer.

## Role: Who You Are

Roles describe a user's identity origin and usage context. The platform has two:

| Role | Description | Typical Usage |
|------|------|---------|
| **Community user** | Uses the platform as an individual | Personal creation, trial, sharing |
| **Official user** | Platform staff | Providing official services, operations, and support |

Note: roles only distinguish **identity background**—they do not directly determine feature scope or usage limits. Those are decided by the plan of the Workspace you are in.

## Workspace: Where Everything Happens

A Workspace is the platform's basic unit for containing usage activity:

- Each user belongs to and participates in **one or more** Workspaces
- All Agents, Workflows, run activity, and **usage consumption** occur within a Workspace
- The Workspace is the **boundary** within which plans and usage take effect

### Key Workspace Rules

| # | Rule | Description |
|---|------|------|
| 1 | One-to-one binding | A Workspace is bound to **exactly one plan** at any given time |
| 2 | Community Workspaces are self-service | Regular users can only create community Workspaces; the Starter plan is activated automatically at registration |
| 3 | Official Workspaces are platform-created | Created or authorized by the platform; regular users cannot create them |
| 4 | Capabilities follow the Workspace | The same person sees feature entry points change automatically across Workspaces |
| 5 | Only available features are shown | Users only perceive "what the current Workspace can do"; unavailable features have their entry points hidden entirely—no need to understand the underlying plan details |
| 6 | Exactly one Owner | Each Workspace has **exactly one Owner**; the number of Editors and Viewers depends on the **plan's member count limit** |

### Workspace Member Roles

| Member Role | Count | Permissions |
|---------|------|------|
| **Owner** | **Only one** per Workspace | Full permissions, and the **only** role that can perform commercial operations such as subscription purchase/upgrade/downgrade/unsubscribe (see 4.3) |
| **Editor** | Limited by plan | Create and edit Agents, knowledge bases, and other resources in the Workspace |
| **Viewer** | Limited by plan | View and use resources in the Workspace; cannot edit |

Note the distinction: the roles in Section 2 (community/official user) describe **platform identity**, while Owner/Editor/Viewer here are member permissions **within a single Workspace**. The two are independent.

## Plan: What You Can Use, and How Much

A plan is a **commercial object** on the platform that can be purchased or granted, determining the feature scope and usage quota of the current Workspace.

### The Three Plans

| Plan | Type | Positioning | Price (USD baseline)* | How to Get It |
|------|------|------|--------------|---------|
| **Starter** | Free | Personal starter | $0 | Activated automatically at registration |
| **Pro** | Paid | Personal professional | ~$20/month | Monthly recurring subscription |
| **Premium** | Paid | Advanced | ~$100/month | Monthly recurring subscription |

> \* Prices may be **adjusted dynamically**; actual charges prevail.

### Plan Benefits Quick Reference

| Benefit | Starter | Pro | Premium |
|------|---------|-----|---------|
| Monthly usage quota | Base quota | Higher quota | Highest quota (see the plan page's live display for specifics) |
| Agent creation (Agentic Chat / Chatflow) | ✓ | ✓ | ✓ |
| Built-in tools | Partial | Full | Full |
| Third-party MCP Servers | ✗ | ✗ | ✓ |
| OpenAPI tools (self-configured) | ✓ | ✓ | ✓ |
| Custom Skill count | 3 | 20 | 100 |
| Official built-in Skills (earnings analysis, etc.) | ✗ | ✓ | ✓ |
| Knowledge base capacity | 50MB | 5GB | 20GB |
| Publish Agents to the Marketplace | ✗ | ✓ (requires security scan) | ✓ (requires security scan) |
| Use/Fork Marketplace Agents | ✓ | ✓ | ✓ |

> **⚠️ Actual plan benefits prevail**: this help documentation may lag behind updates, and the pricing and benefits in this section may differ **significantly** from actual benefits—the in-product plan page's live display is always authoritative. When operations adjusts plan configurations, existing users are unaffected within their current billing cycle.

### Subscription Rules Essentials

- **Monthly recurring subscription only**—no single-month purchases (consistent with mainstream AI products)
- Payment channels: iOS uses Apple IAP; Android/Web uses Stripe. A Workspace can have only one active subscription channel at a time
- **Only the Workspace Owner** can perform purchase / upgrade / downgrade / unsubscribe operations
- **Upgrade**: takes effect immediately, with the price difference charged per channel rules
- **Downgrade**: takes effect the following month and can be revoked before then; the current usage cycle keeps the original quota, and the next cycle follows the new plan
- **Unsubscribe**: auto-renewal can be restored before expiry; after expiry, the Workspace falls back to Starter
- The currency is locked at first purchase; for regional pricing, see [1.6 Regional Services](regions)

## Usage: How It's Metered and Deducted

> **Usage is shared across Longbridge AI products**: the same user's quota **applies to both the official Chatbot (the LongbridgeAI chat client) and the Agent Platform**—chatting in the Chatbot and running Agents on the platform draw from the same quota.

### What Consumes Usage

The system collects five billing units in real time and converts them all to USD:

| Billing Unit | How It's Metered |
|---------|---------|
| LLM calls | By input/output token counts returned by the model |
| Embedding (knowledge base vectorization) | By tokens processed |
| Rerank | By tokens processed |
| Sandbox runs (Code node, etc.) | By runtime, rounded up to the minute |
| Search/crawler tools | By call count (only specific search and crawler tools are billed; OpenAPI tools and the like are not) |

### How Quota Is Released: Monthly Total + Weekly Rolling Release

- **Monthly total quota**: each billing cycle (month) allocates a total quota; it resets to zero at cycle end and is re-allocated in the new cycle—**no carryover**
- **Weekly rolling release**: the monthly quota is released on a rolling 7-day basis, so weekly availability ≈ monthly total ÷ 4. If you use up the week's quota, you must wait for the next rolling week; unused weekly quota **does not roll over** either
- The usage cycle rolls independently and is unrelated to the subscription cycle (renewal date)
- Beyond plan quota, you may also hold a **benefit card** (a time-limited boost to a higher tier's feature benefits plus stacked usage, without changing your subscription)—see [1.8 HK/SG Benefit Cards](hksg-benefits)

> Design intent: prevent burning a whole month's quota in a day, keeping the consumption pace under control.

### What Happens When You Exceed Quota

Once you exceed quota, actions are blocked. Whether advance usage warnings (e.g. 80%/90% alerts) are provided **depends on the actual live behavior**:

| Scenario | Blocking Behavior |
|------|---------|
| Runs such as conversations/Workflows/test runs | Remaining quota is checked before running; if insufficient, the run is blocked with a prompt to upgrade |
| Knowledge base over capacity | New files blocked; over-limit files are marked **disabled** (excluded from retrieval) **starting from the oldest by upload time**, not auto-deleted—delete files or upgrade to restore |
| Skill count over limit | Creating new Skills is blocked, with a prompt to delete existing ones or upgrade; if the overage was caused by a benefit card expiring, existing content is kept—you just can't add more (see [1.8](hksg-benefits)) |

### Who Pays for Usage (Charged By)

Whose account a run's consumption is charged to depends on the Agent's ownership and your membership relation to that Workspace:

```
When user A (belonging to Workspace A) uses an Agent:
├─ Agent belongs to Workspace A (your own)          → Workspace A pays
├─ Agent belongs to Workspace B, A is a B member    → Workspace B pays (developer pays)
├─ Agent belongs to Workspace B, A is not a member  → Workspace A pays (user pays)
└─ System actions (AI-assisted creation, compliance checks, etc.) → Platform pays; no user quota is deducted
```

Some concrete scenarios:

| Scenario | Who Pays |
|------|--------|
| Production conversation runs | Per the ownership rules above |
| Full Agent test runs / node test runs | The developer (you debug, you pay) |
| Context compression, long-term memory reads/writes | Same as conversation runs |
| AI-assisted Agent creation, compliance checks | The platform |

### Configuration Time vs. Runtime: An Easy Point of Confusion

**A user's plan only affects usage quota—it does not affect the capabilities an Agent already has.**

| Phase | What's Checked | What It Determines |
|------|---------|---------|
| **Configuration time** (developer building the Agent) | The plan of the Agent's Workspace | Which tools, Skills, and MCPs the developer can select in the editor |
| **Runtime** (user using the Agent) | The Agent's configured capabilities + content-layer authentication | The user gets everything directly; capabilities are inherited from the Agent's Workspace and not limited by the user's own plan |

Example: if a Premium developer configures a third-party MCP tool in an Agent, a Starter user using that Agent **can still use** the tool—they just consume their own Workspace's quota (if the user-pays rule applies).

## Model Tiers and Usage

- Models come in two tiers: **Mainstream** and **SOTA**. SOTA models are clearly labeled and consume more per unit
- Chatflow/Workflow supports **node-level model configuration**: use Mainstream models for simple tasks (classification, formatting) and SOTA for core reasoning—the most effective way to control usage
- Some models are restricted by vendor terms and available only to platform officials; they will not appear in the model selector on regular plans

## FAQ

| Question | Answer |
|------|------|
| Why can't I see a certain tool in the editor? | The current Workspace's plan doesn't include it (e.g. third-party MCP requires Premium) |
| Why does my colleague have a feature I don't? | You are in different Workspaces; capabilities follow the Workspace |
| I still have quota but my run was blocked? | You may have used up the current rolling 7-day quota; the monthly balance is released in the next rolling week |
| Whose quota is deducted when I use someone's Marketplace Agent? | If you are not a member of their Workspace, yours (user pays) |
| Are test runs billed? | Yes—they consume the developer's own Workspace quota; but AI-assisted creation and compliance checks are covered by the platform |
| Want higher quota / more features? | The Workspace Owner upgrades on the plan page; it takes effect immediately |
