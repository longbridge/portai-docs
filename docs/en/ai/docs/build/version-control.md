# Version Control and Auto-save

## Auto-save

In Agent Builder, **changes on the canvas are automatically saved**:

* When you perform any operation on the canvas (such as adding nodes, modifying configurations, or adjusting connections)
* The system automatically saves the current status
* Changes are preserved without the need to manually click save


## Manual Saving

In addition to auto-save, you can also:

* **Manually trigger a save** when needed
* Used to explicitly record current progress at key points

Manual saving does not affect the auto-save mechanism; both can be used simultaneously.


## Trial Run within the Canvas

When performing a **trial run** within the canvas:

* The system uses the **latest version currently visible on the canvas**
* Regardless of whether it has been published, trial run results are based on the flow status you see at that moment

This allows you to repeatedly verify and adjust the flow logic before publishing.


## Agent Publishing and Version Generation

When an Agent is **formally published**:

* The platform automatically generates a **new version**
* Each publication corresponds to an independent version record
* Published versions will not be directly overwritten by subsequent edits

This ensures the stability and traceability of Agents that are already online.


## Version Management Capabilities

Published versions support the following operations:

### 1. Version Preview

* View the flow structure and configuration of any historical version
* Used to compare differences between different versions

### 2. Version Rollback

* **Restore the Agent to any historical version**
* After restoration, you can continue editing or re-publishing based on that version

### 3. Version Renaming

* Set a more understandable name for the version
* Facilitates identification of the version's purpose or publication background


## Usage Recommendations

* Before publishing, make full use of the trial run within the canvas to verify logic
* It is recommended to form a new version through publishing for significant changes to facilitate rollback
* Use version naming to record key changes to improve long-term maintenance efficiency


## Precautions (Multi-person Collaboration)

When multiple people are collaborating on editing the same Agent, please pay special attention to the following:

* The canvas supports auto-save, which means:
  * Any of your modifications will be saved immediately
  * They may also overwrite edits that others have not yet confirmed
* Before publishing an Agent, please confirm:
  * Is the current canvas content the **final version confirmed by yourself**?
  * Does it contain draft logic that others are still editing or testing?
* Recommended collaboration methods:
  * Confirm and communicate with collaborators before publishing
  * Use version naming to label the purpose of modifications or the person responsible
  * Perform a trial run on the canvas for significant adjustments, and publish only after confirming they are correct

## Collaboration Recommendation

> **Auto-save improves efficiency but also magnifies collaboration risks.**
> In multi-person collaboration scenarios, please treat "publishing" as an action that requires explicit confirmation.
