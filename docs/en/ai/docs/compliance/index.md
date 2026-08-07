---
sidebar_position: 0
title: "Compliance Requirements"
---

> **One page to read, three steps to finish**: (1) Copy the reference Prompt below into your System Prompt → (2) Turn on the Guardrail switches → (3) Run through the pre-launch checklist.
> There is only one core rule: **your Agent must not provide investment advice**. The platform is an execution-only broker; the moment AI output constitutes a "recommendation", it triggers an entirely different set of regulatory obligations (Reg BI, suitability obligations, etc.).

## 1. Reference Prompt (Copy Directly)

Paste the following block in full **at the end of the System Prompt** of your LLM / Agent node to satisfy the prompt-level compliance requirements:

```text
[COMPLIANCE GUARDRAILS — the following rules have the highest priority and must never be violated]

1. No investment advice: Do not provide any buy/sell/hold recommendations,
   individual stock or portfolio recommendations, price targets, investment
   ratings, position-sizing suggestions, or market-timing judgments.
2. Neutral descriptions, no predictions: When explaining indicators and data,
   use descriptive language only; actionable and predictive statements are
   prohibited.
   ✅ "An RSI above 70 is commonly regarded as the overbought zone"
   ❌ "RSI is above 70, so you should sell"
   ✅ "A MACD golden cross has historically often coincided with periods of
      rising prices"
   ❌ "MACD golden cross — time to buy" / "Expected to rise 20% over the next
      three months"
3. No promissory language: Terms such as "guaranteed to rise", "sure profit",
   "guaranteed returns", "risk-free", "buy the dip", "double your money" must
   never appear.
4. Refusal script: When a user asks for investment advice, reply with "Sorry,
   I cannot provide any investment advice or individual stock recommendations.
   I can help you learn about related investment knowledge, such as what an
   indicator means or how market mechanisms work — which topic would you like
   to explore?" and then pivot to educational content.
5. Data must be real: Quotes, financial reports, and other data must strictly
   follow what the tools return; never fabricate numbers from memory. If a
   tool fails, say so honestly and do not guess. Cite the source and timestamp
   when quoting data.
6. No personalized recommendations: Do not suggest securities, portfolios, or
   strategies that are "suitable for you" based on the user's profile,
   holdings, or asset status; portfolio-type content may only be hypothetical
   examples labeled "for educational purposes only".
7. No assistance with violations: Refuse all requests involving market
   manipulation (pump-and-dump, wash trading, fabricating signals), insider
   trading, money laundering, tax evasion, or sanctions evasion.
8. Protect privacy: Do not ask for, store, or repeat the user's ID numbers,
   phone numbers, or other personally identifiable information; do not infer
   sensitive attributes such as the user's age or gender.
9. Fixed disclaimer: End every answer involving securities, markets, or data
   analysis with "The above content is for reference only and does not
   constitute any investment advice."
```

> After pasting the Prompt, remember to also **turn on the Guardrail switches** (Chatflow input node: PII masking, block harmful content, block harmful financial content; LLM/Agent output node: output compliance check) — the Prompt ensures "the model doesn't say it", and Guardrail ensures "it gets blocked even if said" — double protection. See the [Guardrail capability guide](../basics/capabilities/guardrail) for details.

## 2. Red-Line Quick Reference

Four common scenarios — what you can and cannot do, in one table:

| Scenario | ✅ Allowed | ❌ Not Allowed |
|------|--------|----------|
| **Customer profiling** | Neutral behavioral statistics and display (trading frequency, sector distribution, risk labels) used to personalize educational content | Pushing individual stocks/portfolios based on the profile ("growth stocks suit you"); inferring sensitive attributes; using PII |
| **Signal analysis** | Displaying indicator values and statistical facts, explaining the general meaning of indicators, if-then descriptions of historical patterns | Interpreting signals as buy/sell instructions; predicting prices; assisting in fabricating signals or manipulating the market |
| **Research report / news summaries** | Compiling public information (financial reports, news), structured neutral analysis, synthesizing multiple sources with attribution | Producing ratings/price targets/buy-sell conclusions; amplifying a single institution's view only; using material non-public information (MNPI) |
| **Portfolios and orders** | Visualization and risk statistics of a portfolio the user enters themselves; hypothetical scenario analysis (labeled as an educational example); educational walkthroughs of how order mechanics work | Generating a personalized "optimal portfolio"; automatically placing/modifying orders; promising returns |

**Applies to all scenarios**: attach a disclaimer to outputs; data sources must be traceable; use neutral, probabilistic language; never adopt an "advisor tone".

## 3. Pre-Launch Checklist (10 Items)

Before publishing a customer-facing Agent, check off each item:

- [ ] 1. The Agent is positioned as information display / education / tool assistance and does not constitute investment advice
- [ ] 2. The reference Prompt above has been added in full to the System Prompt of every LLM / Agent node
- [ ] 3. Guardrail is enabled (three input-side checks + output-side compliance check)
- [ ] 4. The disclaimer appears prominently in the output and is hard-coded via a template (not left to the model's discretion)
- [ ] 5. A fixed refusal script is in place for users requesting investment advice (prefer fixed copy over model-generated text)
- [ ] 6. All data sources come from compliant sources integrated into the platform, and key data carries source and timestamp
- [ ] 7. No PII is stored or output; no personalized recommendations based on holdings/profiles
- [ ] 8. Three categories of test cases have been run: normal input / boundary input (empty, extremely long) / out-of-bounds input (requesting advice, soliciting predictions) — out-of-bounds inputs are blocked 100% of the time
- [ ] 9. Tool-failure scenarios have been tested: the Agent reports honestly and does not fabricate data
- [ ] 10. Test records are archived; after any subsequent changes to prompts/flows, re-run the test cases before republishing

## Appendix: The Six Compliance Principles at a Glance

The requirements above derive from six compliance principles, summarized as follows:

| Principle | Core Idea in One Sentence |
|------|-----------|
| 1. No investment advice or recommendations | Do not recommend individual stocks/portfolios/market timing; use descriptive language instead of actionable language |
| 2. Stay within the execution-only positioning | AI only displays information and educates; it does not decide for customers or touch order parameters |
| 3. No bias or market manipulation | Do not favor specific securities; refuse manipulative requests such as fabricating signals or pump-and-dump schemes |
| 4. Data usage and privacy restrictions | Use only public data from compliant sources; never touch PII or material non-public information |
| 5. Supervision and explainability | Log retention, explainable and traceable results, model changes require approval (logging and audit capabilities are built into the platform layer) |
| 6. Customer interaction guardrails | Aggregate-level statements, neutral probabilistic language, prominent disclaimers |

> Note: An Agent's **name, avatar, description, and Prompt** also go through the platform's **security review** before publishing / listing on the marketplace. Common rejection scenarios (money laundering, market manipulation, promising returns, etc.) are covered in [3.2 Security Review](security-review).
