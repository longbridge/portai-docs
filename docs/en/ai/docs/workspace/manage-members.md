# Workspace User Management

## What is a Workspace?

A workspace is the **unit of organization and collaboration** for Agents:

* Every Agent must belong to a workspace
* Users collaborate through workspaces
* Permission control is bounded by the workspace


## Workspace Roles

Each workspace includes the following roles:

### Owner

* The user who created the workspace
* Everyone has one workspace of their own by default
* Possesses the highest level of permissions

An Owner can:

* Manage workspace members
* Invite other users to join
* Manage all Agents in the workspace

## Editor

* Invited to the workspace by the Owner
* Can edit Agents within the workspace

An Editor can:

* Edit Agent flows
* Debug and test-run Agents
* Publish Agents (subject to actual platform permissions)

## Viewer

* Invited to the workspace by the Owner
* Possesses usage permissions only

A Viewer can:

* Use Agents
* View Agent execution results
* Cannot edit Agents


## Relationship Between Users and Workspaces

* Everyone has **their own workspace (as Owner)**
* Everyone can be **invited to multiple other workspaces**
* Roles and permissions in different workspaces are independent of each other


## Usage Tips

* It is recommended to distinguish between "editing" and "using" responsibilities through roles
* Editing permissions for core Agents should be assigned cautiously
* Pay attention to publishing and version management when multiple people are collaborating


## One-sentence Summary

> **Workspaces define the ownership and collaboration boundaries of an Agent, and roles determine what you can do within that space.**
