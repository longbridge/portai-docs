---
sidebar_position: 6
title: "Question Classifier"
---

## Node Overview

**Node name**: Question Classifier  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Question Classifier node classifies input questions or recognizes intent, using the classification result as a condition to select the downstream processing branch. It intelligently analyzes user input and automatically identifies the question type or intent, providing the decision basis for subsequent flow branching.

## Node Display Content

![Question Classifier node on the canvas: model and class list, each class with its own output connection point](./images/06-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Model**: displayed the same way as the LLM node
- **Class ID and class content**: displays the configured classification information
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![Question Classifier edit panel: model, input variable, classes, advanced instruction settings, memory switches, and output variables](./images/06-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Large Language Model Configuration
- **Model selection**: same as the LLM node's model configuration
- **Parameter settings**: model parameters can be configured

### 2. Input Variable Configuration
- **Selection method**: an input box similar to the System Prompt—type `/` in the box to bring up variable selection and insert a variable (such as `Start/sys.query` in the screenshot above), rather than a standalone dropdown selector
- **Editing aids**: supports character count, copy, and maximize (same as the Prompt editor)

### 3. Class Configuration
- **Class management**: multiple classes can be displayed; at least 2 classes are required
- **Class deletion**: classes can be deleted
- **Class editing**: configuration works the same as the LLM's System_prompt configuration
- **Add class**: click to add a new class

### 4. Advanced Settings
- **Additional instruction**: supports writing an additional prompt instruction
- **Configuration method**: works the same as the LLM's System_prompt configuration

### 5. Memory
- **Feature**: same as the LLM node's memory feature, providing **long-term memory** and **short-term memory** switches

### 6. Output Variables
- **Variable name**: class_name
- **Variable type**: string
- **Meaning**: the class name

### 7. Next Step Configuration
- Adding a next node is supported
- **Each class corresponds to its own next-step branch**: on the canvas, each class has its own output connection point; whichever class is matched, that branch is taken (as in the screenshot above: Class 1 → Parameter Extractor, Class 2 → IF/ELSE)

## Execution Logic

The execution logic of the Question Classifier node is implemented by the backend to ensure accurate question classification.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation
6. **Run node**: test-run the current node

## Use Cases

### 1. Customer Service Systems
- **Question classification**: classify user questions into technical support, product inquiries, complaints and suggestions, etc.
- **Routing and dispatch**: route questions to the appropriate handling team based on the classification result
- **Priority ordering**: set different handling priorities based on question type

### 2. Content Management
- **Content classification**: automatically classify articles, comments, feedback, and other content
- **Tag generation**: automatically generate relevant tags for content
- **Content recommendation**: recommend related content based on classification results

### 3. Business Processes
- **Ticket classification**: automatically classify ticket types
- **Requirement analysis**: analyze the types of user requirements
- **Flow branching**: select different processing flows based on classification results

### 4. Data Analysis
- **Sentiment analysis**: analyze the sentiment of text
- **Topic identification**: identify the main topics of text
- **Trend analysis**: analyze trends across different categories

## Class Configuration

### 1. Class Design Principles
- **Mutual exclusivity**: classes should be mutually exclusive, avoiding overlap
- **Completeness**: classes should cover all possible cases
- **Clarity**: class names should be clear and specific
- **Extensibility**: allow new classes to be added later

### 2. Advanced Settings
- **Classification instruction**: provide extra classification guidance (written in the **Instruction** field under Advanced Settings)

## Best Practices

### 1. Class Design
- **Hierarchical structure**: use a hierarchical classification structure
- **Balance**: keep the classes balanced
- **Maintenance**: update and maintain the classification scheme regularly

### 2. Model Selection
- **Accuracy**: choose a model with high classification accuracy
- **Speed**: consider classification processing speed
- **Cost**: balance accuracy against cost

## Configuration Steps

### 1. Basic Configuration
1. Select an appropriate large language model
2. Configure the input variable
3. Set up the class configuration

### 2. Class Setup
1. Add class categories
2. Set class names and IDs
3. Configure class descriptions

### 3. Advanced Configuration
1. Set the advanced instruction
2. Configure memory
3. Set output variables

### 4. Testing and Validation
1. Test using the test run feature
2. Check classification accuracy
3. Adjust configuration parameters

## Considerations

1. **Class count**: at least 2 classes are required; no more than 20 is recommended
2. **Class quality**: ensure classification accuracy and consistency
3. **Model selection**: choose a model suited to classification tasks
4. **Data quality**: ensure the quality and format of input data
5. **Performance considerations**: consider the performance and cost of classification processing

## FAQ

### Q: How do I design a classification scheme?
A: Design a mutually exclusive and complete classification scheme based on business needs, using clear naming.

### Q: What if classification is inaccurate?
A: Check the class configuration, adjust the advanced instruction, or switch models.

### Q: How many classes can I add?
A: At least 2; no more than 20 is recommended. The exact number depends on business needs.

### Q: How do I improve classification accuracy?
A: Provide clear classification instructions and choose an appropriate model.

### Q: How is the classification result used in the downstream flow?
A: The classification result can serve as the basis for conditional decisions, selecting different processing branches.
