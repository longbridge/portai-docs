# HTTP Request Node

## What is it?

The HTTP Request node is used to **call external interfaces via HTTP/HTTPS** to fetch or submit data.

It is the most common **external communication node** in a workflow.

## What can you do with it?

#### 1. Call External APIs

Through the HTTP Request node, you can:

* Request third-party services
* Call internal business interfaces
* Fetch real-time data

Supports common HTTP methods:

* GET
* POST
* PUT
* DELETE (depending on platform support)

---

#### 2. Integrate with Business Systems

The HTTP Request node is often used for:

* Querying business data
* Submitting operation instructions
* Synchronizing external system status

It is an important basic capability for Workflows and Agents.

---

#### 3. Provide Real Data for Models or Agents

You can take:

* Interface return results
* Real-time data

as inputs for subsequent LLM or Agent nodes to improve the accuracy and real-time nature of the results.

## Configuration

Usually requires configuration of:

* Request URL
* Request Method
* Headers
* Request Parameters (Query / Body)

Supports using workflow variables as parameter values.

## Input and Output

* **Input**:
  * Request parameters from workflow variables
* **Output**:
  * Response data returned by the interface
  * Can be used for processing or judgment by subsequent nodes

## Usage Rules

* The HTTP Request node is only responsible for requests and returns
* It does not perform complex logic processing
* Request failure needs to be handled within the workflow (e.g., via conditional judgment)

## Usage Recommendations

* Keep interface return content as standardized as possible for easier subsequent use
* Implement proper exception handling and fallback for unstable interfaces
* Sensitive information should be passed via secure configuration rather than in plain text

## Typical Scenarios

* Querying third-party services
* Calling internal system interfaces
* Fetching real-time or business data
* Serving as one of the available tools for an Agent
