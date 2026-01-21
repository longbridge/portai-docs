# Branch Aggregator

## What is it?

The Branch Aggregator is used to **bring results from different branches back together**, allowing the workflow to continue unified execution after branching.

You can think of it as:

> **"The confluence point of the flow."**

## What can you do with it?

#### 1. Merge Execution Results from Different Branches

After conditional judgment or classification:

* Different branches can produce different results
* The Branch Aggregator is responsible for receiving these results
* Bringing the flow back to a single main line

---

#### 2. Unify Subsequent Processing Logic

After using a Branch Aggregator:

* You don't need to repeatedly configure the same nodes in each branch
* Subsequent nodes only need to be connected once

This significantly reduces redundancy in the flow.

## Input and Output

* **Input**:
  * Variables or results from different branches
* **Output**:
  * Unified result after aggregation
  * Can be used by subsequent nodes

## Usage Rules

* All branches that need to converge should connect to the same aggregator
* The aggregator itself does not make judgments
* Aggregation rules must be clear (e.g., selecting a certain result, merging fields, etc.)

## Usage Recommendations

* Keep the output structure of branches as consistent as possible
* Avoid naming conflicts for branch variables before aggregation
* Unify template transformation or output after the aggregator

## Typical Scenarios

* Unified output after conditional branches
* Result summarization after multi-path processing
* Unified reply after classification workflow ends
