---
title: ftb_quest:player_look_at_entity | FTB Quests
description: Requires line-of-sight and optional held item.
---

# ftb_quest:player_look_at_entity

Requires line-of-sight and optional held item.

| Name                 | Type               | Required | Description |
| -------------------- | ------------------ | -------- | ----------- |
| `entity_id`          | string             | yes      |             |
| `required_held_item` | string or string[] |          |             |

## Example

```json
{
  "type": "ftb_quest:player_look_at_entity",
  "entity_id": "minecraft:enderman",
  "required_held_item": "minecraft:ender_pearl"
}
```
