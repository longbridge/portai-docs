# Parameter Extractor

## What is it?

The Parameter Extractor is used to **extract structured parameters from natural language input** and output them as variables that can be used directly.

Its goal is:

> **To turn "what people say" into "data the workflow can use."**

## What can you do with it?

#### 1. Extract Key Information from Text

The Parameter Extractor can help you extract:

* Time, location, quantity
* Conditions or objects specified by the user
* Parameters required to perform a task

Example:

* "Help me check the weather in Beijing tomorrow"
  * Time: Tomorrow
  * Location: Beijing

---

#### 2. Prepare Structured Input for Subsequent Nodes

Extracted parameters can be used directly for:

* HTTP Request nodes
* Tool nodes
* Agent nodes
* If-Else nodes

## Output Results

* Output as structured fields (parameter name + parameter value)
* Unrecognized parameters can be empty or use default values
* Can be referenced directly in the workflow

## Usage Rules

* Parameter names need to be defined in advance
* Each parameter should have clear semantics
* The extractor only performs extraction and does not make business judgments

## Usage Recommendations

* The number of parameters should not be excessive
* Parameter definitions should be as specific as possible to avoid ambiguity
* Implement validation or fallback processing for critical parameters

## Typical Scenarios

* Natural language to API calls
* Conversational task execution
* Structured request generation

## When Should You Not Use It?

* The input is already structured data
* No need to extract specific parameters
* The task is more focused on open-ended generation


## Question Classifier vs. Parameter Extractor (Quick Understanding)

| Comparison Item | Question Classifier | Parameter Extractor |
| :--- | :--- | :--- |
| Main Purpose | Judge "which category it belongs to" | Extract "what parameters are there" |
| Output Type | Classification label | Structured fields |
| Used for Branching | Yes | No |
| Used for Execution Preparation | Indirectly | Directly |
| Common Downstream | Branch workflows | Tools / API |

## Combination Usage Example

A common workflow pattern is:

1. **Question Classifier** → Judge the type of question
2. **Parameter Extractor** → Extract parameters required for that type
3. **Tool / Agent** → Execute the specific task

## Quick Reference (Just remember this)

* **Don't know "which path to take"** → Use **Question Classifier**
* **Know what to do but lack parameters** → Use **Parameter Extractor**
