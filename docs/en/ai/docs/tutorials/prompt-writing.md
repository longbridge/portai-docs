---
sidebar_position: 1
title: "Prompt Writing Techniques"
---

> Applies to nodes: LLM, Agent, Question Classifier. Prompt quality directly determines the ceiling of your Agent's performance, and is well worth refining iteratively.

## 1. Division of Labor: System Prompt vs. User Prompt

| | System Prompt | User Prompt |
|---|---|---|
| **What to write** | Role definition, behavioral guidelines, output format, compliance red lines | The specific task at hand + inserted variables |
| **Characteristics** | Stable and unchanging; cannot be deleted | Changes every turn; supports multiple User/Assistant messages |

**Common mistake**: piling everything into the User Prompt. The correct approach is to put the **unchanging rules** in the System Prompt and the **changing inputs** in the User Prompt.

## 2. A Four-Part System Prompt Template

```
[Role] You are {who}, serving {what scenario}.
[Task] Your responsibility is to {do what}; you do not {do what}.
[Rules]
1. {Output language / tone / length requirements}
2. {Business rules}
3. {Compliance red lines, see below}
[Output Format] {Format requirements, e.g. "Answer in bullet points, no more than 200 words"}
```

## 3. Compliance Constraints Required for Financial Scenarios

For customer-facing Agents, the System Prompt must include the following guardrails (see [03 Compliance Requirements](../compliance/index) for the rationale):

```
Compliance red lines (must never be violated under any circumstances):
1. Do not provide any buy/sell recommendations, price targets, or return forecasts
2. Explain indicators in neutral, descriptive language, e.g. "An RSI above 70 is
   generally considered overbought territory"; action-oriented statements like
   "RSI above 70, recommend selling" are prohibited
3. Promissory wording such as "guaranteed to rise", "sure profit", or
   "guaranteed returns" is prohibited
4. When a user asks for investment advice, politely decline and pivot to
   educational content
5. Always end responses with: "The above content is for reference only and does
   not constitute any investment advice."
```

**Tip**: teaching the model how to speak with ✅/❌ contrasting examples is far more effective than abstract rules:
- ✅ "MACD shows a golden cross, which has historically often been associated with upward price phases"
- ❌ "MACD golden cross → recommend buying"

## 4. Techniques for Stable, Controllable Output

1. **If you require a format, provide an example**: when requesting JSON output, paste a complete sample JSON into the prompt; an even more reliable approach is to use the LLM node's **structured output** feature (JSON Schema constraints) instead of relying on the prompt
2. **Constrain length and structure**: "Answer with 3 bullet points, each under 50 words" works better than "answer concisely"
3. **Reference context variables explicitly**: if the prompt references context, the corresponding variable must be inserted, otherwise the platform reports the error "Please fill in the context variable in the prompt"
4. **Few-shot examples**: placing 1-3 Q&A example pairs in User/Assistant messages significantly improves accuracy on classification and extraction tasks
5. **Don't set the memory window too large**: when memory is enabled, set the memory window to the smallest value that suffices (e.g. 5-10 turns); an oversized window wastes tokens and makes the model prone to being led astray by historical messages

## 5. Writing Category Descriptions for Question Classifier

The classifier's performance depends on whether each category's **description is written to be distinguishable**:

- Give each category clear boundaries and 2-3 typical example sentences
- Avoid semantic overlap between categories; always set up an "Other / small talk" fallback category
- Example:
  - `Account & Features`: related to account opening, deposits, order status, and platform features. E.g. "How do I deposit funds?" "Why hasn't my order been filled?"
  - `Market & News`: asking about market data, company news, or earnings information. E.g. "How much did Tencent rise today?"
  - `Other`: falls into this category when none of the above apply

## 6. Iteration Method: Change One Thing, Test Once

1. Use **trial runs** with a fixed set of test inputs (at least one each of: normal question / edge-case question / out-of-bounds question)
2. Change only one part of the prompt at a time, and compare results with a trial run
3. When a bad case appears, turn it into a ❌ example in the prompt
4. After going live, regularly review real conversations and keep adding rules
