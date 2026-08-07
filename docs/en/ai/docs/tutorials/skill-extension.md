---
sidebar_position: 6
title: "Quickly Extending Agent Capabilities with Skills"
---

> This guide was split out from the former "Technique 4" of [2.5 Mode and Model Selection Techniques](mode-model-selection).

## Scenario

You want to equip your Agent with specialized domain methods (such as an earnings analysis framework, an industry research checklist, or writing style guidelines), but writing a Skill from scratch is too slow.

A Skill is essentially a "method/knowledge package loaded on demand" — and the internet already offers plenty of well-polished prompts and methodologies (awesome-prompts style repositories on GitHub, tech blogs, public analysis frameworks). Converting them into **custom Skills** and attaching them to your Agent is the lowest-cost way to extend capabilities.

The platform supports this natively: when creating a Skill, choose **Search Skill** to **search community Skills on GitHub online and import them directly** (see [1.7.2 Skill System - Three Creation Methods](../basics/capabilities/skill)); if no ready-made Skill turns up, follow the process below to adapt one yourself.

## The Four-Step Process

1. **Search**: prefer the platform's built-in **Search Skill** to search by keyword (e.g. superpowers); if no ready-made Skill exists, search GitHub and tech communities for candidate content using keywords like "topic + prompt / framework / checklist / skill"
2. **Filter**: keep only "executable" content — with steps, decision criteria, and positive/negative examples; vague conceptual explainers don't make good Skills
3. **Adapt**: restructure it in Skill style — conclusions first, actionable rules, examples attached (for writing guidance see [2.1 Prompt Writing Techniques](prompt-writing) and [1.7.2 Skill System](../basics/capabilities/skill)); remove tool instructions irrelevant to the platform, and for financial scenarios strip out stock-recommendation / return-promise content and add compliance red lines (see [3.1 Compliance Requirements](../compliance/index))
4. **Verify**: after attaching, trial-run with the three test case types — normal / edge-case / out-of-bounds — to confirm the Skill takes effect and doesn't conflict with existing prompts

## Notes

- Pay attention to the source's **copyright and license**; confirm it is usable before adapting
- Online content varies in quality — **review manually before attaching**, and keep iterating with bad cases after launch; community Skills imported directly must likewise be reviewed for compliance before being used in customer-facing Agents
- The custom Skill limit depends on your plan (Starter 3 / Pro 20 / Premium 100), so prioritize codifying frequently used domain methods

## Related Reading

- [1.7.2 Skill System](../basics/capabilities/skill) — creating Skills (including search import), writing style, and attaching
- [2.1 Prompt Writing Techniques](prompt-writing) — Skill content follows the same writing principles as prompts
- [3.1 Compliance Requirements](../compliance/index) — content compliance for customer-facing Agents
