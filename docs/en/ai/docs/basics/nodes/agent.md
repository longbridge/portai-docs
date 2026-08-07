---
sidebar_position: 5
title: "Agent"
---

> ⚠️ Model pricing and consumption information in this document (including screenshots) is **subject to actual conditions**; the help documentation is **for reference only**, and the interface and features are subject to the current product version.

| Attribute | Value |
|------|-----|
| **Node name** | Agent |
| **Version** | v1.0 |
| **Supported scenarios** | Chatflow Agent ✓, Workflow Agent ✓ |
| **Test run support** | ✓ |

## Quick Reference

> The Agent node has **no strategy selection**; it always runs in **Function Calling mode** (the model uses tools via function calls, looping until the task is complete).

## Feature Description

**The Agent node is one of the most essential nodes on the platform.** At its core, it is an **LLM loop**: within the loop, the LLM autonomously decides the next action until the task is complete, enabling it to handle highly complex functionality, including:

- **Planning**: decomposing tasks and deciding execution steps
- **Answering questions**: generating reply content
- **Calling tools**: using mounted tools to fetch information or perform actions
- **Using Skills**: invoking mounted Skills to complete specialized tasks
- **Launching a sandbox**: executing code in a sandbox environment
- **Running scripts**: executing scripts to process data or logic
- **Running HITL**: Human-in-the-Loop collaboration, bringing in human confirmation at key steps

It also supports:
- **Workflow integration**: calling existing Agent Tools, supporting multi-step conversations and business processing

## Node Display Content

