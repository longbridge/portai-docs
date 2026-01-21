# Start

## What is it?

The Start node is the **starting point of the flow**.
When a flow is triggered, the system starts execution from here and passes your provided inputs to downstream nodes.

Every flow **must** contain exactly one Start node.

## What can you do with it?

#### 1. Receive Flow Inputs

The Start node receives inputs when the flow runs, such as:

* User-entered text
* Parameters passed during API calls
* Data from upstream systems

These inputs serve as the initial data for the entire flow and can be used by all subsequent nodes.

---

#### 2. Define Flow Variables

In the Start node, you can:

* Define input fields for the flow
* Set field names and types
* Serve as a data source for downstream references

Examples:

* `query`: The user's question
* `user_id`: User identifier
* `context`: Contextual information

---

#### 3. Trigger the Entire Flow

When a flow is called or executed:

* The system launches from the Start node
* Subsequent nodes are executed in the order connected on the canvas
* The Start node itself doesn't perform logic; it only handles "start" and "pass-through"

## Usage Rules

* A flow **must have exactly one Start node**
* The Start node:

  * Cannot be connected to by other nodes (it has no upstream)
  * Must connect to at least one downstream node
* Without a Start node, the flow cannot run

## Recommendations

* Define **all essential inputs** in the Start node
* Use clear field names for easy reference by downstream nodes
* Do not perform logic in the Start node; keep it focused on input and initiation

## Typical Scenarios

* Entry point for user input in conversational flows
* Parameter configuration before Agent execution
* Request parameter starting point for API flows
* Unified entry point for sub-workflows
