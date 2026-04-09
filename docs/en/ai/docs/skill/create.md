---
sidebar_position: 2
---

# Create a Skill

This article explains the four ways to create a Skill, along with file format requirements and naming rules.

## Drag and Drop

On the My Skills list page, drag a local archive file directly onto the page and the system will automatically enter the creation flow. This is the quickest method — no button click required.

The system automatically extracts the name and description from the `SKILL.md` frontmatter and pre-fills them in the next step's form. File format requirements are the same as the Upload File method.

## Upload File

Click the Create Skill card to enter the creation flow, then drag a file into the upload area or click Select File to choose from your local machine. Suitable for cases where you have already prepared the Skill content locally.

**File Format Requirements**

The uploaded archive must meet the following requirements:

- Supported formats: `.zip` or `.skill`
- The archive must contain a `SKILL.md` file
- Additional reference files, scripts, and other resources are optional

The system automatically extracts the name and description from the `SKILL.md` frontmatter and pre-fills them in the next step's form.

**SKILL.md Format**

The `SKILL.md` file must begin with a YAML frontmatter block declaring the Skill's name and description:

```
---
name: your-skill-name
description: Describe the Skill's function and applicable scenarios for the model to understand when to invoke it
---

# Skill Title

Write the Skill's execution logic here, including role definition, workflow, usage examples, etc.
```

Frontmatter field reference:

| Field       | Rules                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| name        | Lowercase letters, numbers, and hyphens (`-`) only; max 64 characters. Reserved words such as `anthropic` and `claude` are not allowed. |
| description | Max 1024 characters, no line breaks. Use clear, precise language to describe the function and applicable scenarios.                     |

**Recommended Archive Structure**

For complex Skills that include reference materials, the recommended file structure is:

```
your-skill.zip
├── SKILL.md              # Core definition file (required)
├── references/           # Reference materials directory (optional)
│   ├── rules.md          # Rules or decision logic
│   └── examples.md       # Typical examples
└── scripts/              # Scripts directory (optional)
    └── calculator.py     # Calculation script
```

## Search Skills

Search and import existing Skills from the public Skill community on GitHub. Over 30,000 Skills are available, covering data analysis, content generation, financial analysis, and more.

Suitable for:

- Quickly obtaining a base version of a general capability, then customizing as needed
- Reusing mature Skills from the community to save time building from scratch

Each search result shows the Skill name, the author's GitHub username, and a description summary. After selecting a Skill, the system automatically pre-fills the name and description, and displays the **source URL** — the original GitHub repository address — at the bottom of the page. Click the source URL to view the Skill's full original content.

## Create Empty Skill

Creates a blank Skill with no files. Suitable for building a fully custom Skill from scratch; you can gradually add SKILL.md and other files on the Skill detail page afterwards.

## Fill in Name and Description

Regardless of which creation method you use, the final step requires filling in the Skill's name and description.

**Name**

- Lowercase letters, numbers, and hyphens (`-`) only; max 64 characters
- Use a "verb + noun" format to clearly express the Skill's function, for example:
  - `get-weather-info`
  - `financial-report-analysis`
  - `stock-screener`
- Reserved words such as `anthropic` and `claude` are not allowed

**Description**

- Max 1024 characters, no line breaks
- The description is read by the model to determine when to invoke the Skill
- Recommended: explain what types of problems the Skill is suited for, and which scenarios it is not suited for

Example description:

> Use this skill when users need in-depth analysis of company financials, valuation models, or long-term investment value. Not suitable for real-time stock price queries or short-term technical analysis.

Click **Publish** to complete the creation.
