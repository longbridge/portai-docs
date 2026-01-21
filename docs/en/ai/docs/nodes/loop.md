# Loop Node

## What is it?

The Loop node is used to **repeatedly execute a segment of the workflow as long as a condition is met**.
Whether to continue execution depends on the **judgment result of each round**.

You can think of it as:

> **"As long as the condition holds, keep repeating the execution."**

## What can you do with it?

#### 1. Multi-round Attempts and Corrections

The Loop node is suitable for:

* Repeated attempts until success
* Continuously correcting results
* Persistent execution until a condition is met

Examples:

* Re-generating if the model result is unsatisfactory
* Retrying if an interface call fails
* Gradually approaching a target result

---

#### 2. Implementing "Until Satisfied" Workflows

The Loop node allows the workflow to:

* Dynamically decide whether to continue based on intermediate results
* Adjust status during execution

## How it Works (For Understanding)

1. Execute the sub-workflow within the loop
2. Judge whether to continue based on the condition
3. Condition met → Enter the next round
4. Condition not met → Exit the loop

## Input and Output

* **Input**:
  * Initial status variables
* **Output**:
  * The result of the last round of execution
  * Or accumulated status data

## Usage Rules

* The Loop node **must have an exit condition set**
* It is recommended to set a maximum number of cycles to prevent infinite loops
* Uncontrollable operations should be avoided within the loop body

## Usage Recommendations (Very Important)

* Loop logic must be "terminable"
* Condition judgments should be as clear as possible
* Do not rely solely on the subjective judgment of the model as the only exit condition

## Typical Scenarios

* Retry mechanism
* Multi-round optimization
* Condition-driven continuous execution

## Iteration Node vs. Loop Node (How to Choose)

| Comparison Item | Iteration Node | Loop Node |
| :--- | :--- | :--- |
| Basis of Repetition | Data collection | Condition judgment |
| Execution Frequency | Fixed (determined by list length) | Variable |
| Risk of Losing Control | Low | Relatively high |
| Suitable Task | Batch processing | Multiple attempts / correction |

## Selection Recommendation (Just remember this)

* **"If there's a list, use Iteration"**
* **"If there's no fixed count, use Loop"**

## Common Misconceptions

Using Loop to handle lists
→ You should use Iteration; it's safer and more controllable

Using Iteration for retries
→ You should use Loop; it's more semantically correct
