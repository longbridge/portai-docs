# Introduction

Welcome to the LongbridgeAI documentation. This section will help you understand the basic concepts and features of the LongbridgeAI platform.

# Agent Builder Platform Overview

## What is Agent Builder?

**Agent Builder** is a set of **visual, low-code AI Agent construction tools** provided by the Infra platform.

Through a canvas-based flow editing approach, you can:

* Combine LLM capabilities, tool capabilities, and business logic
* Quickly build runnable AI Agents
* Use them for dialogue scenarios (ChatFlow) or task-oriented scenarios (Workflow)

You can build maintainable and iterative intelligent applications without writing complex code from scratch.


## What can the platform do?

#### Visually Build AI Agents

Agent Builder provides a **Visual Canvas + Low Code** approach to building Agents:

* Drag and drop nodes to combine full workflows
* Each node represents a specific capability (model, tool, judgment, execution, etc.)
* Flow structure is clear and highly readable

Even complex AI logic can be decomposed into clear flowcharts.

#### Support Two Core Agent Forms

#### ChatFlow (Conversational Agent)

Suitable for:

* Intelligent Q&A
* Assistant-type applications
* Multi-round dialogue scenarios

Characteristics:

* Real-time output of responses to users
* Supports contextual understanding and multi-round interaction
* Uses the **Answer node** as the external output

---

#### Workflow (Task-oriented Agent)

Suitable for:

* Data production
* Automated tasks
* Process orchestration between systems

Characteristics:

* Emphasizes workflow execution and result output
* Can call models, tools, and interfaces
* Uses the **End node** as the workflow exit

#### Rich Node Capabilities Covering the Full Agent Lifecycle

Agent Builder has built-in multiple capability nodes, covering the entire chain from input to output, for example:

* LLM reasoning and generation
* Agent autonomous decision-making and tool calling
* Conditional judgment and branch control
* Parameter extraction, question classification
* HTTP interface calling
* Custom code processing
* Variable management, template conversion
* Iteration, loop, and branch aggregation

Depending on the business complexity, you can freely choose between "explicit flows" or "Agent autonomous execution."

#### Support Multiple Application Scenarios

Agent Builder is suitable for various AI application scenarios, including but not limited to:

* Investment research and analysis assistants
* Event-driven strategies and workflows
* Knowledge Q&A and internal assistants
* Data query and automated processing
* Intelligent decision support systems

The same platform can support AI applications of different complexities and forms.


## Advantages over Traditional Development

#### Visual Flows, Reducing Understanding and Collaboration Costs

* AI logic is presented in flowchart form
* Non-technical roles can also understand the overall logic
* Facilitates multi-party collaboration among product, R&D, and business

#### Built-in Common Capabilities, Improving Development Efficiency

* Common AI capabilities are encapsulated as nodes
* No need to reinvent the wheel
* Faster onboarding and iteration compared to pure coding

#### Easier to Access and Upgrade AI Capabilities

* The platform can continuously access new model capabilities
* Agent logic can be upgraded without significant changes
* Better suited for the rapidly evolving status of AI technology


## Platform Boundaries and Limitations

#### Unsuitable Scenarios

Agent Builder is **not** intended to replace all systems:

* Not suitable for large-scale distributed computing
* Not suitable as an offline data warehouse or data lake
* Not used for high-frequency, ultra-low-latency core trading chains

It is more suitable for **intelligent decision-making, automated processes, and AI-driven tasks**.

#### Capability Boundaries Depend on External Integration

The upper limit of an Agent's capability depends on available external capabilities:

* Market data, news, business data
* Internal system interfaces
* Third-party service capabilities

These capabilities need to be integrated via standardized methods before the Agent can use them.

#### Usage Scale Needs Reasonable Evaluation

* Before large-scale concurrent or high-frequency calling
* Evaluate execution costs and stability
* For critical business workflows, it is recommended to conduct capacity and risk assessments in advance


## Who is it for?

Agent Builder is particularly suitable for:

* Product and business teams hoping to quickly verify AI ideas
* R&D teams hoping to lower the threshold for AI application development
* Scenarios requiring maintainable and interpretable AI workflows

You don't need to start by "writing an AI system,"
but rather by **"designing the way an Agent works."**


## One-sentence Summary

> **Agent Builder is a platform for building AI Agents using flow-based thinking.**
> It turns AI applications from "difficult-to-maintain code"
> into "clear, combinable, and evolvable intelligent flows."
