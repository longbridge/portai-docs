---
sidebar_position: 11
title: "Agent Permission Management"
---

> From creation to publishing, an Agent involves four permission questions: **who can edit it, who can see it, who can use it, and who can copy it**. This article covers all four in one place.

## The Permission Landscape

```
Who can edit    → Workspace member roles (Owner / Editor / Viewer) + workflow locking
Who can see/use → Three usage-permission tiers (Workspace only / anyone with the link / published to the Marketplace)
Who can copy    → The "Allow Fork" switch
At runtime      → Capabilities are inherited from the Agent's Workspace; sensitive data has separate content-layer authentication
```

## Who Can Edit: Edit Permissions

### Workspace Member Roles

An Agent's edit permissions follow the member roles of its Workspace (see [Workspace & Plans](plans)):

| Member Role | Permissions on Agents |
|---------|----------------|
| **Owner** (only one) | Full permissions; the only role that can perform commercial operations such as plan purchases |
| **Editor** (count limited by plan) | Create, edit, and publish Agents in the Workspace |
| **Viewer** (count limited by plan) | View and use only; cannot edit |

The Workspace owner can switch members between **Editor / Viewer** on the member management page (see [Main Pages Overview](pages-overview)).

### Workflow Locking

When collaborating, **lock** the workflow of an Agent that has been debugged and is stable, so other members can't accidentally modify the canvas. Changes follow the "unlock → edit → test → lock again" process (see [Canvas & Collaboration](capabilities/canvas-collaboration)).

## Who Can See and Use: Three Usage-Permission Tiers

Each Agent's usage permission can be set to one of three tiers, from lowest to highest:

| Tier | Who Can Use It | Typical Use |
|------|--------|---------|
| **Workspace users only** (member) | Members of this Workspace | Development and debugging, internal team tools |
| **Anyone with the link** (link) | Anyone who has the share link | Targeted sharing with specific people |
| **Published to the Marketplace** (public) | All platform users can discover and use it in the Marketplace | Open to the public |

### The Prerequisite Chain for Publishing

```
Set usage permission to "Anyone with the link"
  → only then does the "Publish to Agent Marketplace" entry appear
    → plan must be Pro or above (Starter cannot publish)
      → pass the security scan
        → published successfully
```

- When usage permission is "Workspace users only", the Marketplace publishing entry is **not shown**
- For content review and security requirements for Marketplace publishing, see [Compliance Requirements](../compliance/index)

### Restricted Models and Publishing Interlock

When an Agent uses a **restricted model** (a model limited by vendor terms and available only to platform officials), its publishing permissions are automatically tightened:

| Agent's Current State | Platform Behavior |
|---------------|---------|
| member state | In the publish button, "Publish to Marketplace" and "Share via link" are **grayed out**; the Agent can only stay member-visible |
| Already public / link state, republishing after the model's restricted status changes | **Blocked outright**, with a dialog offering two options: revert to member and publish, or remove the restricted model and publish |

The platform also warns when you select a restricted model: "With a restricted model, this Agent cannot be publicly viewed or published to the Marketplace" (the exact wording is whatever the product shows).

## Who Can Copy: Fork Permission

- Other users can Fork your Agent only if the publisher turns on the **"Allow Fork" switch**
- What a Fork **copies**: the Agent configuration + associated Skills; it does **not copy** knowledge bases or Secrets (the forker must create their own knowledge base and configure their own credentials)
- All plans can Fork Marketplace Agents that allow forking

> Decision guide: want others to "use your Agent"? Just open up the usage permission. Want others to "build on top of yours"? Then also enable Allow Fork. If you don't want to expose your prompts and orchestration design, keep Fork off.

## Runtime Permissions: The User's Perspective

- **Capability inheritance**: the capabilities available to a user are determined by the **plan of the Agent's Workspace**, regardless of the user's own plan (the user's plan only affects usage quota)—see [Configuration Time vs. Runtime](plans)
- **Content-layer authentication is independent of Agent permissions**: for tools that touch user asset data (accounts, positions, P&L), no matter how the Agent's permissions are configured, a trading password verification is triggered at runtime for **the current user themselves**—data is only given to the identity-verified person (see [Security Verification & Localization](capabilities/security-i18n))
- **Usage attribution**: whether the user is a member of the Agent's Workspace determines who is charged (developer pays / user pays)—see [Who Pays for Usage](plans)

## Red Lines on Scope of Use

Regardless of how permissions are configured, the following always applies (see [Regional Services](regions)):

1. Agents you create are **for your personal use only**; you may not provide commercial services to others in any form
2. Marketplace Agents are **for learning and exchange only**; their listing, display, use, and Fork do not constitute any commercial activity or recommendation

## FAQ

| Question | Answer |
|------|------|
| Why can't I see the "Publish to Marketplace" button? | First set usage permission to "Anyone with the link"; also confirm your plan is Pro or above |
| The publish/share button is grayed out? | Check whether the Agent uses a restricted model (limited by vendor terms); remove it and you can publish |
| Someone forked my Agent—can they see my knowledge base and credentials? | No. Forking only copies the configuration and Skills; knowledge bases and Secrets do not propagate with a Fork |
| Want others to use it but not Fork it? | Open up the usage permission and keep "Allow Fork" off |
| A colleague accidentally changed my canvas—what now? | Lock the workflow; if necessary, have the Owner change that member to Viewer |
| Can Starter users use my published Agent? | Yes—capabilities are inherited from your Workspace; they just consume their own usage quota |
