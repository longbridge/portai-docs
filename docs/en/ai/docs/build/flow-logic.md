# Flow Control

## Basic Structure of a Flow

In Agent Builder, a runnable flow needs to meet the following basic structure:

* The flow must **start from a Start node**
* The flow must **end with a terminal node**
  * ChatFlow uses the **Answer node**
  * Workflow uses the **End node**
* Between the Start node and the terminal node, nodes need to form a **complete, executable path**


## Node Connection Rules

### 1. Node Connection Direction

* Nodes should be connected according to the execution order
* Execution direction is from **Start Node → Intermediate Nodes → Terminal Node**
* Execution order is explicitly shown through lines between nodes

### 2. No Logical Loops

* **Logical loop paths are not allowed** in the flow
* Any node cannot connect back to itself or an upstream node through a line
* The flow execution path must be **unidirectional and terminable**

This prevents the flow from falling into infinite execution during runtime.

### 3. Isolated Nodes Allowed

* **Unconnected nodes** can exist on the canvas
* Isolated nodes do not participate in flow execution
* Used for:
  * Design schemes and drafts
  * Temporarily retained node logic
  * Flow segments for future expansion


## Node Connection Method

### Connecting via Node Plus Sign

Connections between nodes are made through the **plus sign (+)** on the nodes:

1. **Long-press** the plus sign on the current node
2. **Drag** to the plus sign position of the next node
3. **Release the mouse** to complete the connection between the two nodes

Once the connection is successful, an execution line will be displayed between the two nodes.


## Runnable Conditions of a Flow

A flow can only run when it meets the following conditions:

* Starting from the Start node, there is at least one path that can reach a terminal node
* No logical loops exist in the execution path
* The selected terminal node matches the flow type (Answer or End)


## Usage Recommendations

* When building a flow, plan the main execution path first, then add branches
* Use isolated nodes as a flow draft area to avoid affecting the current runnable flow
* After the connection is complete, it is recommended to view the flow as a whole to ensure the execution direction is clear
