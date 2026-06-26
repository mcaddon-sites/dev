---
title: ftb_quest:player_interact_with_entity | FTB Quests
description: Checks entity, optional item and Y-level.
---

# ftb_quest:player_interact_with_entity

Checks entity, optional item and Y-level.

| Name               | Type               | Required | Description |
| ------------------ | ------------------ | -------- | ----------- |
| `entity_id`        | string             | yes      |             |
| `required_item`    | string or string[] |          |             |
| `required_y_level` | number or range    |          |             |

## Example

```json
{
  "type": "ftb_quest:player_interact_with_entity",
  "entity_id": "minecraft:creeper",
  "required_item": "minecraft:paper",
  "required_y_level": { "min": 64 }
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
