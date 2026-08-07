---
sidebar_position: 10
title: "Model & Tool Ecosystem"
---

## 1. Model Pool: SOTA Models Continuously Onboarded

- Mainstream and SOTA large language models from multiple vendors are integrated; **the model selector's real-time display is the source of truth** for availability
- Models are tiered into "Mainstream" and "SOTA"; SOTA models are clearly labeled in the selector and consume more units
- Some models are restricted by plan or region; anything not shown in the selector is currently unavailable
- Different nodes can be configured with different models (node-level model configuration): mainstream models for simple tasks, SOTA for core reasoning — the most effective lever for controlling usage

## 2. Account & Community MCP Tools

Five MCP tools deeply integrated with Longbridge's business, enabling Agents to serve users based on **real account data**:

| MCP Tool | Capability |
|---------|------|
| Get Longbridge community user details | Search community users and their details by keyword, consistent with in-App search |
| Get detailed account information | The user's current cash and stock positions (cost, share count, etc.) |
| Get P&L trend chart | P&L trends by currency, time range, and time granularity |
| Get P&L detail data | P&L for a given security by time and stock code |
| Get P&L analysis summary | P&L summary by currency and time range |

**Prerequisite**: calls involving asset data automatically trigger **trading password verification** (see [1.7.8 Security Verification & Localization](security-i18n)); data is returned only after verification passes.

**Compliance reminder**: account data may only be used for **neutral display and statistical analysis** — it must not be used to generate personalized buy/sell advice. See [No Investment Advice](../../compliance/index) and [Staying Within the Execution-Only Positioning](../../compliance/index).

## 3. Time Zone Optimization for Market Data / Fundamentals Tools

- Some tools' `start_date` / `end_date` parameter descriptions now include **US ET and Hong Kong HKT time zone notes**
- All returned time fields are unified to **ISO8601 format with UTC+0 time zone**, with a timestamp of the API call time attached
- Result: historical candlestick and historical financial report queries are more precise, and the model can determine the current trading session from the API time and overnight trading time points

> What this means for builders: prompts for market-data Agents no longer need to labor over explaining time zones — tool returns carry explicit time zone information, reducing "yesterday/today" style temporal ambiguity errors.

## Related Reading

- [Tool Node Documentation](../nodes/tools) — tool mounting and authorization
- [1.5 Workspace & Plans](../plans) — how tool tiers relate to plans
