# Code Node

## What is it?

The Code node is used to **write and execute custom code** for processing, transforming, or calculating data within the workflow.

It is suitable for handling **tasks with clear rules, deterministic logic, or tasks that models are not good at or should not participate in**.

## What can you do with it?

#### 1. Process and Transform Data

Using the Code node, you can:

* Clean and format data
* Transform data structures (e.g., JSON conversion, field mapping)
* Merge, split, or reorganize variables

Examples:

* Organize model output into a standard format
* Perform secondary processing on tool return results

---

#### 2. Execute Deterministic Logic

The Code node is ideal for:

* Conditional judgment
* Numerical calculations
* Rule validation
* Fixed algorithm processing

These tasks are more stable and controllable than handing them over to a large model.

---

#### 3. Serving as a Flow "Glue Layer"

In complex flows, the Code node is often used to:

* Connect outputs from multiple nodes
* Unify data formats from different sources
* Prepare clean, usable inputs for subsequent nodes

## Input and Output

* **Input**:
  * Variables from upstream nodes
* **Output**:
  * Result of code execution
  * Can be used as input or judgment criteria for subsequent nodes

## Usage Rules

* The Code node only executes the code logic you write
* It does not have model reasoning capabilities
* Execution failure will cause the workflow to interrupt (requires combination with conditions or fallback logic)

## Usage Recommendations

* Only include deterministic logic; do not simulate "thinking" in a Code node
* Keep code as concise as possible, avoiding complex dependencies
* Implement proper exception handling and default values for critical outputs

## Typical Scenarios

* Data cleaning and transformation
* Rule judgment and validation
* Structured output generation
* Intermediate processing of model and tool results
