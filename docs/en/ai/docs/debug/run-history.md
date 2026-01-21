# Run Records and Trial Run Results

## Basic Principles of Trial Runs

In Agent Builder, **trial runs are used to debug and verify workflow behavior**, which is not the same as formal runs or execution after publication.

All trial runs follow these principles:

* **Trial run records are not saved**
* Used only for current debugging and observation
* Results are subject to real-time display on the interface


## Trial Run Records for ChatFlow

### Display Method

* The trial run results of ChatFlow will be **displayed in the form of a chat window**
* The content is consistent with the real dialogue experience
* Supports multi-round interactive display

## Record Rules

* Chat content is **only visible in the current trial run**
* After the trial run ends:
  * Chat records will not be saved
  * Will not be retained as historical dialogue


## Trial Run Records for Workflow

### Display Method

* The trial run results of Workflow are **displayed in the form of variable output**
* You can view the values of key variables after the flow execution

## Record Rules

* Variable output is only used for viewing in the current trial run
* After the trial run ends:
  * Variable results will not be saved
  * Will not generate traceable run records


## Single Node Trial Run Records

### Display Method

* Single node trial run results are also **displayed in the form of variable output**
* Used to observe the input and output results of that node

## Record Rules

* Single node trial run results are not saved
* Each trial run is independent of the others


## Visualization of the Execution Process

During the trial run process:

* You can observe the **running process of the nodes**
* The execution status of nodes will be reflected in the canvas
* Helps in understanding the flow execution sequence and data flow

For specific display methods and details, please refer to the actual performance on the interface.


## Usage Tips

* Trial runs are suitable for debugging and verification, not for retaining results
* It is recommended to publish critical logic only after passing trial runs
* If traceable execution results are needed, please use the formal run capability of a published Agent


## One-sentence Summary

> **Trial runs are only for "seeing the process and verifying results," not for "saving records and performing traceability."**
> All displayed content is subject to the current interface.
