---
title: ftb_quest:player_riding_entity | FTB Quests
description: Also verifies optional passengers by ID.
---

# ftb_quest:player_riding_entity

Also verifies optional passengers by ID.

| Name                    | Type     | Required | Description |
| ----------------------- | -------- | -------- | ----------- |
| `entity_id`             | string   | yes      |             |
| `required_other_riders` | string[] |          |             |

## Example

```json
{
  "type": "ftb_quest:player_riding_entity",
  "entity_id": "minecraft:horse"
}
```
