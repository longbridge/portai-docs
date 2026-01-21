# Workflow Debugging (Full Debugging)

## Function Description

Agent Builder supports **debugging the entire workflow**, allowing you to execute the process from the Start node to the terminal node without publishing the Agent.

Workflow debugging is used to verify:

* Whether the flow structure is correct
* The connection and execution sequence between nodes
* Whether data transfer in the flow meets expectations


## Core Characteristics

* **No need to publish the Agent**
* Uses the latest version currently on the canvas
* Runs the flow completely according to the real execution path
* Can observe the execution results of each node


## Suitable Usage Scenarios

* Verifying if the overall logic of the flow is closed-loop
* Checking if conditional branches are triggered as expected
* Debugging multi-node combinations and complex control flows
* Full workflow verification before publication


## Usage Recommendations

* Perform full debugging after the flow is built
* After modifying any node, it is recommended to re-debug the flow
* Combine with single-node debugging to troubleshoot complex issues step by step


## One-sentence Summary

> **Workflow debugging is used to "verify the whole" and is an indispensable step before publication.**

## Relationship Between the Two Debugging Methods

* **Single Node Debugging**:
  Solves "is this node correct?"

* **Workflow Debugging**:
  Solves "is it correct when these nodes are connected together?"
