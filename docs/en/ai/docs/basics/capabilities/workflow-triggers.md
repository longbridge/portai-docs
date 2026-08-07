---
sidebar_position: 3
title: "Workflow Triggers"
---

> ⚠️ Workflow has a relatively high barrier to entry and is **not yet open to regular users**. This article is provided for early reference; see product announcements for availability.

## What It Is

Configure automatic triggering for a Workflow so it no longer needs manual runs — let the Agent execute automatically on a **timer** or via **Webhook**, enabling unattended automation tasks (morning briefings, periodic checks, integrations with external systems, etc.).

## Two Trigger Types

### Scheduled Trigger

- Enter a **Cron expression** and select a time zone
- The panel **previews the next 5 execution times in real time**, so you can immediately confirm the expression is correct

### Webhook Trigger

- The system generates a Webhook URL; copy it and provide it to the external system
- You can configure the accepted request parameters (**Headers, Query, Body**) and the response content
- The Workflow runs whenever the external system calls the URL

## How to Use

1. Open the Workflow editor, click the Start node, and click **Trigger Mode** at the top to enable trigger mode
2. In the panel, enable "Scheduled Trigger" or "Webhook Trigger" and complete the configuration
3. **Debug**: click the run button and select the corresponding trigger from the dropdown to enter debug mode, verifying the trigger behavior before publishing
4. After debugging is confirmed, **publish** the Workflow; the trigger takes effect immediately and schedules runs automatically

## Notes

1. Once trigger mode is enabled, **the Start node's input variables switch to the fields defined by the trigger**; the original variables are restored when it is turned off
2. Scheduled and Webhook triggers **can be enabled at the same time** without interfering with each other
3. Webhook runs are **asynchronous**: the external request immediately receives the configured response while the Workflow runs in the background — external systems should not rely on the response body for run results
4. **The trial-run URL differs from the production URL after publishing**; always use the production URL when integrating with external systems
5. Automatically triggered runs also consume the Workspace usage quota; before launching a scheduled task, estimate frequency × cost per run to avoid silently draining your quota (see [1.5](../plans))

## Related Reading

- [Start Node Documentation](../nodes/start)
