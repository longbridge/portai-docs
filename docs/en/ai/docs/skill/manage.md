---
sidebar_position: 3
---

# Manage Skills

This article explains how to edit information, manage tools and files, and download or delete a Skill from the Skill detail page.

## Edit Name and Description

On the Skill detail page, click the edit icon next to the Skill name to open the Edit Skill panel. Modify the name and description here, then click Save to apply.

Note the following when editing:

- Name: lowercase letters, numbers, and hyphens only; max 64 characters
- Description: max 1024 characters, no line breaks
- The name must be unique within the workspace; changing to an existing name will fail

## Edit SKILL.md

SKILL.md is the Skill's core definition file, displayed at the bottom of the detail page. Click the Edit button on the right side of the SKILL.md block to modify the file content directly in the browser.

When updating SKILL.md, it is recommended to also update the description field to keep them consistent, so the model can accurately understand the Skill's purpose.

## Manage Tools

Tools give a Skill the ability to call external capabilities during execution. Click "+" in the Tools block on the detail page to add tools. Two types of sources are supported:

| Source               | Description                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Infra Built-in Tools | System-provided tools; no configuration required, enable and use immediately                                         |
| OpenAPI Tools        | Custom API tools integrated via OpenAPI specification; suitable for calling internal systems or third-party services |

Added tools can be individually enabled or disabled via a toggle, or removed by clicking delete.

## Manage Files

Files provide background materials and configuration support for Skill execution — such as analysis rules, reference examples, and industry data. Click "+" in the File Browser block on the detail page to manage files. Supported operations:

| Operation         | Description                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Add File          | Select and upload a file from your local machine                                                                                          |
| Add Folder        | Create a folder to organize files by category                                                                                             |
| Edit File Content | Click the Edit button next to a file to modify its content online, then click Save File to apply. **Note: file names cannot be changed.** |
| Delete File       | Permanently deletes the file. This action cannot be undone or recovered.                                                                  |

Uploaded files are displayed in the file browser as a tree structure, with support for folder grouping. A common file organization:

```
SKILL.md
references/           # Reference materials directory (optional)
  rules.md            # Rules or decision logic
  examples.md         # Typical examples
scripts/              # Scripts directory (optional)
  calculator.py       # Calculation script
```

Reference these files in SKILL.md to instruct the model to read the corresponding content during execution.

## Download Skill

Export the Skill as a .zip file for backup or reuse in other workspaces.

Two entry points:

- **Detail page**: Click the download icon in the top-right corner
- **List page**: Click "···" in the top-right corner of the Skill card → Download

The downloaded archive contains SKILL.md and all uploaded files, in the same structure as when uploaded.

## Delete Skill

On the My Skills list page, click "···" in the top-right corner of the Skill card → Delete.

Deletion cannot be undone. All Skill content — including files and tool configurations — will be permanently removed. If the Skill is mounted to an Agent, it is recommended to remove the association before deleting to avoid disrupting the Agent's normal operation.
