# Single Node Debugging

## Function Description

Agent Builder supports **debugging individual nodes independently**, allowing you to verify the input, execution logic, and output results of a single node without publishing the Agent.

Single node debugging is primarily used to:

* Quickly verify if the node configuration is correct
* Troubleshoot execution issues in a certain step of the flow
* Debug critical nodes in complex workflows


## Core Characteristics

* **No need to publish the Agent**
* **Does not rely on full flow execution**
* Debugging is only targeted at the currently selected node
* Uses the latest configuration visible on the canvas


## Suitable Usage Scenarios

* Debugging if the LLM node's Prompt meets expectations
* Verifying the return results of HTTP / Tool nodes
* Checking if parameter extraction and variable assignment are correct
* Verifying critical nodes before modifying the flow


## Usage Recommendations

* When the flow is complex, prioritize single-node debugging to locate issues
* After adjusting node configurations, re-debug in time to confirm the effect
* Only perform full flow debugging after single-node debugging passes


## One-sentence Summary

> **Single node debugging is used to "verify one step" and is the preferred way to locate issues and make quick corrections.**
