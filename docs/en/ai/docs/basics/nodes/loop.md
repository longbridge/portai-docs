---
sidebar_position: 10
title: "Loop"
---

## Node Overview

**Node name**: Loop  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Loop node repeatedly executes the same logic according to a configured loop count or condition, and is commonly used for batch processing or repeated iterations. It provides powerful loop control capabilities, supporting both conditional loops and counted loops.

## Node Display Content

![Loop node on the canvas: the container holds the Home starting point and the add-node entry](./images/10-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Work modules inside the loop**: 
  - The initial node inside the loop is Home
  - Nodes can be added inside the loop (all except Start and End)
  - Nodes inside the loop operate the same way as those outside
  - The loop contains a special node (Exit Loop)
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![Loop node edit panel: loop variables, loop termination condition, maximum loop count (slider), and next step](./images/10-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Loop Variable Configuration
- **Purpose**: used in evaluating the loop termination condition
- **Variable management**: multiple loop variables can be added
- **Data production**: each loop variable produces data during the loop
- **Output variables**: serve as output variables when the loop ends

### 2. Loop Termination Condition
- **Condition configuration**: multiple loop condition items are supported; the detailed logic is the same as the "condition items" of the IF/ELSE node
- **Condition types**: various condition checks are supported
- **Logical relationship**: AND/OR logical relationships are supported

### 3. Maximum Loop Count
- **Range**: minimum 1, maximum 100
- **Safety control**: prevents infinite loops
- **Performance considerations**: balance loop count against performance

### 4. Next Step Configuration
- Adding a next node is supported

## Execution Logic

### 1. Loop Execution Flow
1. **Run the loop**: start executing the loop logic
2. **Condition check**: check whether the loop meets the termination condition or has reached the count limit
3. **Continue/stop**: stop if the condition is met, continue otherwise
4. **Logging**: each loop round records the loop's output conditions to the log
5. **Output results**: when the loop ends, the final state of the loop variables serves as the output variables

### 2. Loop Control
- **Condition control**: control the loop based on condition checks
- **Count control**: control the loop based on the loop count
- **Hybrid control**: use both condition and count control simultaneously

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

## Use Cases

### 1. Batch Processing
- **Data processing**: process large amounts of data in batches
- **File processing**: process multiple files in batches
- **API calls**: call multiple APIs in batches
- **Task execution**: execute multiple tasks in batches

### 2. Iterative Computation
- **Numerical computation**: iteratively compute numerical results
- **Algorithm implementation**: implement iterative algorithms
- **Optimization problems**: solve optimization problems
- **Convergence computation**: compute convergent results

### 3. Status Checks
- **Status monitoring**: monitor system status
- **Conditional waiting**: wait for a specific condition to be met
- **Polling checks**: poll for status changes
- **Timeout handling**: handle timeout situations

### 4. Workflow Control
- **Flow looping**: control repeated flow execution
- **Retry mechanisms**: implement retry mechanisms
- **Batch operations**: perform batch operations
- **Conditional execution**: execute based on conditions

## Loop Types

### 1. Conditional Loop
A loop based on condition checks:

```
WHILE condition is met:
    execute loop body
    update loop variables
    check termination condition
```

### 2. Counted Loop
A loop based on the loop count:

```
FOR i = 1 TO max count:
    execute loop body
    update loop variables
    check termination condition
```

### 3. Hybrid Loop
Using both condition and count:

```
FOR i = 1 TO max count:
    IF condition is met:
        execute loop body
        update loop variables
        check termination condition
    ELSE:
        exit early
```

## Best Practices

### 1. Loop Design
- **Termination conditions**: design clear termination conditions
- **Loop variables**: manage loop variables sensibly
- **Performance considerations**: consider the performance impact of the loop
- **Error handling**: add appropriate error handling

### 2. Condition Configuration
- **Clear conditions**: use clear condition logic
- **Full coverage**: make sure all cases are covered
- **Performance optimization**: optimize condition evaluation performance
- **Maintainability**: keep conditions easy to maintain

### 3. Variable Management
- **Initialization**: initialize loop variables correctly
- **Update logic**: design sensible variable update logic
- **Type safety**: make sure variable types are correct
- **Scope**: manage variable scope sensibly

### 4. Error Handling
- **Exception catching**: catch exceptions within the loop
- **Error recovery**: provide error recovery mechanisms
- **Logging**: record the loop execution process
- **User messaging**: provide friendly error messages

## Configuration Steps

### 1. Basic Configuration
1. Configure loop variables
2. Set the loop termination condition
3. Set the maximum loop count

### 2. Loop Body Configuration
1. Add nodes inside the loop
2. Configure the loop logic
3. Set up variable updates

### 3. Condition Configuration
1. Configure the termination condition
2. Set up the condition logic
3. Verify the condition correctness

### 4. Testing and Validation
1. Test using the test run feature
2. Check the loop execution results
3. Verify the termination condition

## FAQ

### Q: How do I set the loop termination condition?
A: You can set multiple conditions with AND/OR logical relationships; the loop terminates when the condition is met.

### Q: How do I determine the maximum loop count?
A: Set it based on business needs and performance considerations; the range is 1-100.

### Q: How are loop variables managed?
A: Loop variables are updated during the loop and serve as output variables when the loop ends.

### Q: How do I avoid infinite loops?
A: Set sensible termination conditions and a maximum loop count to ensure the loop can finish normally.

### Q: How do I optimize loop performance?
A: Optimize the loop body logic, reduce unnecessary operations, and set a sensible loop count.

## Considerations

1. **Termination conditions**: make sure the loop has a clear termination condition
2. **Performance considerations**: consider the impact of the loop on system performance
3. **Resource management**: watch resource usage within the loop
4. **Error handling**: add appropriate error handling mechanisms
5. **Logging**: record the loop execution process to facilitate debugging
