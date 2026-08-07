---
sidebar_position: 7
title: "IF Else"
---

| Attribute | Value |
|------|-----|
| **Node name** | IF Else |
| **Version** | v1.0 |
| **Supported scenarios** | Chatflow Agent ✓, Workflow Agent ✓ |
| **Test run support** | - |

## Quick Reference

| Operator | Function | Example |
|--------|------|------|
| **contains** | Checks that a string contains a substring | "hello world" contains "world" |
| **does not contain** | Checks that a string does not contain a substring | "hello" does not contain "world" |
| **is** | Checks that values are equal | status is "done" |
| **is not** | Checks that values are not equal | type is not "admin" |
| **is empty** | Checks that a value is empty | email is empty |
| **is not empty** | Checks that a value is not empty | username is not empty |

## Feature Description

The IF Else node provides powerful conditional logic capabilities:

- **Conditional branching**: supports multi-level IF, ELIF, ELSE conditions
- **Rich operators**: supports string, comparison, empty-value, and other operators
- **Logical combination**: supports combining conditions with AND and OR
- **Flow control**: controls the workflow execution path based on conditions

## Node Display Content

![IF/ELSE node on the canvas: Case 1 (IF), Case 2/Case 3 (ELIF), and ELSE each with independent output connection points, with OR shown between multiple conditions](./images/07-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Condition logic**: displays the configured condition logic (see the annotations in the image on the right for details)
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content

## Node Edit Panel

![IF/ELSE edit panel: IF/ELIF condition configuration (referenced variable + operator + comparison value, AND/OR toggle), +ELIF to add branches, the ELSE fallback note, and each branch's target node in Next Step](./images/07-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. IF Condition Branch
- **Sub-conditions**: variables can be selected; clicking opens the variable selection window
- **Comparison value**: a value can be entered
- **Operators**: the operators between the variable and the comparison value include:
  - **contains**: checks whether the variable contains the specified value
  - **does not contain**: checks whether the variable does not contain the specified value
  - **starts with**: checks whether the variable starts with the specified value
  - **ends with**: checks whether the variable ends with the specified value
  - **is**: checks whether the variable equals the specified value
  - **is not**: checks whether the variable does not equal the specified value
  - **is empty**: checks whether the variable is empty
  - **is not empty**: checks whether the variable is not empty
- **Logical relationship**: the relationship between sub-conditions, supporting AND or OR

### 2. ELIF (Else IF Condition Branch)
- **Configuration**: same as the IF condition branch; can be added and removed
- **Condition evaluation**: multiple ELIF conditions are supported
- **Priority**: conditions are evaluated in order

### 3. ELSE
- **Default branch**: executed when none of the conditions are met
- **Essential branch**: it is recommended to always include an ELSE branch

### 4. Next Step Configuration
- **Branch count**: a next step is automatically displayed for each branch
- **Branch connections**: each branch can connect to a different next node

## Execution Logic

The execution logic of the IF Else node is implemented by the backend to ensure conditions are evaluated correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation

## Test Run

- **Support status**: test run not supported
- **Change node**: changing the node type is supported
- **Copy features**: copy, cut, and delete operations are supported

## Condition Operators in Detail

### 1. String Operators
- **contains**: checks whether a string contains a substring
- **does not contain**: checks whether a string does not contain a substring
- **starts with**: checks whether a string starts with the specified prefix
- **ends with**: checks whether a string ends with the specified suffix

### 2. Comparison Operators
- **is**: checks whether values are equal
- **is not**: checks whether values are not equal

### 3. Empty-Value Operators
- **is empty**: checks whether a value is empty (the variable does not exist, is null, or is an empty string)
- **is not empty**: checks whether a value is not empty

## Use Cases

### 1. Business Logic Branching
- **User type checks**: execute different logic based on user type
- **Permission control**: perform different operations based on user permissions
- **State handling**: perform different handling based on an object's state
- **Flow control**: control the direction of the flow based on conditions

### 2. Data Processing
- **Data validation**: handle data differently based on its format
- **Type checks**: perform different operations based on data type
- **Format conversion**: perform different conversions based on data format

### 3. Conditional Routing
- **Message routing**: route messages to different handlers based on message type
- **Request dispatch**: dispatch requests to different services based on request parameters
- **Task assignment**: assign tasks to different processors based on task type
- **Resource selection**: select different resources based on conditions

### 4. Exception Handling
- **Error classification**: handle errors differently based on error type
- **Retry logic**: decide whether to retry based on error type
- **Degradation handling**: perform degraded handling based on system state
- **Alert handling**: handle alerts differently based on alert level

## Best Practices

### 1. Condition Design
- **Clear logic**: design clear condition logic
- **Full coverage**: make sure all possible cases are covered
- **Sensible priority**: set a sensible priority for conditions
- **Maintainability**: keep conditions easy to maintain

### 2. Operator Selection
- **Type matching**: choose operators appropriate for the data type
- **Performance considerations**: consider the performance impact of operators
- **Readability**: choose operators that are easy to understand
- **Accuracy**: ensure the operator behaves accurately

### 3. Branch Management
- **Count control**: keep the number of branches reasonable
- **Clear structure**: keep the branch structure clear
- **Naming conventions**: use clear branch names
- **Documentation**: add necessary documentation

### 4. Error Handling
- **Exceptional cases**: consider handling exceptional cases
- **Default branch**: always provide a default branch
- **Error messages**: provide friendly error messages
- **Logging**: log the condition evaluation process

## Configuration Steps

### 1. Basic Configuration
1. Configure the IF condition branch
2. Set the comparison operator
3. Configure the comparison value

### 2. Condition Extension
1. Add ELIF conditions (optional)
2. Configure the ELSE branch
3. Set the logical relationship

### 3. Branch Connection
1. Configure the next step for each branch
2. Connect the corresponding nodes
3. Verify the branch logic

### 4. Testing and Validation
1. Check the condition configuration
2. Verify the branch logic
3. Test all cases

## FAQ

### Q: How do I add multiple conditions?
A: Use ELIF to add multiple conditions, or combine multiple sub-conditions with AND/OR.

### Q: How do I choose an operator?
A: Choose an appropriate operator based on the data type and the comparison you need.

### Q: How many branches can there be?
A: There is no theoretical limit, but keeping the number of branches reasonable is recommended.

### Q: How do I ensure conditions cover all cases?
A: Use the ELSE branch as the default case to ensure every situation has corresponding handling.

### Q: How is the performance of condition evaluation?
A: Condition evaluation performs very well, but overly complex condition logic should be avoided.

## Considerations

1. **Condition completeness**: make sure the conditions cover all possible cases
2. **Operator matching**: make sure operators match the data types
3. **Logical correctness**: verify the correctness of the condition logic
4. **Performance considerations**: avoid overly complex condition evaluation
5. **Error handling**: add appropriate error handling mechanisms
