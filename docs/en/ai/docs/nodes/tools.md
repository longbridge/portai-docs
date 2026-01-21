# Tool Node

## What is it?

The Tool node is used to **invoke external capabilities or system functions**, allowing the workflow to not only "think" but also "act."

Tools can be:

* Interfaces (APIs)
* Internal services
* Data processing functions
* Business system capabilities

## What can you do with it?

#### 1. Call External Interfaces

Through the Tool node, you can:

* Query data
* Write or update information
* Call third-party or internal system interfaces

Examples:

* Querying user information
* Fetching real-time data
* Submitting business requests

---

#### 2. Execute Deterministic Operations

Unlike LLMs, Tool nodes:

* Produce stable and predictable outputs
* Are suitable for performing clear, rule-based tasks
* Are often used to supplement model capabilities

---

#### 3. Collaborate with LLMs

A common usage is:

1. The LLM determines whether a tool call is needed
2. The judgment result is passed to the Tool node
3. The results returned by the tool are passed back to the LLM for processing

This combination can significantly enhance the practicality of the workflow.

## Input and Output

* **Input**:
  * Variables from the Start node or upstream nodes
* **Output**:
  * Return results after tool execution
  * Can be used as input or judgment criteria for subsequent nodes

## Usage Rules

* The Tool node must be configured with a specific tool or interface
* Input parameters must be consistent with the tool definition
* If tool execution fails, it should be handled via conditional nodes or fallback processes

## Usage Recommendations

* Keep tool responsibilities as singular as possible, avoiding complex logic piled into a single tool
* Implement judgment on critical tool call results to prevent abnormal workflow interruptions
* Leave the "decision" to the model and the "execution" to the tool

## Typical Scenarios

* Querying databases or business systems
* Invoking search, calculation, or conversion capabilities
* Performing business operations (placing orders, updating status, etc.)
* Fetching real-time or structured data
