# Answer Node

## What is it?

The Answer node is used to **organize results from the workflow and output them to the user**.
It usually serves as the final response node in dialogue or interactive workflows to generate the answer content that users can see directly.

Unlike the End node, the Answer node focuses more on **"what to say to the user"** rather than just marking the end of the workflow.

## What can you do with it?

#### 1. Output Response Content to the User

In the Answer node, you can:

* Select variables to be displayed to the user
* Organize the output of models or tools into a final answer
* Control the text content and structure returned to the user

This is the **result the user actually sees**.

---

#### 2. Combine and Format Output

The Answer node supports you in:

* Referencing variables from multiple upstream nodes
* Combining them into a clear response
* Performing simple format organization of the output

Example:

```text
Based on your question, here is my analysis:
{{analysis_result}}

The recommended solution is as follows:
{{solution}}
```

---

#### 3. Serving as a Response Node in Dialogue Workflows

In dialogue-type workflows:

* The Answer node can appear multiple times in the workflow
* Each execution returns a visible response to the user
* Suitable for scenarios with multi-round interaction or mid-flow feedback

## Output Description

* The content of the Answer node will:

  * Be displayed directly to the user
  * Or be returned as a dialogue message
* Output is usually text, but can also be structured content (if supported by the platform)

## Usage Rules

* The Answer node is usually located at the end of the workflow or at the end of key branches
* A workflow can have multiple Answer nodes
* The Answer node is not responsible for workflow control, only for content output

## Usage Recommendations

* Keep output content close to the user's perspective, avoiding exposure of internal variable meanings
* Keep answers concise and clear, reducing unnecessary information
* For multi-branch workflows, different Answer nodes can return different styles or results

## Typical Scenarios

* Final response of a dialogue assistant
* Different response results under multi-branch workflows
* Feedback on execution status to the user during the workflow
* Visible output results of an Agent

## Difference Between Answer Node and End Node (Important)

> **Answer Node and End Node cannot be used in the same workflow at the same time.**

They apply to different types of workflows:

---

#### Answer Node —— For ChatFlow

* Used for **dialogue workflows**
* Outputs real-time response content to users
* Each execution returns a visible message to the user
* Supports multi-round dialogue and multiple outputs

**When building a ChatFlow:**

* Use the **Answer Node** as the response node
* **The End node is not needed and cannot be used**
* The workflow completes a dialogue response at the Answer node

---

#### End Node —— For Workflow

* Used for **task-oriented / automated workflows**
* Emphasizes returning final execution results rather than dialogue display
* Used to explicitly end workflow execution
* Usually only used as the endpoint of the workflow

**When building a Workflow:**

* Use the **End Node** as the workflow exit
* **The Answer node is not needed and cannot be used**
* The returned results are used for API responses or downstream system processing

## How to Choose?

* If your workflow goal is:

  * To have a dialogue with the user
  * To show a response to the user
    Choose **ChatFlow + Answer Node**

* If your workflow goal is:

  * To execute a task
  * To return results to a system or API
    Choose **Workflow + End Node**

## Usage Tips

* When creating a workflow, first clarify the workflow type (ChatFlow / Workflow)
* Select the corresponding output node based on the workflow type
* Do not mix Answer and End nodes in the same workflow; otherwise, the workflow will not run properly
