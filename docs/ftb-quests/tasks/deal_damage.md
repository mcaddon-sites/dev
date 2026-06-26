---
title: ftb_quest:deal_damage | FTB Quests
description: Checks entity match, damage range, and held item if provided.
---

# ftb_quest:deal_damage

Checks entity match, damage range, and held item if provided.

| Name                 | Type               | Required | Description |
| -------------------- | ------------------ | -------- | ----------- |
| `entity_id`          | string             |          |             |
| `damage_amount`      | number             |          |             |
| `required_held_item` | string or string[] |          |             |

## Example

```json
{
  "type": "ftb_quest:deal_damage",
  "entity_id": "minecraft:creeper",
  "damage_amount": 5,
  "required_held_item": "minecraft:gunpowder"
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
