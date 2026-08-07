---
sidebar_position: 9
title: "Iteration"
---

## Node Overview

**Node name**: Iteration  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Iteration node is similar to a loop, but focuses more on updating variables in each iteration and passing them to the next round of processing. It is used for iterating over lists, sequences, or batches of data. It provides powerful iteration capabilities, supporting parallel mode and error handling.

## Node Display Content

![Iteration node on the canvas: the container holds the Home starting point and the iteration processing node](./images/09-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Work modules inside the iteration**: 
  - The initial node inside the iteration is Home
  - Nodes can be added inside the iteration (all except Start and End)
  - Nodes inside the iteration operate the same way as those outside
  - There are no special nodes inside the iteration
- **Parallel mode**: displays the parallel mode icon
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![Iteration node edit panel: input variable (Array), output variable (Array), parallel mode switch, and next step](./images/09-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Input Variable Configuration
- **Variable name**: select the input variable
- **Variable type**: supports iterable data types such as lists and sequences
- **Variable management**: existing variables from the workflow can be selected

### 2. Output Variable Configuration
- **Variable selection**: select an output variable from inside the node
- **Variable type**: supports various data types
- **Variable management**: output variables can be added and managed

### 3. Parallel Mode Configuration
- **Parallel mode switch**: enabled in the edit panel
- **Parallel count**: configurable after enabling parallel mode; maximum 10, minimum 2

### 4. Error Handling Configuration
Error handling options include:
- **Terminate on error**: terminates the iteration immediately when an error occurs
- **Ignore errors and continue**: ignores errors and keeps executing
- **Remove erroneous output**: removes erroneous output results

### 5. Configuring Nodes Inside the Iteration

![Edit panel of a node inside the iteration (a Tool node): referencing the current iteration element via the item variable](./images/09-3-%E8%BF%AD%E4%BB%A3%E5%86%85%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

- The edit panel of nodes inside the iteration is identical to the same node type outside (as in the Tool node above: input variables, display configuration, references, output variables, retry on failure, exception handling, etc.)
- **Key difference**: nodes inside the iteration can reference the **iteration node's `item` variable**—the element being processed in the current round of iteration (in the image above, the `query` parameter references `Get Macro.../item`, passing in one keyword from the list per round)
- The iteration's output variable is selected from the outputs of nodes inside the iteration, and the per-round results are aggregated into an Array (corresponding to the Array badge in the **Output Variables** section of the edit panel)

### 6. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Iteration node is implemented by the backend to ensure the correctness and performance of iteration processing.

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

### 1. List Processing
- **Data processing**: process each element in a list
- **Batch operations**: perform batch operations on list elements
- **Data transformation**: convert list data formats
- **Data filtering**: filter list data

### 2. Sequence Processing
- **Sequence analysis**: analyze sequence data
- **Sequence conversion**: convert sequence formats
- **Sequence computation**: compute sequence statistics
- **Sequence prediction**: make predictions based on sequences

### 3. Parallel Processing
- **Parallel computation**: process multiple tasks in parallel
- **Performance optimization**: improve processing performance
- **Resource utilization**: make full use of system resources
- **Load balancing**: achieve load balancing

## Iteration Modes

### 1. Sequential Iteration
Process each element in order:

```
FOR each item IN input_list:
    process item
    update output_variables
    pass to the next round
```

### 2. Parallel Iteration
Process multiple elements in parallel:

```
PARALLEL FOR each item IN input_list:
    process item
    update output_variables
    merge results
```

## Error Handling Strategies

### 1. Terminate on Error
- **Characteristics**: stops immediately on error
- **Applicable scenarios**: scenarios with high data quality requirements
- **Advantages**: ensures data integrity
- **Disadvantages**: may affect processing efficiency

### 2. Ignore Errors and Continue
- **Characteristics**: ignores errors and keeps processing
- **Applicable scenarios**: scenarios with high fault-tolerance requirements
- **Advantages**: improves processing efficiency
- **Disadvantages**: may affect result quality

### 3. Remove Erroneous Output
- **Characteristics**: removes erroneous output results
- **Applicable scenarios**: scenarios balancing quality and efficiency
- **Advantages**: balances quality and efficiency
- **Disadvantages**: requires extra error detection

## Best Practices

### 1. Iteration Design
- **Clear logic**: design clear iteration logic
- **Variable management**: manage iteration variables sensibly
- **Performance optimization**: consider iteration performance
- **Error handling**: add appropriate error handling

### 2. Parallel Configuration
- **Count control**: set a sensible parallel count
- **Resource management**: manage parallel resources
- **Load balancing**: achieve load balancing
- **Performance monitoring**: monitor parallel performance

### 3. Error Handling
- **Strategy selection**: choose an appropriate error handling strategy
- **Error detection**: add error detection mechanisms
- **Error recovery**: provide error recovery options
- **Error logging**: record error information

### 4. Data Management
- **Type safety**: make sure data types are correct
- **Uniform formats**: keep data formats uniform
- **Quality checks**: perform data quality checks
- **Result verification**: verify iteration results

## Configuration Steps

### 1. Basic Configuration
1. Select the input variable
2. Configure the output variable
3. Set up the iteration logic

### 2. Parallel Configuration
1. Enable parallel mode
2. Configure the parallel count

### 3. Error Handling
1. Choose an error handling strategy (terminate on error / ignore errors and continue / remove erroneous output)

### 4. Testing and Validation
1. Test using the test run feature
2. Check the iteration results
3. Verify the error handling

## FAQ

### Q: How do I choose the parallel count?
A: Choose based on system resources and task characteristics. The range is 2-10; setting it according to the number of CPU cores is recommended.

### Q: How do I choose an error handling strategy?
A: Choose based on business needs: terminate for high-quality requirements, continue for high-efficiency requirements.

### Q: What is the difference between Iteration and Loop?
A: Iteration focuses more on updating and passing variables, while Loop focuses more on repeated execution; Iteration supports parallel mode.

### Q: How do I optimize iteration performance?
A: Use parallel mode, set a sensible parallel count, optimize the iteration logic, and reduce unnecessary operations.

### Q: How are iteration results managed?
A: Iteration results are managed through output variables; various data types are supported, and results can be merged or handled separately.

## Considerations

1. **Parallelism control**: keep the parallel count reasonable to avoid excessive resource usage
2. **Error handling**: choose an appropriate error handling strategy
3. **Data quality**: ensure the quality and format of input data
4. **Performance considerations**: consider the impact of iteration on system performance
5. **Result verification**: verify the correctness of iteration results

## Help Resources

- **Help documentation**: supports jumping to the Infra help documentation
- **Test run**: supports node-level test runs
