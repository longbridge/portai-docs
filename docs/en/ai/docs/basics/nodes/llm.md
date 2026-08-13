---
sidebar_position: 4
title: "LLM"
---

| Attribute | Value |
|------|-----|
| **Node name** | LLM |
| **Version** | v1.0 |
| **Supported scenarios** | Chatflow Agent ✓, Workflow Agent ✓ |
| **Test run support** | ✓ |

## Quick Reference

| Configuration Item | Required | Description |
|--------|------|------|
| **Model selection** | ✓ | Select from the models configured in service settings |
| **System Prompt** | ✓ | Sets the AI's role and behavioral guidelines |
| **User Prompt** | ✓ | The specific task instruction |
| **Memory** | - | Conversation history memory |
| **Structured output** | - | Output in JSON Schema format |

## Feature Description

The LLM node is the core node of the LongbridgeAI Agent Platform, providing powerful AI capabilities:

- **Text processing**: natural language understanding, reasoning, and generation
- **Memory management**: maintains conversation context and history
- **Structured output**: supports structured data output in JSON format

## Node Display Content

![LLM node on the canvas (left) and its edit panel (right)](./images/04-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA%E4%B8%8E%E9%85%8D%E7%BD%AE.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Model in use**: 
  - Model provider icon
  - Model name
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

### 1. Model Configuration
- **Model selection**: select from the models configured in service settings; model parameters can be configured
- **Parameter configuration**: some input parameters can be adjusted; the adjustable parameters are subject to what the configuration panel actually displays
- **Model management**: there is no model management in this release; Longbridge initializes it internally and provides test model accounts

#### a. Selecting a Single Model

The model dropdown list is grouped by **vendor**; you can select a specific model under a vendor (as shown below, `qwen-flash` under the vendor `alibaba`), or search for a model name directly via the search box at the top:

![Model selection: grouped by vendor, choose the model under the corresponding vendor](./images/04-2-%E6%A8%A1%E5%9E%8B%E9%80%89%E6%8B%A9.png)

#### b. SOTA Label

Some model names carry a **SOTA** label, which means the model is **more expensive but also better**—more capable and consuming more of your usage quota. Choose as needed:

![Models with the SOTA label: stronger but more expensive](./images/04-3-SOTA%E6%A0%87%E7%AD%BE.png)

#### c. Model Combos

Switch to the **Model Combos** tab to select one of the platform's **built-in model combos** (such as the Google series, Qwen series, etc.):

- A combo **uses the models in order**: when the first model is unavailable, it automatically switches to the second, and so on
- Suitable for scenarios with high stability requirements, avoiding flow interruptions caused by a single model failure
- Each combo is labeled with its applicable scenarios (multimodal, Chinese, enterprise, Agent, etc.), so you can pick as needed

![Model combos: used in order; automatically switches to the second model when the first is unavailable](./images/04-4-%E6%A8%A1%E5%9E%8B%E7%BB%84%E5%90%88.png)

### 2. Context Configuration
- **Variable selection**: click the variable value to bring up the **Select Variable Value** feature
- **Error check**: if the context variable is not filled into the prompt, the error "Please fill the context variable into the prompt" is shown

### 3. System Prompt
- **Input box**: same input features as the Answer template
- **Limitation**: Jinja templates are not supported
- **Deletion**: cannot be deleted

### 4. User Prompt / Assistant Prompt
- **Input box**: same input features as the Answer template
- **Deletion**: prompts can be deleted
- **Add message**: after clicking the add message button, new User/Assistant prompt editors appear in turn

![Prompt message configuration: the Assistant message carries the context variable, and the last message is User](./images/04-5-Prompt%E6%B6%88%E6%81%AF%E9%85%8D%E7%BD%AE.png)

- **Assistant Prompt**: the Assistant Prompt is the AI assistant's output, and it can also serve as **context input**—as shown above, the Assistant message carries the `Start/context` variable (with the "context" label), feeding the historical context back to the model
- **Order requirement**: **the last prompt must be a User Prompt** (usually carrying `Start/sys.query`, i.e., the user's input for this turn)

### 5. Memory

Memory is divided into two independent switches: **long-term memory** and **short-term memory**:

#### a. Long-Term Memory

- When enabled, the LLM automatically extracts **content/preferences you explicitly ask it to remember** from the conversation (such as your preferred investment style)
- In subsequent conversations, the saved long-term memory is provided to the LLM as context, making answers more **personalized**

#### b. Short-Term Memory

![Short-term memory: setting the memory window size in turns](./images/04-6-%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86.png)

- When enabled, short-term memory provides the current session's content to the LLM as context based on the **memory window turn count** you set, so answers stay coherent with the preceding conversation
- **Short-term memory only applies to the current session**; it no longer takes effect after switching sessions
- The memory window supports dragging the slider or entering the number of turns directly (set to 10 in the image above)

### 6. Output Control Switches

#### a. Output Legality and Compliance Check

- When enabled, the system performs a **compliance check** on the content as it is output
- If the output content is found to be illegal or non-compliant with financial regulations, the system will **immediately stop the output and clear the content already generated**

#### b. Citations / Stock Citations / Widget (Beta)

- These three features will be covered in documentation for future releases

#### c. Line-by-Line Output

- When enabled, streaming output is delivered **line by line** (a full line is buffered before display)
- When disabled, output uses a **character-by-character typewriter effect**

### 7. Output Variables
- **Default output**: displays the output variable name "text", data type "String", and description "generated content"
- **think**: String type, the model's reasoning process. **Some models support think output**, which can be used with the "Reasoning Process Output" node output (Chatflow only)
- **Structured output**: the structured output switch
- **Configuration page**: after turning on the structured output switch, the structured output content "structured_output" of type object is displayed
  - Displays the configured fields, including parameter name, parameter type, and whether the field is required
  - Click the configure button to enter the configuration page

### 8. Structured Output Configuration

![Structured output: the structured_output object and its specified output fields](./images/04-7-%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.png)

- **Specify output variables**: output variables can be specified—as shown above, the field `aa` (string type, required, described as bb) is defined under `structured_output` (object type)
- **Default template**: the configuration page displays a default template
- **Editor**: the configuration page only provides a JSON editor window, a clear-configuration action, and a confirm-save button
- **Reset**: clicking clear configuration restores the default template

> ⚠️ **Note**: structured output is **not supported by all models**; some older models do not support it. If output is abnormal after enabling it, first confirm whether the selected model supports structured output.

### 9. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the LLM node is implemented by the backend to ensure the large language model is called and processed correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation
6. **Run node**: test-run the current node


## Use Cases

### 1. Text Generation
- Content creation
- Article writing
- Creative copywriting

### 2. Q&A Systems
- Knowledge Q&A
- Technical support
- Customer service conversations

### 3. Text Processing
- Text summarization
- Translation services
- Text classification

### 4. Code Generation
- Code writing
- Code explanation
- Code optimization

## Best Practices

### 1. Prompt Design
- **Clear and specific**: use clear, specific instructions
- **Complete context**: provide sufficient context information
- **Guide with examples**: use examples to guide model behavior

### 2. Memory Management
- **Sensible settings**: set the memory window based on task needs
- **Content optimization**: optimize the quality of memory content
- **Performance balance**: balance memory effectiveness against performance

### 3. Structured Output
- **Schema design**: design a sensible output structure
- **Type definitions**: define field types explicitly
- **Required fields**: set required fields appropriately

## Configuration Steps

### 1. Basic Configuration
1. Select an appropriate large language model
2. Configure the System Prompt
3. Set the User Prompt

### 2. Advanced Configuration
1. Configure context variables
2. Set up memory
3. Configure structured output (optional)

### 3. Testing and Validation
1. Test using the test run feature
2. Check the output results
3. Adjust configuration parameters

## Considerations

1. **Model selection**: choose an appropriate model based on the characteristics of the task
2. **Prompt quality**: high-quality prompts significantly improve results
3. **Context management**: manage context length sensibly
4. **Cost control**: watch token usage and cost
5. **Error handling**: consider how to handle exceptional cases

## FAQ

### Q: How do I choose an appropriate model?
A: Choose based on task complexity, response speed requirements, and cost budget.

### Q: What is the difference between the System Prompt and the User Prompt?
A: The System Prompt sets the AI's role and behavioral guidelines; the User Prompt is the specific task instruction.

### Q: How do I configure structured output?
A: Turn on the structured output switch, click the configure button, and define the output structure using JSON Schema.

### Q: How do I use the memory feature?
A: Turn on the memory switch and set the memory template and memory window size; the AI will remember the conversation history.

### Q: How do I improve prompt effectiveness?
A: Use clear instructions, provide examples, and set an appropriate role and context.
