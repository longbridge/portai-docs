---
sidebar_position: 8
title: "Branch Aggregator"
---

## Node Overview

**Node name**: Branch Aggregator  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Branch Aggregator node aggregates variables output by multiple input sources or nodes into a single variable (such as array[string]) for downstream nodes to use. It integrates data from different branches, achieving data convergence and unified processing.

## Node Display Content

![Branch Aggregator: the outputs of two parallel branches aggregated into one array[string] variable](./images/08-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Input variables**: displays node logo + variable name
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content

## Node Edit Panel

![Branch Aggregator edit panel: variable assignment (type ARRAY[STRING]), the aggregation grouping switch, and next step](./images/08-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Module States
The Branch Aggregator node has two major states (switched by the **Aggregation Grouping** toggle in the edit panel):

#### a. Ungrouped State
- **Variable type**: the first variable selected determines the variable type (the type badge, such as ARRAY[STRING], is shown at the top right of the **Variable Assignment** section)
- **Add variable button**: 
  - When no variable has been selected, all variables are shown
  - When a variable has been selected, variables are filtered by that variable's type before being added
- **Delete variable**: click to delete a variable
- **Variable list**: displays node name/variable name

#### b. Grouped State

![Panel after aggregation grouping is enabled: Group sections, the add group button, and group output variables](./images/08-3-%E8%81%9A%E5%90%88%E5%88%86%E7%BB%84.png)

- **How to enable**: turn on the **Aggregation Grouping** switch and the variable assignment area switches to grouped form
- **Group management**: each group (e.g., Group 1) adds its own variables to assign
- **Group configuration**: click **+ Add Group** to create multiple groups
- **Group variables**: each group can contain multiple variables
- **Output variables**: each group produces its own output variable `Group N.output` (of type any), which downstream nodes can reference individually

### 2. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Branch Aggregator node is implemented by the backend to ensure branches are aggregated correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation
6. **Run node**: test-run the current node

## Test Run

- **Support status**: test run not supported
- **Change node**: changing the node type is supported
- **Copy features**: copy, cut, and delete operations are supported

## Use Cases

### 1. Data Convergence
- **Multi-source data**: converge information from multiple data sources
- **Branch results**: integrate processing results from different branches
- **Parallel processing**: merge data processed in parallel
- **Flow integration**: integrate the outputs of multiple flows

### 2. Data Merging
- **List merging**: aggregate same-type outputs of multiple branches into a single list
- **Same-type variable aggregation**: converge same-type variables from multiple branches into a single variable reference

### 3. Result Integration
- **Report generation**: integrate multiple analysis results
- **Data summarization**: summarize statistical data
- **Result comparison**: compare results from different branches
- **Decision support**: integrate the data needed for decisions

### 4. Flow Control
- **Conditional branches**: process the results of conditional branches
- **Loop results**: integrate the results of loop processing
- **Exception handling**: integrate the results of exception handling
- **State management**: manage flow state

## Configuration Modes

### 1. Ungrouped Mode
Suitable for simple data aggregation scenarios:

#### Configuration Steps
1. **Choose the variable type**: select the first variable to determine the overall variable type
2. **Add variables**: filter and add variables based on the variable type
3. **Manage variables**: delete unneeded variables
4. **View the list**: view node names and variable names

### 2. Grouped Mode
Suitable for complex data aggregation scenarios:

#### Configuration Steps
1. **Create groups**: create multiple groups
2. **Configure groups**: add variables to each group individually
3. **Manage groups**: manage the variables within groups
4. **Integrate groups**: integrate the data across groups

## Best Practices

### 1. Variable Selection
- **Consistent types**: select variables of the same type for aggregation
- **Data quality**: ensure the quality of input data
- **Naming conventions**: use clear variable names
- **Count control**: keep the number of variables reasonable

### 2. Group Design
- **Clear logic**: group according to business logic
- **Sensible structure**: design a sensible group structure
- **Maintainability**: keep the group structure easy to maintain
- **Extensibility**: consider future expansion needs

### 3. Data Integration
- **Uniform formats**: keep data formats uniform
- **Type conversion**: perform type conversion when necessary
- **Error handling**: add appropriate error handling
- **Performance optimization**: consider aggregation performance

### 4. Result Output
- **Clear structure**: keep the output structure clear
- **Complete information**: make sure the output information is complete
- **Standard formats**: use standard output formats
- **Ease of use**: make sure the output is easy for downstream use

## Configuration Steps

### 1. Basic Configuration
1. Choose the aggregation mode (grouped or ungrouped)
2. Configure input variables
3. Set the variable type

### 2. Variable Management
1. Add the required variables
2. Configure variable attributes
3. Manage the variable list

### 3. Group Configuration (Grouped Mode)
1. Create groups
2. Add variables to groups
3. Configure group attributes

### 4. Testing and Validation
1. Check the configuration correctness
2. Verify the aggregation result
3. Adjust configuration parameters

## FAQ

### Q: How do I choose the aggregation mode?
A: Choose based on data complexity and business needs: ungrouped mode for simple scenarios, grouped mode for complex ones.

### Q: How is the variable type determined?
A: The variable type is determined by the first variable selected; subsequently added variables must match the first variable's type.

### Q: How many variables can I add?
A: There is no explicit limit, but keeping the number reasonable for your actual needs is recommended.

### Q: How do I manage groups?
A: You can create multiple groups; each group manages its variables independently and everything is aggregated at the end.

### Q: How is the aggregation result output?
A: The aggregation result is output in the configured format for downstream nodes to use.

## Considerations

1. **Type consistency**: make sure the aggregated variables have consistent types
2. **Data quality**: ensure the quality and completeness of input data
3. **Performance considerations**: consider the performance impact of aggregating large amounts of data
4. **Error handling**: add appropriate error handling mechanisms
5. **Result verification**: verify the correctness of the aggregation result
