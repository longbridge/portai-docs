---
sidebar_position: 13
title: "Parameter Extractor"
---

## Node Overview

**Node name**: Parameter Extractor  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Parameter Extractor node uses a large language model to **extract structured parameters** from natural language text: configure the definitions of the parameters to extract (or import parameter definitions directly from a tool), and the model identifies and extracts the corresponding values from the input variable, outputting them for downstream nodes—most typically converting a user's natural language request into the call parameters needed by a downstream Tool node.

## Node Display Content

![Parameter Extractor node on the canvas: icon, name, and model info bar](./images/13-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name (displayed as "Parameter Extractor" in the interface)
- **Model in use**: displayed the same way as the LLM node (empty when not configured)
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![Parameter Extractor edit panel: model, input variable, extraction parameters (importable from tools), instruction, retry on failure, and exception handling](./images/13-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. Model Configuration
- **Model selection**: required, same as the LLM node's model configuration—parameter extraction is performed by this model

### 2. Input Variable
- **Variable selection**: type `/` to insert a variable and choose the source text to extract parameters from (such as `Start/sys.query` or an upstream node's output)

### 3. Extraction Parameters
- **Add parameter**: click `+` to manually define a parameter to extract (parameter name, type, description, required or not)
- **Import from tool**: import a tool's input parameter definitions as extraction targets in one click—**typical usage**: first use the Parameter Extractor to extract the parameters a tool needs from the user's natural language, then pass them to the downstream Tool node

### 4. Instruction
- **Additional instruction**: supplementary extraction instructions can be written (such as format requirements or ambiguity handling rules); the editor is the same as the LLM node's prompt input, supporting `/` to insert variables

### 5. Fault Tolerance Configuration
- **Retry on failure**: a switch; automatically retries when extraction fails
- **Exception handling**: a dropdown to select the exception handling strategy (defaults to **None**)

### 6. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Parameter Extractor node is consistent with the Dify platform; the specific implementation is subject to the backend.

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

### 1. Natural Language to Tool Parameters (Most Typical)
- The user says "Show me Tesla news from the last two weeks" → extract `symbol="TSLA.US"`, `days=14` → pass them to the downstream Tool node
- Combined with **Import from tool**: use the tool's input parameter definitions directly as extraction targets, with no need to build parameters by hand

### 2. Structured Information Collection
- Extract structured fields such as names, dates, and amounts from the user's natural language or multi-turn conversation text
- The extraction results can drive IF Else branching, be processed by a Code node, or be referenced by an Answer node

### 3. Ambiguity and Default Value Handling
- Define ambiguity handling rules in the **Instruction** (e.g., "default to US stocks when the market is unspecified", "convert relative date expressions to absolute dates")

## FAQ

### Q: What if extraction is inaccurate?
A: Make the parameter's **description** more specific (including format and examples), add rules in the instruction, or switch to a more capable model (see Tip 2 in section 2.5).

### Q: How do I combine it with the Tool node?
A: Use **Import from tool** to import the tool's input parameter definitions in one click; the fields of the extraction result can then plug directly into the downstream Tool node.

### Q: What if extraction fails or fields are missing?
A: Enable **Retry on failure** and configure the **Exception handling** strategy according to the importance of the flow; for required parameters, add fallback checks downstream.

## Considerations

1. **Model is required**: extraction is performed by the selected model, and extraction quality depends on the model's capability
2. **Parameter description quality**: the clearer the parameter names, types, and descriptions, the more accurate the extraction
3. **Fault tolerance configuration**: for important flows, be sure to configure retry on failure and exception handling
4. **Source text**: the input variable should point to text containing the target information (such as sys.query or an upstream output)
