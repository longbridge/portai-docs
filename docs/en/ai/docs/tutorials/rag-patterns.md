---
sidebar_position: 4
title: "RAG Retrieval Pattern Techniques"
---

> Incomplete recall from a single retrieval is the most common pain point in RAG Q&A. This guide presents a directly reusable two-stage retrieval pattern: **trade one cheap "query expansion" for multi-path recall**.

## The Problem: Retrieving with the User's Raw Question Often Misses Content

Users' original questions are often colloquial and single-perspective, mismatching how content is phrased in the knowledge base (synonyms, technical terms, Chinese/English differences). A single retrieval recalls incompletely, so the answer is naturally incomplete.

## The Pattern: Expand Keywords First, Then Query in Parallel Batches

First use an Agent node to **expand the question into a set of query keywords**, then use an Iteration node to **run batch queries in parallel**:

```
Start ─▶ Agent (generate a set of query keywords, output an array)
      ─▶ Iteration (parallel) [ sub-flow: Tool retrieval (knowledge base / search) ]
      ─▶ LLM (deduplicate, merge, answer based on retrieval results) ─▶ Answer
```

## Key Points

1. **Keyword generation node**: the prompt should require a **structured array** as output (e.g. a JSON array), with each keyword covering a different angle — synonym rewrites, broader/narrower concepts, technical terms, Chinese/English counterparts; keep the count to 3-5 sets, as too many dilute per-query retrieval quality and drive up cost
2. **Enable Iteration's parallel mode**: batch queries fire simultaneously, far faster than serial one-by-one; configure error handling so a single failed query doesn't drag down the whole run
3. **The summarization node answers only from retrieval results**: state explicitly in the prompt that "the data must come from the retrieval results; do not fabricate", and perform deduplication and merging
4. **Cost pairing**: keyword generation is a simple task — a small model suffices; use a large model only for the final summarization and answering (see the tiered model strategy in [Technique 2](mode-model-selection))

> The essence of this pattern: **trade one cheap "query expansion" for multi-path recall** — far more cost-effective than forcing a single retrieval to carry the accuracy burden.

## Related Reading

- [Iteration Node Documentation](../basics/nodes/iteration) — parallel mode and error handling
- [Tool Node Documentation](../basics/nodes/tools) — retrieval and data fetching
- [Knowledge Base](../basics/capabilities/knowledge-base) — the data source for retrieval
- [Flow Orchestration Patterns and Debugging Techniques](orchestration-debug) — Pattern 3 "Tool Augmentation", Pattern 6 "Batch Processing"
