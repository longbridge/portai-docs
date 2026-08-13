---
sidebar_position: 12
title: "Variables Transformer"
---

## Node Overview

**Node name**: Variables Transformer  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Variables Transformer node formats, type-converts, or merges/splits existing variables in the workflow to meet the data requirements of downstream nodes. It provides powerful data transformation capabilities, supporting the Jinja2 template language for complex variable processing.

## Node Display Content

![Variables Transformer node on the canvas](./images/12-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![Variables Transformer edit panel: template type (variable mode), input variable (arg1), template code ({{ arg1 }}), and output variable (output)](./images/12-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Template Type
- **Type selection**: select the template type from a dropdown (defaults to **Variable Mode**; the available options are subject to the product)

### 2. Input Variable Configuration
- **Configuration method**: same as the Python node's input variable configuration
- **Variable management**: input variables can be added and managed
- **Variable selection**: existing variables from the workflow can be selected

### 3. Code Configuration (Jinja2 Supported)
- **Template language**: supports the Jinja2 template language
- **Copy**: the code content can be copied
- **Maximize**: the editor window can be maximized

### 4. Output Variable Configuration
- **Variable name**: output
- **Variable type**: string
- **Meaning**: the transformed content

### 5. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Variables Transformer node is implemented by the backend to ensure variables are transformed correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation
6. **Run node**: test-run the current node

## The Jinja2 Template Language

### 1. Basic Syntax
- **Variable output**: `{{ variable_name }}`
- **Control structures**: `{% if condition %}...{% endif %}`
- **Loop structures**: `{% for item in list %}...{% endfor %}`
- **Comments**: `{# this is a comment #}`

### 2. Filters
- **String filters**: `upper`, `lower`, `title`, `capitalize`
- **Number filters**: `round`, `int`, `float`, `abs`
- **List filters**: `join`, `length`, `first`, `last`, `list`

### 3. Built-in Functions
- **range**: generates a sequence of numbers
- **dict**: creates a dictionary

## Use Cases

### 1. Data Formatting
- **Date formatting**: convert dates to a specified format
- **Number formatting**: format the display of numbers
- **Text formatting**: format text content
- **JSON formatting**: format JSON data

### 2. Type Conversion
- **String conversion**: convert to string type
- **Number conversion**: convert to numeric type
- **Boolean conversion**: convert to Boolean type
- **List conversion**: convert to list type

### 3. Data Merging
- **String concatenation**: merge multiple strings
- **List merging**: merge multiple lists
- **Object merging**: merge multiple objects
- **Conditional merging**: merge data based on conditions

### 4. Data Splitting
- **String splitting**: split strings
- **List splitting**: split lists
- **Object splitting**: split objects
- **Conditional splitting**: split data based on conditions

## Best Practices

### 1. Template Design
- **Concise and clear**: keep templates concise and easy to understand
- **Error handling**: add appropriate error handling
- **Performance optimization**: avoid complex nested structures
- **Maintainability**: use clear variable names

### 2. Variable Management
- **Naming conventions**: use clear variable names
- **Type safety**: make sure variable types are correct
- **Default values**: set default values for variables that may be empty
- **Scope**: manage variable scope sensibly

### 3. Error Handling
- **Exceptional cases**: consider handling exceptional cases
- **User messaging**: provide friendly error messages
- **Degradation handling**: provide degradation options
- **Logging**: record error information

### 4. Performance Considerations
- **Template complexity**: avoid overly complex templates
- **Loop optimization**: optimize loop structures
- **Caching**: use caching sensibly
- **Resource management**: watch resource usage

## Configuration Steps

### 1. Basic Configuration
1. Configure input variables
2. Write the Jinja2 template
3. Set the output variable

### 2. Template Writing
1. Analyze the input data structure
2. Design the transformation logic
3. Write the Jinja2 template
4. Add error handling

### 3. Testing and Validation
1. Test using the test run feature
2. Check the transformation result
3. Verify the output format
4. Adjust the template logic

## FAQ

### Q: How do I learn Jinja2 syntax?
A: Refer to the official Jinja2 documentation, or check the example templates provided by the platform.

### Q: Which Jinja2 features are supported?
A: The core Jinja2 features are supported, including variables, filters, and control structures.

### Q: How do I handle complex nested data?
A: Use Jinja2 loops and conditional structures to handle complex nested data.

### Q: What if template execution fails?
A: Check the template syntax, variable names, and data types, and use the test run feature to debug.

### Q: How do I optimize template performance?
A: Avoid complex nested structures, keep the logic simple, and use filters sensibly.

## Considerations

1. **Syntax correctness**: make sure the Jinja2 syntax is correct
2. **Variable existence**: make sure referenced variables exist
3. **Type matching**: watch for variable type mismatches
4. **Performance considerations**: avoid overly complex templates
5. **Error handling**: add appropriate error handling
