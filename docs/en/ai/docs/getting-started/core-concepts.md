# Core Basic Concepts of Agent Builder

## What is an Agent?

In Agent Builder, an **Agent** is an executable intelligent flow.

It is not a model, nor a segment of code, but:

> **An automated AI workflow composed of multiple capability nodes.**

An Agent can:

* Understand input
* Make judgments
* Call models and tools
* Produce results or replies


## Two Types of Agents: ChatFlow and Workflow

There are two core workflow types in Agent Builder:

### ChatFlow

* Oriented towards user dialogue
* Supports multi-round interaction
* Output is returned to the user through the **Answer node**
* Suitable for assistants, Q&A, and interactive scenarios

### Workflow

* Oriented towards task execution
* Emphasizes process completion and result output
* Output is returned through the **End node**
* Suitable for data production and automated tasks

**A workflow can only choose one of these types.**


## Canvas and Nodes

### Canvas

The canvas is the Agent's "workbench":

* Every workflow is completed on the canvas
* Execution order is reflected through node connections
* Flow structure is visible at a glance

### Node

A node is the smallest capability unit of an Agent.

Each node does only one clear type of thing, for example:

* Thinking (LLM)
* Judging (Condition, Classification)
* Executing (Tool, Interface)
* Controlling (Loop, Branch)
* Output (Answer / End)

A complex Agent = a combination of multiple simple nodes.


## LLM Node vs. Agent Node

### LLM Node

* Single call to the model
* Fixed execution path
* Suitable for clear, predictable tasks

### Agent Node

* Goal-driven
* Can execute in multiple steps
* Can autonomously decide whether to call tools

**If you can use LLM, do not use Agent; only use Agent when the path is uncertain.**


## Variables and Context

### What are Variables?

Variables are data flowing through the workflow:

* Come from inputs
* Come from model or tool outputs
* Can be referenced by subsequent nodes

### What is Context?

Context is the Agent's "memory" during execution:

* Contains all variables of the current flow
* Automatically passed between nodes
* Determines subsequent behavior and results


## Explicit Flows vs. Autonomous Execution

Agent Builder supports two construction methods:

### Explicit Flows

* Use nodes like conditions, branches, and loops
* Every step is clear and controllable
* Suitable for high-certainty scenarios

### Autonomous Execution

* Use Agent nodes
* Only define goals and boundaries
* Suitable for complex, uncertain tasks


## Tools and External Capabilities

The Agent itself does not have "action capabilities."
Its execution capability comes from **tools**:

* HTTP interfaces
* Internal system capabilities
* Data services

The Agent can only use tools that have been integrated.


## Two Ways of Outputting

### Answer Node

* Oriented towards users
* Used for ChatFlow
* Used to "speak"

### End Node

* Oriented towards systems
* Used for Workflow
* Used to "deliver results"

**The two cannot be used simultaneously.**


## Boundary Awareness of Agent Builder (Very Important)

Agent Builder is suitable for:

* Intelligent decision-making
* Automated processes
* AI-driven tasks

But it is NOT:

* A distributed computing framework
* A data warehouse
* A high-performance trading system


##. One-sentence Summary

> **Agent Builder = Using flow-based methods to organize models, tools, and logic to build executable and evolvable AI Agents.**
