# If-Else

## What is it?
The If-Else node is used to **perform judgments based on existing variables and decide which path the workflow takes next**.
It gives the workflow "choice" and "branching" capabilities instead of only being able to execute linearly.

## What can you do with it?

#### 1. Follow Different Paths Based on Results

You can branch based on the output of upstream nodes:

* Judge text content
* Check if a variable exists
* Judge numerical values or status

Based on the judgment result, let the flow enter different branches.

Examples:

* Judge user question types
* Judge if the model returns a valid result
* Judge if a tool call is needed

---

#### 2. Build Multi-branch Workflows

The If-Else node can:

* Configure multiple judgment conditions
* Each condition corresponds to a branch path
* Follow a default branch when no conditions are met

This allows you to build more complex and flexible workflows.

## Condition Configuration

* Judgments are usually based on workflow variables
* Supports common judgment methods, such as:

  * Equals / Not equals
  * Contains / Does not contain
  * Is empty / Is not empty
  * Numerical comparison (greater than, less than, etc.)

Each condition will connect to a downstream node.

## Usage Rules

* An If-Else node must have at least one downstream branch
* Each branch is only executed when its condition is met
* The node itself does not produce new data; it is only responsible for "judgment and routing"

## Usage Recommendations

* Keep conditions clear and avoid overlapping multiple conditions
* Set a fallback branch for complex judgments to prevent workflow interruption
* Ensure relevant variables are ready before entering the judgment

## Typical Scenarios

* Choosing different processing flows based on user intent
* Judging whether to call the model again
* Judging if a tool call was successful
* Decision points in multi-round workflows
