---
sidebar_position: 12
title: "Disaster Recovery"
---

> **Location**: model configuration and node exception handling settings
> A production Agent cannot go entirely unavailable just because one model vendor hiccups or a single call fails. The platform provides a set of disaster recovery capabilities that keep the Agent producing stable output under abnormal conditions.

## Cross-Vendor Model Calls

**What it is**: the same model (same model name) is often deployed under multiple vendors/accounts. With **cross-vendor calls** enabled, when a model call fails and triggers a retry, the system can **switch to an account with the same model name under another enabled vendor** to continue the call.

- When the primary account's vendor fails or rate-limits, it automatically switches to a backup vendor, nearly invisible to the user
- Switching only happens between **the same model name** — it never silently swaps in a different model, so output capability and style stay consistent
- Prerequisite: the target vendor account is already enabled on the platform

**When to use**: recommended for customer-facing production Agents, so a single-vendor outage is no longer a single point of failure.

## Model Combinations

**What it is**: the system provides **preset model combination plans** (such as a **cost-effective combination** and a **high-performance combination**), and you can also select a single model yourself.

**Disaster recovery value**: beyond improving cost-effectiveness, model combinations reduce dependence on any single model — the models in a combination back each other up, avoiding binding all nodes to one model.

**Pairing tip**: use it together with **node-level model configuration** (different models for different nodes), spreading critical and non-critical paths across different models to further isolate risk.

## Retry on Failure

**What it is**: when a model or tool call fails, the system supports **automatic retries** instead of terminating on the first failure.

- Retries work in tandem with cross-vendor calls: with cross-vendor enabled, retries can switch vendor accounts instead of repeatedly hitting the failing vendor
- Usage billing is based on calls that actually happen: requests already sent to the model are billed by actual token consumption; unsent ones are not billed

## Exception Handling

What happens to the flow after a failed call is determined by the exception handling mechanism:

| Scenario | Handling |
|------|---------|
| **LLM call failure** | The flow can be configured to **continue or abort** execution; the part already sent is billed by actual consumption, and failures do not trigger quota rollback |
| **Tool call failure** | A tool failure itself does not affect settlement; if no model inference was triggered, no usage is consumed |
| **Single Iteration item failure** | With error handling configured, **a single element's failure does not interrupt the whole**, and the remaining elements produce output normally (see [Iteration node](../nodes/iteration)) |
| **User-initiated termination / system exception interruption** | Consumption already incurred is not rolled back, unexecuted parts are not billed, and the flow enters a terminated state available for audit |

## Disaster Recovery Checklist for Production Agents

- [ ] Enable **cross-vendor calls** for core models (confirm backup vendor accounts are enabled)
- [ ] Configure **retry on failure** for critical calls
- [ ] Configure **error handling** for batch tasks (Iteration), so one failed item doesn't drag down the whole batch
- [ ] Branch behavior for LLM/Tool failures is designed (continue / abort / fallback script) — never let users see a raw error
- [ ] Tested against three exception cases: vendor outage (verifiable via switching), tool timeout, and partial batch-task failure

## Related Reading

- [Model & Tool Ecosystem](model-tool-ecosystem) — model pool and node-level model configuration
- [Running, Debugging & Observability](observability) — locating failure causes via Logs
- [Orchestration Patterns & Debugging Tips](../../tutorials/orchestration-debug) — fallback branch design
