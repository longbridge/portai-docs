---
sidebar_position: 11
title: "Chat Client Experience"
---

> The official Chatbot system and the Agent Platform together form Longbridge's AI product, and **a user's usage quota is shared between the two**. This article covers Chatbot-side capabilities — **Agent builders only need to be aware of them**: once your Agent is published, users interact with it with these capabilities in play.

## Presentation & Interaction

| Capability | Description |
|------|------|
| **Conversation charts** | Structured investment data is presented intuitively in conversation as professional charts, making trends/comparisons obvious at a glance; charts are interactive, so users can keep asking follow-ups about the same data set |
| **Stock quote / watchlist Widgets** | Quote cards and stock list components in conversation; the Stock Card supports shareable screenshots |
| **Chain of thought & citations** | The chain of thought is shown in stages with multiple display forms; citations appear as clickable website links |
| **Answer retry branches** | After a retry, switch between branches to view the answers from different runs for easy comparison |
| **Voice input** | Ask questions out loud like chatting, getting complex long sentences across in one go |

## Memory & Personalization

| Capability | Description |
|------|------|
| **Long-term memory** | When long-term memory is triggered, what has been remembered is shown explicitly, with a shortcut entry to manage all memories |
| **Chat history retrieval** | Conversations are automatically persisted and periodically summarized; when the user asks about "the format I gave you last time/before," the AI automatically retrieves past conversations to recall it — **scoped to the user, effective across Agents** |
| **User tags** | Users can proactively maintain personalization requirements; the AI retrieves tags before conversing to generate personalized replies |
| Personalized question recommendations | Recommended questions are generated from real technicals/news/community buzz for a pool of trending stocks — the hotter the stock, the faster the refresh |
| Suggested questions & follow-ups | Suggested questions support **refresh for more**; follow-ups are generated dynamically from the last few rounds of Q&A |

> Note: "Personalized question recommendations" and "Suggested questions & follow-ups" **only take effect in the official Chatbot and are unrelated to Agents you build** — the guiding questions your Agent shows users are configured yourself via the **Agent preset questions** setting (see [1.10 Settings](../chatflow-agenticchat-settings)).

## Takeaways for Builders

1. **Structured data output pays off**: output core data in structured form, and the consumer side automatically renders it as charts/Widgets — a far better experience than plain text (see [2.2 Structured Output](../../tutorials/variables-dataflow))
2. **Answer style: conclusions first, no filler** — the same principles apply to your Agent's prompts (see [2.1](../../tutorials/prompt-writing))
3. **Personalization is handled at the platform layer**: user tags and history memory take effect at the platform level, so Agents don't need to build their own user profiles — and **should not**; see [Data Usage & Privacy Restrictions](../../compliance/index)
