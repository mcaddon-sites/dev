---
title: Overview | FTB Quests
description: IDs, script events, and recommended starting points for the FTB Quests add-on.
---

# Overview

FTB Quests exposes script events for creating quest chapters, adding quests, and committing staged content into the live quest manager.

Use this page as the quick reference before building an integration.

## Add-on Metadata

| Key       | Value        |
| --------- | ------------ |
| Studio    | FTB          |
| Namespace | `ftb_quests` |

## Integration Flow

Quest content is staged before it becomes live. A typical setup flow is:

1. Create a chapter with [`ftbquests:create_chapter`](./create-chapter.md).
2. Add quest definitions, tasks, and rewards with [Add Quests](./add-quests.md).
3. Publish the staged chapter with [`ftbquests:commit_chapter`](./commit-chapter.md).

## Script Events

| Event ID                   | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `ftbquests:create_chapter` | Creates a staged chapter.                    |
| `ftbquests:commit_chapter` | Publishes a staged chapter into live quests. |

## Content References

| Area    | What it covers                                            |
| ------- | --------------------------------------------------------- |
| Tasks   | Objectives such as block breaks, kills, item use, and XP. |
| Rewards | Quest rewards such as items, commands, loot, and XP.      |

## Next Steps

- Start with [Create Chapter](./create-chapter.md) to define the chapter shell.
- Use [Add Quests](./add-quests.md) to attach quests, tasks, and rewards.
- Browse [Task Types](./tasks/index.md) and [Reward Types](./rewards/index.md) while building quest payloads.

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
