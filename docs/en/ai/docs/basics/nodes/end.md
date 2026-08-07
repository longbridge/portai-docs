---
sidebar_position: 3
title: "End"
---

## Node Overview

**Node name**: End  
**Supported scenarios**: Chatflow Agent (not supported), Workflow Agent (supported)  

## Feature Description

The End node terminates the execution of the current flow and can carry the processing results or status information. It is typically used after all logic has been processed. It is the terminal node in a Workflow Agent and outputs the final result as JSON.

## Node Display Content

![End node on the canvas (left) and its edit panel (right)](./images/03-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA%E4%B8%8E%E9%85%8D%E7%BD%AE.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Output variables**: displays variable values, not variable names
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content

## Node Edit Panel


### 1. Output Variable Configuration

#### a. Variable Management
- **Initial state**: a blank row is shown right after creation
- **Add variable**: click the plus button to add a new output variable row
- **Delete variable**: click the delete button to remove a variable row
- **Variable count**: at least 1 and at most 50 output fields

#### b. Variable Configuration
- **Variable name**: the output variable name; names must not be duplicated across rows, must not start with a non-letter character, and may only contain letters, digits, and underscores
- **Duplicate check**: when duplicated, the message "Duplicate output variable" is shown
- **Variable value**: click the variable value to bring up the **Select Variable Value** feature
- **Variable selection**: existing variables from the workflow can be selected as outputs

### 2. Next Step Configuration
- **No next step**: as a terminal node, the End node does not support connecting to a next node

## Execution Logic

The execution logic of the End node is implemented by the backend to ensure the flow terminates correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation

## Node Count Limits

- **Limit**: multiple End nodes are allowed
- **Purpose**: can be used as a terminal node

## Test Run

- **Support status**: test run not supported
- **Change node**: changing the node type is supported
- **Copy features**: copy, cut, and delete operations are supported

## Use Cases

### 1. Workflow Termination
- Serves as the final output of a workflow in a Workflow Agent
- Outputs processing results as structured data

### 2. Data Output
- Outputs processing results in JSON format
- Convenient for downstream systems or API callers

## Output Format Example

### 1. JSON Output
```json
{
  "b": "a"
}
```

## Best Practices

### 1. Variable Naming
- **Semantic**: use meaningful variable names
- **Consistent**: keep naming conventions consistent
- **No duplicates**: make sure variable names are not duplicated

### 2. Output Structure
- **Structured**: use a clear data structure
- **Standardized**: follow industry-standard data formats
- **Extensible**: design an extensible output structure

### 3. Error Handling
- **Status codes**: include processing status information
- **Error messages**: provide detailed error descriptions
- **Debug information**: include necessary debugging information

## Configuration Steps

### 1. Add Output Variables
1. Click the "+" button to add a new output variable
2. Enter the variable name (make sure it is unique)
3. Select the source of the variable value

### 2. Configure Variable Values
1. Click the variable value field
2. Select an appropriate variable from the variable selector
3. Confirm the configuration

### 3. Validate the Configuration
1. Check whether any variable names are duplicated
2. Confirm that the variable values are correct
3. Verify that the output format meets requirements

## Considerations

1. **Variable uniqueness**: make sure all output variable names are unique
2. **Count limit**: the number of output variables must be between 1 and 50
3. **Terminal node**: the End node does not support connecting to a next node
4. **Data format**: pay attention to the format and type of the output data

## FAQ

### Q: How do I add an output variable?
A: Click the "+" button to add a new output variable row.

### Q: What if a variable name is duplicated?
A: The system will show "Duplicate output variable"; you need to change it to a unique name.

### Q: How many output variables can I add at most?
A: You can add up to 50 output variables.

### Q: Can the End node connect to a next node?
A: No. The End node is a terminal node and does not support connecting to a next node.

### Q: How do I select a variable value?
A: Click the variable value field and a variable selector will pop up, from which you can select any variable in the workflow.
