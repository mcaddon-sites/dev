---
title: Overview | Storage Drawers
description: IDs, script events, and recommended starting points for the Storage Drawers add-on.
---

# Overview

Storage Drawers exposes script events for registering compacting recipes and manipulating drawer contents from scripts.

Use this page as the quick reference before wiring drawer behavior into another add-on.

## Add-on Metadata

| Key         | Value                                  |
| ----------- | -------------------------------------- |
| Studio      | FTB                                    |
| Namespace   | `ftb_sd`                               |
| Behavior ID | `47a58c9a-1d18-4761-9323-35a01254ef67` |
| Resource ID | `24188c69-3fc5-47a7-b41b-23847c67adf5` |

## Script Events

| Event ID                            | Purpose                                      |
| ----------------------------------- | -------------------------------------------- |
| `ftb_sd:register_compacting_recipe` | Registers a custom Compacting Drawer recipe. |
| `ftb_sd:add_item_v2`                | Requests adding items to a drawer.           |
| `ftb_sd:add_item_status_v2`         | Reports the result of an add request.        |
| `ftb_sd:remove_item_v2`             | Requests removing items from a drawer.       |
| `ftb_sd:remove_item_status_v2`      | Reports the result of a remove request.      |
| `ftb_sd:status_v2`                  | Requests drawer slot status.                 |
| `ftb_sd:status_status_v2`           | Reports drawer slot status.                  |

## Drawer Integration Notes

- Drawer manipulation requests use a dimension ID and block location to target a specific drawer.
- Add, remove, and status requests can target specific slots or let Storage Drawers choose all available slots.
- Use a `feedbackId` when you need to match an outgoing request to an incoming status event.

## Next Steps

- Use [Compacting Recipe](./compacting-recipe.md) to register custom conversion recipes.
- Use [Drawer Manipulation](./drawer-manipulation.md) to add, remove, or inspect drawer contents.