![Agent node edit panel: tool list, MCP Connectors, tool search, and Skills](./images/05-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA%E4%B8%8E%E9%85%8D%E7%BD%AE.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Model**: displayed the same way as the LLM node
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

> See the right side of the screenshot above for the edit panel interface.

### 1. Model Configuration
- **Model selection**: same as the LLM node's model configuration
- **Parameter settings**: model parameters can be configured
- **Run mode**: no strategy selection; defaults to Function Calling mode

### 2. Tool List Management
- **Tool counts**: displays the number of enabled and added tools (enabled count/added count)
- **Add tool**: an add-tool button; after clicking, multiple tools can be selected from the tool list
- **Tool display**: displays the list of added tools
  - Shows the tool logo, provider, and tool name
  - Each tool supports on/off toggle configuration
  - Hovering over a tool reveals delete and settings actions
  - All tools in this release are "authorized"; the backend configuration is set up in advance

#### a. Tool Selection

Click the add button to open the **Tool Settings** dialog, which supports **adding a single tool** or **adding multiple**, searching for tools, and switching between the **Tools** and **OpenAPI** tabs. Tools are grouped by category (such as News, Real-time Quotes, etc.):

![Tool settings dialog: add single/multiple, with search and category browsing](./images/05-2-%E5%B7%A5%E5%85%B7%E9%80%89%E6%8B%A9.png)

#### b. MCP Connectors (Third-Party MCP Tools)

Third-party MCP tools can be connected. Currently, **Financial Datasets** (real-time stock prices, financial data, SEC filings, and market news) is available:

![MCP Connectors: Financial Datasets](./images/05-3-MCP%E5%B7%A5%E5%85%B7.png)

> ⚠️ This feature is **only available on the Premium plan**.

#### c. Tool Search

![Tool search switch](./images/05-4-%E5%B7%A5%E5%85%B7%E6%90%9C%E7%B4%A2.png)

- When **Tool Search** is enabled, **in-plan tools not explicitly checked** are retrieved on demand via the `tool_search` meta-tool and **loaded at the end of the context**
- Effect: **significantly reduces prompt size and improves tool selection accuracy**
- Suitable for scenarios with many tools—instead of stuffing all tools into the context, let the model fetch them on demand

### 3. Skills

Skills can be mounted onto an Agent: click the add button to open the **Select Skill** dialog. The list shows **official Skills** (such as strategy-us-power-nuclear, financial-report-analysis, etc.), and you can also **create a Skill** directly from here:

![Select Skill dialog: official Skill list and creation entry](./images/05-5-%E9%80%89%E6%8B%A9Skill.png)

### 4. Instruction Configuration
- **Configuration item**: same as the LLM node's system_prompt configuration
- **Limitation**: cannot be deleted

### 5. Query Configuration
- **Configuration item**: same as the LLM node's User Prompt / Assistant Prompt
- **Limitation**: cannot be deleted

### 6. Feature Switches

The Agent node provides a set of capability switches; enable them as needed:

#### a. User Tags

- When enabled, the LLM reads the current user's **profile tags and preference tags** in **scenarios requiring personalized answers**—for example, investment goals, risk appetite, analysis style, and other personalized interests/disinterests

#### b. Knowledge Base

![Knowledge base switch](./images/05-7-%E7%9F%A5%E8%AF%86%E5%BA%93.png)

- When **Knowledge Base** is enabled, the AI will search the selected knowledge bases when necessary

#### c. Human-in-the-Loop (HITL)

![Human-in-the-loop switch](./images/05-6-%E4%BA%BA%E6%9C%BA%E4%BA%A4%E4%BA%92.png)

- Allows the model to **ask the user questions and wait for answers** during execution
- This feature is very powerful; **enabling it is recommended**

#### d. Web Search

![Web search switch](./images/05-8-%E8%81%94%E7%BD%91%E6%90%9C%E7%B4%A2.png)

- When **Web Search** is enabled, the AI will use the built-in web search tool when necessary
- **Strongly recommended to enable**

#### e. To-Dos

- When **To-Dos** is enabled, the AI automatically identifies tasks in the conversation and **decomposes and executes** them
- **Strongly recommended to enable**

#### f. Output Legality and Compliance Check

- When enabled, the system performs a **compliance check** on the content as it is output
- If the output content is found to be illegal or non-compliant with financial regulations, the system will **immediately stop the output and clear the content already generated**

### 7. Maximum Iterations
- **Range**: configurable from 1 to 99
- **Purpose**: controls the maximum number of Agent executions
- **Recommended value**: generally set it to **99** to give the Agent enough loop headroom to complete complex tasks

### 8. Output Variables
- **text**: the content generated by the agent (text)
- **think**: the model's reasoning process. **Some models support think output**, which can be used with the "Reasoning Process Output" node output (Chatflow only)
- **JSON generated by the agent**: the structured output result

### 9. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Agent node is implemented by the backend to ensure the Agent executes and calls tools correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation
6. **Run node**: test-run the current node

## Test Run

- **Support status**: test run supported
- **Change node**: changing the node type is supported
- **Copy features**: copy, cut, and delete operations are supported
- **Help features**: help is supported; About is not supported

## Run Mode

The Agent node uniformly runs in **Function Calling mode**, with no strategy selection required:

- **Characteristics**: the model uses predefined tools via function calls, autonomously planning, calling, and evaluating within a loop until the task is complete
- **Advantages**: precise control and strong predictability, while retaining the ability to handle complex multi-step tasks

## Tool Management

### 1. Tool Types
- **API tools**: call external API endpoints
- **Calculation tools**: perform mathematical calculations
- **Data processing tools**: process and analyze data
- **Custom tools**: user-defined tools

### 2. Tool Configuration
- **Authorization management**: all tools in this release are already authorized
- **Toggle control**: specific tools can be enabled or disabled
- **Parameter settings**: tool parameters can be configured

### 3. Tool Usage
- **Automatic selection**: the Agent automatically selects appropriate tools based on the task
- **Manual configuration**: the tools to use can be specified manually
- **Tool chains**: combining multiple tools is supported

## Use Cases

### 1. Intelligent Assistants
- Multi-turn conversations
- Task execution
- Question answering

### 2. Automated Processing
- Data collection
- Information organization
- Report generation

### 3. Decision Support
- Data analysis
- Risk assessment
- Recommendation of options

### 4. Workflow Integration
- Calling external services
- Executing complex logic
- Multi-step processing

## Best Practices

### 1. Tool Configuration
- **Tool selection**: choose tools that match the task
- **Permission management**: set tool permissions appropriately
- **Performance optimization**: avoid using too many tools

### 2. Iteration Control
- **Count settings**: set the iteration count based on task complexity
- **Timeout handling**: set reasonable timeouts
- **Error handling**: configure an error handling strategy

## Configuration Steps

### 1. Basic Configuration
1. Configure the large language model
2. Set the instruction and query configuration

### 2. Tool Configuration
1. Add the required tools
2. Configure tool parameters
3. Set the tool toggle states

### 3. Advanced Configuration
1. Set the maximum iterations
2. Configure output variables
3. Set the error handling strategy

### 4. Testing and Validation
1. Test using the test run feature
2. Check the Agent's execution results
3. Adjust configuration parameters

## Considerations

1. **Tool management**: manage the number of tools and their permissions sensibly
2. **Iteration control**: avoid infinite loops; set a reasonable iteration count
3. **Performance considerations**: consider the performance and cost of Agent execution
4. **Error handling**: configure appropriate error handling mechanisms

## FAQ

### Q: Does the Agent node require selecting a run strategy?
A: No. The Agent node has no strategy selection; it always uses Function Calling mode.

### Q: How do I add tools?
A: Click the add tool button and select the tools you need from the tool list.

### Q: How should I set the maximum iterations?
A: The range is 1-99; generally 99 is recommended, giving the Agent enough loop headroom to complete complex tasks.

### Q: How does the Agent choose tools?
A: The Agent automatically selects appropriate tools based on the task requirements and tool capabilities.

### Q: How do I optimize Agent performance?
A: Configure tools sensibly (enable Tool Search when there are many tools) and set an appropriate iteration count.
