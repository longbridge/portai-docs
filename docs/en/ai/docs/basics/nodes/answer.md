---
sidebar_position: 2
title: "Answer"
---

## Node Overview

**Node name**: Answer  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (not supported)  

## Feature Description

The Answer node outputs node results or the final response to the Chat system. It is commonly used to end a conversation turn or provide the final information to the upstream caller. It is the terminal node in a Chatflow Agent, responsible for formatting and outputting the final answer content.

## Node Display Content

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Output template**: a preview of the template content with blank lines removed
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content


![Answer node on the canvas (left) and its edit panel (right)](./images/02-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA%E4%B8%8E%E9%85%8D%E7%BD%AE.png)

## Node Edit Panel

![Answer node edit panel: reply template, save context, long-term memory, and output variables](./images/02-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Reply Template Editing

#### a. Editor Features
- **Variable insertion**: various variables can be inserted into the template
- **Text input**: plain text content can be entered directly
- **Variable selection**: type "/" to bring up the variable value selector

#### b. Editing Aids
- **Length counter**: counts the template length; variable names count toward the template length
- **Copy**: click the copy button to copy the template
- **Maximize**: click the maximize button to expand the template view

### 2. Save Context

**The Save Context feature is essential for context preservation.** It saves the current turn's context when the Chatflow run finishes, making it available to subsequent conversation turns. This context includes all kinds of information about tool calls.

- Select the context variable to save here, e.g., `LLM/context` (of type array[context]) is selected in the image above
- **If a Chatflow needs solid context management, you must save the context variable of the LLM node or Agent node here**—otherwise, in the next conversation turn, the model will have no awareness of this turn's tool call process and intermediate results

![Answer node edit panel: reply template, save context, long-term memory, and output variables](./images/02-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)


### 3. Long-Term Memory

- When enabled, extracted long-term memories are **displayed synchronously** as the content is output
- This is not a mandatory feature; enable it as needed
- When enabled, the output variables section gains `user_memory_changes` (of type array[string]), which records the long-term memory changes extracted in this turn

### 4. Additional Data

- The Additional Data feature is used to implement certain features of the main Agent
- Agents built by regular users generally cannot use it yet; related feature tutorials will be opened up gradually

### 5. Output Variables

- `answer`: String type, the final answer content output by this node
- `user_memory_changes`: array[string] type, the long-term memory change records (appears only when **Long-Term Memory** is enabled)

### 6. Next Step Configuration
- The Answer node is a terminal node and does not support adding a next node

## Execution Logic

The execution logic of the Answer node is implemented by the backend to ensure the answer is output correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation

## Node Count Limits

- **Limit**: an Agent can have multiple Answer nodes
- **Purpose**: can be used as a terminal node; multiple Answer nodes suit different branches—for example, after a condition check or question classification, each branch leads to its own Answer node and outputs the corresponding reply content

## Test Run

- **Support status**: test run not supported
- **Change node**: changing the node type is supported
- **Copy features**: copy, cut, and delete operations are supported

## Use Cases

### 1. Conversation Termination
- Serves as the final output of a conversation in a Chatflow Agent
- Presents AI-processed results to the user in a friendly way

### 2. Result Formatting
- Formats complex processing results into user-readable text
- Supports variable substitution to dynamically generate personalized content

### 3. Multilingual Support
- Supports output templates in different languages
- Output format can be adjusted based on the user's language preference

## Template Writing Tips

### 1. Directly Reference Upstream Node Output (Most Common)

Most scenarios do not require a complex template—**simply select the output variable of the LLM node or Agent node**:

- In the reply template editor, type `/` to bring up variable selection and pick the upstream node's `text` output (e.g., `LLM/text`)
- Put only this single variable in the template; whatever the model generates is output verbatim—simple and reliable

### 2. Debug Output Tips

When debugging a Chatflow, you can **temporarily add intermediate variables to the template** to print the flow's internal state directly into the reply for inspection:

```
[Debug]
Classification result: {{classifier node output}}
Retrieval hits: {{knowledge retrieval output}}
---
{{LLM/text}}
```

- This quickly pinpoints where the problem lies: a wrong branch, empty retrieval, or abnormal model generation
- You can also take advantage of multiple Answer nodes by attaching a dedicated debug Answer node to a specific branch to output that branch's intermediate variables
- **Remember to remove the debug content before publishing** to avoid exposing internal information to end users

## FAQ

### Q: How do I insert variables?
A: You can insert variables by typing "/".

### Q: How is the template length calculated?
A: The template length includes all text content and variable names; variable values do not count toward the length.

### Q: Which variable types are supported?
A: Basic data types such as String, Number, Object, and Array are supported.

### Q: How do I handle empty values?
A: It is recommended to use conditional checks in the template to handle possible empty values.
