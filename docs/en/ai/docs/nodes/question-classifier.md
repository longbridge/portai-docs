# Question Classifier

## What is it?

The Question Classifier is used to **judge which category a user input belongs to** and guide the workflow into different branches based on the classification result.

Its goal is not to generate content, but to **make a clear judgment**.

## What can you do with it?

#### 1. Identify User Question Types

The Question Classifier can help you determine:

* What type of question the user is asking
* Which processing path the current input is suitable for

Examples:

* Consultation / Operation / Small Talk
* Technical Question / Business Question / Invalid Input

---

#### 2. Drive Workflow Branching

Classification results usually:

* Connect directly to different downstream nodes
* Decide whether to call different models, Agents, or tools

It is one of the core nodes for building **multi-path workflows**.

## Output Results

* Output as a **clear classification label**
* Each classification result corresponds to a branch path
* Classification results can be used by conditional nodes or directly for branch connections

## Usage Rules

* Classification categories need to be defined in advance
* Each input can only hit one classification result
* Not used to generate final answers

## Usage Recommendations

* The number of categories should not be too large (recommended 3–7)
* Each category boundary should be clear and non-overlapping
* A fallback category (e.g., "Other") is very important

## Typical Scenarios

* Intelligent customer service dispatching
* Dialogue entry intent judgment
* Routing for different business processes

## When Should You Not Use It?

* No need to branch the flow
* Classification criteria are unclear
* Just want to generate response content

Such scenarios are more suitable for directly using an LLM node.
