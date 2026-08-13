---
sidebar_position: 11
title: "Code"
---

## Node Overview

**Node name**: Code  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  
**Iteration version**: Version 1  

## Feature Description

The Code node runs a piece of custom code (such as Python and JavaScript) to implement specific business logic or computation, outputting the result for downstream nodes to use. It provides powerful programming capabilities, allowing users to execute custom code logic within a workflow.

## Node Display Content

![Code node on the canvas](./images/11-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![Code node edit panel: input variables (arg1/arg2), PYTHON3 code editor (main function), output variable (result), and retry on failure](./images/11-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Input Variable Configuration
- **Add variable**: click to add a new input variable row
- **Variable list**: supports displaying multiple variable rows, with deletion supported
- **Variable input**: multiple variables can be provided as input
- **Variable name**: variable names can be filled in
- **Variable value**: variable values can be selected via the **Select Variable** component

### 2. Code Input Box
- **Language selection**: supports choosing between Python3 and JavaScript
- **Code editing**: provides a code editor with syntax highlighting, copy, and maximize
- **Fixed entry point**: the code must implement a `main` function whose return value is a dictionary, with keys mapping one-to-one to the output variables (e.g., `def main(arg1: str, arg2: str) -> dict: return {"result": arg1 + arg2}`)

### 3. Output Variable Configuration
- **Variable name**: variable names can be filled in
- **Variable type**: variable types can be selected
- **Add/delete**: variables can be added and deleted
- **Available variable types**:
  - String / Array[String]
  - Number / Array[Number]
  - Object / Array[Object]

### 4. Retry on Failure
- **Switch**: when enabled, the node automatically retries when code execution fails

### 5. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Code node is implemented by the backend to ensure correct code execution and safety controls.

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

## Programming Language Support

### 1. Python3
- **Version**: Python 3.x
- **Standard library**: the Python standard library is supported (third-party libraries are subject to what the sandbox actually supports)
- **Syntax**: full Python syntax support

### 2. JavaScript

![JS mode: language switched to JAVASCRIPT, with the main function receiving input variables as a destructured object](./images/11-3-JS%E6%A8%A1%E5%BC%8F.png)

- **Version**: Node.js environment
- **Standard library**: the Node.js standard library is supported
- **Syntax**: full JavaScript syntax support
- **Function signature**: unlike Python mode, the JS `main` function receives input variables as a **destructured object**—`function main({arg1, arg2})`—and the fields of the returned object map to the output variables (e.g., `return { result: ... }`)

## Use Cases

### 1. Data Processing
- **Data cleansing**: clean and format data
- **Data transformation**: convert data formats and types
- **Data computation**: perform complex mathematical calculations
- **Data validation**: validate data formats and content

### 2. Business Logic
- **Conditional logic**: implement complex business rules
- **Algorithm implementation**: implement specific algorithmic logic
- **Flow control**: control the workflow execution flow
- **State management**: manage application state

### 3. Data Parsing and Processing
- **Data parsing**: parse data in formats such as JSON (for external API calls, use the Http Request / Tool nodes)
- **Batch processing**: process data in batches
- **Report generation**: generate structured report content

## Best Practices

### 1. Code Writing
- **Clear naming**: use clear variable and function names
- **Comments**: add necessary explanatory comments
- **Error handling**: add appropriate error handling
- **Performance optimization**: consider execution performance

### 2. Variable Management
- **Type safety**: make sure variable types are correct
- **Naming conventions**: use consistent naming conventions
- **Scope**: manage variable scope sensibly
- **Memory management**: watch memory usage

### 3. Error Handling
- **Exception catching**: use try-catch to handle exceptions
- **Error logging**: record error information
- **Graceful degradation**: provide degradation options
- **User messaging**: provide friendly error messages

### 4. Security Considerations
- **Input validation**: validate input data
- **Code injection**: prevent code injection attacks
- **Permission control**: control code execution permissions
- **Resource limits**: limit resource usage

## Configuration Steps

### 1. Basic Configuration
1. Choose the programming language (Python3 or JavaScript)
2. Configure input variables
3. Write the code logic

### 2. Code Writing
1. Define the processing logic
2. Handle the input variables
3. Produce the output results
4. Add error handling

### 3. Output Configuration
1. Define output variables
2. Set variable types
3. Configure variable names

### 4. Testing and Validation
1. Test using the test run feature
2. Check the code execution results
3. Verify the output variables

## Considerations

1. **Language selection**: choose an appropriate programming language based on the task
2. **Code quality**: write high-quality, maintainable code
3. **Performance considerations**: consider execution performance and resource usage
4. **Security risks**: be aware of the security risks of code execution
5. **Error handling**: add appropriate error handling mechanisms

## FAQ

### Q: Which programming languages are supported?
A: Python3 and JavaScript are currently supported.

### Q: How do I add input variables?
A: Click the "+" button to add a new input variable row.

### Q: What output variable types are available?
A: String, Number, Object, and their corresponding Array types are supported.

### Q: Are there security restrictions on code execution?
A: Yes, code execution has security restrictions; dangerous operations are not allowed.

### Q: How do I debug code?
A: Use the test run feature to debug code and inspect the execution results.

## Help Resources

- **Help documentation**: supports jumping to the Infra help documentation
- **Test run**: supports node-level test runs
