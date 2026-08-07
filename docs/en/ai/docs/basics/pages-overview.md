---
sidebar_position: 2
title: "Main Pages Overview"
---

> This article walks you through the platform's 8 main pages: what each page is for, where to find it, and the common operations on it. Use the screenshots to quickly build an overall picture of the platform; for detailed rules, see each page's dedicated documentation.

## 1. Agent List

![Agent list](./images/1.2-1-Agent%E5%88%97%E8%A1%A8.png)

The management entry point for all Agents in the current Workspace:

- View all Agents you have access to and their status (draft / published)
- Search and filter to locate a target Agent
- Management operations such as creating a new Agent, entering the editor, duplicating, and deleting
- Note: Agents and the list contents are **scoped to the Workspace**—switching Workspaces changes the list accordingly (see [1.5](plans))

## 2. Create Agent

![Create Agent](./images/1.2-2-%E5%88%9B%E5%BB%BAAgent.png)

The creation entry supports two modes; choose based on your needs:

| Mode | How You Build | Best For |
|------|---------|------|
| **Agentic Chat** | Configuration-based: prompt + attached tools | Quickly validating ideas, lightweight scenarios |
| **Chatflow** | Canvas orchestration: nodes + connections | Multi-branch routing, precisely controlled production scenarios |

- Supports **AI-assisted creation**: describe your need and the AI generates the initial configuration (this consumption is covered by the platform)
- For a hands-on tutorial, see [1.3 Quick Start](quick-start); for mode selection tips, see [2.5 Tip 1](../tutorials/mode-model-selection)

## 3. Knowledge Base Management

![Knowledge base management](./images/1.2-3-%E7%9F%A5%E8%AF%86%E5%BA%93%E7%AE%A1%E7%90%86.png)

Manage the knowledge files that Agents can retrieve and cite:

- Upload, view, and delete knowledge files; check vectorization processing status
- Capacity quota varies by plan (e.g. Starter 50MB / Pro 5GB / Premium 20GB; the plan page's live display is authoritative)
- When capacity is exceeded, new uploads are blocked; over-limit files are marked **disabled** (excluded from retrieval) **starting from the oldest by upload time**, but are not deleted automatically
- For a deep dive into knowledge base capabilities, see [1.7 Platform Capabilities · Knowledge Base](capabilities/knowledge-base)

## 4. Skill Management

![Skill management](./images/1.2-4-Skill%E7%AE%A1%E7%90%86.png)

Manage the Skills that can be attached to Agents:

- Create, edit, and delete **custom Skills** (the count limit varies by plan)
- View available **official built-in Skills** (earnings analysis, etc.; requires Pro or above)
- When the Skill count limit is reached, creation is blocked—delete existing Skills or upgrade your plan
- For a deep dive into the Skill system, see [1.7 Platform Capabilities · Skill System](capabilities/skill)

## 5. Workspace Member Management

![Workspace member management](./images/1.2-5-%E7%A9%BA%E9%97%B4%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.png)

Manage the members and permissions of the current Workspace:

- View the member list and each member's role
- There are three member roles: **Owner** (only one per Workspace, with full permissions), **Editor** (can edit resources), and **Viewer** (read-only usage). The number of Editors and Viewers depends on the plan's member count limit
- Only the Owner can perform commercial operations such as subscription purchases/upgrades
- For member role rules in detail, see [1.5 · Workspace Member Roles](plans)

## 6. Usage

> 💡 **How to get there**: the Usage, Plan, and Orders pages share one entry point—click your **profile avatar** in the bottom left to open the menu, select **Workspace Plan**, then use the expanded submenu to open "Usage", "Plan", or "Orders":

![Usage/Plan/Orders entry: profile avatar menu → Workspace Plan](./images/1.2-9-%E7%94%A8%E9%87%8F%E5%A5%97%E9%A4%90%E8%AE%A2%E5%8D%95%E5%85%A5%E5%8F%A3.png)

![Usage page](./images/1.2-6-%E7%94%A8%E9%87%8F.png)

View your quota balance and consumption details:

- When a benefit card is active, a **benefit card status card** is shown at the top (trial tier + remaining days + the stacked weekly available quota)
- Shows the available quota for the current rolling 7-day period and the monthly balance
- Consumption details show the source of each charge and which service entity collected it (charged by)
- For billing units and deduction rules, see [1.5 · Usage](plans)

## 7. Plan

> Entry: profile avatar menu → Workspace Plan → Plan (see the [entry note in Section 6](#6-usage))

![Plan page](./images/1.2-7-%E5%A5%97%E9%A4%90.png)

View and manage the current Workspace's plan:

- Shows the current plan, a tier-by-tier benefits comparison, and prices (**the live display on this page is authoritative**; the help documentation may lag behind)
- Purchase / upgrade / downgrade / unsubscribe entry points (**Workspace Owner only**)
- Upgrades take effect immediately with a prorated charge; downgrades take effect the following month; after unsubscribing, the Workspace falls back to Starter at expiry
- Pricing currency is fixed by your registration region; for SG users, page prices exclude tax (GST is collected separately by the payment channel)—see [1.6](regions)

## 8. Orders

> Entry: profile avatar menu → Workspace Plan → Orders (see the [entry note in Section 6](#6-usage))

![Orders page](./images/1.2-8-%E8%AE%A2%E5%8D%95.png)

View subscription-related transaction records:

- Order list: time, amount, currency, and status of each subscription/renewal
- Payment channel information (Apple IAP / Stripe)
- The service entity an order belongs to matches your registration region

## Related Reading

- [1.3 Quick Start](quick-start) — build your first Agent starting from the creation page
- [1.5 Workspace & Plans](plans) — the complete rules for plans, usage, and member roles
- [1.9 Legal Agreements](legal) — where to find the user agreement, privacy policy, and other legal documents
