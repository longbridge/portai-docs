---
sidebar_position: 1
title: "Start"
---

## Node Overview

**Node name**: Start  
**Supported scenarios**: Chatflow Agent, Workflow Agent  

## Feature Description

The Start node is the starting node of a flow, used to initialize the flow context or prepare initial data. It is the entry point of every workflow, responsible for setting the flow's initial state and variables.

## Node Display Content


### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name (defaults to "Start")
- **Custom fields**: custom variables added by the user
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content

## Node Edit Panel


### 1. Node Icon and Name (Common Feature)
- **Node icon**: displays the node type icon
- **Node name**: a default name is generated in the current language at creation time and can be modified
- **Locate current node**: click to quickly locate the current node
- **Help documentation**: click to jump to the Infra help documentation

### 2. Input Field Configuration

#### a. Custom Variables
- Custom variables can be added: click the **+ button** to the right of the **Input Fields** title (see the red arrow in the image below)
- Custom variables can be empty
- The variable display content includes:
  - Variable symbol
  - Variable name
  - Variable description
  - Variable type icon
  - Required/optional icon

![Location of the add button (+) for input fields, with the system variable list below](./images/01-3-%E8%BE%93%E5%85%A5%E5%AD%97%E6%AE%B5%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE.png)

> 💡 **The two application types depend on "Input Fields" in completely different ways:**
>
> - **Chatflow: usually not needed**. User input is passed in via the system variable `sys.query`. Later on, the Agent platform will open up **structured input capability for the input box**—at that point users will be able to fill in content field by field in the chat input box, and the input fields you define here will actually take effect. For now you can simply skip this configuration.
> - **Workflow: strongly depends on custom input fields**. A Workflow has no chat input box, so the custom fields of the Start node are the **input parameters** of the entire flow (passed in by the API caller or a trigger). You must clearly define the field names, types, and whether they are required here so that downstream nodes can reference them. When trigger mode is enabled, the input variables switch to the fields defined by the trigger (see [Workflow Triggers](../capabilities/workflow-triggers)).

#### b. Default Variables (System Variables)
- `sys.query`: String type (exists only in Chatflow Agent, present by default). This is the most critical input variable and will be used later.
- `sys.language`: String type (exists only in Chatflow Agent, present by default)
- `sys.user_id`: String (system variable, cannot be removed)
- `sys.app_id`: String (system variable, cannot be removed)
- `sys.workflow_id`: String (system variable, cannot be removed)
- `sys.workflow_run_id`: String (system variable, cannot be removed)
  As a user, you generally do not need to know what the other system variables mean, so they are not covered in detail here.

### 3. Safety and Compliance Switches

![Safety and compliance switch configuration area, with the output variables and next-step sections](./images/01-4-%E5%AE%89%E5%85%A8%E5%90%88%E8%A7%84%E5%BC%80%E5%85%B3.png)

The Start node provides four safety and compliance switches, all disabled by default:

#### a. Hide Personally Identifiable Information
- When enabled, the system automatically detects **personally identifiable information (PII)** in user input and replaces it with asterisks (`*`)
- Hidden information will **no longer be displayed** in subsequent conversations
- When enabled, the output variables section provides `pii_flagged` (Boolean type)—a PII check flag that lets downstream nodes determine whether the current input triggered PII detection

#### b. Block Harmful Content
- When enabled, the system automatically detects user input involving **hate, harassment, self-harm, violence, sexual content, minor-related content, illegal content, and other high-risk content types**
- Once such content is detected, the system **blocks the response** and stops further processing or returning results

#### c. Block Harmful Financial Content
- When enabled, the system automatically detects and reviews user input in accordance with applicable laws and regulations, regulatory requirements, and the platform's compliance and risk control rules
- If content involving **illegal trading advice** is detected, including but not limited to:
  - Money laundering (e.g., concealing sources of funds, layering transactions, splitting transactions)
  - Tax evasion, securities fraud, insider trading, market manipulation
  - Terrorist financing or sanctions evasion
  - Trading with stolen or forged identities, accounts, or payment instruments
  - Other clearly illegal or prohibited trading behavior and financial crimes
- The system will **block the response and terminate further processing**

#### d. Enforce Trading Password Verification
- An **internal-use** switch; not recommended for regular users

### 4. Output Variables

- `pii_flagged`: Boolean type, the PII check flag (used together with the **Hide Personally Identifiable Information** switch, see above)

### 5. Next Step Configuration
- **Displays the connected next node**: 
  - On hover, shows a jump-to-node action and more options
  - More options include:
    - Click Change: shows the add-node feature
    - Click Delete: deletes the next node
    - Click Disconnect: disconnects the link to the next node
- **Add parallel node button**: click to show the add-node feature

### 6. Close Window (Common Feature)

## Execution Logic

The execution logic of the Start node is implemented by the backend to ensure correct flow execution.

## Context Menu Actions

The context menu contains the following options:
1. Help link

> The Start node is the sole entry point of a workflow and does **not support** change node, copy, duplicate, or delete operations.

## Node Count Limits

- **Limit**: only one Start node is allowed
- **Purpose**: serves as the sole entry point of the workflow

## Test Run

- **Support status**: test run supported
- **Change node**: not supported
- **Copy features**: copy, cut, and delete are not supported


## Usage Tips

1. **Variable planning**: define all variables the flow will need in the Start node up front
2. **Naming conventions**: use clear naming conventions for custom variables
3. **Required settings**: set the required/optional attribute of variables appropriately
4. **Flow design**: make sure the Start node connects to an appropriate next node

## Considerations

- The Start node is a mandatory node; every workflow must have exactly one
- System variables cannot be deleted, ensuring the flow runs correctly
- Custom variables can be flexibly configured according to business needs
- It is recommended to complete all necessary initialization in the Start node
